/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// NavBar.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import CartWidget from '../Cart/CartWidget';
import NavLink from '../NavLink/NavLink';
import ItemListContainer from './ItemListContainer';

// eslint-disable-next-line react/prop-types
const NavBar = ({ navItems, cartItemCount, greeting }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Mi Tienda
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* Renderiza elementos de navegación dinámicamente */}
          {navItems.map((item, index) => (
            <NavLink key={index} href={item.href} text={item.text} />
          ))}

          {/* Renderiza el componente CartWidget con la cantidad de elementos en el carrito */}
          <li className="nav-item">
            <CartWidget itemCount={cartItemCount} />
          </li>

          {/* Renderiza el componente ItemListContainer con el saludo */}
          <li className="nav-item">
            <ItemListContainer greeting={greeting} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
