import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { popularMovie } from "../store/movieSlice"
import { API_OPTIONS } from "../utilities/constants"

export const usePopularMovies = () =>{
    const dispatch = useDispatch()
    const getMoviesAPI = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
      const json = await data.json()
      dispatch(popularMovie(json.results))
    }
    useEffect(()=>{
      getMoviesAPI()
    },[])
}