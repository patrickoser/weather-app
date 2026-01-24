import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Cards = () => {

    const { searchData, setSearchData, weatherData } = useContext(DataContext)

    return (
        weatherData?.days[0]?.currentTemp ? (
            <div>
                {weatherData.days.map((day, index) => (
                    <article className="weather-details" key={index}>
                        (weatherData.days[day] === 0 ? <p className="current-temp">Current Temp: {weatherData.days[day].currentTemp}</p> : <p className="average-temp">Avg Temp: {weatherData.days[day].currentTemp}</p>)
                        <p className="max-temp">Max Temp: {weatherData.days[day].maxTemp}</p>
                        <p className="min-temp">Min Temp: {weatherData.days[day].minTemp}</p>
                        <p className="humidity">Humidity: {weatherData.days[day].humidity}</p>
                        <p className="wind">Wind Speed: {weatherData.days[day].windSpeed}</p>
                        <p className='description'>Decription: {weatherData.days[day].description}</p>
                    </article>
                ))}
            </div>
            /*<div className='cards-container'>
                <article className='cards'>
                    <h2>Today</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.days[0].currentTemp}</p>
                        <p className="max-temp">{weatherData.days[0].maxTemp}</p>
                        <p className="min-temp">{weatherData.days[0].minTemp}</p>
                        <p className="humidity">{weatherData.days[0].humidity}</p>
                        <p className="wind">{weatherData.days[0].windSpeed}</p>
                        <p className='description'>{weatherData.days[0].description}</p>
                    </div>
                </article>
                <article className='cards'>
                    <h2>Tommorrow</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.days[1].currentTemp}</p>
                        <p className="max-temp">{weatherData.days[1].maxTemp}</p>
                        <p className="min-temp">{weatherData.days[1].minTemp}</p>
                        <p className="humidity">{weatherData.days[1].humidity}</p>
                        <p className="wind">{weatherData.days[1].windSpeed}</p>
                        <p className='description'>{weatherData.days[1].description}</p>
                    </div>
                </article>
                <article className='cards'>
                    <h2>The Day After Tomorrow</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.days[2].currentTemp}</p>
                        <p className="max-temp">{weatherData.days[2].maxTemp}</p>
                        <p className="min-temp">{weatherData.days[2].minTemp}</p>
                        <p className="humidity">{weatherData.days[2].humidity}</p>
                        <p className="wind">{weatherData.days[2].windSpeed}</p>
                        <p className='description'>{weatherData.days[2].description}</p>
                    </div>
                </article>
            </div>*/
        ) : <h2>Input a Location.</h2>
    )
}

export default Cards