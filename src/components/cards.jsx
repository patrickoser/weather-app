import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Cards = () => {

    const { searchData, setSearchData, weatherData } = useContext(DataContext)

    return (
        weatherData?.currentTemp ? (
            <div className='cards-container'>
                <article className='cards'>
                    <h2>Today</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.currentTeamp}</p>
                        <p className="max-temp">{weatherData.maxTemp}</p>
                        <p className="min-temp">{weatherData.minTemp}</p>
                        <p className="humidity">{weatherData.humidity}</p>
                        <p className="wind">{weatherData.windSpeed}</p>
                        <p className='description'></p>
                    </div>
                </article>
                <article className='cards'>
                    <h2>Tommorrow</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.currentTeamp}</p>
                        <p className="max-temp">{weatherData.maxTemp}</p>
                        <p className="min-temp">{weatherData.minTemp}</p>
                        <p className="humidity">{weatherData.humidity}</p>
                        <p className="wind">{weatherData.windSpeed}</p>
                        <p className='description'>{weatherData.description}</p>
                    </div>
                </article>
                <article className='cards'>
                    <h2>The Day After Tomorrow</h2>
                    <div className="weather-details">
                        <p className="current-temp">{weatherData.currentTeamp}</p>
                        <p className="max-temp">{weatherData.maxTemp}</p>
                        <p className="min-temp">{weatherData.minTemp}</p>
                        <p className="humidity">{weatherData.humidity}</p>
                        <p className="wind">{weatherData.windSpeed}</p>
                        <p className='description'>{weatherData.description}</p>
                    </div>
                </article>
            </div>
        ) : <h2>Input a Location.</h2>
    )
}

export default Cards