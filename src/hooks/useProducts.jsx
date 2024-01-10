/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { getProducts, getProductsById } from "../services";
import { UseGetLoading } from "./useLoading";

export const UseGetProducts = () => {
  // Utilizamos useState para gestionar el estado de la variable 'productos'
  const [productos, setProductos] = useState([]);
  const { loading } = UseGetLoading();

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

  return { productos, loading };
};


export const UseGetProductsById = (id) => {
  const [productosbyId, setProductosById] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if id is valid before making the API request
        if (id !== null) {
          // el await sirve para esperar que la llamada a la api sea exitosa
          const response = await getProductsById(id);
          console.log("API Response for product with ID", id, ":", response.data);
          setProductosById(response.data);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, [id]);
  
  return { productosbyId };
};
