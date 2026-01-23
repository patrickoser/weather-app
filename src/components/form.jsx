import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Form = () => {
    const { setSearchData } = useContext(DataContext)
    const [ location, setLocation ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchData(prev => ({ ...prev,
            location: location,
            startDate: new Date().toISOString().split('T')[0],
            endDate: new Date(Date.now() + (48 * 60 * 60 * 1000)).toISOString().split('T')[0]
        }))
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