import React from 'react'
import Style from './SearchCard.module.css'
import filter from "../Assets/filtering.png";
import data from "../ApplicationData/data.js";
import SearchCardItem from './SearchCardItem';


function SearchCard() {
  return (
    <div>
    <div className ={Style.dropdown}>
    <button className= {Style.dropbtn}><img 
    // className={Style.product_img} 
    src={filter} /> </button>
    <div className = {Style.dropdownContent}>
      <a href="#">Image</a>
      <a href="#">Pdf</a>
      <a href="#">Video</a>
        </div>
  </div>

  
  <div className={Style.cardCont}>

  <SearchCardItem />

  <SearchCardItem />     

  </div>
  </div>
  )
}

export default SearchCard