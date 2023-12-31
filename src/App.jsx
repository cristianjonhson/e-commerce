// App.js

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar/NavBarComponent';
import  { getProducts } from './services'

const App = () => {

  useEffect(() => {
    getProducts().then(response =>{console.log("products:  ",response.data.products)}).catch(error =>{console.warn(error)} )
  }, [])
  
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
      <NavBarComponent navItems={navItems} greeting={greeting} />
    </div>
  );
};

export default App;
