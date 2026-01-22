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

    const getData = async (e) => { 
        setSearchData(prev => ({ ...prev,
            startDate: new Date(),
            endDate: new Date(now.getTime() + (72 * 60 * 60 * 1000))
        }))
        console.log(searchData)
        try {
            const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}/${startDate}/${endDate}`)
            const data = await res.json()
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }
    
    useEffect(() => {
        getData()
    }, [searchData.location])

    return (
        <DataContext.Provider value={{ searchData, setSearchData, getData, weatherData }}>
            {children}
        </DataContext.Provider>
    )
}