import { useContext, useState } from "react";
import { CartContext } from "../context/CartContex";
import ItemCount from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  // Estado para controlar si se muestra o no, el componente ItemCount
  const [showItemCount, setShowItemCount] = useState(true);

  const { addProduct } = useContext(CartContext);

  // Estado para la imagen principal
  const [currentImage, setCurrentImage] = useState(product.image[0]);

  // Filtrar las imágenes secundarias
  const images = product.image.filter((image) => image !== currentImage);

  // Función para agregar producto al carrito
  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count };
    addProduct(productCart);

    // Cambiar el estado para dejar de mostrar ItemCount
    setShowItemCount(false);
  };

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        {}
        <div className="secondary-images">
          {images.map((image) => (
            <img
              src={image}
              key={image}
              alt={`Imagen secundaria de ${product.name}`}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>

        {/* Imagen principal */}
        <div className="main-image">
          <img
            src={currentImage}
            alt={`Imagen principal de ${product.name}`}
          />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Categoría: {product.category}</p>
        <p className="text-detail">Stock: {product.stock}</p>
        <p className="text-detail">
          Precio: <span className="product-price">${product.price} MXN</span>
        </p>

        {/* Componente de ItemCount o enlace a carrito */}
        {showItemCount ? (
          <ItemCount
            stock={product.stock}
            addProductInCart={addProductInCart}
          />
        ) : (
          <Link to="/cart" className="finish-purchase">Terminar mi Compra</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
