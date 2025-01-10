import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlater from './components/Watchlater'
import Banner from './components/Banner'

const App = () => {

  // Retrieve the watchlater list from localStorage when the component mounts
  const [watchlater, setWatchlater] = useState(() => {
    const savedWatchlater = localStorage.getItem('watchlater')
    return savedWatchlater ? JSON.parse(savedWatchlater) : []
  })

  // Save the watchlater list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('watchlater', JSON.stringify(watchlater))
  }, [watchlater])




  const addTowatchlater = (e) => {
    if (!Array.isArray(watchlater)) {
      setWatchlater([e])
    } else {
      setWatchlater([...watchlater, e])
    }
  }

  const removeTowatchlater = (e) => {
    if (Array.isArray(watchlater)) {
      setWatchlater(watchlater.filter((el) => el.id !== e.id))
    }
  }

  console.log(watchlater)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Banner /> <Home addTowatchlater={addTowatchlater} removeTowatchlater={removeTowatchlater} watchlater={watchlater} /></>}></Route>
          <Route path='/watchlater' element={<Watchlater watchlater={watchlater} removeTowatchlater={removeTowatchlater} setWatchlater={setWatchlater}/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App