// App.js

// eslint-disable-next-line no-unused-vars
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComponent from './components/Navbar/NavBarComponent';

const App = () => {
  // Definir la lista de elementos de navegación
  const navItems = [
    { href: '/inicio', text: 'Inicio' },
    { href: '/productos', text: 'Productos' },
    // Otros elementos de navegación...
  ];

  // Define la cantidad de elementos en el carrito
  const cartItemCount = 3;

  // Define el saludo para ItemListContainer
  const greeting = '¡Bienenido a nuestra tienda!';

  return (
    <div className="app-container" style={{ width: '100vw', height: '100vh' }}>
      {/* Pasa las props correctamente a NavBarComponent */}
      <NavBarComponent navItems={navItems} cartItemCount={cartItemCount} greeting={greeting} />
    </div>
  );
};

export default App;
