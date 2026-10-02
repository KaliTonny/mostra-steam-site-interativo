const db = require('../config/db');
const { enviarMensagemContato } = require('../services/emailService');
const cooldowns = new Map();
const COOLDOWN_MS = 60 * 1000;

async function createContact(req, res) {
  const nome=String(req.body.nome||'').trim(), email=String(req.body.email||'').trim().toLowerCase(), mensagem=String(req.body.mensagem||'').trim();
  if(!nome||!email||!mensagem) return res.status(400).json({erro:'Preencha todos os campos.'});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({erro:'Informe um e-mail válido.'});
  const key=`${req.ip}:${email}`; const last=cooldowns.get(key)||0; const remaining=Math.ceil((COOLDOWN_MS-(Date.now()-last))/1000);
  if(remaining>0) return res.status(429).json({erro:`Aguarde ${remaining}s antes de enviar outra mensagem.`,retryAfter:remaining});
  try{
    const result=await db.query('INSERT INTO contatos(nome,email,mensagem) VALUES(?,?,?)',[nome,email,mensagem]);
    try{ await enviarMensagemContato({nome,email,mensagem}); }
    catch(emailError){ console.error('Erro ao enviar e-mail de contato:',emailError.message); return res.status(502).json({erro:'A mensagem foi salva, mas não foi possível enviar a cópia por e-mail.',id:result.insertId}); }
    cooldowns.set(key,Date.now());
    return res.status(201).json({mensagem:'Mensagem enviada com sucesso!',id:result.insertId,retryAfter:60});
  }catch(error){console.error('Erro ao salvar contato:',error.message);return res.status(500).json({erro:'Erro ao enviar mensagem.'});}
}
module.exports={createContact};
