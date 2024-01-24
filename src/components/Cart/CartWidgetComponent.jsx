// CartWidgetComponent.js
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetComponent = () => {
  const { getCount } = useContext(CartContext);

  return (
    // Utiliza Link para redirigir a la vista de detalles del carrito
    <Link to="/cart" className="text-decoration-none">
      <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge-primary">{getCount()}</span>
      </div>
    </Link>
  );
};

export default CartWidgetComponent;
