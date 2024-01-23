/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { getProductsByCategory, getProducts, getProductsById } from "../services";


export const UseGetProducts = () => {
  // Utilizamos useState para gestionar el estado de la variable 'productos'
  const [productos, setProductos] = useState([]);


  // Utilizamos useEffect para realizar una llamada a la API cuando el componente se monta
  useEffect(() => {
    // Llamamos a la función 'getProducts' de los servicios
    getProducts()
      .then((response) => {
        // Cuando la llamada es exitosa, actualizamos el estado 'productos' con los datos recibidos
        setProductos(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        // Manejamos cualquier error que pueda ocurrir durante la llamada a la API
        console.warn(error);
      });
  }, []); // El segundo argumento es un array vacío, lo que significa que este efecto solo se ejecuta una vez, equivalente a componentDidMount en componentes de clase

  return { productos };
};



export const UseGetProductsById = (id) => {
  const [productoById, setProductoById] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== null) {
          const response = await getProductsById(id);
          console.log("API Response for product with ID", id, ":", response.data);
          setProductoById(response.data);  // Assuming the response is an object
        }
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, [id]);

  return { productoById };
};


export const UseGetProductsByCategory = (category) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if category is valid before making the API request
        if (category !== null) {
          // el await sirve para esperar que la llamada a la api sea exitosa
          const response = await getProductsByCategory(category);
          console.log("API Response for products in category", category, ":", response.data);

          // Assuming the response structure has a 'products' property
          setProductos(response.data.products);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, [category]);
  
  return { productos };
};

