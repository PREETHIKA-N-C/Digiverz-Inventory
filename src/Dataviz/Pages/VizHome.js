import React, { useState } from "react";
import ProductCard from "../../InventoryManagement/Components/ProductCard";
import { NavLink } from "react-router-dom";
import Banner1 from "../../InventoryManagement/Assets/Banner.png";
import ProductCardLoader from "../../InventoryManagement/Components/ProductCardLoader";
import { useSelector, useDispatch } from "react-redux";
import {
  Light,
  Dark,
  Toggle,
  ThemeState,
} from "../../InventoryManagement/Redux/ThemeSlice";

import data from "../utils/data";
const VizHome = () => {
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
    <div className="grid grid-cols-3 grid-flow-row  pl-24 pt-20 pb-20 overflow-auto h-screen alfa">
      {data.map((item) => {
        return (
          <div style={{ margin: "20px" }}>
            <NavLink to="Product">
              {load ? (
                <ProductCard
                  name={item.name}
                  desc={item.desc}
                  img={item.img}
                  logo={item.logo}
                />
              ) : (
                <ProductCardLoader />
              )}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default VizHome;
