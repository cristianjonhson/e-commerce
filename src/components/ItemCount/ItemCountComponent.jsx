/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// ItemCount.jsx
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCountComponent = ({ productId, onQuantityChange, incrementCount }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="d-flex align-items-center">
      <Button
        variant="primary"
        size="sm"
        style={{ marginLeft: '10px' }}
        onClick={() => {
          incrementCount();
          // Puedes agregar aquí la lógica específica para agregar al carrito
        }}
      >
        Agregar
      </Button>
    </div>
  );
};

export default ItemCountComponent;
