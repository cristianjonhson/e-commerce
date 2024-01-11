/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const ItemListContainerComponent = ({ productos }) => {
  try {
    // Check if productos is defined before mapping over it
    if (!productos || productos.length === 0) {
      return <div>No productos available</div>;
    }

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Catálogo de Productos</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center"}}>
          {productos.map((producto) => {
            return (
              <div key={producto.id} style={{marginTop: "20px", marginBottom: "20px", width: "16rem", backgroundColor: "#f0f0f0" }}>
                {/* Apply fixed width and height to create consistent card size */}
                <Card style={{ width: "100%", height: "100%" }}>
                  <Link to={`/item/${producto.id}`} style={{ textDecoration: "none" }}>
                    <Card.Img
                      variant="top"
                      src={producto.images[0]}
                      style={{ objectFit: "cover", height: "50%", margin: 0, padding: 0 }}
                    />
                  </Link>
                  <Card.Body style={{ padding: "15px" }}>
                    <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{producto.title}</Card.Title>
                    <Card.Text style={{ marginBottom: "10px" }}>{producto.description}</Card.Text>
                    <Card.Text style={{ fontSize: "1.2rem", color: "blue", fontWeight: "bold", fontStyle: "italic" }}>Precio: ${producto.price}</Card.Text>
                    <Card.Text style={{ fontSize: "1.2rem", color: "blue", fontWeight: "bold", fontStyle: "italic" }}>Stock: {producto.stock}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error en ItemListContainerComponent:", error);
    throw error; // Rethrow para que React pueda manejar el error
  }
};

export default ItemListContainerComponent;
