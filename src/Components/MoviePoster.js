import React from 'react'

const MoviePoster = ({movieCard}) => {
    if(!movieCard) return
  return (
    <div className='flex'>      
            <div className='w-[130px] px-2'>
                <img 
                className=''
                src={`https://image.tmdb.org/t/p/w300/${movieCard}`} alt='movie_poster'/>
            </div>
        </div>
  )
}

export default MoviePoster