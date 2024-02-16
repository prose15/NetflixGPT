import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, OPEN_AI_KEY, lang } from '../utilities/constants'
import OpenAI from 'openai';
import { addGPTMovies } from '../store/gptSlice';

const GPTSearchPage = () => {
  const dispatch = useDispatch()
    const lang_options = useSelector(store=>store.config_lang.lang)
    const openai = new OpenAI({
        apiKey: OPEN_AI_KEY,dangerouslyAllowBrowser: true 
      });
      const input = useRef()
      
const getMoviesTmdb = async(movie) =>{
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
  const json =await data.json()
  return json.results

}
     getMoviesTmdb()
const handleSubmit= async()=>{
    const GPTQuery = "Act as a movie recommendation and suggest some movies for the query :" + input.current.value + ". only give me names of the 5 movies , comma seperated like the example result given ahead . Example Result :Thunivu,Varisu,Mankatha,Billa,Jailer"
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: GPTQuery }],
        model: 'gpt-3.5-turbo',
      });
    const GPTPromt = chatCompletion.choices[0]?.message?.content.split(',')
    const promiseArray = GPTPromt.map(movie=>getMoviesTmdb(movie))
    const GPTMovies = await Promise.all(promiseArray)
    dispatch(addGPTMovies({movieNames : GPTPromt , movieResults : GPTMovies}))
}
  return (
        <form className='bg-black  md:w-1/2 md:mt-[10%] mt-[35%] grid grid-cols-12 justify-center rounded-lg' onSubmit={(e)=>e.preventDefault()}>
            <input className='col-span-9 bg-white p-4 m-4 rounded-lg'
            placeholder={lang[lang_options].placeholder}
            ref={input}/>
            <button className='col-span-3 p-4 m-4 bg-red-700 rounded-lg ' onClick={handleSubmit}>
              {lang[lang_options].search}
            </button>
        </form>
  )
}

export default GPTSearchPage