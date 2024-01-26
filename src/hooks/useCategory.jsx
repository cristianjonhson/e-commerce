import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const useCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesCollection = collection(db, 'categories');
        const categoriesSnapshot = await getDocs(categoriesCollection);

        // Asegurémonos de que la respuesta de Firebase contenga datos
        if (!categoriesSnapshot.empty) {
          // Mapeamos los datos y extraemos los valores de 'categories'
          const categoriesData = categoriesSnapshot.docs.map(doc => {
            const categoriesArray = doc.data().categories || [];
            return Array.isArray(categoriesArray)
              ? categoriesArray  // Si ya es un array, lo dejamos así
              : categoriesArray.split(',').map(category => category.trim()); // Si es una cadena, la dividimos
          });
          setCategories(categoriesData.flat()); // Usamos flat para aplanar el array multidimensional
          console.log(categoriesData);
        } else {
          console.log('No hay categorías disponibles');
        }
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, [db]);

  return { categories };
};

export const useCategoryOperations = () => {
  const [error, setError] = useState(null);

  const addCategory = async (newCategory) => {
    try {
      const categoriesCollection = collection(db, 'categories');
      await addDoc(categoriesCollection, { categories: [newCategory] });

      // Actualizar el estado local si es necesario
      // Puedes volver a consultar las categorías aquí si lo deseas

      console.log('Categoría agregada exitosamente.');
      return { success: true };
    } catch (error) {
      console.error('Error adding category:', error);
      setError(error.message);
      return { success: false, error: error.message };
    }
  };

  const clearError = () => {
    setError(null);
  };

  return { addCategory, error, clearError };
};