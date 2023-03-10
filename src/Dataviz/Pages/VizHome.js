import React, { useEffect, useState } from "react";
import ProductCard from "../../InventoryManagement/Components/ProductCard";
import { NavLink } from "react-router-dom";
import Banner1 from "../../InventoryManagement/Assets/Banner.png";
import ProductCardLoader from "../../InventoryManagement/Components/ProductCardLoader";
import { useSelector, useDispatch } from "react-redux";
import "./VizHome.css";
import { BsThreeDots, BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
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
        className="viz-title"
      >
        {/* <span
          style={
            theme !== "Light"
              ? { color: "grey", fontSize: "30px" }
              : { color: "black", fontSize: "30px" }
          }
        >
          &lt;&lt;
        </span>{" "} */}
        D
        <span
          style={theme !== "Light" ? { color: "grey" } : { color: "black" }}
        >
          ata Viz{" "}
        </span>
        {/* <span
          style={
            theme !== "Light"
              ? { color: "grey", fontSize: "30px" }
              : { color: "black", fontSize: "30px" }
          }
        >
          &gt;&gt;
        </span>{" "} */}
        <span
          style={{
            color: "grey",
            fontSize: "11px",
            display: "block",
            marginTop: "10px",
          }}
        >
          The Exquisite context for visually appealling dashboards
        </span>
      </h1>

      <div className={tog ? "options-container-2" : "options-container-1"}>
        {tog ? (
          <ul style={{ color: "white", marginRight: "20px" }}>
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
              marginRight: "10px",
            }}
            onClick={() => setTog(!tog)}
          ></BsThreeDots>
        </button>
        <button>
          <NavLink to={"./admin"}>
            <BsFillFileEarmarkArrowUpFill
              style={{
                color: "black",
                backgroundColor: "#abe6e3",
                borderRadius: "20px",
                padding: "5px",
                fontSize: "30px",
              }}
            ></BsFillFileEarmarkArrowUpFill>
          </NavLink>
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
            <div style={{ paddingTop: "40px" }}>
              {/* <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  padding: "5px",
                  marginInline: "30px",
                  marginBottom: "5px",
                  position: "relative",
                  top: "40px",
                  left: "5%",
                  width: "90%",
                  borderRadius: "110px",
                }}
                className="bg-slate-700 text-lg"
              >
                Repository
              </h2> */}
              <div className="grid lg:grid-cols-3 xs:grid-cols-1 grid-flow-row  pl-32 pt-18 pb-20 -ml-4 prod-container">
                {newdata.map((item) => {
                  return (
                    <div key={item["_id"]} style={{ marginBottom: "40px" }}>
                      <NavLink to={`./Product/${item["_id"]}`}>
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
            <div className="d" style={{ paddingTop: "5px" }}>
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
                    <div className="grid lg:grid-cols-3 xs:grid-cols-1 grid-flow-row  pl-24 pt-20 pb-20 mt-2 -mb-16 m-2">
                      {newdata
                        .filter((item2) => {
                          return item2.desc === item.group;
                        })
                        .map((item) => {
                          return (
                            <div
                              key={item["_id"]}
                              style={{ marginBottom: "30px" }}
                            >
                              <NavLink to={`./Product/${item["_id"]}`}>
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
