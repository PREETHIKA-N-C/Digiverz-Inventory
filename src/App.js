import SideNavBar from "./InventoryManagement/Components/SideNavBar/SideNavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./InventoryManagement/Pages/Home";
import Application from "./InventoryManagement/Pages/Application";
import Search from "./InventoryManagement/Pages/Search";
import Product from "./InventoryManagement/Pages/Product";
import store from "./store";
import Login from "./InventoryManagement/Pages/Login";
import { Provider } from "react-redux";
import VizHome from "./Dataviz/Pages/VizHome";
import VizProduct from "./Dataviz/Pages/VizProduct";
import MarketPlaceHome from "./MarketPlace/Pages/MarketPlaceHome";
import Pipeline from "./MarketPlace/Pages/Pipeline";
import VizAdmin from "./Dataviz/Pages/VizAdmin";
import AppInfoUpload from "./InventoryManagement/Pages/AppInfoUpload";
import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [navBarState, setNavBarState] = useState(false)

  useEffect(()=>{
    window.location.pathname === "/" ? setNavBarState(false) : setNavBarState(true) 
    console.log(window.location.pathname)
    console.log(navBarState)
  })
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  //   const data = {
  //     isAuth,
  //     setIsAuth,
  //   };
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* {navBarState ? <SideNavBar /> : "" } */}
        {/* {window.location.pathname === "/AppInfoUpload" || window.location.pathname === "/"  ? "" : <SideNavBar />} */}
        {/* {navBarState ? <SideNavBar /> : ""} */}
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <SideNavBar/> */}
          <Route path="Home" element={<Home />} />
          <Route path="AppInfoUpload" element={<AppInfoUpload />} />
          <Route path="Application" element={<Application />} />
          <Route path="Search" element={<Search />} />
          <Route path="Application/Product/:id" element={<Product />} />
          <Route path="VizHome" element={<VizHome />} />
          <Route path="VizHome/Product/:id" element={<VizProduct />} />
          <Route path="VizHome/Admin" element={<VizAdmin />} />

          <Route path="MarketPlaceHome" element={<MarketPlaceHome />} />
          <Route path="MarketPlaceHome/Pipeline/:id" element={<Pipeline />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
