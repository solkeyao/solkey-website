import React from 'react'
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import QuemSomos from './pages/quem-somos';
import Equipe from './pages/equipe';
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home />,
  },

  {
    path: "/quem-somos",
    element:  <QuemSomos />,
  },

  {
    path: "/equipe",
    element:  <Equipe />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
);

