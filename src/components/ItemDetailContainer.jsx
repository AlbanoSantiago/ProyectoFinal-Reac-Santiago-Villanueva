import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getProducts } from "../data/data.js"

function ItemDetailContainer() {
  const [product, setProduct] = useState({})

  useEffect(()=> {

    getProducts()
      .then ( (data) => {
        const productFind = data.find( (dataProduct) => dataProduct.id === "pl001" )
        setProduct(productFind)
      })
  }, [])
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer