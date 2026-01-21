import React, { createContext, useEffect, useState } from "react";
imp

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [searchData, setSearchData] = useState({
        location: null,
        startDate: null,
        endDate: null
    })
    

    return (
        <DataContext.Provider value={{ searchData, setSearchData }}>
            {children}
        </DataContext.Provider>
    )
}