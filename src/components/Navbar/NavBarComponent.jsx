/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import CartWidgetComponent from '../Cart/CartWidgetComponent';
import NavLinkComponent from '../NavLink/NavLinkComponent';
import TitleComponent from '../Title/TitleComponent';
import ItemListContainerComponent from '../ItemListContainer/ItemListContainerComponent';

const NavBarComponent = ({ navItems, cartItemCount, greeting }) => {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              {navItems.map((item, index) => (
                <NavLinkComponent key={index} href={item.href} text={item.text} />
              ))}
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
      <ItemListContainerComponent />
    </div>
  );
};

export default NavBarComponent;
