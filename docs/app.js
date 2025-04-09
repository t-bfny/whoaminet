/* == fetch from render == */

fetch('https://whoaminet.onrender.com/news')
  .then(res => res.json())
  .then(data => console.log(data));

  fetch('https://whoaminet.onrender.com/weather')
  .then(res => res.json())
  .then(data => console.log(data));

/* == clock == */
function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedDate = `${year}/${month}/${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
      
    document.getElementById('clock').textContent = `${formattedDate} ${formattedTime}`;
}
      
      setInterval(updateClock, 1000);
      updateClock();
      

setInterval(updateClock, 1000);
updateClock(); // ページ読み込み時に即表示

/* == Using news API == */

fetch('https://whoaminet.onrender.com/news')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("news-list");
    list.innerHTML = "";
    data.articles.slice(0, 5).forEach(article => {
      const item = document.createElement("li");
      const a = document.createElement("a");
      a.href = article.url;
      a.textContent = article.title;
      a.target = "_blank";;
      item.appendChild(a);
      list.appendChild(item);
    });
  })
  .catch(err => {
    console.error("ニュース取得エラー:", err);
    document.getElementById("news-list").textContent = "Failed to get news.";
  });

  /* == Using weather API==*/

  fetch('https://whoaminet.onrender.com/weather')
  .then(res => res.json())
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


  /* == System infomation == */

  function getClientInfo() {
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screen: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  
    const browserMatch = info.userAgent.match(/(Firefox|Chrome|Safari|Edge)\/([\d.]+)/);
    if (browserMatch) {
      info.browser = `${browserMatch[1]} ${browserMatch[2]}`;
    } else {
      info.browser = "Unknown";
    }
    return info;
  }
  
  function renderWhoami() {
    const info = getClientInfo();
    const whoamiDiv = document.getElementById("whoami");
    whoamiDiv.innerHTML = `
      <h1>System Infomation</h1>
      <ul>
        <li><strong>Platform:</strong> ${info.platform}</li>
        <li><strong>Browser:</strong> ${info.browser}</li>
        <li><strong>Language:</strong> ${info.language}</li>
        <li><strong>Screen:</strong> ${info.screen}</li>
        <li><strong>Timezone:</strong> ${info.timezone}</li>
      </ul>
    `;
  }
  
  window.onload = renderWhoami;
  
  /* == switch to darkmode == */

  document.getElementById('toggleDark').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  