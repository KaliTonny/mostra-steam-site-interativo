const { searchPlaces, mapsSearchUrl } = require('../services/googlePlacesService');

async function search(req, res) {
  const q = String(req.query.q || '').trim();
  const lang = String(req.query.lang || 'pt').toLowerCase();
  if (q.length < 2) return res.status(400).json({ erro: 'Digite pelo menos 2 caracteres.' });
  try {
    const data = await searchPlaces(q, lang);
    res.json({ query: q, ...data });
  } catch (error) {
    res.status(502).json({
      erro: 'Não foi possível consultar o Google Places agora.',
      mapsUrl: mapsSearchUrl(q)
    });
  }
}

module.exports = { search };
