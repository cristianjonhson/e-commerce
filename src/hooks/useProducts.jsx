/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState }  from 'react';
import { getProducts } from '../services';

export const UseGetProducts =() =>{
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
  
  return {productos, loading}
} 