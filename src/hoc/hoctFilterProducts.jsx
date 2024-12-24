import { useState } from "react"
import useProducts from "../hooks/useProducts"

const hoctFilterProducts = (Component) => {

    return function HOC(props) {
        const { products, loading } = useProducts()
        const [query, setQuery] = useState("")

        const changeInput = (event) => {
            setQuery( event.target.value.toLowerCase())

        }

        const search = () => {
            return products.filter((product) =>
              product.name.toLowerCase().includes(query)
            );
          };
      
          return (
            <>
              <div>
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  onChange={changeInput} 
                  style={{ padding: "10px", marginBottom: "20px" }}
                />
              </div>
              <Component {...props} products={search()} loading={loading} />
            </>
          );
        };
      };

export default hoctFilterProducts