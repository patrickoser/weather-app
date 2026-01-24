import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Cards = () => {

    const { weatherData } = useContext(DataContext)

    return (
        weatherData?.days[0]?.currentTemp ? (
            <div className="cards-container">
                {weatherData.days.map((day, index) => (
                    <article className="cards" key={index}>
                        {index === 0 ?
                            (<h2>Today</h2>) :
                        index === 1 ? 
                            (<h2>Tomrrow</h2>) :
                            (<h2>Day After Tomrrow</h2>)}
                        {index === 0 ? 
                            (<p className="current-temp">Current Temp: {day.currentTemp}</p>) : 
                            (<p className="average-temp">Avg Temp: {day.currentTemp}</p>)
                        }
                        <p className="max-temp">Max Temp: {day.maxTemp}</p>
                        <p className="min-temp">Min Temp: {day.minTemp}</p>
                        <p className="humidity">Humidity: {day.humidity}</p>
                        <p className="wind">Wind Speed: {day.windSpeed}</p>
                        <p className='description'>Decription: {day.description}</p>
                    </article>
                ))}
            </div>
        ) : <h2>Input a Location.</h2>
    )
}

export default Cards