/* eslint-disable no-unused-vars */
// ProductFormComponent.jsx
import React, { useState } from 'react';
import { useProductOperations } from '../../hooks/useProducts';
import { Form, Button, Card, Col, Row } from 'react-bootstrap'; // Import Bootstrap React components

const ProductFormComponent = () => {
  const { addProduct, error, clearError } = useProductOperations();
  const [productData, setProductData] = useState({
    id: null,
    title: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
    stock: 0,
    images: '', // Update 'images' to be a string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert the 'images' string to an array of strings
    const imagesArray = productData.images.split(',').map((url) => url.trim());

    // Create a new object with the transformed 'images' field
    const dataWithArray = {
      ...productData,
      images: imagesArray,
    };

    const result = await addProduct('products', dataWithArray);

    if (result.success) {
      // Assuming the server returns the assigned ID
      const { docId } = result;

      // Update the product data with the received ID
      setProductData((prevData) => ({
        ...prevData,
        id: docId,
      }));

      // Clear the form after successful submission
      setProductData({
        id: null,
        title: '',
        description: '',
        brand: '',
        category: '',
        price: 0,
        stock: 0,
        images: '', // Reset 'images' to an empty string
      });

      alert('Product added successfully!');
    } else {
      alert(`Error adding product: ${result.error}`);
    }
  };

  return (
    <div>
      <h1 style={{ marginTop: '70px', marginBottom: '10px', textAlign: 'center' }}>Agregar Producto</h1>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card style={{ backgroundColor: '#f0f0f0' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={productData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Descripción:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={productData.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Marca:</Form.Label>
                  <Form.Control
                    type="text"
                    name="brand"
                    value={productData.brand}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Categoría:</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Precio:</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Stock:</Form.Label>
                  <Form.Control
                    type="number"
                    name="stock"
                    value={productData.stock}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                {/* New field for 'images' */}
                <Form.Group className="mb-3">
                  <Form.Label>Imágenes:</Form.Label>
                  <Form.Control
                    type="text"
                    name="images"
                    value={productData.images}
                    onChange={handleChange}
                    placeholder="Enter image URLs separated by commas"
                  />
                </Form.Group>
                <Button type="submit" className="mt-3">
                  Agregar Producto
                </Button>
                {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductFormComponent;
