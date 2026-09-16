const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const { enviarCodigoVerificacao } = require('../services/emailService');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_RE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const CODE_TTL_MINUTES = 10;
const RESEND_SECONDS = 60;
const MAX_ATTEMPTS = 5;

function normalizeEmail(email='') { return String(email).trim().toLowerCase(); }
function codeHash(email, code) {
  const secret = process.env.VERIFY_CODE_SECRET || process.env.EMAIL_PASS || 'turismo360-local-secret';
  return crypto.createHmac('sha256', secret).update(`${normalizeEmail(email)}:${code}`).digest('hex');
}
function newCode() { return String(crypto.randomInt(100000, 1000000)); }

async function saveAndSendCode(user) {
  const code = newCode();
  await db.query('UPDATE verificacoes_email SET usado=1 WHERE usuario_id=? AND usado=0', [user.id]);
  await db.query(`INSERT INTO verificacoes_email (usuario_id,codigo_hash,expira_em,usado,tentativas) VALUES (?,?,DATE_ADD(NOW(), INTERVAL ? MINUTE),0,0)`, [user.id, codeHash(user.email, code), CODE_TTL_MINUTES]);
  await enviarCodigoVerificacao({ nome: user.nome, email: user.email, codigo: code });
}

async function register(req, res) {
  const nome = String(req.body.nome || '').trim();
  const email = normalizeEmail(req.body.email);
  const senha = String(req.body.senha || '');
  if (!nome || !email || !senha) return res.status(400).json({ erro: 'Preencha todos os campos.' });
  if (!EMAIL_RE.test(email)) return res.status(400).json({ erro: 'Informe um e-mail válido.' });
  if (!PASSWORD_RE.test(senha)) return res.status(400).json({ erro: 'A senha deve ter 8+ caracteres, maiúscula, minúscula, número e caractere especial.' });
  try {
    const existente = await db.query('SELECT id,email_verificado FROM usuarios WHERE email=? LIMIT 1', [email]);
    if (existente.length) return res.status(409).json({ erro: existente[0].email_verificado ? 'Esse e-mail já está cadastrado.' : 'Esse e-mail já iniciou um cadastro. Use reenviar código para concluir a verificação.', precisaVerificar: true });
    const hash = await bcrypt.hash(senha, 12);
    const result = await db.query('INSERT INTO usuarios (nome,email,senha,email_verificado) VALUES (?,?,?,0)', [nome,email,hash]);
    const user = { id: result.insertId, nome, email };
    try { await saveAndSendCode(user); }
    catch (mailError) {
      await db.query('DELETE FROM usuarios WHERE id=? AND email_verificado=0', [user.id]);
      console.error('Erro ao enviar código:', mailError.message);
      return res.status(502).json({ erro: 'Não foi possível enviar o código de verificação. Confira a configuração de e-mail e tente novamente.' });
    }
    return res.status(201).json({ mensagem: 'Enviamos um código de 6 dígitos para seu e-mail.', email, precisaVerificar: true });
  } catch (error) {
    console.error('Erro no cadastro:', error.message);
    return res.status(500).json({ erro: 'Erro ao realizar cadastro.' });
  }
}

async function verifyEmail(req, res) {
  const email = normalizeEmail(req.body.email); const codigo = String(req.body.codigo || '').trim();
  if (!EMAIL_RE.test(email) || !/^\d{6}$/.test(codigo)) return res.status(400).json({ erro: 'Informe o e-mail e o código de 6 dígitos.' });
  try {
    const users = await db.query('SELECT id,nome,email,email_verificado FROM usuarios WHERE email=? LIMIT 1', [email]);
    if (!users.length) return res.status(404).json({ erro: 'Cadastro não encontrado.' });
    const user = users[0];
    if (user.email_verificado) return res.json({ mensagem: 'E-mail já verificado. Você já pode entrar.' });
    const rows = await db.query('SELECT * FROM verificacoes_email WHERE usuario_id=? AND usado=0 ORDER BY id DESC LIMIT 1', [user.id]);
    if (!rows.length) return res.status(400).json({ erro: 'Código inválido ou inexistente. Solicite um novo código.' });
    const v = rows[0];
    if (new Date(v.expira_em) < new Date()) return res.status(400).json({ erro: 'Esse código expirou. Solicite um novo.' });
    if (v.tentativas >= MAX_ATTEMPTS) return res.status(429).json({ erro: 'Limite de tentativas atingido. Solicite um novo código.' });
    if (v.codigo_hash !== codeHash(email,codigo)) {
      await db.query('UPDATE verificacoes_email SET tentativas=tentativas+1 WHERE id=?', [v.id]);
      return res.status(400).json({ erro: 'Código incorreto.' });
    }
    await db.query('UPDATE usuarios SET email_verificado=1 WHERE id=?', [user.id]);
    await db.query('UPDATE verificacoes_email SET usado=1 WHERE usuario_id=?', [user.id]);
    return res.json({ mensagem: 'E-mail verificado com sucesso! Agora você pode entrar.' });
  } catch (error) { console.error(error.message); return res.status(500).json({ erro: 'Erro ao verificar e-mail.' }); }
}

async function resendCode(req, res) {
  const email = normalizeEmail(req.body.email);
  if (!EMAIL_RE.test(email)) return res.status(400).json({ erro: 'Informe um e-mail válido.' });
  try {
    const users = await db.query('SELECT id,nome,email,email_verificado FROM usuarios WHERE email=? LIMIT 1', [email]);
    if (!users.length) return res.status(404).json({ erro: 'Cadastro não encontrado.' });
    const user=users[0]; if(user.email_verificado) return res.status(400).json({ erro:'Esse e-mail já foi verificado.' });
    const last = await db.query('SELECT criado_em FROM verificacoes_email WHERE usuario_id=? ORDER BY id DESC LIMIT 1',[user.id]);
    if(last.length){ const wait = RESEND_SECONDS - Math.floor((Date.now()-new Date(last[0].criado_em).getTime())/1000); if(wait>0) return res.status(429).json({erro:`Aguarde ${wait}s para reenviar o código.`,retryAfter:wait}); }
    await saveAndSendCode(user);
    return res.json({ mensagem:'Novo código enviado!', retryAfter:RESEND_SECONDS });
  } catch(error){ console.error(error.message); return res.status(500).json({erro:'Não foi possível reenviar o código.'}); }
}

async function login(req, res) {
  const email=normalizeEmail(req.body.email), senha=String(req.body.senha||'');
  if(!email||!senha) return res.status(400).json({erro:'Informe e-mail e senha.'});
  try{
    const rows=await db.query('SELECT id,nome,email,senha,email_verificado FROM usuarios WHERE email=? LIMIT 1',[email]);
    if(!rows.length) return res.status(401).json({erro:'E-mail ou senha incorretos.'});
    const user=rows[0]; let ok=false;
    if(String(user.senha).startsWith('$2')) ok=await bcrypt.compare(senha,user.senha);
    else if(senha===user.senha){ ok=true; const hash=await bcrypt.hash(senha,12); await db.query('UPDATE usuarios SET senha=? WHERE id=?',[hash,user.id]); }
    if(!ok) return res.status(401).json({erro:'E-mail ou senha incorretos.'});
    if(!user.email_verificado) return res.status(403).json({erro:'Seu e-mail ainda não foi verificado.',precisaVerificar:true,email:user.email});
    return res.json({usuario:{id:user.id,nome:user.nome,email:user.email}});
  }catch(error){console.error(error.message);return res.status(500).json({erro:'Erro no servidor.'});}
}

module.exports={register,verifyEmail,resendCode,login};
