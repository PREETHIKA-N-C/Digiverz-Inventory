import SideNavBar from "./InventoryManagement/Components/SideNavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./InventoryManagement/Pages/Home";
import Application from "./InventoryManagement/Pages/Application";
import Product from "./InventoryManagement/Pages/Product";
import store from "./store";
import Login from "./InventoryManagement/Pages/Login";
import { Provider } from "react-redux";
import VizHome from "./Dataviz/Pages/VizHome";
import VizProduct from "./Dataviz/Pages/VizProduct";
import MarketPlaceHome from "./MarketPlace/Pages/MarketPlaceHome";
import Pipeline from "./MarketPlace/Pages/Pipeline";
import AppInfoUpload from "./InventoryManagement/Pages/AppInfoUpload";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  //   const data = {
  //     isAuth,
  //     setIsAuth,
  //   };
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* {window.location.pathname !== "/Login" ? <SideNavBar /> : ""} */}
        {window.location.pathname == "/AppInfoUpload" || window.location.pathname == "/"  ? "" : <SideNavBar />}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<Home />} />
          <Route path="AppInfoUpload" element={<AppInfoUpload />} />
          <Route path="Application" element={<Application />} />
          <Route path="Application/Product" element={<Product />} />
          <Route path="VizHome" element={<VizHome />} />
          <Route path="VizHome/Product/:id" element={<VizProduct />} />
          <Route path="MarketPlaceHome" element={<MarketPlaceHome />} />
          <Route path="MarketPlaceHome/Pipeline/:id" element={<Pipeline />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
