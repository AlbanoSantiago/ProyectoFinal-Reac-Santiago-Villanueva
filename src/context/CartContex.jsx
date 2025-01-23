import { createContext } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const saludo = "Hola Mundo"

    const saludando = () => {
        alert("Saludando desde mi CartContext")
    }
return(
    <CartContext.Provider value={ { saludo, saludando } }>
        {children}
    </CartContext.Provider>
)

}

export { CartContext, CartProvider }