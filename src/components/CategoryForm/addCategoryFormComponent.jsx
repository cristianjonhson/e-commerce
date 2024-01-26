import React from 'react';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';
import { useCategoryOperations } from '../../hooks/useCategory';

const AddCategoryFormComponent = () => {
  const { addCategory, error, clearError } = useCategoryOperations();
  const [newCategory, setNewCategory] = React.useState('');

  const handleInputChange = (e) => {
    setNewCategory(e.target.value);
    clearError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addCategory(newCategory);

    if (result.success) {
      // Hacer algo después de agregar la categoría, si es necesario
      alert('Categoría agregada exitosamente.');
      setNewCategory('');
    } else {
      // Manejar el error, si lo deseas
      alert(`Error al agregar la categoría: ${result.error}`);
    }
  };

  return (
    <div>
      <h1 style={{ marginTop: '70px', marginBottom: '10px', textAlign: 'center' }}>Agregar Categoría</h1>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card style={{ backgroundColor: '#f0f0f0' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nueva Categoría:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese la nueva categoría"
                    value={newCategory}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Agregar Categoría
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

export default AddCategoryFormComponent;
