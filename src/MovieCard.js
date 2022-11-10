import React from 'react'

const MovieCard = ({movie}) => {
  return (
    // <div>{movie.Title}</div>
    <div className='flex flex-col rounded-md overflow-hidden hover:shadow-md shadow-gray-700'>
        <img className='h-96 w-64 hover:relative hover:border-2 border-gray-400' src={movie.Poster} alt='N/A'/>
        <div className='bg-gray-700 w-64 h-12'>
            <p>{movie.Title}</p>
        </div>
    </div>
  )
}

export default MovieCard