import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [searchData, setSearchData] = useState({
        location: null,
        startDate: null,
        endDate: null
    })
    const [weatherData, setWeatherData] = useState({ days: [] })

    const getData = async () => { 
        
        try {
            const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchData.location}/${searchData.startDate}/${searchData.endDate}?key=92TP9PDYW45DZ53CUVY4DBWDC`)
            const data = await res.json()
            console.log('Data fetched: ', data)

            const mappedData = data.days?.map((day) => ({
                currentTemp: day.temp,
                maxTemp: day.tempmax,
                minTemp: day.tempmin,
                humidity: day.humidity,
                windSpeed: day.windspeed,
                description: day.description
            }))
            console.log(mappedData)

            setWeatherData({ days: mappedData })
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        if (searchData.location) {
            getData()
        }

    }, [searchData.location])

    useEffect(() => {
        console.log(weatherData)
    }, [weatherData.days[0, 1, 2]])
    return (
        <DataContext.Provider value={{ searchData, setSearchData, getData, weatherData }}>
            {children}
        </DataContext.Provider>
    )
}