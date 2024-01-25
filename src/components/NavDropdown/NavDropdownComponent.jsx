/* eslint-disable no-unused-vars */
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useCategory } from '../../hooks/useCategory';
import { LinkContainer } from 'react-router-bootstrap';

const NavDropdownComponent = () => {
    const { categories } = useCategory();

    // Verifica si categories es un array antes de mapear sobre él
    if (!Array.isArray(categories) || categories.length === 0) {
        return null; // Puedes mostrar un mensaje o simplemente no renderizar nada
    }

    return (
        <NavDropdown title="Categorias" id="nav-dropdown">
            {categories.map((category, index) => (
                <LinkContainer to={`/category/${category}`} key={index}>
                    <NavDropdown.Item>{category}</NavDropdown.Item>
                </LinkContainer>
            ))}
        </NavDropdown>
    );
};

export default NavDropdownComponent;
