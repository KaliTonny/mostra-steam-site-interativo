CREATE DATABASE IF NOT EXISTS turismo360 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE turismo360;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  email_verificado TINYINT(1) NOT NULL DEFAULT 1,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS verificacoes_email (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  codigo_hash CHAR(64) NOT NULL,
  expira_em DATETIME NOT NULL,
  usado TINYINT(1) NOT NULL DEFAULT 0,
  tentativas INT NOT NULL DEFAULT 0,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_verificacao_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  INDEX idx_verificacao_usuario (usuario_id)
);

-- Execute uma vez se o banco já existia antes da verificação por e-mail:
SET @col_email_verificado = (SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='usuarios' AND COLUMN_NAME='email_verificado');
SET @sql = IF(@col_email_verificado=0, 'ALTER TABLE usuarios ADD COLUMN email_verificado TINYINT(1) NOT NULL DEFAULT 1', 'SELECT 1');
PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;
SET @col_criado_em = (SELECT COUNT(*) FROM information_schema.COLUMNS WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME='usuarios' AND COLUMN_NAME='criado_em');
SET @sql = IF(@col_criado_em=0, 'ALTER TABLE usuarios ADD COLUMN criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP', 'SELECT 1');
PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;

CREATE TABLE IF NOT EXISTS contatos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL,
  mensagem TEXT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS lugares (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(140) NOT NULL,
  nome_en VARCHAR(140),
  categoria VARCHAR(40) DEFAULT 'turismo',
  endereco VARCHAR(255),
  descricao TEXT NOT NULL,
  descricao_en TEXT,
  imagem VARCHAR(255) NOT NULL,
  mapa_url TEXT
);

CREATE TABLE IF NOT EXISTS eventos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(140) NOT NULL,
  nome_en VARCHAR(140),
  descricao TEXT NOT NULL,
  descricao_en TEXT,
  imagem VARCHAR(255) NOT NULL,
  data_evento DATE NULL,
  endereco VARCHAR(255),
  mapa_url TEXT
);

-- Compatibilidade com bancos criados por versões anteriores.
ALTER TABLE lugares MODIFY mapa_url TEXT;
ALTER TABLE eventos MODIFY mapa_url TEXT;

-- Se você já criou as tabelas em uma versão antiga, adicione manualmente as colunas
-- categoria e endereco em lugares, e endereco em eventos, ou recrie o banco com este arquivo.

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Fonte Milagrosa de Nossa Senhora das Candeias','Miraculous Fountain of Our Lady of Candeias','religioso','R. Teotônio Vilela, 88 - Centro, Candeias - BA','Um dos espaços religiosos mais ligados à origem e à tradição de Candeias.','One of the religious sites most closely connected to the origins and traditions of Candeias.','img/fonte.jpg','https://www.google.com/maps/search/?api=1&query=Fonte+Milagrosa+de+Nossa+Senhora+das+Candeias%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Fonte Milagrosa de Nossa Senhora das Candeias');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Santuário Nossa Senhora das Candeias','Sanctuary of Our Lady of Candeias','religioso','Candeias - BA','Santuário católico associado à forte tradição religiosa do município.','Catholic sanctuary connected to the city’s strong religious tradition.','img/igreja.jpg','https://www.google.com/maps/search/?api=1&query=-12.6700277,-38.5489783'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Santuário Nossa Senhora das Candeias');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Museu Wanderley de Pinho','Wanderley de Pinho Museum','turismo','Candeias - BA','Patrimônio cultural citado entre os principais pontos de interesse turístico de Candeias.','A cultural heritage site listed among Candeias’ main tourist attractions.','img/museu.jpg','https://www.google.com/maps/search/?api=1&query=Museu+Wanderley+de+Pinho%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Museu Wanderley de Pinho');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Petro Hotel Candeias','Petro Hotel Candeias','hotel','R. Itajubara, S/N - Nova Candeias, Candeias - BA','Opção de hospedagem em Nova Candeias, com acesso fácil para quem visita a cidade.','Accommodation option in Nova Candeias with convenient access for visitors.','img/petrohotel.png','https://www.google.com/maps/search/?api=1&query=Petro+Hotel+Candeias'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Petro Hotel Candeias');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Barão Clube Hotel','Barão Clube Hotel','hotel','BA-522, 5 - Caroba, Candeias - BA','Hotel localizado às margens da BA-522, na região de Caroba.','Hotel located along BA-522 in the Caroba area.','img/baraoclubehotel.png','https://www.google.com/maps/search/?api=1&query=Bar%C3%A3o+Clube+Hotel%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Barão Clube Hotel');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Pousada Serena','Pousada Serena','hotel','R. 7 de Setembro, 54 - Centro, Candeias - BA','Pousada situada na região central de Candeias.','Guesthouse located in central Candeias.','img/pousadaserena.png','https://www.google.com/maps/search/?api=1&query=Pousada+Serena%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Pousada Serena');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Restaurante CCA','CCA Restaurant','restaurante','BA-523 - Pitanga, Candeias - BA','Restaurante e churrascaria localizado na região de Pitanga.','Restaurant and steakhouse located in the Pitanga area.','img/restaurantecca.png','https://www.google.com/maps/search/?api=1&query=Restaurante+CCA%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Restaurante CCA');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'GG Restaurante','GG Restaurant','restaurante','Caboto, Candeias - BA','Restaurante localizado em Caboto, distrito de Candeias.','Restaurant located in Caboto, a district of Candeias.','img/restaurantegg.png','https://www.google.com/maps/search/?api=1&query=GG+Restaurante%2C+Caboto%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='GG Restaurante');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Restaurante O Sertanejo','O Sertanejo Restaurant','restaurante','Nova Candeias, Candeias - BA','Opção de restaurante na região de Nova Candeias.','Restaurant option in the Nova Candeias area.','img/restaurantesertanejo.png','https://www.google.com/maps/search/?api=1&query=Restaurante+O+Sertanejo%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Restaurante O Sertanejo');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Super Revel','Super Revel Supermarket','mercado','R. Wanderley de Araújo Pinho, 53 - Pitanga, Candeias - BA','Supermercado localizado na região do Triângulo, em Pitanga.','Supermarket located in the Triângulo area of Pitanga.','img/superrevel.png','https://www.google.com/maps/search/?api=1&query=Super+Revel+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Super Revel');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Supermercado Nova Candeias','Nova Candeias Supermarket','mercado','R. Santana, 14 - Nova Candeias, Candeias - BA','Mercado de bairro em Nova Candeias.','Neighborhood supermarket in Nova Candeias.','img/mercado-nova-candeias.png','https://www.google.com/maps/search/?api=1&query=Supermercado+Nova+Candeias%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Supermercado Nova Candeias');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Fort Supermercados - Candeias','Fort Supermarkets - Candeias','mercado','R. Dois de Fevereiro - Centro, Candeias - BA','Supermercado localizado no centro da cidade.','Supermarket located in the city center.','img/fortsupermercado.png','https://www.google.com/maps/search/?api=1&query=Fort+Supermercados+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Fort Supermercados - Candeias');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Praça Milton Bulcão Lemos','Milton Bulcão Lemos Square','lazer','Praça Milton Bulção - Malemba, Candeias - BA','Praça pública para convivência e lazer na região da Malemba.','Public square for leisure and community life in the Malemba area.','img/milton-bulcao-lemos.jpg','https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+Milton+Bulc%C3%A3o+Lemos%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Praça Milton Bulcão Lemos');

