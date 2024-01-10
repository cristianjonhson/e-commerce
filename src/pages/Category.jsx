import { useParams } from "react-router-dom"
import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent"
import { UseGetProductsByCategory } from "../hooks/useProducts";

ItemListContainerComponent

const Category = () => {
    
    const { id} = useParams();

    const {productos} = UseGetProductsByCategory(id)

  return (
    <ItemListContainerComponent productos={productos}/>
  )
}

export default Category