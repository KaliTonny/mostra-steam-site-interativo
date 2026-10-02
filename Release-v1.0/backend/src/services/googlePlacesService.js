const CANDEIAS = { latitude: -12.6716, longitude: -38.5472 };

function mapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query} em Candeias BA`)}`;
}

async function searchPlaces(query, language = 'pt') {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return { configured: false, results: [], mapsUrl: mapsSearchUrl(query) };
  }

  const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.googleMapsUri,places.primaryTypeDisplayName,places.currentOpeningHours.openNow'
    },
    body: JSON.stringify({
      textQuery: `${query} em Candeias, Bahia, Brasil`,
      languageCode: language === 'en' ? 'en' : 'pt-BR',
      maxResultCount: 12,
      locationBias: {
        circle: {
          center: CANDEIAS,
          radius: 15000
        }
      }
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Google Places respondeu ${response.status}: ${detail.slice(0, 180)}`);
  }

  const data = await response.json();
  const results = (data.places || []).map((place) => ({
    id: place.id,
    nome: place.displayName?.text || 'Local',
    endereco: place.formattedAddress || 'Candeias - BA',
    avaliacao: place.rating ?? null,
    total_avaliacoes: place.userRatingCount ?? null,
    aberto_agora: place.currentOpeningHours?.openNow ?? null,
    categoria: place.primaryTypeDisplayName?.text || query,
    mapa_url: place.googleMapsUri || mapsSearchUrl(place.displayName?.text || query),
    imagem: 'img/cidade.jpg',
    externo: true
  }));

  return { configured: true, results, mapsUrl: mapsSearchUrl(query) };
}

module.exports = { searchPlaces, mapsSearchUrl };
