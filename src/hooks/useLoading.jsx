/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { getProducts } from "../services";

export const UseGetLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        // Manejamos cualquier error que pueda ocurrir durante la llamada a la API
        console.warn(error);
        setLoading(false);
      });
  }, []); // El segundo argumento es un array vacío, lo que significa que este efecto solo se ejecuta una vez, equivalente a componentDidMount en componentes de clase

  return { loading };
};
