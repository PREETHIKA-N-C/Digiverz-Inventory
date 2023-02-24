import React from 'react'
import Style from './Filter.module.css'
import filter from "../Assets/filtering.png";
import data from "../ApplicationData/data.js";
import ProductCard from "./ProductCard.js";

const AppFilter= (e) => {
  e.preventDefault();
//   {data.filter(data => data.Type === 'App').map((e)=>{
//    return (
    
//    <ProductCard name={e. appName} desc={e.AppDescription} logo={e.appLogo} img={e.AppScreenShot}/>
//  );})}
 
}
const DashboardFilter= (e) => {
  e.preventDefault();
//   {data.filter(data => data.Type === 'Dashboard').map((e)=>{
//    return (
    
//    <ProductCard name={e. appName} desc={e.AppDescription} logo={e.appLogo} img={e.AppScreenShot}/>
//  );})}
}

function Filter() {
  return (
    <div className ={Style.dropdown}>
    <button className= {Style.dropbtn}><img 
    // className={Style.product_img} 
    src={filter} /> </button>
    <div className = {Style.dropdownContent}>
      <a href="#" onClick={AppFilter} >Apps</a>
      <a href="#" onClick={DashboardFilter}>Dashboards</a>
        </div>
  </div>
  )
}

export default Filter