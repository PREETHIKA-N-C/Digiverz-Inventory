import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './InventoryManagement/Redux/ThemeSlice'
import NavbarReducer from './InventoryManagement/Redux/NavbarSlice'
import SearchDataReducer from './InventoryManagement/Redux/SearchDataSlice'
export default configureStore({
reducer: {
Theme: ThemeReducer,
Navbar: NavbarReducer,
SearchData: SearchDataReducer,
},
})

