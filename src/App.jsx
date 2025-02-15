
import "./style/layout.scss"
import HomePage from "./views/homepage/HomePage"
import { BrowserRouter, Routes, Route, Link, createBrowserRouter} from "react-router-dom";
import ListPage from "./views/listpage/ListPage";
import { RouterProvider } from "react-router";
import Layout from "./views/layout/layout";
import SinglePage from "./views/singlepage/singlepage";
import LoginPage from "./views/login/loginpage";
import Profilepage from "./views/profilepage/profilepage";
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
          path:"/list", 
          element:<ListPage/>
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
          path:"/profile", 
          element:<Profilepage/>
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App