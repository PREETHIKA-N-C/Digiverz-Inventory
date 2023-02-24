import React from 'react'
import Style from './ProductCard.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import { Light, Dark , Toggle, ThemeState } from '../Redux/ThemeSlice'
function ProductCard({name="Sentiment Analysis",desc="Accelerator | Productivity",logo="https://yt3.ggpht.com/ytc/AMLnZu_i0kljAsakXn2qz5sjtj7Tab-bmDtwDtBvM5t2aQ=s900-c-k-c0x00ffffff-no-rj",img="https://www.adobe.com/content/dam/www/us/en/max/2021/MAX2021-RegOpen-bnr-social-share-nodate-1200X630.jpg"}) {
  const theme = useSelector(ThemeState)
  const dispatch = useDispatch()  
return (
    <>
    
      <div className={theme === 'Light' ? Style.product_cont_Light : Style.product_cont}>  
       <div className={Style.product}>
         <img className={Style.product_logo} src={logo}/>
         <div className={theme === 'Light' ? Style.product_details_Light:Style.product_details}>
            <div className={Style.text_1}>{name}</div>
            <div className={Style.text_2} >{desc}</div>
            <div className='flex'>
            <AiFillStar style={theme === 'Light' ? {color:"black"} :  {color:"white"}} />
            <AiFillStar style={theme === 'Light' ? {color:"black"} :  {color:"white"}} />
            <AiFillStar style={theme === 'Light' ? {color:"black"} :  {color:"white"}} />
            <AiFillStar style={theme === 'Light' ? {color:"black"} :  {color:"white"}} />
            <AiOutlineStar style={theme === 'Light' ? {color:"black"} :  {color:"white"}} />
            <a className={Style.get_btn}>LAUNCH</a>
            </div>
         </div>
       </div>
       <img className={Style.product_img} src={img} /> 
       </div>
    </>
  )
}

export default ProductCard

