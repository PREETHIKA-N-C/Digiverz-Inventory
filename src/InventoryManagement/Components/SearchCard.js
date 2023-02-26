import React from 'react'
import Style from './SearchCard.module.css'
import filter from "../Assets/filtering.png";
import data from "../ApplicationData/data.js";
import SearchCardItem from './SearchCardItem';
import {SearchDataState} from '../Redux/SearchDataSlice'
import { useSelector } from "react-redux";

function SearchCard() {
  const searchData = useSelector(SearchDataState);

  return (
    <div>
    <div className ={Style.dropdown}>
    <button className= {Style.dropbtn}><img 
    // className={Style.product_img} 
    src={filter} /> </button>
    <div className = {Style.dropdownContent}>
      <a href="">Image</a>
      <a href="">Pdf</a>
      <a href="">Video</a>
        </div>
  </div>

  
  <div className={Style.cardCont}>

  {
    searchData.map((val)=><SearchCardItem fileName={val._source.title} dataBase64={val._source.data} type={val._source.attachment.content_type} />)
  }

  </div>
  </div>
  )
}

export default SearchCard