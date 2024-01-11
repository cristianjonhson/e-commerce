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

  return ( <div>
    <h1 style={{ textAlign: "center" }}>Producto Detalle</h1>
    <div style={{  display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
      <Card key={productoById.id} style={{ marginTop: "20px", marginBottom: "20px", width: "16rem", backgroundColor: "#f0f0f0"  }}>
        <Card.Img
          variant="top"
          src={productoById.thumbnail}
          style={{ objectFit: 'cover', height: '50%' }}
        />
        <Card.Body style={{ padding: "15px"}}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{productoById.title}</Card.Title>
          <Card.Text style={{ marginBottom: "10px" }}>{productoById.description}</Card.Text>
          <Card.Text style={{ fontSize: "1.2rem", color: "green", fontWeight: "bold",  fontStyle: "italic" }}>Brand: {productoById.brand}</Card.Text>
          <Card.Text style={{ fontSize: "1.2rem", color: "green", fontWeight: "bold",  fontStyle: "italic" }}>Category: {productoById.category}</Card.Text>
          <Card.Text style={{ fontSize: "1.2rem", color: "blue", fontWeight: "bold",  fontStyle: "italic" }}>Precio: ${productoById.price}</Card.Text>
          <Card.Text style={{ fontSize: "1.2rem", color: "blue", fontWeight: "bold",  fontStyle: "italic"  }}>Stock: {productoById.stock}</Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};

export default ItemDetailContainerComponent;
