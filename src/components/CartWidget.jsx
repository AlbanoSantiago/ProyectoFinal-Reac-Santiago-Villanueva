import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  
  return (
    <Link to="/cart" className="cartwidget">
        <FaCartArrowDown size={30} />
        <p> {totalQuantity() }</p>
    </Link>
  )
}

export default CartWidget