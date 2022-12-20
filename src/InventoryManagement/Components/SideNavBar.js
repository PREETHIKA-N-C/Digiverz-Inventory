
import React, { useEffect, useState } from "react";
import Style from "./SideNavBar.module.css";
import {
  FiHome,
  FiGrid,
  FiCompass,
  FiHelpCircle,
  FiSettings,
  FiSearch,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import logo1 from "../Assets/Digiverz.png";
import logo2 from "../Assets/Digiverz_B.png";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { Player } from "@lottiefiles/react-lottie-player";
import compass from "../Assets/compass.json";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Light, Dark, Toggle, ThemeState } from "../Redux/ThemeSlice";


function SideNavBar() {
  const [linkState, setLinkState] = useState("");
  const theme = useSelector(ThemeState);
  const dispatch = useDispatch();
  defineElement(lottie.loadAnimation);
 
    const LightColor = "primary:#ffffff"
    const DarkColor = "primary:#000000"
    const GrayColor ="#EEEEEE"

    // const [hideSideNavBar, sethideSideNavBar] = React.useState(true)
    // const onClick = () => sethideSideNavBar(false)

      return (
        <div>
        <div className={theme === 'Light' ? Style.header_cont_Light : Style.header_cont}>
        <img src={theme === 'Light' ? logo1 : logo2} alt="logo" width={150} height={50}/>
        <div className={theme === 'Light' ? Style.input_cont_Light : Style.input_cont}> 
        <div className='pt-[3px]'>
        {/* <FiSearch  className={Style.icon}/>  */}
        <lord-icon src="https://cdn.lordicon.com/xfftupfv.json" colors={theme === 'Light' ? DarkColor : LightColor} trigger="morph"></lord-icon>
       
        </div>  
        <input placeholder='Search...' className={theme === 'Light' ? Style.input_search_Light :  Style.input_search} /> </div>
       
       
        <div className='flex space-x-8'>
        <div className={theme === 'Light' ? Style.profile_icon_Light : Style.profile_icon} onClick={()=>{dispatch(Toggle())}}>
        {theme === 'Light' ? <FiMoon className={theme === 'Light' ? Style.icon_Light : Style.icon} /> : <FiSun className={theme === 'Light' ? Style.icon_Light : Style.icon} /> }
        </div>
        {/* <div className={theme === 'Light' ? Style.profile_Light : Style.profile} >
            <h6>HK</h6>
        </div> */}
        <div>
        <a className={Style.signIn}  href="Login" 
        // onClick={onClick}
        >Sign In</a>
        {/* { hideSideNavBar ? <SideNavBar/> : true } */}
        </div>

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
          <div
            className={theme === "Light" ? Style.profile_Light : Style.profile}
          >
            <h6>HK</h6>
          </div>
        </div>
      </div>
      <div
        className={theme === "Light" ? Style.container_Light : Style.container}
      >
        <div className={Style.top_cont}>
          <NavLink
            to="/"
            className={(state) => (state.isActive ? setLinkState("Home") : "")}
          >
            <div
              className={
                linkState === "Home" ? Style.icon_cont_active : Style.icon_cont
              }
            >
              {/* <FiHome className={Style.icon} /> */}
              <lord-icon
                src="https://cdn.lordicon.com/osuxyevn.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.text_2_Light : Style.text_2
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
                  ? Style.icon_cont_active
                  : Style.icon_cont
              }
            >
              {/* <FiGrid className={Style.icon} /> */}
              {/* <Player
            hover
            speed={3}
            src={grid}
            style={{ height: "30px", width: "35px",marginLeft:'2px' }}
          >
          </Player> */}
              <lord-icon
                src="https://cdn.lordicon.com/ynwbvguu.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.text_2_Light : Style.text_2
                }
              >
                App
              </h6>
            </div>
          </NavLink>

          {/* <NavLink to="/Explore" className={(state) => state.isActive ? setLinkState("Explore"):""}>
        <div className={linkState ==="Explore"? Style.icon_cont_active :Style.icon_cont } >
        <Player
            hover
            speed={1}
            src={compass}
            style={{ height: "30px", width: "35px",marginLeft:'2px' }}
          >
          </Player>
        <h6 className={Style.text_2}>Explore</h6>
        </div>  
        </NavLink> */}

          <NavLink
            to="/MarketPlaceHome"
            className={(state) =>
              state.isActive ? setLinkState("Market") : ""
            }
          >
            <div
              className={
                linkState === "Market"
                  ? Style.icon_cont_active
                  : Style.icon_cont
              }
            >
              {/* <FiGrid className={Style.icon} /> */}
              {/* <Player
            hover
            speed={3}
            src={grid}
            style={{ height: "30px", width: "35px",marginLeft:'2px' }}
          >
          </Player> */}
              <lord-icon
                src="https://cdn.lordicon.com/icxqolmx.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.text_2_Light : Style.text_2
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
                linkState === "Viz" ? Style.icon_cont_active : Style.icon_cont
              }
            >
              {/* <FiGrid className={Style.icon} /> */}
              {/* <Player
            hover
            speed={3}
            src={grid}
            style={{ height: "30px", width: "35px",marginLeft:'2px' }}
          >
          </Player> */}
              <lord-icon
                src="https://cdn.lordicon.com/eliwatfs.json"
                trigger="hover"
                colors={theme === "Light" ? DarkColor : LightColor}
                style={{ width: "23px", height: "23px", marginLeft: "7px" }}
              ></lord-icon>
              <h6
                className={
                  theme === "Light" ? Style.text_2_Light : Style.text_2
                }
              >
                Viz
              </h6>
            </div>
          </NavLink>
        </div>
        <div className={Style.bottom_cont}>
          <div className={Style.icon_cont}>
            {/* <FiHelpCircle className={Style.icon} /> */}
            <lord-icon
              src="https://cdn.lordicon.com/enzmygww.json"
              trigger="hover"
              colors={theme === "Light" ? DarkColor : LightColor}
              style={{ width: "23px", height: "23px", marginLeft: "7px" }}
            ></lord-icon>
            <h6
              className={theme === "Light" ? Style.text_2_Light : Style.text_2}
            >
              Help
            </h6>
          </div>
          <div className={Style.icon_cont}>
            {/* <FiSettings className={Style.icon} /> */}
            <lord-icon
              src="https://cdn.lordicon.com/hwuyodym.json"
              trigger="hover"
              colors={theme === "Light" ? DarkColor : LightColor}
              style={{ width: "23px", height: "23px", marginLeft: "7px" }}
            ></lord-icon>
            <h6
              className={theme === "Light" ? Style.text_2_Light : Style.text_2}
            >
              Manage
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SideNavBar;


