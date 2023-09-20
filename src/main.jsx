import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Users from './Components/Users';

const router =createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>
    ,
    children:[
      {
       path:"/about",
       element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
   
      },
      {
        path:"/users",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
