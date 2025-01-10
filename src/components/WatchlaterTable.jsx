import React from 'react';
import genreId from './Utility/genre';

function WatchlaterTable({ watchlater, searchString, setWatchlater }) {
  if (!Array.isArray(watchlater)) {
    return null;
  }

  const increasingOrderList = () => {
    const sortedwatchlater = [...watchlater].sort((a, b) => a.vote_average - b.vote_average);
    setWatchlater(sortedwatchlater);
  };

  const decreasingOrderList = () => {
    const sortedwatchlater = [...watchlater].sort((a, b) => b.vote_average - a.vote_average);
    setWatchlater(sortedwatchlater);
  };

  const handleDelete = (id) => {
    const updatedWatchlater = watchlater.filter((movie) => movie.id !== id);
    setWatchlater(updatedWatchlater);
  };

  return (
    <div className="border border-gray-200 rounded-[10px] m-8">
      <table className="w-full">
        <thead>
          <tr>
            <th>Item List</th>
            <th>
              <i onClick={increasingOrderList} className="fa-solid fa-circle-chevron-up hover:cursor-pointer mr-2"></i>
              Ratings
              <i onClick={decreasingOrderList} className="fa-solid fa-circle-chevron-down hover:cursor-pointer ml-2"></i>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {watchlater
            .filter((e) => {
              return e.title.toLowerCase().includes(searchString.toLowerCase());
            })
            .map((e) => (
              <tr className="border w-full" key={e.id}>
                <td className="p-2">
                  <div className="flex items-center justify-start gap-4">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
                      alt="img"
                      className="h-[10vh] w-[10vh] bg-cover bg-center rounded-full"
                    />
                    <p className="text-lg font-semibold">{e.title}</p>
                  </div>
                </td>
                <td className="p-4 text-center">{e.vote_average}</td>
                <td className="p-4 text-center">{e.popularity}</td>
                <td className="p-4 text-center">{genreId[e.genre_ids[0]]}</td>
                <td
                  className="text-red-600 font-bold hover:cursor-pointer"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default WatchlaterTable;
