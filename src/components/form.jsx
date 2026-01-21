import React from "react";

const SearchForm = () => {

    return (
        <div className="form-container">
            <form action="">
                <input value={location} type="search" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm