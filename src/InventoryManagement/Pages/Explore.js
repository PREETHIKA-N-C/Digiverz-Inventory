import React, { useState } from 'react'
import Gallery  from '../Components/Gallery'
import SkeletonLoader from '../Components/SkeletonLoader'
import { useSelector, useDispatch } from 'react-redux'
import { Light, Dark , Toggle, ThemeState } from '../Redux/ThemeSlice'


function Explore() {

  const theme = useSelector(ThemeState)
  const dispatch = useDispatch()
  if(theme === "Light"){
    document.body.style.background = "#fefeff";
  }else{
    document.body.style.background = "#121212";
  }
  const [load,setLoad] = useState(false);
  setTimeout(()=>{
    setLoad(true)
  },3000)
  return (
        <>
        {load ? <Gallery/>:<SkeletonLoader /> } 
        </>
  )
}

export default Explore