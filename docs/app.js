

fetch('https://whoaminet.onrender.com/news')
  .then(res => res.json())
  .then(data => console.log(data));


const NEWS_API_KEY = "REMOVED_API_KEY";
const newsUrl = `https://newsapi.org/v2/everything?q=japan&language=en&apiKey=${NEWS_API_KEY}`;

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

/* == using news API == */

fetch(newsUrl)
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

  function getClientInfo() {
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screen: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  
    // 簡易ブラウザ名抽出
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
  