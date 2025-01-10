import React, { useState, useEffect, useMemo } from 'react';
import WatchlaterTable from './WatchlaterTable';
import genreId from './Utility/genre';

function Watchlater({ watchlater, setWatchlater }) {
  const [searchString, setSearchString] = useState('');
  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    const genres = new Set();
    watchlater.forEach((movie) => {
      if (movie.genre_ids[0]) {
        genres.add(genreId[movie.genre_ids[0]]);
      }
    });
    setUniqueGenres([...genres]);
  }, [watchlater]);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre === selectedGenre ? '' : genre);
  };

  const filteredWatchlater = selectedGenre
    ? watchlater.filter((movie) => genreId[movie.genre_ids[0]] === selectedGenre)
    : watchlater;

  const genreDivs = useMemo(
    () => (
      <div className="flex justify-center mt-3 gap-4">
        <div
          className={`px-4 py-2 rounded-full cursor-pointer hover:scale-105 ${
            selectedGenre === '' ? 'bg-gray-700 text-white' : 'bg-black text-white hover:bg-gray-700'
          }`}
          onClick={() => handleGenreClick('')}
        >
          All
        </div>
        {uniqueGenres.map((genre, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-full cursor-pointer hover:scale-105 ${
              selectedGenre === genre ? 'bg-gray-700 text-white' : 'bg-black text-white hover:bg-gray-700'
            }`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </div>
        ))}
      </div>
    ),
    [uniqueGenres, selectedGenre]
  );

  return (
    <>
      {/* Genre selection */}
      {genreDivs}

      {/* Input field */}
      <div className="flex justify-center mt-6">
        <input
          onChange={handleSearch}
          value={searchString}
          type="text"
          className=" bg-gray-100 w-[20vw] p-0.5 pl-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 "
          placeholder="Search for a movie..."
        />
      </div>

      {/* Table */}
      <WatchlaterTable watchlater={filteredWatchlater} searchString={searchString} setWatchlater={setWatchlater} />
    </>
  );
}

export default Watchlater;
