import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [searchData, setSearchData] = useState({
        location: null,
        startDate: null,
        endDate: null
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
        console.log(`searchData: ${searchData.location}, ${searchData.startDate}, ${searchData.endDate}`)
        
        try {
            const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchData.location}/${searchData.startDate}/${searchData.endDate}?key=92TP9PDYW45DZ53CUVY4DBWDC`)
            const data = await res.json()
            console.log(`Data fetched: ${ data.days }`)
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        if (searchData.location) {
            console.log(searchData.location)
            getData()
        }

    }, [searchData.location])

    return (
        <DataContext.Provider value={{ searchData, setSearchData, getData, weatherData }}>
            {children}
        </DataContext.Provider>
    )
}