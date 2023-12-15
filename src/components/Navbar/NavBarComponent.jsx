/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// NavBar.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import CartWidgetComponent from '../Cart/CartWidgetComponent';

import NavLinkComponent from '../NavLink/NavLinkComponent';
import ItemListContainerComponent from '../ItemListContainer/ItemListContainerComponent';

// eslint-disable-next-line react/prop-types
const NavBarComponent = ({ navItems, cartItemCount, greeting }) => {
  console.log('navItems:', navItems);
  console.log('cartItemCount:', cartItemCount);
  console.log('greeting:', greeting);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Mi Tienda
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {navItems.map((item, index) => (
            <NavLinkComponent key={index} href={item.href} text={item.text} />
          ))}
          <li className="nav-item">
            <CartWidgetComponent itemCount={cartItemCount} />
          </li>
          <li className="nav-item">
            <ItemListContainerComponent greeting={greeting} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComponent;