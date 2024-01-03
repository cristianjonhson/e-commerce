/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// NavLinkComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NavLinkComponent = ({ to, text }) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link" activeClassName="active">
        {text}
      </Link>
    </li>
  );
};

export default NavLinkComponent;

