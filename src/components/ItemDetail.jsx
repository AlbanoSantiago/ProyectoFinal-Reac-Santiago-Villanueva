import { useContext } from "react"
import { CartContext } from "../context/CartContex"
import { useState } from "react"
import ItemCount from "./ItemCount/ItemCount"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
const { addProduct } = useContext(CartContext)

  const [currentImage, setCurrentImage] = useState(product.image[0])

  const images = product.image.filter( (image) => image !== currentImage)

  const AddProductInCart = (count) => {
    //console.log(count)
    //Producto que vamos a añadir al carrito
    const productCart = { ...product, quantity: count }
    
    addProduct(productCart)
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
          {
            images.map((image)=>(
              <img src={image} key={image}  onClick={ ()=> setCurrentImage (image) }/>
            ))
          }
        </div>

        <div className="main-image">
          <img src={currentImage} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
          <h2 className="title-detail">{product.name}</h2>
          <p className="text-detail">{product.description} </p>
          <p className="text-detail">Categoria: {product.category} </p>
          <p className="text-detail">Stock: {product.stock} </p>
          <p className="text-detail">Precio: ${product.price} MXN</p>

          <ItemCount stock={product.stock} AddProductInCart = {AddProductInCart}/>          
      </div>
    </div>
  )
}

export default ItemDetail