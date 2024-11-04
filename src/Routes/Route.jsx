import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Error from "../components/Error";
import Home from "../pages/Home";
import Statistice from "../pages/Statistice";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import ProductsDetails from "../components/ProductsDetails";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/allProduct.json')
            },
            {
                path:"/statistics",
                element:<Statistice></Statistice>
            },

            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/details/:detailsId",
                element:<ProductsDetails></ProductsDetails>,
                loader:()=>fetch('/allProduct.json')
            }
           
        ]
        
    }

])
export default router