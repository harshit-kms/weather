const key = "d1226a2dd284b0213a51858a658d3763";
const searchBar = document.querySelector(".location-bar input");
const button = document.querySelector(".location-bar button");
  
async function weatherForecast(cityName){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    const response = await fetch(URL);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        const data = await response.json();
        document.querySelector(".weather").style.display = "";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".location").innerText = data.name; 
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + " °C"; 
        document.querySelector(".humidity .details-text p").innerText = data.main.humidity + "%"; 
        document.querySelector(".wind .details-text p").innerText = data.wind.speed + " mph"; 
        document.querySelector(".weather img").src = `images/${data.weather[0].main.toLowerCase()}.png`;


    } 


}

weatherForecast("new york");

button.addEventListener("click", () => {
    weatherForecast(searchBar.value);
});

searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        weatherForecast(searchBar.value);
    }
});
