const API_KEY = "3cbb23d46292fc49443596d08662b83f";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Shibuya&appid=${API_KEY}&units=metric&lang=en`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const feels = data.main.feels_like;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const windSpeed = data.wind.speed;
    const desc = data.weather[0].description;

    document.getElementById('weather').innerHTML = `
      <h1>Weather (Tokyo)</h1>
      <ul>
        <li><strong>Description:</strong> ${desc}</li>
        <li><strong>Temperature:</strong> ${temp} °C</li>
        <li><strong>Feels Like:</strong> ${feels} °C</li>
        <li><strong>Humidity:</strong> ${humidity} %</li>
        <li><strong>Pressure:</strong> ${pressure} hPa</li>
        <li><strong>Wind Speed:</strong> ${windSpeed} m/s</li>
      </ul>
    `;
  })
  .catch(err => {
    document.getElementById("weather").textContent = "Failed to load weather data.";
    console.error(err);
  });

 