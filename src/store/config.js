import { createSlice } from "@reduxjs/toolkit";

const config_lang = createSlice({
    name:'lang',
    initialState:{
        lang: 'en'
    },
    reducers:{
        LangOptions : (state,action) => {
            state.lang = action.payload
        }
    }
})
export default config_lang.reducer;
export const {LangOptions} = config_lang.actions