const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'turismo360'
});

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar:', err);
  } else {
    console.log('Banco conectado');
  }
});

app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  const sql = 'INSERT INTO usuarios(nome,email,senha) VALUES(?,?,?)';

  db.query(sql, [nome, email, senha], (err) => {
    if (err) {
      return res.status(400).json({ erro: 'E-mail já cadastrado' });
    }

    res.json({ mensagem: 'Cadastro realizado com sucesso' });
  });
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';

  db.query(sql, [email, senha], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro no servidor' });
    }

    if (result.length > 0) {
      res.json({ usuario: result[0] });
    } else {
      res.status(401).json({ erro: 'Login inválido' });
    }
  });
});

app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;

  const sql = 'INSERT INTO contatos(nome,email,mensagem) VALUES(?,?,?)';

  db.query(sql, [nome, email, mensagem], (err) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao enviar mensagem' });
    }

    res.json({ mensagem: 'Mensagem enviada com sucesso' });
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
