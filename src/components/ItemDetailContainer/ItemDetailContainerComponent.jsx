/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../../hooks/useProducts';
import useLoadingAlert from '../../hooks/useLoadingAlert';

const ItemDetailContainerComponent = ({ id }) => {
  const { product } = useGetProductById(id);

  console.log('ID:', id);
  console.log('Product:', product);

  const { loading } = useLoadingAlert(
    async () => {
      // Data loading logic
      await new Promise((resolve) => setTimeout(resolve, 5000));
    },
    () => {
      // Logic after successful data loading
      console.log('Load successful');
    },
    () => {
      // Logic after an error in data loading
      console.log('Error in loading');
    },
    5000, // Delay
    'Cargando producto' // Custom title
  );

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (!product) {
    return <div>No product found for ID: {id}</div>; // Show message if product is not found
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Producto Detalle</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card key={product.id} style={{ marginTop: '20px', marginBottom: '20px', width: '16rem', backgroundColor: '#f0f0f0' }}>
          <Card.Img variant="top" src={product.thumbnail} style={{ objectFit: 'cover', height: '50%' }} />
          <Card.Body style={{ padding: '15px' }}>
            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{product.title}</Card.Title>
            <Card.Text style={{ marginBottom: '10px' }}>{product.description}</Card.Text>
            <Card.Text style={{ fontSize: '1.2rem', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>Brand: {product.brand}</Card.Text>
            <Card.Text style={{ fontSize: '1.2rem', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>Category: {product.category}</Card.Text>
            <Card.Text style={{ fontSize: '1.2rem', color: 'blue', fontWeight: 'bold', fontStyle: 'italic' }}>Precio: ${product.price}</Card.Text>
            <Card.Text style={{ fontSize: '1.2rem', color: 'blue', fontWeight: 'bold', fontStyle: 'italic' }}>Stock: {product.stock}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetailContainerComponent;
