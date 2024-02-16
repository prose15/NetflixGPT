import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {upcomingMovies } from "../store/movieSlice"
import { API_OPTIONS } from "../utilities/constants"

export const useUpcomingMovies = () =>{
    const dispatch = useDispatch()
    const getMoviesAPI = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
      const json = await data.json()
      dispatch(upcomingMovies(json.results))
    }
    useEffect(()=>{
      getMoviesAPI()
    },[])
}