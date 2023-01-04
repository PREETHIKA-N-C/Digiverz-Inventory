import React, {useState} from 'react'
import Style from './ExpandNavBar.module.css'
import { Light, Dark, Toggle, ThemeState } from "../../Redux/ThemeSlice";
import { defineElement } from "lord-icon-element";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import lottie from "lottie-web";

function ExpandNavBar() {
    const [linkState, setLinkState] = useState("");
    const theme = useSelector(ThemeState);
    const dispatch = useDispatch();
    defineElement(lottie.loadAnimation);
    const LightColor = "primary:#ffffff";
    const DarkColor = "primary:#000000";
  return (
    <div className={theme === "Light" ? Style.expand_cont_Light : Style.expand_cont}>
      <div className={Style.top_cont}>
          <NavLink
            to="/Home"
            className={(state) => (state.isActive ? setLinkState("Home") : "")}
          >
            <div
              className={
                linkState === "Home" ? Style.expand_icon_cont_active : Style.expand_icon_cont
              }
            >

              <lord-icon
                src="https://cdn.lordicon.com/osuxyevn.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.expand_text_2_Light : Style.expand_text_2
                }
              >
                Home
              </h6>
            </div>
          </NavLink>

          <NavLink
            to="/Application"
            className={(state) =>
              state.isActive ? setLinkState("Application") : ""
            }
          >
            <div
              className={
                linkState === "Application"
                  ? Style.expand_icon_cont_active
                  : Style.expand_icon_cont
              }
            >
              <lord-icon
                src="https://cdn.lordicon.com/ynwbvguu.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.expand_text_2_Light : Style.expand_text_2
                }
              >
                App
              </h6>
            </div>
          </NavLink>


          <NavLink
            to="/MarketPlaceHome"
            className={(state) =>
              state.isActive ? setLinkState("Market") : ""
            }
          >
            <div
              className={
                linkState === "Market"
                  ? Style.expand_icon_cont_active
                  : Style.expand_icon_cont
              }
            >
              <lord-icon
                src="https://cdn.lordicon.com/icxqolmx.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.expand_text_2_Light : Style.expand_text_2
                }
              >
                Market
              </h6>
            </div>
          </NavLink>

          <NavLink
            to="/VizHome"
            className={(state) => (state.isActive ? setLinkState("Viz") : "")}
          >
            <div
              className={
                linkState === "Viz" ? Style.expand_icon_cont_active : Style.expand_icon_cont
              }
            >
    
              <lord-icon
                src="https://cdn.lordicon.com/eliwatfs.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.expand_text_2_Light : Style.expand_text_2
                }
              >
                Viz
              </h6>
            </div>
          </NavLink>
        </div>
        <div className={Style.bottom_cont}>
          <div className={Style.expand_icon_cont}>
           
            <lord-icon
              src="https://cdn.lordicon.com/enzmygww.json"
              trigger="hover"
              colors={theme === "Light" ? DarkColor : LightColor}
              style={{ width: "23px", height: "23px", marginLeft: "7px" }}
            ></lord-icon>
            <h6
              className={theme === "Light" ? Style.expand_text_2_Light : Style.expand_text_2}
            >
              Help
            </h6>
          </div>
          <div className={Style.expand_icon_cont}>
           
            <lord-icon
              src="https://cdn.lordicon.com/hwuyodym.json"
              trigger="hover"
              colors={theme === "Light" ? DarkColor : LightColor}
              style={{ width: "23px", height: "23px", marginLeft: "7px" }}
            ></lord-icon>
            <h6
              className={theme === "Light" ? Style.expand_text_2_Light : Style.expand_text_2}
            >
              Manage
            </h6>
          </div>
        </div>
      </div>
  )
}

export default ExpandNavBar
