import { createSlice } from '@reduxjs/toolkit'

export const ThemeSlice = createSlice({
    name:"Theme",
    initialState:{
        value:"Dark"
    },
    reducers:{
        Light:(state)=>{
            state.value = "Light"
        },
        Dark:(state)=>{
            state.value = "Dark"
        },
        Toggle:(state)=>{
            if(state.value === 'Light'){
                state.value = 'Dark'
            }
            else{
                state.value = 'Light'
            }
        }
    },
})

export const { Light , Dark, Toggle } = ThemeSlice.actions

export const ThemeState = (state) => state.Theme.value
 
export default ThemeSlice.reducer