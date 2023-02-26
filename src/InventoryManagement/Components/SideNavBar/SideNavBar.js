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
import AuthService from "../../Services/auth.service";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {setData ,SearchDataState} from '../../Redux/SearchDataSlice'

function SideNavBar() {
  const [input , setInput] = useState("")
  const [DrawerState, setDrawerState] = useState(false);
  const theme = useSelector(ThemeState);
  const data = useSelector(SearchDataState)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  defineElement(lottie.loadAnimation);

  const LightColor = "primary:#ffffff";
  const DarkColor = "primary:#000000";

  const logOut = () => {
    AuthService.logout();
  };

  const elasticSearch = async (e) =>{

    
    await axios.post("http://localhost:8081/search",{
        query:e
    }).then((response)=>{
      // console.log(response)
            console.log(response.data.hits)
            dispatch(setData(response.data.hits))
        console.log(data)
    })
    
}

  const onEnter = (e) => {
       if (e.key === 'Enter') {
        elasticSearch(input)
        navigate("/Search")
      }
  }

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
              trigger="click"
              onClick={()=>elasticSearch(input)}
            ></lord-icon>
          </div>
          <input
            placeholder="Search..."
            className={
              theme === "Light" ? Style.input_search_Light : Style.input_search
            }
            onChange={(e)=> setInput(e.target.value)}
            onKeyDown={onEnter}
            
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
            <div className={Style["popup-wrapper"]}>
          <Popup trigger={<button>
                HK
              </button>} 
     position="bottom right" contentStyle={{ width: '18%',
     textAlign:'center', height: '20%',boxShadow: '0 10px 20px rgba(0,0,0,0.2)',border: '1px solid rgba(0, 0, 0, 0.17)', boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'}} overlayStyle={{boxShadow: '0 10px 20px rgba(0,0,0,0.2)'}}
     closeOnDocumentClick>
      <h6>Sign me out?</h6>
      <a href="/" className={Style["Logout-pop-up"]} onClick={logOut}>
                Logout
              </a>
    </Popup>
    </div>
          
            
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
