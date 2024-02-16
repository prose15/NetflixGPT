import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { MOVIE_LOGO } from '../utilities/constants';

function TextContainer({title,description}) {
  return (
    <div className='bg-gradient-to-r from-black aspect-video w-[100%] absolute top-0'>
    <div className=' mt-40 mx-12 py-24 max-sm:mt-[15%] text-white font-sans'>
      {title === 'Aquaman and the Lost Kingdom' ? <img 
      className='w-56'
      src={MOVIE_LOGO} 
      alt='movie-logo'/> : <h1 className='text-3xl py-2 font-bold'>{title}</h1>}
 
      <p className='w-[500px] text-lg hidden md:inline-block'>{description}</p>
      <div className='flex'>
      <button className='bg-white text-black md:px-8 md:my-4 md:mr-2 md:py-2 rounded-md hover:bg-opacity-50 flex mr-2 p-2'> 
      <FaPlay className='mt-1' size={20}/>
      <p className='ml-2 font-bold'>Play</p> 
      </button>
      <button className='bg-gray-500 text-white md:px-8 md:my-4 md:py-2 rounded-md  hover:bg-opacity-50 flex p-2'>
        <CiCircleMore className='mt-1' size={20}/>
        <p className='ml-2 font-bold'>More info</p></button>
      </div>
    </div>
    </div>
  )
}

export default TextContainer