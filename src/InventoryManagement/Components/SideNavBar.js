import React, { useEffect, useState } from 'react'
import Style from './SideNavBar.module.css'
import { FiHome,FiGrid,FiCompass,FiHelpCircle,FiSettings,FiSearch } from "react-icons/fi";
import logo2 from '../Assets/Digiverz_B.png'
import lottie from 'lottie-web';
import { defineElement} from 'lord-icon-element';
import { Player} from "@lottiefiles/react-lottie-player";
import compass from '../Assets/compass.json'
import {NavLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Light, Dark , Toggle, ThemeState } from '../Redux/ThemeSlice'
function SideNavBar() {
    const [linkState,setLinkState] = useState("")
    const theme = useSelector(ThemeState)
    const dispatch = useDispatch()
    defineElement(lottie.loadAnimation);
      return (
        <div>
        <div className={theme === 'Light' ? Style.header_Light_cont : Style.header_cont}>
        <img src={logo2} alt="logo" width={150} height={50}/>
        <div className='border-[1px] rounded-[10px] bg-[#121212] border-[#2F363D] w-[600px] h-[40px] mt-[4px] flex px-4'> 
        <div className='pt-[3px]'>
        {/* <FiSearch  className={Style.icon}/>  */}
        <lord-icon src="https://cdn.lordicon.com/xfftupfv.json" colors="primary:#ffffff" trigger="morph"></lord-icon>
       
        </div>  
        <input placeholder='Search...' style={{fontFamily:"'Oxygen', sans-serif"}} className='outline-none h-[100%] w-[100%] bg-[#121212] ml-2 text-white text-xl'/> </div>
        <div className={Style.profile} >
            <h6>HK</h6>
        </div>
        {/* <div className={Style.profile}>
          <button className={Style.profile} onClick={()=>{dispatch(Toggle())}}> {theme} </button>
        </div> */}
        </div>
        <div className={Style.container}>
        <div className={Style.top_cont}>
          <NavLink to="/"  className={(state) => state.isActive ? setLinkState("Home"):""}> 
        <div className={linkState ==="Home"? Style.icon_cont_active :Style.icon_cont } >
        {/* <FiHome className={Style.icon} /> */}
        <lord-icon
        src="https://cdn.lordicon.com/osuxyevn.json"
        trigger="hover"
        colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}>
    </lord-icon>
        <h6 className={Style.text_2}>Home</h6>
        </div>
        </NavLink>
        <NavLink to="/Application" className={(state) => state.isActive ? setLinkState("Application"):""}>
        <div className={linkState ==="Application"? Style.icon_cont_active :Style.icon_cont } >
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
        colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}></lord-icon>
        <h6 className={Style.text_2}>App</h6>
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
    
    
        <NavLink to="/MarketPlaceHome" className={(state) => state.isActive ? setLinkState("Market"):""}>
        <div className={linkState ==="Market"? Style.icon_cont_active :Style.icon_cont } >
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
        colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}></lord-icon>
        <h6 className={Style.text_2}>Market</h6>
        </div>
        </NavLink>
       
        </div>
        <div className={Style.bottom_cont}>
        <div className={Style.icon_cont}>
        {/* <FiHelpCircle className={Style.icon} /> */}
        <lord-icon
        src="https://cdn.lordicon.com/enzmygww.json"
        trigger="hover"
        colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}></lord-icon>
        <h6 className={Style.text_2}>Help</h6>
        </div>
        <div className={Style.icon_cont}>
        {/* <FiSettings className={Style.icon} /> */}
        <lord-icon
        src="https://cdn.lordicon.com/hwuyodym.json"
        trigger="hover"
        colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}></lord-icon>
        <h6 className={Style.text_2}>Manage</h6>
        </div>
        </div>
        </div>
        </div>
      )
}

export default SideNavBar
