import React from 'react';
import { useState } from 'react';

const Cards = () => {
    const [searchData, setSearchData] = useState({
        location: null,
        startDate: null,
        endDate: null,
    })
    const [weatherData, setWeatherData] = useState({
        currentTemp: null,
        maxTemp: null,
        minTemp: null,
        precipitation: null,
        windSpeed: null,
        description: null
    })

    const getData = async () => {
        const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}`)
    }

    return (
        weatherData.currentTemp ? (
            <div className='cards-container'>
                <article className='cards'>
                    <h2>Today</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.currentTeamp}</p>
                        <p className="max-temp">{weatherData.maxTemp}</p>
                        <p className="min-temp">{weatherData.minTemp}</p>
                        <p className="precip">{weatherData.precipitation}</p>
                        <p className="wind">{weatherData.windSpeed}</p>
                    </div>
                </article>
                <article className='cards'>
                    <h2>Tommorrow</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.currentTeamp}</p>
                        <p className="max-temp">{weatherData.maxTemp}</p>
                        <p className="min-temp">{weatherData.minTemp}</p>
                        <p className="precip">{weatherData.precipitation}</p>
                        <p className="wind">{weatherData.windSpeedWind}</p>
                    </div>
                </article>
                <article className='cards'>
                    <h2>The Day After Tomorrow</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.currentTeamp}</p>
                        <p className="max-temp">{weatherData.maxTemp}</p>
                        <p className="min-temp">{weatherData.minTemp}</p>
                        <p className="precip">{weatherData.precipitation}</p>
                        <p className="wind">{weatherData.windSpeedWind}</p>
                    </div>
                </article>
            </div>
        ) : 
            <h2>Input a Location.</h2>
    )
}

export default Cards