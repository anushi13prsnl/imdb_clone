import React from 'react'

function Pagination({handleNextPage, handlePrevPage, page}) {
  return (
    <div className='font-bold text-white text-center bg-black w-full p-0.2 font-funky flex justify-center gap-6 p-2 mt-10 mb-0.5'>
      <i onClick={handlePrevPage} className='fa-solid fa-circle-chevron-left text-2xl text-white hover:cursor-pointer'></i>
      <p>page{page}</p>
      <i onClick={handleNextPage} className='fa-solid fa-circle-chevron-right text-2xl text-white hover:cursor-pointer'></i>
    </div>
  )
}

export default Pagination
