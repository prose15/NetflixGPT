import { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { addMovieTrailer } from "../store/movieSlice"
import { API_OPTIONS } from "../utilities/constants"

export const useGetTrailer = (trailerId) =>{
    const movieApi = useSelector(store=>store.movieReducer.movieTrailer)
    const dispatch = useDispatch()
    useEffect(()=>{
        const getMovieTrailer = async() =>{
            const data = await fetch('https://api.themoviedb.org/3/movie/'+trailerId+'/videos?language=en-US',API_OPTIONS)
            const json = await data.json()
            const OfficialMovieTrailer = json.results.filter(data => data.type === "Trailer")
            dispatch(addMovieTrailer(OfficialMovieTrailer))
        }
        {!movieApi && getMovieTrailer()}
    },[])


    
}