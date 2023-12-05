/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const NavBar = () => {
  return (
    <Navbar bg="body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand href="#">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
            <Nav.Link>
              <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
