import SideNavBar from "./InventoryManagement/Components/SideNavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./InventoryManagement/Pages/Home";
import Application from "./InventoryManagement/Pages/Application";
import Product from "./InventoryManagement/Pages/Product";
import store from "./store";
import { Provider } from "react-redux";
import VizHome from "./Dataviz/Pages/VizHome";
import VizProduct from "./Dataviz/Pages/VizProduct";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <SideNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Application" element={<Application />} />
            <Route path="Application/Product" element={<Product />} />
            <Route path="VizHome" element={<VizHome />} />
            <Route path="VizHome/Product/:id" element={<VizProduct />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
