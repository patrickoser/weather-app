import React from 'react'
import './App.css'
import Cards from './components/cards'
import { useEffect, useState } from 'react'

function App() {

  return (
    <div id='app'>
      <h1>
        Weather App
      </h1>
      <form action="">
        <input type="search" />
        <button type="submit">Search</button>
      </form>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default App
