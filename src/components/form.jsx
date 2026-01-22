import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Form = () => {
    const { setSearchData } = useContext(DataContext)
    const [ location, setLocation ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchData(prev => ({ ...prev, location: e.target.value }))
    }

    return (
        <div className="form-container">
            <form action="">
                <input
                onChange={(e) => setLocation(e.target.value)} value={location} type="search" />
                <button onSubmit={handleSubmit} type="submit">Search</button>
            </form>
        </div>
    )
}

export default Form