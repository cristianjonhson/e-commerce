// CartWidgetComponent.js
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const CartWidgetComponent = () => {
  const { getCount } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge-primary">{getCount()}</span>
    </div>
  );
};

export default CartWidgetComponent;
