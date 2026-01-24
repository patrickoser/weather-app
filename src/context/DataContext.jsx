import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    // Initialize searchData state to an object with 3 key value pairs.
    const [searchData, setSearchData] = useState({
        location: null,
        startDate: null,
        endDate: null
    })

    // Initialize weaterData state as an object with an empty days array.
    const [weatherData, setWeatherData] = useState({ days: [] })

    const getData = async () => { 
        try {
            // Request data from api using searchData values a reference.
            const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchData.location}/${searchData.startDate}/${searchData.endDate}?key=92TP9PDYW45DZ53CUVY4DBWDC`)
            const data = await res.json()

            // Take the json formatted response and map each day/set of data to the following
            // keys being set in the mappedData object
            const mappedData = data.days?.map((day) => ({
                currentTemp: day.temp,
                maxTemp: day.tempmax,
                minTemp: day.tempmin,
                humidity: day.humidity,
                windSpeed: day.windspeed,
                description: day.description
            }))

            // Assign the mappedData objects to the days array within weatherData.
            setWeatherData({ days: mappedData })
        } catch (err) {
            console.error(err.message)
        }
    }
    
    // Check is searchData.location has changed, if so then run getData().
    useEffect(() => {
        if (searchData.location) {
            getData()
        }

    }, [searchData.location])

    return (
        <DataContext.Provider value={{ searchData, setSearchData, getData, weatherData }}>
            {children}
        </DataContext.Provider>
    )
}