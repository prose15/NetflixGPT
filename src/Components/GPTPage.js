import React from 'react'
import { BACKGROUND_IMAGES } from '../utilities/constants'
import GPTSearchPage from './GPTSearchPage'
import GPTMovies from './GPTMovies'

const GPTPage = () => {
  return (
    <div>
    <div className='flex justify-center'>
        <img 
        className='fixed -z-10  h-screen object-cover w-screen'
        src={BACKGROUND_IMAGES}
        alt='backgroung_image'/>
        <GPTSearchPage/>         
    </div>
    <GPTMovies/>  
    </div>
  )
}

export default GPTPage