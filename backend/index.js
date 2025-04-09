
require('dotenv').config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const NEWS_API_KEY = process.env.NEWS_API_KEY;


const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors()); // ← これでCORSが有効になります

app.get('/', (req, res) => {
  res.send('Hello from your API server!');
});

app.get('/weather', async (req, res) => {
  try {
    const city = req.query.city || 'Shibuya';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

app.get('/news', async (req, res) => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});