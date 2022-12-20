import React, { useState } from "react";
import ProductCard from "../Components/ProductCard.js";
import ProductCardLoader from "../Components/ProductCardLoader.js";
import Banner1 from "../Assets/Banner.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../Redux/ThemeSlice";
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
    <div class="grid grid-cols-3 grid-flow-row  pl-24 pt-20 pb-20">
      <NavLink to="Product">
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
      </NavLink>
      {load ? <ProductCard /> : <ProductCardLoader />}
      {load ? <ProductCard /> : <ProductCardLoader />}
    </div>
  );
}

export default Application;
