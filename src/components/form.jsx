import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Form = () => {
    const { setSearchData } = useContext(DataContext)
    const [ location, setLocation ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`searchData: ${setSearchData}, location: ${location}`)
        setSearchData(prev => ({ ...prev, location: location }))
        console.log(`searchData: ${setSearchData}, location: ${location}`)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} action="">
                <input
                    onChange={(e) => setLocation(e.target.value)} 
                    value={location} 
                    type="search" 
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Form