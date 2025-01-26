import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  let quantity = totalQuantity()
  
  return (
    <Link to="/cart" className="cartwidget">
        <FaCartArrowDown size={30} />
        <p> { quantity !== 0 && quantity }</p>
    </Link>
  )
}

export default CartWidget