const db = require('./db');
async function migrate(){
  const cols=await db.query("SELECT COLUMN_NAME FROM information_schema.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='usuarios'");
  const names=new Set(cols.map(x=>x.COLUMN_NAME));
  if(!names.has('email_verificado')) await db.query('ALTER TABLE usuarios ADD COLUMN email_verificado TINYINT(1) NOT NULL DEFAULT 1');
  if(!names.has('criado_em')) await db.query('ALTER TABLE usuarios ADD COLUMN criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP');
  await db.query(`CREATE TABLE IF NOT EXISTS verificacoes_email (id INT PRIMARY KEY AUTO_INCREMENT,usuario_id INT NOT NULL,codigo_hash CHAR(64) NOT NULL,expira_em DATETIME NOT NULL,usado TINYINT(1) NOT NULL DEFAULT 0,tentativas INT NOT NULL DEFAULT 0,criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,CONSTRAINT fk_verificacao_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,INDEX idx_verificacao_usuario (usuario_id))`);
}
module.exports={migrate};
