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
    {load ? (theme=== 'Light' ?<ProductComp bgColor="#abe6e3" contactColor="[#2B3467]" buttonColor="[#46C2CB]" borderColor="" iconColor="black" iconColor2="#000000" textColor="black"/>:<ProductComp buttonColor="blue-300" contactColor="blue-300" iconColor="white" iconColor2="#A6A5A5" bgColor="#2c36395f" textColor="white" borderColor="#303030" />) :(theme === 'Light') ? <ProductSkullLoader bgColor="#abe6e3" borderColor="" loadAnimation="skull-Load-Light"/> : <ProductSkullLoader bgColor="#2c36395f" loadAnimation="skull-Load" borderColor="#303030"/>}
    </>
  )
}

export default Product
