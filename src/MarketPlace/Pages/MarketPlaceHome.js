import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PipelineCard from '../Components/PipelineCard';
import PipelineCardLoader from '../Components/PipelineCardLoader';
import { BsThreeDots } from "react-icons/bs";
import "./MarketPlaceHome.css";
import {
  Light,
  Dark,
  Toggle,
  ThemeState,
} from "../../InventoryManagement/Redux/ThemeSlice";

import data from '../DummyData/Dummy'

function MarketPlaceHome({desc}) {
  const [tog, setTog] = useState(false);
  const [group, setGroup] = useState([]);
  const [all, setAll] = useState(true);
  const [newdata, setNewdata] = useState([]);


  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  if (theme === "Light") {
    document.body.style.background = "#fefeff";
  } else {
    document.body.style.background = "#121212";
  }
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);
    return (
      <div>


              <h1
        onClick={() => {
          setTog(false);
        }}
        style={
          theme !== "Light"
            ? {
                paddingTop: "5%",
                color: "orange",
                paddingLeft: "7%",
                paddingRight: "11%",

                paddingBottom: "1%",
                marginLeft: "30%",
                // borderBottom: "3px dashed grey",
                borderRadius: 20,
                fontSize: "50px",
                fontWeight: "500",
                backgroundColor: "inherit",
                textAlign: "center",
                maxWidth: "fit-content",
              }
            : {
                paddingTop: "5%",
                color: "orange",
                paddingLeft: "7%",
                paddingRight: "11%",

                paddingBottom: "1%",
                marginLeft: "30%",
                // borderBottom: "3px dashed grey",
                borderRadius: 20,
                fontSize: "50px",
                fontWeight: "500",
                backgroundColor: "inherit",
                textAlign: "center",
                maxWidth: "fit-content",
              }
        }
      >
        <span
          style={
            theme !== "Light"
              ? { color: "grey", fontSize: "30px" }
              : { color: "black", fontSize: "30px" }
          }
        >
          {/* &lt;&lt; */}
        </span>
        Data
        <span
          style={theme !== "Light" ? { color: "grey" } : { color: "black" }}
        >
          MarketPlace{" "}
        </span>
        <span
          style={
            theme !== "Light"
              ? { color: "grey", fontSize: "30px" }
              : { color: "black", fontSize: "30px" }
          }
        >
          {/* &gt;&gt; */}
        </span>{" "}
        <span
          style={{
            color: "grey",
            fontSize: "11px",
            display: "block",
            marginTop: "10px",
          }}
        >
          You can get Desired Data sources in this MarketPlace
        </span>
      </h1>
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
      </div>

      {load ? (
        <div className="grid grid-cols-3 grid-flow-row  pl-24 pt-20 pb-20">
          <PipelineCardLoader />
          <PipelineCardLoader />
          <PipelineCardLoader />
        </div>
      ) : (
        <>
          {all ? (
            <div style={{ paddingTop: "10px" }}>
              <h2
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
                Data Sources
              </h2>
              <div className="grid lg:grid-cols-3 xs:grid-cols-1 grid-flow-row  pl-32 pt-20 pb-20 -ml-4 ">
                {data.map((item) => {
                  return (
                    <div key={item.id} style={{ marginBottom: "40px" }}>
                      {/* <NavLink to={`./Pipeline/${desc}`}> */}
                        <PipelineCard
                            name={item.id}
                            desc={item.name}
                            img={item.imgUrl}
                            logo={item.summary}
                        />
                      {/* </NavLink> */}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="d" style={{ paddingTop: "10px" }}>
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
                    <div className="grid lg:grid-cols-3 xs:grid-cols-1 grid-flow-row  pl-24 pt-20 pb-20 mt-12 -mb-16 m-2">
                      {newdata
                        .filter((item2) => {
                          return item2.desc === item.group;
                        })
                        .map((item) => {
                          return (
                            <div key={item.id} style={{ marginBottom: "30px" }}>
                              {/* <NavLink to={`./Pipeline/${desc}`}> */}
                                <PipelineCard
                                    name={item.id}
                                    desc={item.name}
                                    img={item.imgUrl}
                                    logo={item.summary}
                                />
                              {/* </NavLink> */}
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




















  //  -----------------------------------------------------------------------------------------------------------
    //   <div>
    //   <div><h1 className='text-center text-xl'>Data Market place</h1></div>
    //   <div className="grid grid-cols-3 grid-flow-row  pl-24 pt-20 pb-20 overflow-auto h-screen alfa">
        
    //   {data.map((item) => {
    //     return (
    //       <div style={{ margin: "20px" }}>
    //           {load ? (
    //             <PipelineCard
    //               name={item.id}
    //               desc={item.name}
    //               img={item.imgUrl}
    //               logo={item.summary}
    //             />
    //           ) : (
    //             <PipelineCardLoader />
    //           )}
    //       </div>
    //     );
    //   })}
    // </div>
    // </div>

    // --------------------------------------------------------------------------------------------------------
    )
}

export default MarketPlaceHome


