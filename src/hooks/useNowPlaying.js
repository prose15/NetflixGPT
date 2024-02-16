import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from "../store/movieSlice"
import { API_OPTIONS } from "../utilities/constants"

export const useNowPlaying = () =>{
    const dispatch = useDispatch()
    const getMoviesAPI = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS)
      const json = await data.json()
      dispatch(addMovie(json.results))
    }
    useEffect(()=>{
      getMoviesAPI()
    },[])
}