import React, { useState } from "react";
import ProductCard from "../Components/ProductCard.js";
import Filter from "../Components/Filter.js";
import filter from "../Assets/filtering.png";
import ProductCardLoader from "../Components/ProductCardLoader.js";
import Style from '../Components/Filter.module.css'
import Banner1 from "../Assets/Banner.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../Redux/ThemeSlice";
import data from '../ApplicationData/data.js';
import DashboardCard from "../Components/DashboardCard.js";
function Application() {
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  const [type,setType] = useState("App");
  if (theme === "Light") {
    document.body.style.background = "#fefeff";
  } else {
    document.body.style.background = "#121212";
  }
  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 1500);
  return (
    <>
    <div className={Style.flexWrap}>
      <div className={Style.filterDiv}>
    {/* <Filter/> */}
    <div className ={Style.dropdown}>
    <button className= {Style.dropbtn}><img 
    // className={Style.product_img} 
    src={filter} /> </button>
    <div className = {Style.dropdownContent}>
      <div className="h-10 pt-2 hover:cursor-pointer hover:bg-slate-100" onClick={()=>(setType("App"))}>Apps</div>
      <div className="h-10 pt-2 hover:cursor-pointer hover:bg-slate-100" onClick={()=>(setType("Dashboard"))}>Dashboards</div>
        </div>
  </div>

    </div>
    
      {/* <NavLink to="Product">
        {load ? (
          <ProductCard
            name="Expense Claim App"
            desc="Accelerator | Data science"
            logo="https://upload.wikimedia.org/wikipedia/commons/0/0c/Clash_app_logo.png"
            img={Banner1}
          />
        ) : (
          <ProductCardLoader />
        )}
      </NavLink> */}
      <div className={Style.cardDiv}>
      {load ? data.filter((data)=>data.AppType !== type).map((item) => {return (item.Type === "App" ? <ProductCard id={item.Id} url={item.AppUrl} name={item.appName} desc={item.AppType} logo={item.appLogo} img={item.AppCoverPic}/> :<DashboardCard id={item.Id} url={item.AppUrl} name={item.appName} desc={item.AppType} logo={item.appLogo} img={item.AppCoverPic}/>);}) :data.map((value)=> <ProductCardLoader />) }
      
      </div>
      
     {/* <ProductCardLoader /> */}
      {/* {load ? <ProductCard /> : <ProductCardLoader />} */}
   
    </div>
    </>
  );
}

export default Application;
