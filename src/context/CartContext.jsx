/* eslint-disable react/prop-types */
// CartContext.js
import { createContext, useState, useContext } from "react";

// Crear el contexto de carrito
export const CartContext = createContext();

// Proveedor del contexto de carrito que contiene el estado y las funciones
export const CartProvider = ({ children }) => {
  // Estado para almacenar las cantidades de productos
  const [quantities, setQuantities] = useState({});

  // Función para incrementar la cantidad de un producto en el carrito
  const incrementCount = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  // Función para decrementar la cantidad de un producto en el carrito
  const decrementCount = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  // Función para obtener la cantidad de un producto en el carrito
  const getCount = (productId) => quantities[productId] || 0;

  // Proporcionar el contexto con las funciones y el estado
  return (
    <CartContext.Provider value={{ getCount, incrementCount, decrementCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de carrito
export const useCart = () => {
  return useContext(CartContext);
};
