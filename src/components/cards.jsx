import React from 'react';

const Cards = () => {

    return (
        <div className='cards-container'>
            <article className='cards'>
                <h2>Today</h2>
                <div className="weather-details">
                    <p className="temp">Temp</p>
                    <p className="precip">Precip</p>
                    <p className="wind">Wind</p>
                </div>
            </article>
            <article className='cards'>
                <h2>Tommorrow</h2>
                <div className="weather-details">
                    <p className="temp">Temp</p>
                    <p className="precip">Precip</p>
                    <p className="wind">Wind</p>
                </div>
            </article>
            <article className='cards'>
                <h2>The Day After Tomorrow</h2>
                <div className="weather-details">
                    <p className="temp">Temp</p>
                    <p className="precip">Precip</p>
                    <p className="wind">Wind</p>
                </div>
            </article>
        </div>
    )
}

export default Cards