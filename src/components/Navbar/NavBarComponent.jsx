/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import CartWidgetComponent from '../Cart/CartWidgetComponent';
import NavLinkComponent from '../NavLink/NavLinkComponent';
import TitleComponent from '../Title/TitleComponent';
import NavDropdownComponent from '../NavDropdown/NavDropdownComponent';


const NavBarComponent = ({ cartItemCount, greeting, routes }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
        <div className="container-fluid">
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

          <a className="navbar-brand ms-auto d-lg-none" href="#">
            {isSmallScreen && <CartWidgetComponent itemCount={cartItemCount} />}
            Mi Tienda
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {routes.map((route, index) => (
                <NavLinkComponent key={index} to={route.path} text={route.text}/>
              ))}

               {/* Use the NavDropdownComponent here */}
               <NavDropdownComponent />
            </ul>

            {!isSmallScreen && (
              <>
                <CartWidgetComponent itemCount={cartItemCount} />
                <TitleComponent greeting={greeting} />
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarComponent;

