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
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
<Toaster />
<RouterProvider router={router} />
</>
);
