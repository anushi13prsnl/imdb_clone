import React from 'react'
import Logo from '../assets/movie_logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="border-2 flex p-1 items-center text-0.5xl space-x-4 font-bold">
    <img src={Logo} alt="logo" className='w-[40px]'/>
    <Link to="/">Home</Link>
    <Link to="/watchlater">Watch Later</Link>
    </div>
  )
}

export default Navbar
