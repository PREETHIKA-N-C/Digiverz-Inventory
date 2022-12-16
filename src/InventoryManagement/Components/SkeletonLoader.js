import React from 'react'
import Style from './SkeletonLoader.module.css'
function SkeletonLoader() {
  return (
    <div className={Style.container}>
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
       <div className={Style.doc_cont}>
        <div className={Style.doc}></div>
        <div className={Style.doc}></div>
        <div className={Style.doc}></div>
        <div className={Style.doc}></div>
        <div className={Style.doc}></div>
        <div className={Style.doc}></div>
       </div>
    </div>
  )
}

export default SkeletonLoader