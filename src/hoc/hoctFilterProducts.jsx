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
            const filterProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(query)
            })

            return filterProducts 
        }
        return(
            <>
            <div>
                <input type="text" placeholder="buscar..." onChange={changeInput} />
            </div>
                <Component {...props} products={ search() } />
            </>
        )
    }
    
}

export default hoctFilterProducts