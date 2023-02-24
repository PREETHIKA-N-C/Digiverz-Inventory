import React, {useState} from 'react'
import Style from './ShrinkNavBar.module.css'
import { ThemeState } from "../../Redux/ThemeSlice";
import { NavbarState , setNavState } from '../../Redux/NavbarSlice'
import { defineElement } from "lord-icon-element";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import lottie from "lottie-web";


function ShrinkNavBar() {
    const theme = useSelector(ThemeState);
    const linkState = useSelector(NavbarState);
    const dispatch = useDispatch();
    defineElement(lottie.loadAnimation);
    const LightColor = "primary:#ffffff";
    const DarkColor = "primary:#000000";
  return (
    <div
        className={theme === "Light" ? Style.container_Light : Style.container}
      >
        <div className={Style.top_cont}>
          {/* <NavLink
            to="/Home"
            className={(state) => (state.isActive ? dispatch(setNavState("Home")) : "")}
          >
            <div
              className={
                linkState === "Home" ? Style.icon_cont_active : Style.icon_cont
              }
            >

              <lord-icon
                src="https://cdn.lordicon.com/osuxyevn.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
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
                  ? Style.icon_cont_active
                  : Style.icon_cont
              }
            >
              <lord-icon
                src="https://cdn.lordicon.com/ynwbvguu.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
            </div>
          </NavLink>
          <NavLink
            to="/Search"
            className={(state) =>
              state.isActive ? dispatch(setNavState("Search")) : ""
            }
          >
            <div
              className={
                linkState === "Search"
                  ? Style.icon_cont_active
                  : Style.icon_cont
              }
            >
              <lord-icon
                src="https://cdn.lordicon.com/icxqolmx.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
            </div>
          </NavLink>

          {/* <NavLink
            to="/MarketPlaceHome"
            className={(state) =>
              state.isActive ? dispatch(setNavState("Market")) : ""
            }
          >
            <div
              className={
                linkState === "Market"
                  ? Style.icon_cont_active
                  : Style.icon_cont
              }
            >
              <lord-icon
                src="https://cdn.lordicon.com/icxqolmx.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
            </div>
          </NavLink> */}

          {/* <NavLink
            to="/VizHome"
            className={(state) => (state.isActive ? dispatch(setNavState("Viz")) : "")}
          >
            <div
              className={
                linkState === "Viz" ? Style.icon_cont_active : Style.icon_cont
              }
            >
    
              <lord-icon
                src="https://cdn.lordicon.com/eliwatfs.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
            </div>
          </NavLink> */}
        </div>
        <div className={Style.bottom_cont}>
          <div className={Style.icon_cont}>
           
            <lord-icon
              src="https://cdn.lordicon.com/enzmygww.json"
              trigger="hover"
              colors={theme === "Light" ? DarkColor : LightColor}
              style={{ width: "23px", height: "23px", marginLeft: "7px" }}
            ></lord-icon>
           
          </div>
          <div className={Style.icon_cont}>
           
            <lord-icon
              src="https://cdn.lordicon.com/hwuyodym.json"
              trigger="hover"
              colors={theme === "Light" ? DarkColor : LightColor}
              style={{ width: "23px", height: "23px", marginLeft: "7px" }}
            ></lord-icon>
            
          </div>
        </div>
      </div>
  )
}

export default ShrinkNavBar
