import "./style/layout.scss"
import HomePage from "./views/homepage/HomePage"
import { BrowserRouter, Routes, Route, Link, createBrowserRouter} from "react-router-dom";
import ListPage from "./views/listpage/ListPage";
import { RouterProvider } from "react-router";
import {Layout, AuthReq } from "./views/layout/layout";
import SinglePage from "./views/singlepage/singlepage";
import LoginPage from "./views/loginpage/loginpage";
import Profilepage from "./views/profilepage/profilepage";
import RegisterPage from "./views/registerpage/registerpage";

import EditProperties from "./views/editpropertiespage/editpropertiespage";
import AgencyPage from "./views/agencypage/agencypage";
import { listPropertyLoader, singlePropertyLoader } from "./lib/loaders.js";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Layout/>,
      children:[
        {
          path:"/", 
          element:<HomePage/>
        }, 
        {
          path:"/login", 
          element:<LoginPage/>
        },

        {
          path:"/register", 
          element:<RegisterPage/>
        }, 

      ]
    },
    {
      path:"/", 
      element:<AuthReq/>,
      children:[
        {
          path:"/profile", 
          element:<Profilepage/>
        },
        {
          path:"/list", 
          element:<ListPage/>,
          loader: listPropertyLoader
        }, 

        {
          path:"/edit-properties", 
          element:(
          <PrivateRoute
            element={<EditProperties/>}
            allowedRoles={["agent", "agency"]}
            />),
        }, 
        {
          path:"/agency-page", 
          element:<AgencyPage/>
        },
        {
          path:"/:id", 
          element:<SinglePage/>,
          loader: singlePropertyLoader
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App