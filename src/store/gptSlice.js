import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name : 'GPTSlice',
    initialState:{
        GPTSearchOption : false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        GPTState:(state)=>{
            state.GPTSearchOption = ! state.GPTSearchOption
        },
        addGPTMovies : (state,action)=>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults
        }
    }
})
export default GPTSlice.reducer;
export const {GPTState,addGPTMovies} = GPTSlice.actions;
