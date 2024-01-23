// useLoadingAlert.js
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const useLoadingAlert =
    (loadingCallback, successCallback, errorCallback, delay =1000, customTitle = 'Cargando producto') => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: customTitle,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close();
    }
  }, [loading, customTitle]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadingCallback();

        setLoading(false);
        Swal.fire({
          title: 'Productos cargados con éxito',
          icon: 'success',
          showConfirmButton: false,
          timer: delay,
        });
        if (successCallback) {
          successCallback();
        }
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setLoading(false);
        Swal.fire({
          title: 'Error al cargar productos',
          icon: 'error',
          showConfirmButton: false,
          timer: delay,
        });
        if (errorCallback) {
          errorCallback();
        }
      }
    };

    fetchData();
  }, [loadingCallback, delay, errorCallback, successCallback]);

  return { loading };
};

export default useLoadingAlert;
