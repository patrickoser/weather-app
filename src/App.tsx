import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [imgURL, setImgURL] = useState()

  const handleRandomBtn = async () => {
    try {
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=ADJhmHFAajZpCZaIVh5myHPaj6LMAdkJ&tag=dogs&rating=g')
      const data = await response.json()
      console.log(data)
      setImgURL(data.data.images.original.url)
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=ADJhmHFAajZpCZaIVh5myHPaj6LMAdkJ&s=dogs')
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        console.log(response.data.images.original.url)
        setImgURL(response.data.images.original.url)
      })
  }, [])

  return (
    <>
      <h1>
        Weather App
      </h1>
      <img src={imgURL} alt="" />
      <button onClick={handleRandomBtn}>Random</button>
    </>
  )
}

export default App
