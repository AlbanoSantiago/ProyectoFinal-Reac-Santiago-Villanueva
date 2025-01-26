import { useState } from "react";
import "./ItemCount.css";  

const ItemCount = ({ stock, addProductInCart }) => {
  const [count, setCount] = useState(1)

  const handleClickRemove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  };

  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  return (
    <div className="item-count-container">
      <div className="counter">
        <button className="counter-button" onClick={handleClickRemove}>-</button>
        <p className="count">{count}</p>
        <button className="counter-button" onClick={handleClickAdd}>+</button>
      </div>
      <button className="add-to-cart-button" onClick={() => addProductInCart(count)}>Agregar Producto</button>
    </div>
  );
};

export default ItemCount;
