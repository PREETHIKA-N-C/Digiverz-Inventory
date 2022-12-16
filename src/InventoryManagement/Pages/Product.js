import React , { useState  }  from 'react'
import ProductComp from '../Components/ProductComp'
import ProductSkullLoader from '../Components/ProductSkullLoader'
function Product() {
     const [load,setLoad] = useState(false);
  setTimeout(()=>{
    setLoad(true)
  },3000)
  return (
     <>
    {load ? <ProductComp/> : <ProductSkullLoader/>}
    </>
  )
}

export default Product
