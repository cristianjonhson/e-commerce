/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Card from "react-bootstrap/Card";
import { UseGetProductsById } from '../../hooks/useProducts';

// eslint-disable-next-line react/prop-types
const ItemDetailContainerComponent = ({ id }) => {
  const { productosbyId, loading } = UseGetProductsById(id);

  // Check if productosbyId is defined before rendering
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if productosbyId is null or undefined
  if (!productosbyId) {
    return <div>No product found for ID: {id}</div>;
  }

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px", width: "18rem" }}>
      <Card key={productosbyId.id} style={{ width: "100%", height: "100%" }}>
        <Card.Img
          variant="top"
          src={productosbyId.thumbnail}
          style={{ objectFit: "cover", height: "50%" }}
        />
        <Card.Body>
          <Card.Title>{productosbyId.title}</Card.Title>
          <Card.Text>{productosbyId.description}</Card.Text>
          <Card.Text>Precio: ${productosbyId.price} Stock: {productosbyId.stock}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetailContainerComponent;
