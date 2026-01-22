import React, { createContext, useEffect, useState } from "react";
imp

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [searchData, setSearchData] = useState({
        location: null,
        startDate: null,
        endDate: null
    })
    
    const getData = async (e) => { 
        setSearchData(prev => ({ ...prev,
            location: e.target.value,
            startDate: new Date(),
            endDate: new Date(now.getTime() + (72 * 60 * 60 * 1000))
        }))
        try {
            const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}/${startDate}/${endDate}`)
            const data = await res.json()
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }
    

    return (
        <DataContext.Provider value={{ searchData, setSearchData, getData }}>
            {children}
        </DataContext.Provider>
    )
}