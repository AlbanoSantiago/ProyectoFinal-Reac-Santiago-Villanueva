import hoctFilterProducts from "../hoc/hoctFilterProducts.jsx"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo, products}) => {
  const { idCategory } = useParams()

  const filterProducts = idCategory
  ? products.filter(product => product.category === idCategory) : products

  return (
    <div className="itemlistcontainer">
        <h1>{saludo}</h1>
        <ItemList products={filterProducts} />
    </div>  
  ) 
}
//export default ItemListContainer

const ItemListContainerWithHoc = hoctFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc