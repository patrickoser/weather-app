import React from 'react'
import './App.css'
import Cards from './components/cards'
import Form from './components/form.jsx'
import { DataProvider } from './context/DataContext.jsx'
import { useEffect, useState } from 'react'

function App() {

  return (
    <DataProvider>
      <div id='app'>
        <h1>
          Weather App
        </h1>
        <div>
          <Form />
        </div>
        <div>
          <Cards  />
        </div>
      </div>
    </DataProvider>
  )
}

export default App
