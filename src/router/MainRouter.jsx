/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Home } from '../pages/Home';
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent';
import NavBarComponent from '../components/Navbar/NavBarComponent';
import ItemDetailContainerComponent from '../components/ItemDetailContainer/ItemDetailContainerComponent';
import Category from '../pages/Category';
import CartDetailComponent from '../components/Cart/CartDetailComponent';
import ProductFormComponent from '../components/ProductForm/addProductFormComponent';

const MainRouter = ({ productos }) => {
  const greeting = "¡Bienvenido a nuestra tienda!";

  // Define las rutas para MainRouter
  const routes = [
    { path: "/", text: "Inicio", element: <Home /> },
    { path: "/productos", text: "Productos", element: productos && <ItemListContainerComponent productos={productos} /> },
    { path: "/item/:id", element: <ItemDetailRoute /> },
    { path: "/category/:id", element: productos && <Category productos={productos} /> },
    { path: "/cart", element: <CartDetailComponent /> },
    { path: "/crear-producto", text: "Crear Producto", element: <ProductFormComponent /> }, // Nueva ruta para el formulario de creación de productos
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

const ItemDetailRoute = () => {
  const { id } = useParams();

  if (!id) {
    // Muestra un mensaje cuando id es null o undefined
    return <div>No se proporcionó un ID válido.</div>;
  }

  return <ItemDetailContainerComponent id={id} />;
};

export default MainRouter;
