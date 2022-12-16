import React from 'react'
import Style from './ProductCardLoader.module.css'
function ProductCardLoader() {
  return (
    <>
      <div className={Style.product_cont}>  
       <div className={Style.product}>
         <div className={Style.product_logo}></div>
         <div className={Style.product_details}>
            <div className={Style.text_1}></div>
            <div className={Style.text_2} ></div>
            <div style={{display:"flex"}}>
            <div className={Style.product_star}></div>
            <button className={Style.get_btn}></button>
            </div>
         </div>
       </div>
       <div className={Style.product_img}></div> 
       </div>
    </>
  )
}

export default ProductCardLoader
