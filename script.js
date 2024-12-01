const API_KEY = "YOUR KEY";
const API_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIconSrc = document.querySelector(".weather img");
const weatherDiv = document.querySelector(".weather");

let errorMessage = document.querySelector(".error-message");

async function checkWeather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    const data = await response.json();

    if (response.status == 200) {
        errorMessage.innerHTML = '';
        weatherDiv.style.display = "block";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp .value").innerHTML = Math.round(data.main.temp);
        document.querySelector(".humidity .value").innerHTML = Math.round(data.main.humidity);
        document.querySelector(".wind-speed .value").innerHTML = Math.round(data.wind.speed);
    
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIconSrc.src = "images/clouds.png";
                break;
            case "Drizzle":
                weatherIconSrc.src = "images/drizzle.png";
                break;
            case "Humidity":
                weatherIconSrc.src = "images/humidity.png";
                break;
            case "Mist":
                weatherIconSrc.src = "images/mist.png";
                break;
            case "Clear":
                weatherIconSrc.src = "images/clear.png";
                break;       
            case "Rain":
                weatherIconSrc.src = "images/rain.png";
                break;
            case "Snow":
                weatherIconSrc.src = "images/snow.png";
                break;
            case "Wind":
                weatherIconSrc.src = "images/wind.png";
                break;    
        }

    } else {
        errorMessage.innerHTML = data.message;
        weatherDiv.style.display = "none";
    }

}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkWeather(searchInput.value);
    }
});


searchButton.addEventListener("click", ()=> {
    checkWeather(searchInput.value);
})

