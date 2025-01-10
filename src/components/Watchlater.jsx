import React from 'react'
import WatchlaterTable from './WatchlaterTable'

function Watchlater({watchlater}) {
  return (
    <>

    {/* Genre selection */}
    <div className='flex justify-center mt-3 gap-4'>
        <div className='bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600'>Action</div>
        <div className='bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-green-600'>Drama</div>
        <div className='bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-red-600'>Comedy</div>
        <div className='bg-yellow-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-yellow-600'>Horror</div>
      </div>

    {/* input field */}
    <div className='flex justify-center mt-3'>
    <input type="text" className=' bg-gray-100 w-[20vw] p-0.5 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 ' placeholder='Search for a movie...' />
    </div>

    {/* Table */}
    <WatchlaterTable watchlater={watchlater}/>

    </>
  )
}

export default Watchlater
