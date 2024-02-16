import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movieSlice",
    initialState:{
        addMovieSlice : null,
        movieTrailer : null,
        popularMovie: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers:{
        addMovie:(state,action)=> {
            state.addMovieSlice = action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload
        },        
        popularMovie:(state,action)=>{
            state.popularMovie = action.payload
        },
        topRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        upcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        }
    }
})
export default movieSlice.reducer;
export const {addMovie,addMovieTrailer,popularMovie,topRatedMovies,upcomingMovies} = movieSlice.actions