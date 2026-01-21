import React from 'react';

const Cards = () => {

    return (
        <div className='cards-container'>
            <article className='cards'>
                <h2>Today</h2>
                <div className="weather-details">
                    <p className="temp"></p>
                    <p className="precip"></p>
                    <p className="wind"></p>
                </div>
            </article>
            <article className='cards'>
                <h2>Tommorrow</h2>
                <div className="weather-details">
                    <p className="temp"></p>
                    <p className="precip"></p>
                    <p className="wind"></p>
                </div>
            </article>
            <article className='cards'>
                <h2>The Day After Tomorrow</h2>
                <div className="weather-details">
                    <p className="temp"></p>
                    <p className="precip"></p>
                    <p className="wind"></p>
                </div>
            </article>
        </div>
    )
}

export default Cards