import React , { useState  }  from 'react'
import ProductComp from '../Components/ProductComp'
import ProductSkullLoader from '../Components/ProductSkullLoader'
import { useSelector, useDispatch } from 'react-redux'
import { Light, Dark , Toggle, ThemeState } from '../Redux/ThemeSlice'


function Product() {

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
    {load ? (theme=== 'Light' ?<ProductComp />:<ProductComp/>) :(theme === 'Light') ? <ProductSkullLoader /> : <ProductSkullLoader/>}
    </>
  )
}

export default Product
