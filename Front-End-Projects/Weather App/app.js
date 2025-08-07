

const cityvalue = document.getElementById("city");
const apiKey = 'a2280c425f730a52d57db6600ee62c16';

async function fetchWeather(city) {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.status === 404 || data.cod === 404) {
            alert("❌ City not found. Please enter a valid city name.");
            cityname.innerHTML = "";
            temperature.innerHTML = "";
            temperature2.innerHTML = "";
            feelsLike.innerHTML = "";
            humidity.innerHTML = "";
            humidity2.innerHTML = "";
            minTemp.innerHTML = "";
            maxTemp.innerHTML = "";
            wind_speed.innerHTML = "";
            wind_speed2.innerHTML = "";
            wind_degrees.innerHTML = "";
            sunrise.innerHTML = "";
            sunset.innerHTML = "";
            return;
        }
        cityname.innerHTML = city;  // Update the city name in the header
        // Save city to localStorage
        localStorage.setItem("lastCity", city);

        // Update UI
        temperature.innerHTML = data.main.temp;
        temperature2.innerHTML = data.main.temp;
        feelsLike.innerHTML = data.main.feels_like;
        humidity.innerHTML = data.main.humidity;
        humidity2.innerHTML = data.main.humidity;
        minTemp.innerHTML = data.main.temp_min;
        maxTemp.innerHTML = data.main.temp_max;
        wind_speed.innerHTML = data.wind.speed;
        wind_speed2.innerHTML = data.wind.speed;
        wind_degrees.innerHTML = data.wind.deg;

        const sunriseTime = new Date(data.sys.sunrise * 1000);
        sunrise.innerHTML = sunriseTime.toLocaleTimeString();

        const sunsetTime = new Date(data.sys.sunset * 1000);
        sunset.innerHTML = sunsetTime.toLocaleTimeString();

        
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

// 🔘 Fetch on button click
submit.addEventListener("click", (e) => {
    e.preventDefault();
    fetchWeather(cityvalue.value);
});

// 🔄 Auto-load last searched city on refresh
window.addEventListener("DOMContentLoaded", () => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
        fetchWeather(lastCity);
    }
});






async function lahoreWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Save city to localStorage
        localStorage.setItem("lastCity", city);

        temperature3.innerHTML = data.main.temp;
        feelsLike2.innerHTML = data.main.feels_like;
        humidity3.innerHTML = data.main.humidity;
        minTemp2.innerHTML = data.main.temp_min;
        maxTemp2.innerHTML = data.main.temp_max;
        wind_speed3.innerHTML = data.wind.speed;
        wind_degrees2.innerHTML = data.wind.deg;

        const sunriseTime = new Date(data.sys.sunrise * 1000);
        sunrise2.innerHTML = sunriseTime.toLocaleTimeString();

        const sunsetTime = new Date(data.sys.sunset * 1000);
        sunset2.innerHTML = sunsetTime.toLocaleTimeString();
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}
lahoreWeather("Lahore");
async function SkarduWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Save city to localStorage
        localStorage.setItem("lastCity", city);

        temperature_d.innerHTML = data.main.temp;
        feelsLike_d.innerHTML = data.main.feels_like;
        humidity_d.innerHTML = data.main.humidity;
        minTemp_d.innerHTML = data.main.temp_min;
        maxTemp_d.innerHTML = data.main.temp_max;
        wind_speed_d.innerHTML = data.wind.speed;
        wind_degrees_d.innerHTML = data.wind.deg;

        const sunriseTime = new Date(data.sys.sunrise * 1000);
        sunrise_d.innerHTML = sunriseTime.toLocaleTimeString();

        const sunsetTime = new Date(data.sys.sunset * 1000);
        sunset_d.innerHTML = sunsetTime.toLocaleTimeString();
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}
SkarduWeather("Skardu");
async function karachiWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Save city to localStorage
        localStorage.setItem("lastCity", city);

        temperature_k.innerHTML = data.main.temp;
        feelsLike_k.innerHTML = data.main.feels_like;
        humidity_k.innerHTML = data.main.humidity;
        minTemp_k.innerHTML = data.main.temp_min;
        maxTemp_k.innerHTML = data.main.temp_max;
        wind_speed_k.innerHTML = data.wind.speed;
        wind_degrees_k.innerHTML = data.wind.deg;

        const sunriseTime = new Date(data.sys.sunrise * 1000);
        sunrise_k.innerHTML = sunriseTime.toLocaleTimeString();

        const sunsetTime = new Date(data.sys.sunset * 1000);
        sunset_k.innerHTML = sunsetTime.toLocaleTimeString();
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}
karachiWeather("Karachi");
async function murreeWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Save city to localStorage
        localStorage.setItem("lastCity", city);

        temperature_m.innerHTML = data.main.temp;
        feelsLike_m.innerHTML = data.main.feels_like;
        humidity_m.innerHTML = data.main.humidity;
        minTemp_m.innerHTML = data.main.temp_min;
        maxTemp_m.innerHTML = data.main.temp_max;
        wind_speed_m.innerHTML = data.wind.speed;
        wind_degrees_m.innerHTML = data.wind.deg;

        const sunriseTime = new Date(data.sys.sunrise * 1000);
        sunrise_m.innerHTML = sunriseTime.toLocaleTimeString();

        const sunsetTime = new Date(data.sys.sunset * 1000);
        sunset_m.innerHTML = sunsetTime.toLocaleTimeString();
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}
murreeWeather("Murree");