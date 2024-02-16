import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import GPTSliceReducer from './gptSlice'
import config_lang from './config'

export const reduxStore = configureStore({
    reducer: {userReducer,
    movieReducer,
    GPTSliceReducer,
    config_lang
}
})