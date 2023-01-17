import { createSlice } from "@reduxjs/toolkit";

export const NavbarSlice = createSlice({
    name: "Navbar",
    initialState: {
        value: "Home",
    },
    reducers:{
        setNavState: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setNavState } = NavbarSlice.actions;

export const NavbarState = (state) => state.Navbar.value;

export default NavbarSlice.reducer;