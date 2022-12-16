import React, { useState } from 'react'
import Gallery  from '../Components/Gallery'
import SkeletonLoader from '../Components/SkeletonLoader'



function Explore() {
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