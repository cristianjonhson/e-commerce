/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useCategory } from '../../hooks/useCategory';
import { LinkContainer } from 'react-router-bootstrap';

const NavDropdownComponent = () => {
    const { category } = useCategory();

    return (
        <NavDropdown title="Categorias" id="nav-dropdown">
            {category.map((item, index) => (
                <LinkContainer to={`/category/${item}`} key={index}>
                    <NavDropdown.Item>{item}</NavDropdown.Item>
                </LinkContainer>
            ))}
        </NavDropdown>
    );
};

export default NavDropdownComponent;
