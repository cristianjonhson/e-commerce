import { useEffect, useState } from "react"
import { getCategories } from "../services";


export const useCategory = () => {
    const [category, setcategory] = useState([]);

 useEffect(() => {
   
    getCategories()
      .then((response) => {
        setcategory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []); 

  return { category };
};
