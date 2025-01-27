import hoctFilterProducts from "../hoc/hoctFilterProducts.jsx";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../db/db.js";
import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo, loading }) => {
  const { idCategory } = useParams();
  const [products, setProducts] = useState([]); // Para almacenar todos los productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Para almacenar los productos filtrados

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Crear la referencia de la colección
        const collectionName = collection(db, "products");

        // Si hay idCategory, creamos una consulta con el filtro de categoría
        const productsQuery = idCategory 
          ? query(collectionName, where("category", "==", idCategory)) // Filtro por categoría
          : collectionName; // Si no, obtenemos todos los productos

        // Obtener los productos de la base de datos
        const dataDb = await getDocs(productsQuery);

        // Mapeamos los datos de Firestore y procesamos las imágenes
        const data = dataDb.docs.map((productDb) => {
          const productData = productDb.data();

          // Verificar si 'image' es una cadena, si lo es, convertirlo en un arreglo
          const images = Array.isArray(productData.image)
            ? productData.image
            : productData.image
            ? productData.image.split(",") // Si es cadena, dividirla en un arreglo
            : []; // Si no existe 'image', asignar un arreglo vacío

          return { id: productDb.id, ...productData, image: images };
        });

        // Log para verificar los productos obtenidos
        console.log("Productos obtenidos de Firestore:", data);

        // Guardamos todos los productos en el estado
        setProducts(data);

        // Si se filtró por categoría, se guardan los productos filtrados
        const filtered = idCategory ? data : data; // Si no hay filtro, mantenemos todos los productos
        setFilteredProducts(filtered);

      } catch (error) {
        console.error("Error al obtener productos de Firestore:", error);
      }
    };

    getProducts();
  }, [idCategory]); // Dependencia de idCategory para que se actualice cada vez que cambie

  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
      {loading ? (
        <div
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RiseLoader color="rgb(4, 253, 4)" />
        </div>
      ) : (
        <ItemList products={filteredProducts} />
      )}
    </div>
  );
};

const ItemListContainerWithHoc = hoctFilterProducts(ItemListContainer);

export default ItemListContainerWithHoc;
