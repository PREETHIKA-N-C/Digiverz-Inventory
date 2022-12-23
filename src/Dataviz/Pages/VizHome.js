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
  const [group, setGroup] = useState([]);
  const [load, setLoad] = useState(true);
  const [tog, setTog] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => {
        setNewdata(data.message);
        fetch("http://localhost:8000/viz/group")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setGroup(data.message);
            setLoad(false);
          });
      });
  }, []);

  if (theme === "Light") {
    document.body.style.background = "#fefeff";
  } else {
    document.body.style.background = "#121212";
  }
  return (
    <div>
      <div>
        <button
          style={{
            position: "absolute",
            top: "100px",
            left: "100px",
            backgroundColor: "white",
          }}
          onClick={() => setTog(!tog)}
        >
          Department
        </button>
      </div>
      {load ? (
        <div className="grid grid-cols-3 grid-flow-row  pl-24 pt-20 pb-20">
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
        </div>
      ) : (
        <>
          {tog ? (
            <div style={{ paddingTop: "120px" }}>
              <div className="grid lg:grid-cols-3 xs:grid-cols-1 grid-flow-row  pl-24 pt-20 pb-20 ">
                {newdata.map((item) => {
                  return (
                    <div key={item.id} style={{ marginBottom: "15px" }}>
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
              </div>
            </div>
          ) : (
            <div className="d" style={{ paddingTop: "120px" }}>
              {group.map((item) => {
                return (
                  <div key={item.id}>
                    <h2
                      style={{
                        color: "white",
                        textAlign: "center",
                        padding: "5px",
                        marginInline: "30px",
                        position: "relative",
                        top: "80px",
                        left: "5%",
                        width: "90%",
                        borderRadius: "110px",
                      }}
                      className="bg-slate-700 text-lg"
                    >
                      {item.group}
                    </h2>
                    <div className="grid lg:grid-cols-3 xs:grid-cols-1 grid-flow-row  pl-24 pt-20 pb-20 mt-12 -mb-16 m-2">
                      {newdata
                        .filter((item2) => {
                          return item2.desc === item.group;
                        })
                        .map((item) => {
                          return (
                            <div key={item.id} style={{ marginBottom: "15px" }}>
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
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VizHome;
