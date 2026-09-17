const { loadEnv } = require('./src/config/env');
loadEnv();
const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const contactRoutes = require('./src/routes/contactRoutes');
const placeRoutes = require('./src/routes/placeRoutes');
const eventRoutes = require('./src/routes/eventRoutes');
const mapsRoutes = require('./src/routes/mapsRoutes');

const { migrate } = require('./src/config/migrate');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, '..')));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/maps', mapsRoutes);

app.get('/api', (req, res) => res.json({
  nome: 'Turismo 360 API',
  versao: '3.0',
  endpoints: ['/api/places', '/api/events', '/api/maps/search', '/api/auth/register', '/api/auth/login', '/api/contact']
}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'home.html')));
app.use((req, res) => res.status(404).json({ erro: 'Rota não encontrada.' }));

migrate().then(()=>app.listen(PORT, () => console.log(`Turismo 360° rodando em http://localhost:${PORT}`))).catch(err=>{console.error('Erro ao preparar banco:',err.message);process.exit(1);});
