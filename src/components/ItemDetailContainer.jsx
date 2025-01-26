import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../data/data.js";
import { useParams, Link } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import "./ItemDetailContainer.css"; // Importar el archivo CSS

function ItemDetailContainer() {
  const [product, setProduct] = useState(null); // Estado inicial como null
  const [loading, setLoading] = useState(true); // Estado de carga
  const { idProduct } = useParams();

  useEffect(() => {
    setLoading(true); // Inicia el estado de carga
    getProducts()
      .then((data) => {
        const productFind = data.find(
          (dataProduct) => dataProduct.id === idProduct
        );
        setProduct(productFind || null); // Si no se encuentra, establece como null
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
      })
      .finally(() => {
        setLoading(false); // Finaliza el estado de carga
      });
  }, [idProduct]);

  if (loading) {
    return (
      <div className="loader-container">
        <RiseLoader color="rgb(4, 253, 4)" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <p>Producto no encontrado</p>
        <Link to="/" className="return-button">
          Regresar a la Tienda
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ItemDetail product={product} />
      <div className="detail-footer">
        <Link to="/" className="return-button">
          Regresar a la Tienda
        </Link>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
