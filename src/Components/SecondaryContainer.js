import React from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from './MoviesCard'

const SecondaryContainer = () => {
    const movieCard = useSelector(store=>store.movieReducer)
    if(!movieCard)return 
  return (
    <div className='bg-black'>
      <div className='md:-mt-40  relative'>
        <MoviesCard title={"Now Playing"} movieCard={movieCard.addMovieSlice}/>
        <MoviesCard title={"Popular"} movieCard={movieCard.popularMovie}/>
        <MoviesCard title={"Top Rated"} movieCard={movieCard.topRatedMovies}/>
        <MoviesCard title={"Upcoming"} movieCard={movieCard.upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer