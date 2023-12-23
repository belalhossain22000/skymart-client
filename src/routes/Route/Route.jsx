import { createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";
import Registration from "../../pages/Registration/Registration";
import Login from "../../pages/Login/Login";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import Auth from "../../components/Auth/Auth";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/product",
            element:<Product/>
        },
        {
            path:"/product-details",
            element:<ProductDetails/>
        }
    ]
    
  },
  {
    path:"registration",
    element:<Registration/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"auth",
    element:<Auth/>
  }

]);
