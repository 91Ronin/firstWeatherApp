let weather = {
  "apiKey": "369494c888c8ee42271c8f4fc1783da4",
  fetchWeather: function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=imperial&appid=369494c888c8ee42271c8f4fc1783da4")
    
    .then((reponse) => reponse.json())
    .then((data) => console.log(data));
  }
}

/*
// 20211126155410
// https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=imperial&appid=369494c888c8ee42271c8f4fc1783da4

{
  "coord": {
    "lon": 139.6917,
    "lat": 35.6895
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 46.06,
    "feels_like": 39.92,
    "temp_min": 38.44,
    "temp_max": 49.62,
    "pressure": 1018,
    "humidity": 46
  },
  "visibility": 10000,
  "wind": {
    "speed": 13.8,
    "deg": 330
  },
  "clouds": {
    "all": 20
  },
  "dt": 1637959935,
  "sys": {
    "type": 1,
    "id": 8074,
    "country": "JP",
    "sunrise": 1637962124,
    "sunset": 1637998151
  },
  "timezone": 32400,
  "id": 1850144,
  "name": "Tokyo",
  "cod": 200