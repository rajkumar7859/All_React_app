import React, { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate =useNavigate()

  const addToCart = (item) => {
    try {
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem && existingItem.quantity >= item.quantity) {
        alert("There is not enough stock for this product.");
        return;
      }
  
      if (existingItem) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
        alert("Product added Successfully again")
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        alert("Product added Successfully")
      }
        
    } catch (err) {
      console.log("Add to cart Error",err.message);
    }
  };

  const increaseQuantity = (item) => {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        )
      );
  };
  
  const decreaseQuantity = (itemId) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === itemId);

    if (existingItem.quantity === 1) {
      removeFromCart(itemId);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
    alert("Product Remove From Cart")
  };

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  };

  const getCartItemQuantity = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  const placeOrder=()=>{
    alert("Order Placed Successfully")
    setCartItems([])
    navigate("/")
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalAmount,
        getCartItemQuantity,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider