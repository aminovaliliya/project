let apiKey = ''

async function checkWeather(){

    let currentData
    let city = 'Kazan'
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    currentData = await response.json()


    console.log(currentData);
    currentTemp = currentData.main.temp - 273
    document.getElementById('resultTemp').innerHTML = 'Температура в Казани:' + Math.round(currentTemp) + '°С'
}