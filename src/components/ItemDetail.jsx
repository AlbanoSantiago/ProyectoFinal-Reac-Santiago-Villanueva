import { useContext, useState } from "react";
import { CartContext } from "../context/CartContex";
import ItemCount from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addProduct } = useContext(CartContext);

  // Asegurarse de que product.image sea un arreglo
  const images = Array.isArray(product.image) ? product.image : product.image ? product.image.split(',') : [];

  // Estado para la imagen principal
  const [currentImage, setCurrentImage] = useState(images[0] || "/ruta/a/imagen/predeterminada.jpg");

  // Filtrar las imágenes secundarias (excluyendo la imagen actual)
  const secondaryImages = images.filter((image) => image !== currentImage);

  // Función para agregar producto al carrito
  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count };
    addProduct(productCart);
    setShowItemCount(false);
  };

  // Validación de la existencia de imágenes
  if (!images.length) {
    return <p>No hay imágenes disponibles para este producto.</p>;
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        {/* Imagenes secundarias */}
        <div className="secondary-images">
          {secondaryImages.length > 0 ? (
            secondaryImages.map((image, index) => (
              <img
                src={image}
                key={index}
                alt={`Imagen secundaria de ${product.name} - ${index + 1}`}
                onClick={() => setCurrentImage(image)}
              />
            ))
          ) : (
            <p>No hay imágenes secundarias disponibles.</p>
          )}
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
        <p className="text-detail">Precio: <span className="product-price">${product.price} MXN</span></p>

        {/* Componente de ItemCount o enlace a carrito */}
        {showItemCount ? (
          <ItemCount
            stock={product.stock}
            addProductInCart={addProductInCart}
          />
        ) : (
          <Link to="/cart" className="finish-purchase">
            Terminar mi Compra
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
