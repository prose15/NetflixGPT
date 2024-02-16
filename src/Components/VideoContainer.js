import React from 'react'
import { useGetTrailer } from '../hooks/useGetTrailer'
import { useSelector } from 'react-redux'

const VideoContainer = ({trailerId}) => {
  useGetTrailer(trailerId)
  const trailer = useSelector(store=>store.movieReducer.movieTrailer)
  if(!trailer)return
  const trailerKey = trailer[0].key
  return (
    <div className=''>
        <iframe
        className='w-[100%] aspect-video'
         src={"https://www.youtube.com/embed/"+trailerKey+"?&enablejsapi=1playlist=peSfCy7HFrM&loop=1;rel=0&autoplay=1&mute=1"}
         title="YouTube video player">
         </iframe>
    </div>
  )
}

export default VideoContainer