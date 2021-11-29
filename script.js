let weather = {
  // https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=369494c888c8ee42271c8f4fc1783da4

  apiKey: "369494c888c8ee42271c8f4fc1783da4",
  fetchWeather: function(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=369494c888c8ee42271c8f4fc1783da4")      
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  
    displayWeather: function(data) {
      const { name } = data;
      const { icon,description } = data.weather;
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name,icon,description,temp,humidity,speed);
      
  }
}