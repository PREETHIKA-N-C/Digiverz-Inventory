import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './InventoryManagement/Redux/ThemeSlice'
export default configureStore({
reducer: {
Theme: ThemeReducer,
},
})

