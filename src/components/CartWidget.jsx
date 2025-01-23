import { FaCartArrowDown } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";

const CartWidget = () => {
  const { saludo, saludando } = useContext(CartContext)

  return (
    <div className="cartwidget" onClick={saludando}>
        <FaCartArrowDown size={30} />
        <p>{saludo}</p>
    </div>
  )
}

export default CartWidget