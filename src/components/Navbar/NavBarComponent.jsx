/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// NavBarComponent.jsx

import React from 'react';
import CartWidgetComponent from '../Cart/CartWidgetComponent';
import NavLinkComponent from '../NavLink/NavLinkComponent';
import ItemListContainerComponent from '../ItemListContainer/ItemListContainerComponent';

// ...

const NavBarComponent = ({ navItems, cartItemCount, greeting }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Botón de navegación para pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mi Tienda condicionado por tamaño de pantalla */}
        <a className="navbar-brand ms-auto d-lg-none" href="#">
          {/* Componente de carrito de compras siempre visible */}
          <CartWidgetComponent itemCount={cartItemCount} className="d-lg-none" />
          Mi Tienda
        </a>

        {/* Área de colapso para pantallas pequeñas */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Itera sobre los elementos de navegación */}
            {navItems.map((item, index) => (
              <NavLinkComponent key={index} href={item.href} text={item.text} />
            ))}
          </ul>
          {/* Componente de carrito de compras siempre visible */}
          <CartWidgetComponent itemCount={cartItemCount} className="d-lg-none" />
          {/* Componente de lista de elementos */}
          <ItemListContainerComponent greeting={greeting} />
        </div>

        
      </div>
    </nav>
  );
};

export default NavBarComponent;
