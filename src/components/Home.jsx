import React from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Home({ addTowatchlater, removeTowatchlater, watchlater }) {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const handlePrevPage = () => {
    if (page === 1) {
      setPage(1)
    } else {
      setPage(page - 1)
    }
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5419e412b6520c8f95a20967186e2fd3&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`)
      .then((res) => setMovies(res.data.results))
  }, [page])

  return (
    <>
      <div className='text-xl font-bold text-black text-center w-full p-10 font-funky'>
        Explore Trending Movies Here...
      </div>

      <div className='flex flex-wrap justify-center gap-7'>
        {movies.map((e) => {
          return <MovieCard poster_path={e.poster_path} title={e.title} key={e.id} e={e} addTowatchlater={addTowatchlater} removeTowatchlater={removeTowatchlater} watchlater={watchlater} />
        })}
      </div>

      <div>
        <Pagination page={page} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
      </div>
    </>
  )
}

export default Home