INSERT INTO lugares (nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url)
SELECT 'Praça Santa Dulce dos Pobres','Saint Dulce of the Poor Square','lazer','Nova Candeias, Candeias - BA','Espaço público de convivência em Nova Candeias.','Public community space in Nova Candeias.','img/praca-santa-dulce.png','https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+Santa+Dulce+dos+Pobres%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM lugares WHERE nome='Praça Santa Dulce dos Pobres');

INSERT INTO eventos (nome,nome_en,descricao,descricao_en,imagem,data_evento,endereco,mapa_url)
SELECT 'Festa de Nossa Senhora das Candeias','Feast of Our Lady of Candeias','Celebração religiosa tradicional da cidade, com seu ponto alto em 2 de fevereiro.','Traditional religious celebration of the city, reaching its main day on February 2.','img/igreja.jpg',NULL,'Candeias - BA','https://www.google.com/maps/search/?api=1&query=Santu%C3%A1rio+Nossa+Senhora+das+Candeias%2C+Candeias+BA'
WHERE NOT EXISTS (SELECT 1 FROM eventos WHERE nome='Festa de Nossa Senhora das Candeias');

-- Atualiza as fotos de locais já existentes caso o script seja executado novamente.
SET SQL_SAFE_UPDATES = 0;
UPDATE lugares SET imagem='img/petrohotel.png' WHERE nome='Petro Hotel Candeias';
UPDATE lugares SET imagem='img/baraoclubehotel.png' WHERE nome='Barão Clube Hotel';
UPDATE lugares SET imagem='img/pousadaserena.png' WHERE nome='Pousada Serena';
UPDATE lugares SET imagem='img/restaurantecca.png' WHERE nome='Restaurante CCA';
UPDATE lugares SET imagem='img/restaurantegg.png' WHERE nome='GG Restaurante';
UPDATE lugares SET imagem='img/restaurantesertanejo.png' WHERE nome='Restaurante O Sertanejo';
UPDATE lugares SET imagem='img/superrevel.png' WHERE nome='Super Revel';
UPDATE lugares SET imagem='img/mercado-nova-candeias.png' WHERE nome='Supermercado Nova Candeias';
UPDATE lugares SET imagem='img/fortsupermercado.png' WHERE nome='Fort Supermercados - Candeias';
UPDATE lugares SET imagem='img/milton-bulcao-lemos.jpg' WHERE nome='Praça Milton Bulcão Lemos';
UPDATE lugares SET imagem='img/praca-santa-dulce.png' WHERE nome='Praça Santa Dulce dos Pobres';
UPDATE lugares SET mapa_url='https://www.google.com/maps/search/?api=1&query=-12.6700277,-38.5489783' WHERE nome='Santuário Nossa Senhora das Candeias';

SET SQL_SAFE_UPDATES = 1;
