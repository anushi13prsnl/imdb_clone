import React, {useState} from 'react'

function MovieCard({poster_path, title, addTowatchlater, e, removeTowatchlater }) {
    const [isAdded, setIsAdded] = useState(false)

  const handleIconClick = () => {
    if (isAdded) {
      removeTowatchlater(e)
    } else {
      addTowatchlater(e)
    }
    setIsAdded(!isAdded)
  }
    

return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }} className='movie-card h-[35vh] w-[12vw] bg-cover bg-center relative transition-transform transform hover:scale-105 rounded-[8px] flex flex-col justify-end '>
      
        <div className='absolute top-0 right-0 p-1 bg-gray-900/70 rounded-[8px]'>
            <i onClick={handleIconClick} className={`fa-solid ${isAdded ? 'fa-times-circle text-red-500' : 'fa-plus-circle text-white'} text-2xl hover:cursor-pointer hover:scale-110`}></i>
        </div>
      
      <div className='font-bold text-white text-center bg-gray-900/60 w-full p-0.2 rounded-b-[8px]'>
        {title}
      </div>
    </div>
)
}

export default MovieCard
