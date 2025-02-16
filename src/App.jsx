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
import AdminPage from "./views/adminpage/adminpage";
import EditProperties from "./views/editpropertiespage/editpropertiespage";
import AgencyPage from "./views/agencypage/agencypage";

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
          path:"/:id", 
          element:<SinglePage/>
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
          element:<ListPage/>
        }, 
        {
          path:"/admin-dashboard", 
          element:<AdminPage/>
        }, 
        {
          path:"/edit-properties", 
          element:<EditProperties/>
        }, 
        {
          path:"/agency-page", 
          element:<AgencyPage/>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App