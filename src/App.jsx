/* eslint-disable no-unused-vars */
// App.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar/NavBarComponent';
import { UseGetProducts } from './hooks/useProducts';

const App = () => {

  const {productos, loading} = UseGetProducts()

  // Definir la lista de elementos de navegación
  const navItems = [
    { href: '/inicio', text: 'Inicio' },
    { href: '/productos', text: 'Productos' },
    // Otros elementos de navegación...
  ];

  const greeting = '¡Bienvenido a nuestra tienda!';

  return (
    <div className="app-container" style={{ width: '100vw', height: '100vh' }}>
      {/* Pasa las props correctamente a NavBarComponent */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <NavBarComponent navItems={navItems} greeting={greeting} productos={productos} />
      )}
    </div>
  );
};

export default App;
