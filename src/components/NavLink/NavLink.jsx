/* eslint-disable react/prop-types */
// NavLink.jsx (Ejemplo de componente de enlace)

// eslint-disable-next-line no-unused-vars
import React from 'react';

const NavLink = ({ href, text }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {text}
      </a>
    </li>
  );
};

export default NavLink;
