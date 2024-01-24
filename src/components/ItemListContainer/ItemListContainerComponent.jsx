/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import useLoadingAlert from "../../hooks/useLoadingAlert";

const ItemListContainerComponent = ({ productos }) => {
  const [quantities, setQuantities] = useState({});
  const { incrementCount } = useContext(CartContext);

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
    // Mostrar los productos solo después de que la carga haya finalizado y la alerta se haya cerrado
    if (loading) {
      return null;
    }

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const renderQuantityInput = (productId) => {
    const quantity = quantities[productId] || 0;

    return (
      <div className="d-flex align-items-center">
      
        <Button
          variant="primary"
          size="sm"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            incrementCount(); // Incrementar el contador general
            // Aquí puedes agregar la lógica específica para agregar al carrito
          }}
        >
          Agregar
        </Button>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Catálogo de Productos</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {productos.map((producto) => (
          <div key={producto.id} style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card style={{ width: "16rem", backgroundColor: "#f0f0f0" }}>
              <Link to={`/item/${producto.id}`} className="text-decoration-none">
                <Card.Img
                  variant="top"
                  src={producto.images[0]}
                  style={{ objectFit: "cover", height: "50%" }}
                />
              </Link>
              <Card.Body style={{ padding: "15px" }}>
                <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {producto.title}
                </Card.Title>
                <Card.Text style={{ marginBottom: "10px" }}>
                  {producto.description}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "1.2rem",
                    color: "blue",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Precio: $ {producto.price}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "1.2rem",
                    color: "blue",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Stock: {producto.stock}
                </Card.Text>
                {renderQuantityInput(producto.id)}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainerComponent;
