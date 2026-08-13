export default async function handler(req, res) {
  try {
    // Set CORS headers untuk development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    
    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    const { latitude, longitude, city, country } = req.query;
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    
    let url;
    if (latitude && longitude) {
      url = `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&method=20`;
    } else {
      const cityName = city || 'Jakarta';
      const countryName = country || 'Indonesia';
      url = `https://api.aladhan.com/v1/timingsByCity/${day}-${month}-${year}?city=${encodeURIComponent(cityName)}&country=${encodeURIComponent(countryName)}&method=20`;
    }

    console.log('Fetching prayer times from:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Prayer API failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('Prayer API Error:', error);
    return res.status(500).json({ 
      error: 'Gagal mengambil jadwal shalat.',
      details: error.message 
    });
  }
}
