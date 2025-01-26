import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (newProduct) => {
    if (!newProduct.image) {
      newProduct.image = "placeholder.png"; // Asigna una imagen por defecto si no se proporciona
    }
  
    const index = cart.findIndex((productCart) => productCart.id === newProduct.id);
  
    if (index === -1) {
      setCart([...cart, newProduct]);
    } else {
      const newCart = [...cart];
      newCart[index].quantity = newCart[index].quantity + newProduct.quantity;
      setCart(newCart);
    }
  };

  const totalQuantity = () => cart.reduce((total, productCart) => total + productCart.quantity, 0);

  const totalPrice = () =>
    cart.reduce((total, productCart) => total + productCart.quantity * productCart.price, 0);

  const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter((productCart) => productCart.id !== idProduct);
    setCart(filterProducts);
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };