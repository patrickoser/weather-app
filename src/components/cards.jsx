import React from 'react';

const Cards = () => {

    return (
        <div className='cards-container'>
            <article className='cards'>
                <h2>Today</h2>
                <p className="temp"></p>
                <p className="precip"></p>
                <p className="wind"></p>
            </article>
            <article className='cards'>
                <h2>Tommorrow</h2>
                <p className="temp"></p>
                <p className="precip"></p>
                <p className="wind"></p>
            </article>
            <article className='cards'>
                <h2>The Day After Tomorrow</h2>
                <p className="temp"></p>
                <p className="precip"></p>
                <p className="wind"></p>
            </article>
        </div>
    )
}

export default Cards