/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { UseGetProductsById } from '../../hooks/useProducts';

const ItemDetailContainerComponent = ({ id }) => {
  const { productoById, loading } = UseGetProductsById(id);

  // Check if loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if productoById is not falsy (null or undefined)
  if (!productoById) {
    return <div>No product found for ID: {id}</div>;
  }

  return (
    <div style={{ marginTop: '20px', marginBottom: '20px', width: '18rem' }}>
      <Card key={productoById.id} style={{ width: '100%', height: '100%' }}>
        <Card.Img
          variant="top"
          src={productoById.thumbnail}
          style={{ objectFit: 'cover', height: '50%' }}
        />
        <Card.Body>
          <Card.Title>{productoById.title}</Card.Title>
          <Card.Text>{productoById.description}</Card.Text>
          <Card.Text>Brand: {productoById.brand}</Card.Text>
          <Card.Text>Category: {productoById.category}</Card.Text>
          <Card.Text>
            Precio: ${productoById.price} Stock: {productoById.stock}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainerComponent;
