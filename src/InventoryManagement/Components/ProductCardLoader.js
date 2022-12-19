import React from 'react'
import Style from './ProductCardLoader.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Light, Dark , Toggle, ThemeState } from '../Redux/ThemeSlice'
function ProductCardLoader() {
  const theme = useSelector(ThemeState)
  const dispatch = useDispatch()
  return (
    <>
      <div className={theme === 'Light' ? Style.product_cont_Light : Style.product_cont}>  
       <div className={Style.product}>
         <div className={theme === 'Light' ? Style.product_logo_Light : Style.product_logo}></div>
         <div className={Style.product_details}>
            <div className={theme === 'Light' ? Style.text_1_Light : Style.text_1}></div>
            <div className={theme === 'Light' ? Style.text_2_Light :Style.text_2} ></div>
            <div style={{display:"flex"}}>
            <div className={theme === 'Light' ? Style.product_star_Light : Style.product_star}></div>
            <button className={theme === 'Light' ? Style.get_btn_Light : Style.get_btn}></button>
            </div>
         </div>
       </div>
       <div className={theme === 'Light' ? Style.product_img_Light : Style.product_img}></div> 
       </div>
    </>
  )
}

export default ProductCardLoader
