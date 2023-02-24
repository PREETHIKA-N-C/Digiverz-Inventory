import React, { useState } from "react";
import ProductCard from "../Components/ProductCard.js";
import Filter from "../Components/Filter.js";
import ProductCardLoader from "../Components/ProductCardLoader.js";
import Style from '../Components/Filter.module.css'
import Banner1 from "../Assets/Banner.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../Redux/ThemeSlice";
import data from '../ApplicationData/data.js';
function Application() {
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  if (theme === "Light") {
    document.body.style.background = "#fefeff";
  } else {
    document.body.style.background = "#121212";
  }
  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 3000);
  return (
    <>
    <div className={Style.flexWrap}>
      <div className={Style.filterDiv}>
    <Filter/>
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
      {data.map((item) => {
                  return (
                    <div key={item["Id"]}>
                    
                      <NavLink to={`./Product/${item["Id"]}`}>
                      
                      <ProductCard name={item.appName} desc={item.AppType} logo={item.appLogo} img={item.AppCoverPic}/>
                        
                      </NavLink>
                      </div>
                    
                  );
                })}
                </div>
      
     {/* : <ProductCardLoader /> */}
      {/* {load ? <ProductCard /> : <ProductCardLoader />} */}
   
    </div>
    </>
  );
}

export default Application;
