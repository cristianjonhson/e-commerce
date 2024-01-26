import React from 'react';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
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

    // Validar que el campo no esté vacío
    if (!newCategory.trim()) {
      Swal.fire('Error', 'Por favor, ingrese el nombre de la categoría', 'error');
      return;
    }

    const customTitle = '¿Estás seguro?';
    const result = await Swal.fire({
      title: customTitle,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, agregar categoría',
      reverseButtons: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    if (result.isConfirmed) {
      try {
        // Realizar la operación asíncrona aquí
        const addResult = await addCategory(newCategory);

        if (addResult.success) {
          Swal.fire('¡Categoría agregada!', '', 'success');
          setNewCategory('');
        } else {
          Swal.fire('Error', `No se pudo agregar la categoría: ${addResult.error}`, 'error');
        }
      } catch (error) {
        console.error('Error al agregar la categoría:', error);
      } finally {
        // Ocultar el indicador de carga después de la operación
        Swal.hideLoading();
      }
    } else {
      // Si el usuario cancela, muestra un mensaje de cancelación
      Swal.fire('Operación cancelada', '', 'info');
    }
  };

  return (
    <div>
      <h1 style={{ marginTop: '70px', marginBottom: '20px', textAlign: 'center' }}>Agregar Categoría</h1>
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
                <Button variant="primary" type="submit" className="float-end">
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
