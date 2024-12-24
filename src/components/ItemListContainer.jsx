import hoctFilterProducts from "../hoc/hoctFilterProducts.jsx"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo, products }) => {
  

  return (
    <div className="itemlistcontainer">
        <h1>{ saludo }</h1>
        <ItemList products={products} />
    </div>  
  ) 
}
//export default ItemListContainer

const ItemListContainerWithHoc = hoctFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc