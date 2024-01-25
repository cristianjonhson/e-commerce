/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc, getFirestore, query, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app'; 
import { firebaseConfig } from '../config/firebaseConfig'; 

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(firebaseApp);

export const UseGetProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map(doc => doc.data());
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

export const UseGetProductsById = (id) => {
  const [productoById, setProductoById] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== null) {
          const productDoc = doc(db, 'products', id);
          const productSnapshot = await getDoc(productDoc);
          setProductoById(productSnapshot.data());
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
        if (category !== null) {
          const productsCollection = collection(db, 'products');
          const categoryQuery = query(productsCollection, where('category', '==', category));
          const productsSnapshot = await getDocs(categoryQuery);
          const productsData = productsSnapshot.docs.map(doc => doc.data());
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
