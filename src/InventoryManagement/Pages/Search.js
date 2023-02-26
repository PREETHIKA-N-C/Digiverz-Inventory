import React from 'react'
import SearchCard from "../Components/SearchCard.js";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../Redux/ThemeSlice";
import SideNavBar from '../Components/SideNavBar/SideNavBar.js';

function Search() {
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  if (theme === "Light") {
    document.body.style.background = "#fefeff";
  } else {
    document.body.style.background = "#121212";
  }
  return (
    <>
    <SideNavBar/>
    <SearchCard/>
    </>
  )
}

export default Search