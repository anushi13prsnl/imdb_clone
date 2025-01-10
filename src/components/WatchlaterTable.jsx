import React, { useState } from 'react'

function WatchlaterTable({ watchlater, searchString, setWatchlater }) {
  if (!Array.isArray(watchlater)) {
    return null
  }

 const increasingOrderList = () => {
  const sortedwatchlater = [...watchlater].sort((a, b) => a.vote_average - b.vote_average)
  setWatchlater(sortedwatchlater)
 }

 const decreasingOrderList = () => {
  const sortedwatchlater = [...watchlater].sort((a, b) => b.vote_average - a.vote_average)
  setWatchlater(sortedwatchlater)
 }

  return (
    <div className='border border-gray-200 rounded-[10px] m-8'>
      <table className='w-full'>
        <thead>
          <tr>
            <th>Item List</th>
            <th>

            <i onClick={increasingOrderList} className="fa-solid fa-circle-chevron-up hover:cursor-pointer"></i> 
            Ratings 
            <i onClick={decreasingOrderList} className="fa-solid fa-circle-chevron-down hover:cursor-pointer"></i>

            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {watchlater.filter((e)=>{
            return(
              e.title.toLowerCase().includes(searchString.toLowerCase())
            )
          }).map((e) => (
            <tr className='border w-full' key={e.id}>
              <td className='p-2'>
                <div className='flex items-center justify-start gap-4'>
                  <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} alt="img" className='h-[10vh] w-[10vh] bg-cover bg-center rounded-full' />
                  <p className='text-lg font-semibold'>{e.title}</p>
                </div>
              </td>
              <td className='p-4 text-center'>{e.vote_average}</td>
              <td className='p-4 text-center'>{e.popularity}</td>
              <td className='p-4 text-center'>{e.genre}</td>
              <td className='text-red-600 font-bold hover:cursor-pointer'>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WatchlaterTable