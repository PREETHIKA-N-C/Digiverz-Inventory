import React, { useEffect, useState } from "react";
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
  const [newdata, setNewdata] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => {
        setNewdata(data.message);
        setLoad(false);
      });
  }, []);

  if (theme === "Light") {
    document.body.style.background = "#fefeff";
  } else {
    document.body.style.background = "#121212";
  }
  return (
    <div className="grid grid-cols-3 grid-flow-row  pl-24 pt-20 pb-20 overflow-auto h-screen alfa">
      {load ? (
        <>
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
        </>
      ) : (
        <>
          {newdata.map((item) => {
            return (
              <div key={item.id} style={{ margin: "20px" }}>
                <NavLink to={`./Product/${item.id}`}>
                  <ProductCard
                    name={item.name}
                    desc={item.desc}
                    img={item.img}
                    logo={item.logo}
                  />
                </NavLink>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default VizHome;
