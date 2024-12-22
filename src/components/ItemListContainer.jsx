import { useState, useEffect } from "react"
import { getProducts } from "../data/data.js"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.css"



const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState ([])

  

  //const condicion = false
  useEffect(()=>{
    getProducts()
    .then((data)=> {
      setProducts(data)
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=> {
      console.log("termino la promesa")
    })
  }, [])

  
  //? Variable
  /*const promesa = new Promise ( (resolve, reject) => {
    if(condicion ===true){
    resolve("se resolvio")
     }else{
      reject("se rechazo")
    }
  })
*/
  
  //! Funcion, lo ideal es manejarlo con una Función
  /*const promesa =() => {
    return new Promise( (resolve, reject) => {
      if(condicion === true){
        resolve("se resolvio")
      }else{
        reject("se rechazo")
      }
    })
  }
  */
  
 
  /*promesa
    .then((respuesta)=> {
      console.log(respuesta)
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=> {
      console.log("termino la promesa")
    })
  */
    
  return (
    <div className="itemlistcontainer">
        <h1>{ saludo }</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer