import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { topRatedMovies } from "../store/movieSlice"
import { API_OPTIONS } from "../utilities/constants"

export const useTopRatedMovies = () =>{
    const dispatch = useDispatch()
    const getMoviesAPI = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
      const json = await data.json()
      dispatch(topRatedMovies(json.results))
    }
    useEffect(()=>{
      getMoviesAPI()
    },[])
}