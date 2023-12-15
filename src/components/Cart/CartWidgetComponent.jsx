// CartWidget.js

// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const cartItemCount = 15;

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge-primary">{cartItemCount}</span>
    </div>
  );
};

export default CartWidgetComponent;
