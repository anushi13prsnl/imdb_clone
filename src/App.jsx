import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlater from './components/Watchlater'
import Banner from './components/Banner'

const App = () => {
  const [watchlater, setWatchlater] = useState([])

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
          <Route path='/' element={<> <Banner /> <Home addTowatchlater={addTowatchlater} removeTowatchlater={removeTowatchlater} /></>}></Route>
          <Route path='/watchlater' element={<Watchlater watchlater={watchlater} />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App