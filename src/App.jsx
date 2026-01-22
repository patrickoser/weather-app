import React from 'react'
import './App.css'
import Cards from './components/cards'
import Form from './components/form.jsx'
import { useEffect, useState } from 'react'

function App() {

  return (
    <div id='app'>
      <h1>
        Weather App
      </h1>
      <div>
        <Cards  />
      </div>
    </div>
  )
}

export default App
