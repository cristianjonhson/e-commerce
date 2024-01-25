/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc, getFirestore, query, orderBy, limit, addDoc, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebaseConfig';

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(firebaseApp);

// Hook para obtener todos los productos
export const UseGetProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtiene la colección de productos
        const productsCollection = collection(db, 'products');
        // Obtiene todos los documentos en la colección
        const productsSnapshot = await getDocs(productsCollection);
        // Mapea los datos de cada documento y los almacena en el estado
        const productsData = productsSnapshot.docs.map((doc) => doc.data());
        setProductos(productsData);
        console.log(productsData);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, []);

  return { productos };
};

// Hook para obtener un producto por ID
// hooks/useProducts.js
export const useGetProductById = (id) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const productDocRef = doc(db, 'products', id);
          const productSnapshot = await getDoc(productDocRef);

          if (productSnapshot.exists()) {
            const productData = productSnapshot.data();
            console.log('Product Data:', productData); // Log product data
            setProduct(productData);
          } else {
            console.log(`No product found for ID: ${id}`);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  console.log('Product State:', product); // Log product state
  return { product };
};

// Hook para obtener productos por categoría
export const UseGetProductsByCategory = (category) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (category !== null) {
          // Obtiene la colección de productos
          const productsCollection = collection(db, 'products');
          // Realiza una consulta para obtener los productos por categoría
          const categoryQuery = query(productsCollection, where('category', '==', category));
          // Obtiene los documentos que coinciden con la consulta
          const productsSnapshot = await getDocs(categoryQuery);
          // Mapea los datos de cada documento y los almacena en el estado
          const productsData = productsSnapshot.docs.map((doc) => doc.data());
          setProductos(productsData);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, [category]);

  return { productos };
};

// Function to get the next available product ID
const getNextProductId = async () => {
  try {
    // Query to get the last product by ordering them in descending order
    const productsCollection = collection(db, 'products');
    const lastProductQuery = query(productsCollection, orderBy('id', 'desc'), limit(1));
    const lastProductSnapshot = await getDocs(lastProductQuery);

    // If there's a last product, return its ID + 1; otherwise, start from 1
    if (lastProductSnapshot.docs.length > 0) {
      const lastProductId = lastProductSnapshot.docs[0].data().id;
      return lastProductId + 1;
    } else {
      return 1;
    }
  } catch (error) {
    console.error('Error getting next product ID:', error);
    throw error;
  }
};

export const useProductOperations = () => {
  const [error, setError] = useState(null);

  const addProduct = async (collectionName, data) => {
    try {
      // Get the next available product ID
      const nextProductId = await getNextProductId();

      // Add the product data to the specified collection with the generated ID
      const docRef = await addDoc(collection(db, collectionName), { ...data, id: nextProductId });
      console.log(`${collectionName} added with ID:`, docRef.id);

      return { success: true, docId: docRef.id };
    } catch (error) {
      console.error(`Error adding ${collectionName}:`, error);
      setError(error.message);
      return { success: false, error: error.message };
    }
  };

  const clearError = () => {
    setError(null);
  };

  return { addProduct, error, clearError };
};
