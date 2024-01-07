/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Home } from '../pages/Home';
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent';
import NavBarComponent from '../components/Navbar/NavBarComponent';
import ItemDetailContainerComponent from '../components/ItemDetailContainer/ItemDetailContainerComponent';

const MainRouter = ({ productos }) => {
  const greeting = "¡Bienvenido a nuestra tienda!";

  // Define the routes for MainRouter
  const routes = [
    { path: "/", text: "Inicio", element: <Home /> },
    { path: "/productos", text: "Productos", element: productos && <ItemListContainerComponent productos={productos} /> },
    { path: "/item/:id", element: <ItemDetailRoute /> },
  ];

  return (
    <BrowserRouter>
      <NavBarComponent greeting={greeting} routes={routes} />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

// New component to handle ItemDetailContainerComponent with valid id
const ItemDetailRoute = () => {
  const { id } = useParams();

  if (id === null || id === undefined) {
    // Handle the case where id is null or undefined
    console.log("No valid ID provided");
    return <div>No valid ID provided</div>;
  }

  return <ItemDetailContainerComponent id={id} />;
};

export default MainRouter;
