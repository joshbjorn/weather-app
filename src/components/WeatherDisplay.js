import React from 'react'

const WeatherDisplay = ({ currentForecast, tempUnitConverter, tempUnit }) => {
    const handleClick = () => {
        tempUnitConverter();
    }
    return(
        <div className="container">
            <div id="weather-card" className="card blue-grey darken-1">
                <div id="main-details" className="row">
                    <div id="location" className="col s8">
                        <span className="flow-text">{currentForecast.country}, {currentForecast.city}</span>
                        <p>{currentForecast.description}</p>
                    </div>
                    <div id="weather-icon" className="col s4">
                        <img id="weather-icon-img" alt="#" src={currentForecast.icon}  />
                    </div>
                </div>
                <div id="temperature-details" className="row">
                    <div id="temperature" className="col s6">    
                        {currentForecast.temperature}
                        {tempUnit}   
                    </div>
                    <div id="details" className="col s6">
                        <div>Humidity: {currentForecast.humidity}</div>
                        <div>Wind: {currentForecast.wind}</div>
                    </div>
                </div>
                <div id="temp-unit-row" className="row s12 center-align">
                    <button id="temperature-button" className="btn-flat col s12" onClick={() => handleClick()}>
                        {tempUnit} 
                    </button>
                </div>       
            </div>
        </div> 
    )
}

export default WeatherDisplay

// {currentForecast.temperature.temp} + {currentForecast.temperature.unit}