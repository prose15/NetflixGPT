import React from 'react'
import MoviePoster from './MoviePoster'

const MoviesCard = ({title,movieCard}) => {
 
  return (
    <div className='px-4 py-6'>
         <p className='text-2xl p-2 text-gray-300 font-bold'>{title}</p>
        {movieCard && 
        <div>
       
       <div className='flex overflow-auto'>
       {movieCard.map((data)=><MoviePoster key={data.id} movieCard={data.poster_path}/>)}
        </div>
        </div>
        }
    </div>
  )
}

export default MoviesCard