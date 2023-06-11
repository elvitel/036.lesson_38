const divParent = document.getElementById('parent');
divParent.setAttribute('style', 'padding-left: 50px; padding-top: 20px; background-color: #edf2c3');

function getWeather(myCity) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`)            
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Помилка запиту');
        }        
    })
    .then((data) => {
        displayWeather(data);
    })            
    .catch((error) => console.error(error));
}

window.onload = function() {
    getWeather('LVIV');
};

function displayWeather(elem) {
    const myCity= document.createElement('div');
    myCity.innerHTML = `City: ${elem.name}`;
    divParent.appendChild(myCity);

    const myTemperature = document.createElement('div');
    myTemperature.innerHTML = `Temperature: ${Math.round(elem.main.temp)} &#8451`;
    divParent.appendChild(myTemperature);

    const myPressure = document.createElement('div');
    myPressure.innerHTML = `Pressure: ${elem.main.pressure} hPa`;
    divParent.appendChild(myPressure);

    const myDescription = document.createElement('div');
    myDescription.innerHTML = `Weather conditions: ${elem.weather[0].description}`;
    divParent.appendChild(myDescription);

    const myHumidity = document.createElement('div');
    myHumidity.innerHTML = `Humidity: ${elem.main.humidity} %`;
    divParent.appendChild(myHumidity);

    const windSpeed = document.createElement('div');
    windSpeed.innerHTML = `Wind speed: ${Math.round(elem.wind.speed)} m/s`;
    divParent.appendChild(windSpeed);

    const windDirection = document.createElement('div');
    windDirection.innerHTML = `Wind direction: ${elem.wind.deg} &deg`;
    divParent.appendChild(windDirection);
    
    const myIcon = document.createElement('img');
    myIcon.setAttribute('src', `http://openweathermap.org/img/w/${elem.weather[0].icon}.png`);
    divParent.appendChild(myIcon);
}


