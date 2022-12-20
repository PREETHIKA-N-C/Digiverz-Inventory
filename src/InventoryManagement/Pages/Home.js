import React, { useEffect,useState } from 'react'
import SliderThumbnail from '../Components/SliderThumbnail.js'
import { useSelector, useDispatch } from 'react-redux'
import { Light, Dark , Toggle, ThemeState } from '../Redux/ThemeSlice'

function Home() {
  const theme = useSelector(ThemeState)
  const dispatch = useDispatch()
  if(theme === "Light"){
    document.body.style.background = "#fefeff";
  }else{
    document.body.style.background = "#121212";
  }

  return (
   <SliderThumbnail />
  )
}

export default Home