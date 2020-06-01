import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'

class App extends Component {
  state = {
    currentForecast: null,
    tempUnit: 'C'
  }

  getWeather = async (location) => {
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=177d6d27801e937fa431c833a1fa8013', {mode: 'cors'});
    let weather = await response.json(); 
    if (weather.cod === 200){
      this.processWeather(weather);
      console.log(weather)
    } else {
      console.log('city not found');
    }
    return weather
  }

  processWeather = (weather) => {
    let currentForecast = {
      country: weather.sys.country,
      city: weather.name,
      description: weather.weather[0].description,
      temperature: Math.round(weather.main.temp - 273.15),
      humidity: weather.main.humidity + '%',
      wind: Math.round(weather.wind.speed * 2.237) + 'mph',
      icon: "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"
    }
    this.setState({
      currentForecast: currentForecast
    })
    console.log(this.state)
  }

  tempUnitConverter = () => {
    let currentForecast = JSON.parse(JSON.stringify(this.state.currentForecast));
    let tempUnit = this.state.tempUnit

    if (tempUnit === 'C'){
      currentForecast.temperature = Math.round((currentForecast.temperature * 1.8) + 32); 
      tempUnit = 'F';
    } else {
      currentForecast.temperature = Math.round((currentForecast.temperature - 32) * 0.55555556);
      tempUnit = 'C';
    }
    this.setState({
        currentForecast: currentForecast,
        tempUnit: tempUnit
    }); 
  }

  render(){
    return (
      <div className="App ">
        <div className="nav-wrapper valign-wrapper indigo grey lighten-1">
          <i id="logo" className="material-icons">cloud_queue</i>
          <span id="logo-text" className="brand-logo">Weather App</span>
        </div>
        <div className="container">
            <SearchBar getWeather={this.getWeather}/> 
            {
              !this.state.currentForecast ? (
                null 
              ) : (
                <WeatherDisplay currentForecast={this.state.currentForecast} tempUnitConverter={this.tempUnitConverter} tempUnit={this.state.tempUnit}/> 
              ) 
            }    
        </div>
      </div>
    );
  }
}

export default App;
