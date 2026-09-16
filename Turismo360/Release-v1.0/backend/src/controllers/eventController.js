const db = require('../config/db');
const { events: fallbackEvents } = require('../data/fallbackData');

async function listEvents(req, res) {
  try {
    const rows = await db.query('SELECT id,nome,nome_en,descricao,descricao_en,imagem,data_evento,endereco,mapa_url FROM eventos ORDER BY data_evento IS NULL, data_evento, id');
    res.json(rows.length ? rows : fallbackEvents);
  } catch (error) {
    res.json(fallbackEvents);
  }
}

module.exports = { listEvents };
