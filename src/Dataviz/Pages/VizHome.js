import React, { useEffect, useState } from "react";
import ProductCard from "../../InventoryManagement/Components/ProductCard";
import { NavLink } from "react-router-dom";
import Banner1 from "../../InventoryManagement/Assets/Banner.png";
import ProductCardLoader from "../../InventoryManagement/Components/ProductCardLoader";
import { useSelector, useDispatch } from "react-redux";
import "./VizHome.css";
import { BsThreeDots } from "react-icons/bs";
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
  const [all, setAll] = useState(true);

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
      <h1
        onClick={() => {
          setTog(false);
        }}
        style={
          theme !== "Light"
            ? {
                paddingTop: "80px",
                color: "white",
                marginLeft: "7%",
                fontSize: "50px",
              }
            : {
                paddingTop: "80px",
                color: "red",
                marginLeft: "7%",
                fontSize: "50px",
              }
        }
      >
        E<span style={{ color: "grey" }}>xplore ...</span>
      </h1>
      {/* <span
        style={{
          color: "grey",
          marginLeft: "35%",
          fontSize: "20px",
        }}
      >
        The Exquisite context for visually appealling dashboards
      </span> */}

      <div
        style={
          tog
            ? {
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                right: "50px",
                top: "90px",
              }
            : { display: "flex", flexDirection: "column" }
        }
      >
        {tog ? (
          <ul style={{ color: "white" }}>
            <li
              className={theme !== "Light" ? "li-toggle" : "li-toggle-light"}
              onClick={() => {
                setAll(true);
                setTog(false);
              }}
            >
              All
            </li>
            <li
              className={theme !== "Light" ? "li-toggle" : "li-toggle-light"}
              onClick={() => {
                setAll(false);
                setTog(false);
              }}
            >
              Department
            </li>
          </ul>
        ) : (
          ""
        )}
        <button>
          <BsThreeDots
            style={{
              color: "black",
              backgroundColor: "#abe6e3",
              borderRadius: "20px",
              padding: "5px",
              fontSize: "30px",
              marginLeft: "96.5%",
              marginTop: "-5%",
            }}
            onClick={() => setTog(!tog)}
          ></BsThreeDots>
        </button>

        {/* </button> */}
      </div>
      {load ? (
        <div className="grid grid-cols-3 grid-flow-row  pl-24 pt-20 pb-20">
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
        </div>
      ) : (
        <>
          {all ? (
            <div style={{ paddingTop: "25px" }}>
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  padding: "5px",
                  marginInline: "30px",
                  marginBottom: "25px",
                  position: "relative",
                  top: "55px",
                  left: "5%",
                  width: "90%",
                  borderRadius: "110px",
                }}
                className="bg-slate-700 text-lg"
              >
                Repository
              </h2>
              <div className="grid lg:grid-cols-3 xs:grid-cols-1 grid-flow-row  pl-32 pt-20 pb-20 ">
                {newdata.map((item) => {
                  return (
                    <div key={item.id} style={{ marginBottom: "40px" }}>
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
            <div className="d" style={{ paddingTop: "30px" }}>
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
                        top: "40px",
                        left: "5%",
                        width: "90%",
                        borderRadius: "110px",
                      }}
                      className="bg-slate-700 text-lg"
                    >
                      {item.group}
                    </h2>
                    <div className="grid lg:grid-cols-3 xs:grid-cols-1 grid-flow-row  pl-24 pt-10 pb-20 mt-12 -mb-16 m-2">
                      {newdata
                        .filter((item2) => {
                          return item2.desc === item.group;
                        })
                        .map((item) => {
                          return (
                            <div key={item.id} style={{ marginBottom: "30px" }}>
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
