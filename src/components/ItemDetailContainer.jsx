import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getProducts } from "../data/data.js"
import { useParams } from "react-router-dom"

function ItemDetailContainer() {
  const [product, setProduct] = useState(null) // Estado inicial como null
  const [loading, setLoading] = useState(true) // Estado de carga
  const { idProduct } = useParams()

  useEffect(() => {
    setLoading(true) // Inicia el estado de carga
    getProducts()
      .then((data) => {
        const productFind = data.find(
          (dataProduct) => dataProduct.id === (idProduct) // Convierte idProduct a número si es necesario
        )
        setProduct(productFind || null) // Si no se encuentra, establece como null
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error)
      })
      .finally(() => {
        setLoading(false) // Finaliza el estado de carga
      })
  }, [idProduct])

  if (loading) {
    return <p>Cargando producto...</p> // Indicador de carga
  }
  if (!product) {
    return <p>Producto no encontrado</p> // Manejo de error si no se encuentra el producto
  }

  return <ItemDetail product={product} />
}

export default ItemDetailContainer

