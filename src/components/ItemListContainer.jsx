import hoctFilterProducts from "../hoc/hoctFilterProducts.jsx"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { RiseLoader } from "react-spinners"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo, products, loading }) => {
  const { idCategory } = useParams()

  const filterProducts = idCategory
  ? products.filter(product => product.category === idCategory) : products

  return (
    <div className="itemlistcontainer">
        <h1>{saludo}</h1>

        {
        loading === true ? (<div style={ {height: "50vh", display: "flex", justifyContent: "center", alignItems: "center"}}> <RiseLoader color="rgb(4, 253, 4)"/> </div>) : ( <ItemList products={filterProducts} />)
}
    </div>  
  ) 
}
//export default ItemListContainer

const ItemListContainerWithHoc = hoctFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc