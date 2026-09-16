# Turismo 360°

Plataforma web interativa para explorar **Candeias-BA**, reunindo pontos turísticos, história, eventos, estabelecimentos, mapas e serviços em um só lugar.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Nome do sistema

**Turismo 360°**

## Descrição da aplicação

O Turismo 360° é uma aplicação web desenvolvida para apresentar e valorizar pontos turísticos, espaços religiosos, eventos, hotéis, restaurantes, mercados, áreas de lazer e outros serviços localizados em Candeias, Bahia.

A plataforma reúne informações sobre a cidade em um ambiente interativo, permitindo que moradores e visitantes conheçam locais, consultem informações, utilizem recursos de mapa e tenham acesso a conteúdos relacionados à história e ao turismo de Candeias.

O sistema também possui cadastro e login de usuários, verificação de e-mail, formulário de contato e integração com banco de dados.

## Objetivo

O objetivo do Turismo 360° é facilitar o acesso a informações turísticas e úteis sobre Candeias-BA por meio de uma plataforma digital moderna, acessível e interativa.

O projeto busca contribuir para a valorização da história, da cultura e dos espaços da cidade, além de facilitar a localização de estabelecimentos e serviços para moradores e visitantes.

## Tecnologias utilizadas

### Front-End
- HTML5
- CSS3
- JavaScript
- Fetch API

### Back-End
- Node.js
- Express.js
- Nodemailer
- bcryptjs
- dotenv
- CORS

### Banco de Dados
- MySQL
- mysql2

### Serviços e ferramentas
- Google Maps
- Google Places API
- Git
- GitHub
- MySQL Workbench
- Visual Studio Code

## Como instalar

### 1. Baixar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Ou faça o download do projeto em formato ZIP e extraia os arquivos.

### 2. Acessar a pasta do backend

```bash
cd backend
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar o banco de dados

Abra o MySQL Workbench e execute o arquivo SQL disponibilizado no projeto para criar e atualizar o banco de dados `turismo360`.

### 5. Configurar as variáveis de ambiente

Na pasta `backend`, copie o arquivo:

```text
.env.example
```

e crie um arquivo chamado:

```text
.env
```

Preencha as configurações necessárias do MySQL, Google Maps e serviço de e-mail.

Exemplo:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=SUA_SENHA
DB_NAME=turismo360

GOOGLE_MAPS_API_KEY=SUA_CHAVE

EMAIL_USER=turismocandeias360@gmail.com
EMAIL_PASS=SUA_SENHA_DE_APP
EMAIL_DESTINO=turismocandeias360@gmail.com

VERIFY_CODE_SECRET=SEU_SEGREDO_DE_VERIFICACAO
```

> **Importante:** o arquivo `.env` contém informações privadas e não deve ser enviado ao GitHub. O projeto utiliza `.env.example` apenas como modelo de configuração.

## Como executar

Abra o terminal na pasta `backend` e execute:

```bash
npm start
```

Após o servidor iniciar, acesse no navegador:

```text
http://localhost:3000
```

O backend deve estar em execução para que recursos como cadastro, login, contato, banco de dados e verificação de e-mail funcionem corretamente.

## Estrutura do projeto

```text
Turismo360/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   │
│   └── src/
│       ├── config/
│       │   └── db.js
│       │
│       ├── controllers/
│       │   ├── authController.js
│       │   ├── contactController.js
│       │   ├── eventController.js
│       │   ├── mapsController.js
│       │   ├── placeController.js
│       │   └── userController.js
│       │
│       ├── routes/
│       │   ├── authRoutes.js
│       │   ├── contactRoutes.js
│       │   ├── eventRoutes.js
│       │   ├── mapsRoutes.js
│       │   ├── placeRoutes.js
│       │   └── userRoutes.js
│       │
│       ├── services/
│       │   ├── emailService.js
│       │   └── googlePlacesService.js
│       │
│       └── data/
│           └── fallbackData.js
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── img/
│   └── páginas HTML
│
├── database/
│   └── arquivos SQL
│
├── .gitignore
└── README.md
```

## Funcionalidades principais

- Página inicial com informações sobre Candeias;
- Exploração de pontos turísticos e locais da cidade;
- Informações sobre a história de Candeias;
- Visualização de eventos;
- Integração com Google Maps;
- Pesquisa de locais e serviços;
- Categorias de hotéis, restaurantes, mercados, lazer e espaços religiosos;
- Suporte aos idiomas português e inglês;
- Tema claro e escuro;
- Cadastro e login de usuários;
- Verificação de e-mail por código de 6 dígitos;
- Código de verificação com tempo de expiração;
- Reenvio de código com cooldown;
- Validação de senha forte;
- Armazenamento seguro das senhas utilizando bcrypt;
- Formulário de contato integrado ao MySQL;
- Envio das mensagens de contato por e-mail;
- Notificações visuais de sucesso e erro;
- Proteção contra envios repetidos por meio de cooldown;
- Interface responsiva para diferentes tamanhos de tela.

## Integrantes

- Etony Guedes
- Geovanna Almeida
- Nicolle Borges
- Eric das Mercês

## Instituição

**SENAI Candeias**

## Professor orientador

**Adalberto Santana**

---

© 2026 — Turismo 360°
