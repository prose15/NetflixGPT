import React from 'react'
import VideoContainer from './VideoContainer'
import TextContainer from './TextContainer'
import {useNowPlaying } from '../hooks/useNowPlaying'
import { useSelector } from 'react-redux'
import { usePopularMovies } from '../hooks/usePopularMovies'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { useUpcomingMovies } from '../hooks/useUpcomingMovies'

const MainContainer = () => {
    useNowPlaying()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    const movies = useSelector((store)=>store.movieReducer.addMovieSlice)
    if(!movies)return
    const trailerId = movies[0].id
    const title = movies[0].original_title
    const description = movies[0].overview
  return (
    <div>
        <VideoContainer trailerId = {trailerId}/>
        <TextContainer 
        title={title}
        description={description}/>
    </div>
  )
}

export default MainContainer