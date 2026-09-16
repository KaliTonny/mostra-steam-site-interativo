# Turismo 360° — versão integrada

Projeto da Mostra STEAM com navegação responsiva, versão completa em Português/Inglês e integração entre Front-End, API REST e MySQL.

## Principais melhorias

- Menu responsivo e navegação padronizada em todas as páginas.
- Página **Explorar** funcional com pesquisa, filtros, detalhes, favoritos e dados carregados pela API.
- Tradução global PT/EN, persistida entre páginas.
- Cadastro, login, edição de perfil e contato usando `fetch` e API REST.
- Configurações de modo escuro, fonte maior e idioma persistidas no navegador.
- Backend também serve os arquivos do front-end, evitando problemas de CORS e caminhos quando o projeto é executado pelo Node.
- Rotas de API para lugares, eventos, busca no Google Maps/Places, autenticação, perfil e contato.

## Como executar

1. No MySQL Workbench, execute `mysql/turismo360sql.sql`.
2. Copie `backend/.env.example` para `backend/.env` e preencha usuário, senha e banco do MySQL.
3. Abra um terminal dentro da pasta `backend`.
4. Execute `npm install` (se necessário) e depois `npm start`.
5. Abra `http://localhost:3000` no navegador.

## API

- `GET /api/places`
- `GET /api/events`
- `GET /api/maps/search?q=farmacia`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `PUT /api/users/:id`
- `POST /api/contact`

> Observação: para fins didáticos o projeto mantém a senha simples no banco, seguindo a estrutura original. Em produção, use hash de senha (bcrypt/argon2), autenticação por token e validações adicionais.

© 2026 - Geovanna Almeida, Etony Guedes, Nicolle Borges e Eric das Mercês.

## Atualização: mapa e categorias

A página **Explorar** agora possui filtros para turismo, espaços religiosos, hotéis, restaurantes, mercados, lazer e eventos. Os locais cadastrados possuem endereço e botão **Abrir no Google Maps**.

A página **Sobre** foi reorganizada em blocos verticais. O texto "Como funciona" agora explica o uso do site, a seção História traz mais contexto sobre Candeias e a Equipe aparece por último.

> Observação para banco já existente: esta versão adiciona as colunas `categoria` e `endereco` à tabela `lugares` e `endereco` à tabela `eventos`. Para um ambiente de apresentação, o caminho mais simples é recriar o banco executando novamente `mysql/turismo360sql.sql` em um banco limpo.

## Fotos dos locais
As fotos dos locais principais ficam dentro da pasta `img`, evitando dependência de links externos. O site usa `img/cidade.jpg` como fallback caso algum arquivo de imagem não seja encontrado.

## Busca de serviços com Google Maps

A página **Explorar** possui atalhos para hotéis, restaurantes, mercados, espaços religiosos, lazer, turismo, farmácias, hospitais e clínicas, postos, academias, padarias, bancos/caixas, pet shops/veterinários, transporte, oficinas, salões/barbearias, lojas e pizzarias/lanchonetes.

A busca funciona em duas camadas:

1. O site procura primeiro nos lugares cadastrados no MySQL.
2. Quando uma pesquisa não existe no catálogo, o backend usa `/api/maps/search?q=...` para consultar o Google Places.

Para mostrar os estabelecimentos do Google **dentro do site**, crie uma chave no Google Cloud, habilite a **Places API (New)** e adicione no arquivo `backend/.env`:

```env
GOOGLE_MAPS_API_KEY=SUA_CHAVE_AQUI
```

Se a chave não estiver configurada, o site continua funcionando e oferece um botão para abrir a mesma pesquisa diretamente no Google Maps.

## Organização do backend

O `server.js` agora cuida apenas da configuração principal do Express e do registro das rotas. O restante foi separado em:

```text
backend/
├── server.js
└── src/
    ├── config/
    │   ├── db.js
    │   └── env.js
    ├── controllers/
    │   ├── authController.js
    │   ├── contactController.js
    │   ├── eventController.js
    │   ├── mapsController.js
    │   ├── placeController.js
    │   └── userController.js
    ├── data/
    │   └── fallbackData.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── contactRoutes.js
    │   ├── eventRoutes.js
    │   ├── mapsRoutes.js
    │   ├── placeRoutes.js
    │   └── userRoutes.js
    └── services/
        └── googlePlacesService.js
```

## Envio do formulário de contato por e-mail

O formulário salva a mensagem no MySQL e envia uma cópia para `turismocandeias360@gmail.com`.

1. Ative a verificação em duas etapas nessa conta Google.
2. Gere uma **Senha de app**.
3. Copie `backend/.env.example` para `backend/.env`.
4. Preencha `EMAIL_PASS` no `.env` com a Senha de app.
5. Na pasta `backend`, execute `npm install` e depois `npm start`.

O `backend/.env` está ignorado pelo Git e não deve ser publicado.

## Segurança do cadastro

O cadastro agora exige senha forte (8+ caracteres, maiúscula, minúscula, número e símbolo), salva senhas com hash bcrypt e confirma o e-mail com um código de 6 dígitos válido por 10 minutos. O reenvio tem cooldown de 60 segundos e cada código aceita no máximo 5 tentativas incorretas. Usuários antigos são mantidos como verificados e a senha antiga é migrada para hash no próximo login.

Depois de atualizar o projeto, execute `npm install` dentro de `backend/` para instalar também o `bcryptjs`. O backend cria automaticamente as novas colunas/tabela necessárias ao iniciar. Em produção, troque `VERIFY_CODE_SECRET` no `.env` por um texto longo e aleatório.
