import React, { useEffect, useState } from "react";
import Style from "./SideNavBar.module.css";
import {FiMoon,FiSun,FiMenu} from "react-icons/fi";
import logo1 from "../../Assets/Digiverz.png";
import logo2 from "../../Assets/Digiverz_B.png";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../../Redux/ThemeSlice";
import ExpandNavBar from "./ExpandNavBar";
import ShrinkNavBar from "./ShrinkNavBar";
function SideNavBar() {
  const [DrawerState, setDrawerState] = useState(false);
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  defineElement(lottie.loadAnimation);

  const LightColor = "primary:#ffffff";
  const DarkColor = "primary:#000000";

  return (
    <div>
      <div
        className={
          theme === "Light" ? Style.header_cont_Light : Style.header_cont
        }
      >

      <div className="flex">
        <div className="px-4 py-3" onClick={()=>setDrawerState(!DrawerState)}>
              <FiMenu
                className={theme === "Light" ? Style.icon_Light : Style.icon}
              />
        </div>
        <img
          src={theme === "Light" ? logo1 : logo2}
          alt="logo"
          width={150}
          height={50}
        />
        </div>

        <div
          className={
            theme === "Light" ? Style.input_cont_Light : Style.input_cont
          }
        >
          <div className="pt-[3px]">
            <lord-icon
              src="https://cdn.lordicon.com/xfftupfv.json"
              colors={theme === "Light" ? DarkColor : LightColor}
              trigger="morph"
            ></lord-icon>
          </div>
          <input
            placeholder="Search..."
            className={
              theme === "Light" ? Style.input_search_Light : Style.input_search
            }
          />{" "}
        </div>

        <div className="flex space-x-8">
          <div
            className={
              theme === "Light" ? Style.profile_icon_Light : Style.profile_icon
            }
            onClick={() => {
              dispatch(Toggle());
            }}
          >
            {theme === "Light" ? (
              <FiMoon
                className={theme === "Light" ? Style.icon_Light : Style.icon}
              />
            ) : (
              <FiSun
                className={theme === "Light" ? Style.icon_Light : Style.icon}
              />
            )}
          </div>
          <div className={theme === 'Light' ? Style.profile_Light : Style.profile} >
            <h6>HK</h6>
        </div>
          {/* <div>
            <a
              className={Style.signIn}
              href="Login"
            >
              Sign In
            </a>
          </div> */}
        </div>
      </div>

      {
        DrawerState ? <ExpandNavBar /> : <ShrinkNavBar/>
      }
      
    </div>
  );
}

export default SideNavBar;
