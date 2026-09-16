const db = require('../config/db');

async function updateUser(req, res) {
  const id = Number(req.params.id);
  const { nome, email } = req.body;
  if (!id || !nome || !email) return res.status(400).json({ erro: 'Dados inválidos.' });
  try {
    await db.query('UPDATE usuarios SET nome=?, email=? WHERE id=?', [nome.trim(), email.trim().toLowerCase(), id]);
    const rows = await db.query('SELECT id,nome,email FROM usuarios WHERE id=? LIMIT 1', [id]);
    if (!rows.length) return res.status(404).json({ erro: 'Usuário não encontrado.' });
    res.json({ mensagem: 'Perfil atualizado com sucesso!', usuario: rows[0] });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') return res.status(409).json({ erro: 'Esse e-mail já está em uso.' });
    res.status(500).json({ erro: 'Erro ao atualizar perfil.' });
  }
}

module.exports = { updateUser };
