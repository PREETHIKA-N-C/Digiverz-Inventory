import React, {useState} from 'react'
import Style from './ExpandNavBar.module.css'
import { Light, Dark, Toggle, ThemeState } from "../../Redux/ThemeSlice";
import { NavbarState , setNavState } from '../../Redux/NavbarSlice'
import { defineElement } from "lord-icon-element";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import lottie from "lottie-web";

function ExpandNavBar() {
    const theme = useSelector(ThemeState);
    const linkState = useSelector(NavbarState);
    const dispatch = useDispatch();
    defineElement(lottie.loadAnimation);
    const LightColor = "primary:#ffffff";
    const DarkColor = "primary:#000000";
  return (
    <div className={theme === "Light" ? Style.expand_cont_Light : Style.expand_cont}>
      <div className={Style.top_cont}>
          {/* <NavLink
            to="/Home"
            className={(state) => (state.isActive ? dispatch(setNavState("Home")) : "")}
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
          </NavLink> */}

          <NavLink
            to="/Application"
            className={(state) =>
              state.isActive ? dispatch(setNavState("Application")) : ""
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


          {/* <NavLink
            to="/Search"
            className={(state) =>
              state.isActive ? dispatch(setNavState("Search")): ""
            }
          >
            <div
              className={
                linkState === "Search"
                  ? Style.expand_icon_cont_active
                  : Style.expand_icon_cont
              }
            >
              <lord-icon
                src="https://cdn.lordicon.com/xfftupfv.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.expand_text_2_Light : Style.expand_text_2
                }
              >
                Search
              </h6>
            </div>
          </NavLink> */}

          {/* <NavLink
            to="/VizHome"
            className={(state) => (state.isActive ? dispatch(setNavState("Viz")) : "")}
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
                Vizualization
              </h6>
            </div>
          </NavLink> */}
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
