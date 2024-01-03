/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// MainRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent';
import NavBarComponent from '../components/Navbar/NavBarComponent';

const MainRouter = ({ productos }) => {
  const greeting = "¡Bienvenido a nuestra tienda!";

  // Define the routes for MainRouter
  const routes = [
    { path: "/", text: "Inicio", element: <Home /> },
    { path: "/productos", text: "Productos", element: productos && <ItemListContainerComponent productos={productos} /> },
    
  ];

  return (
    <BrowserRouter>
      <NavBarComponent greeting={greeting} routes={routes} />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;


