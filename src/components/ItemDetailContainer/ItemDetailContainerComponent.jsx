/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { UseGetProductsById } from '../../hooks/useProducts';
import useLoadingAlert from '../../hooks/useLoadingAlert';


const ItemDetailContainerComponent = ({ id }) => {
  const { productoById } = UseGetProductsById(id);
  
  const { loading } = useLoadingAlert(
    async () => {
      // Lógica de carga de datos
      await new Promise((resolve) => setTimeout(resolve, 5000));
    },
    () => {
      // Lógica después de la carga exitosa
      console.log('Carga exitosa');
    },
    () => {
      // Lógica después de un error en la carga
      console.log('Error en la carga');
    },
    5000, // Delay
    'Cargando producto' // Título personalizado
  );
  

  if (loading) {
    return null;
  }

    // Mostrar los productos solo después de que la carga haya finalizado y la alerta se haya cerrado
    if (loading) {
      return null;
    }
 

  // Check if productoById is not falsy (null or undefined) and showProduct is true
  if (!productoById) {
    return <div>No product found for ID: {id}</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Producto Detalle</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card key={productoById.id} style={{ marginTop: '20px', marginBottom: '20px', width: '16rem', backgroundColor: '#f0f0f0' }}>
          <Card.Img variant="top" src={productoById.thumbnail} style={{ objectFit: 'cover', height: '50%' }} />
          <Card.Body style={{ padding: '15px' }}>
            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{productoById.title}</Card.Title>
            <Card.Text style={{ marginBottom: '10px' }}>{productoById.description}</Card.Text>
            <Card.Text style={{ fontSize: '1.2rem', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>Brand: {productoById.brand}</Card.Text>
            <Card.Text style={{ fontSize: '1.2rem', color: 'green', fontWeight: 'bold', fontStyle: 'italic' }}>Category: {productoById.category}</Card.Text>
            <Card.Text style={{ fontSize: '1.2rem', color: 'blue', fontWeight: 'bold', fontStyle: 'italic' }}>Precio: ${productoById.price}</Card.Text>
            <Card.Text style={{ fontSize: '1.2rem', color: 'blue', fontWeight: 'bold', fontStyle: 'italic' }}>Stock: {productoById.stock}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetailContainerComponent;
