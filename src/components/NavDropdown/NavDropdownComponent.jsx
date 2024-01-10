/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useCategory } from '../../hooks/useCategory';

const NavDropdownComponent = () => {

    const {category} = useCategory();

  return (
    <NavDropdown title="Categorias" id="nav-dropdown">
       { category.map((item , index ) => {
            return <NavDropdown.Item key={index}> {item} </NavDropdown.Item>
            })
        }
    </NavDropdown>
  );
};

export default NavDropdownComponent;
