# IP & Weather & News Web App

This web app retrieves and displays information such as your IP address, weather details, and the latest news articles using external APIs. The project is designed to be responsive and provides an intuitive user interface for both desktop and mobile devices.

---

## Features

- **IP Address**: Displays the public IP address of the user.
- **Weather**: Shows current weather information for Shibuya, including temperature, humidity, wind speed, pressure, and more.
- **News**: Displays the latest news articles from various sources, currently showing news from the US.
- **Responsive Design**: Optimized for both desktop and mobile viewing with a clean and modern user interface.
- **Dark Mode**: Option to switch between light and dark themes for a better user experience.

---

## Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling and layout, with responsive design using media queries.
- **JavaScript**: To handle API requests and dynamic content updates.
  - Fetch API to get data from external services.
- **External APIs**:
  - [OpenWeather](https://openweathermap.org/api) for weather data.
  - [News API](https://newsapi.org/) for fetching news articles.

---

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/whoami-webapp.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd whoami-webapp
   ```

3. **Install dependencies** (if needed, depending on your development setup).

4. **Open `index.html`** in a browser to view the app.

---

## APIs Used

1. **OpenWeather API**:
   - Use the API key from [OpenWeather](https://openweathermap.org/api) to fetch weather details for Shibuya.
   - Current weather data includes temperature, humidity, wind speed, and pressure.

2. **News API**:
   - Use the API key from [News API](https://newsapi.org/) to fetch the latest news articles. Currently, the app fetches US-based articles.

---

## Future Features

- Option to customize the location for weather data.
- Fetch and display news based on user-selected categories.
- Additional styling improvements for mobile-first design.

---

## Acknowledgments

- Thanks to [OpenWeather](https://openweathermap.org/) and [News API](https://newsapi.org/) for providing the APIs used in this project.
- Inspiration from modern web apps with responsive design and user-friendly interfaces.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---