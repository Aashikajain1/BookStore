import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './views/Home/Home.js'
import Login from "./views/Login/Login.js"
import SignUp from "./views/SignUp/SignUp.js"
import { Toaster } from 'react-hot-toast';
import Shop from './views/Shop/Shop.js';
import Contact from './views/Contact/Contact.js';
import About from './views/About/About.js';
import BuyNow from './views/Buy/Buy.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/books",
    element: <Shop/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path:'/contact/:id',
    element:<Contact/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/buy/:id',
    element:<BuyNow/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
<Toaster />
<RouterProvider router={router} />
</>
);
