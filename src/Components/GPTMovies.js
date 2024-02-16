import React from 'react'
import { useSelector } from 'react-redux'
import MoviesCard from './MoviesCard'
const GPTMovies = () => {
    const {movieNames,movieResults} = useSelector(store=>store.GPTSliceReducer)
    if(!movieNames)return null
  return (
    <div className='bg-black p-4 m-4 bg-opacity-85'>
      {movieNames.map((movieNames,index)=><MoviesCard key={movieNames} title={movieNames} movieCard={movieResults[index]}/>)}
       
    </div>
  )
}

export default GPTMovies