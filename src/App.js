import SideNavBar from './InventoryManagement/Components/SideNavBar';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './InventoryManagement/Pages/Home';
import Login from './InventoryManagement/Pages/Login';
import Application from './InventoryManagement/Pages/Application';
import Product from './InventoryManagement/Pages/Product';
import store from './store'
import { Provider } from 'react-redux'

function App() {

// const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

//   const data = {
//     isAuth,
//     setIsAuth,
//   };
 
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    {window.location.pathname !== "/Login" ? <SideNavBar /> : ""}
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Application" element={<Application/>}/>
    <Route path="Application/Product" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
