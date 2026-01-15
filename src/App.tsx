import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [imgURL, setImgURL] = useState()
  const [userQ, setUserQ] = useState()

  const handleRandomBtn = async () => {
    try {
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=ADJhmHFAajZpCZaIVh5myHPaj6LMAdkJ&tag=dogs&rating=g')
      const data = await response.json()
      setImgURL(data.data.images.original.url)
    } catch(err) {
      console.error(err)
    }
  }

  const handleSearchBtn = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=ADJhmHFAajZpCZaIVh5myHPaj6LMAdkJ&q=${userQ}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=ADJhmHFAajZpCZaIVh5myHPaj6LMAdkJ&s=dogs')
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        setImgURL(response.data.images.original.url)
      })
  }, [])

  return (
    <>
      <h1>
        Weather App
      </h1>
      <form onSubmit={(e) => handleSearchBtn(e)} action="">
        <input value={userQ} onChange={(e) => setUserQ(e.target.value)} type="search" name="search" id="search" />
        <button type='submit'>Search</button>
      </form>

      <img src={imgURL} alt="" />
      <button onClick={handleRandomBtn}>Random</button>
    </>
  )
}

export default App
