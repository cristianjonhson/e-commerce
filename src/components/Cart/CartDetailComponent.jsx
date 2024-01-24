/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartDetailComponent = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Detalles del Carrito</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.productId}>
                <p>{`Producto: ${item.title}, Cantidad: ${item.quantity}, Precio: $${item.price * item.quantity}`}</p>
              </li>
            ))}
          </ul>
          <p>{`Total: $${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}`}</p>
        </div>
      )}
    </div>
  );
};

export default CartDetailComponent;
