import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../db/db";
import { RiseLoader } from "react-spinners";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null); // Estado inicial como null
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const { idProduct } = useParams();

  // Función para obtener el producto de Firestore
  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);

      // Verificar si el documento existe
      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };

        // Asegurarse de que `data.image` sea un arreglo
        const images = Array.isArray(data.image) ? data.image : data.image ? data.image.split(',') : [];
        data.image = images; // Asignamos el arreglo de imágenes a la propiedad `image`

        setProduct(data); // Guardar el producto
      } else {
        setError("Producto no encontrado"); // Manejo de error cuando el producto no existe
      }
    } catch (error) {
      setError("Hubo un error al cargar el producto."); // Manejo de errores
      console.log(error);
    } finally {
      setLoading(false); // Independientemente de si hay error o no, cambiamos el estado a false
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  if (loading) {
    return (
      <div className="loader-container">
        <RiseLoader color="rgb(4, 253, 4)" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
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
