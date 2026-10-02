const db = require('../config/db');
const { places: fallbackPlaces } = require('../data/fallbackData');

async function listPlaces(req, res) {
  try {
    const rows = await db.query('SELECT id,nome,nome_en,categoria,endereco,descricao,descricao_en,imagem,mapa_url FROM lugares ORDER BY id');
    res.json(rows.length ? rows : fallbackPlaces);
  } catch (error) {
    res.json(fallbackPlaces);
  }
}

module.exports = { listPlaces };
