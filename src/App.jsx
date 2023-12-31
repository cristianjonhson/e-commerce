/* eslint-disable no-unused-vars */
// App.js

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/Navbar/NavBarComponent';
import { getProducts } from './services';

const App = () => {
  // Utilizamos useState para gestionar el estado de la variable 'productos'
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Utilizamos useEffect para realizar una llamada a la API cuando el componente se monta
  useEffect(() => {
    // Llamamos a la función 'getProducts' de los servicios
    getProducts()
      .then((response) => {
        // Cuando la llamada es exitosa, actualizamos el estado 'productos' con los datos recibidos
        setProductos(response.data.products);
        console.log(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        // Manejamos cualquier error que pueda ocurrir durante la llamada a la API
        console.warn(error);
        setLoading(false);
      });
  }, []); // El segundo argumento es un array vacío, lo que significa que este efecto solo se ejecuta una vez, equivalente a componentDidMount en componentes de clase
  
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
