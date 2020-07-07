
function loadWeatherData() {

    let q = document.getElementById("inputCountryName").value;

    console.log(q);

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.timezone');
    let iconclass = document.querySelector('.icon');


    // App data
    const weather = {};
    const KELVIN = 273;
    weather.temperature = {
        unit: "celsius"
    }

    const api_city = `https://api.openweathermap.org/data/2.5/weather?appid=57cb9da61fdd7b88043f4e59b148d268&q=${q}`;

    console.log(api_city);

    fetch(api_city)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            const temperature = Math.floor(data.main.temp - KELVIN);
            const city = data.name;
            const desc = data.weather[0].description
            const icon = data.weather[0].icon;

            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = desc;
            locationTimezone.textContent = city;

            let image = document.createElement("img");
            image.src = `./img/${icon}.png`;
            
            iconclass = document.getElementById("iconID");
            iconclass.appendChild(image);

            image.style.width = '156px';
            image.style.height = 'auto';

        });
}
