import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    try {
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
      if (existingItem) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        alert("Product added Successfully")
      }
      
    } catch (err) {
      console.log("Add to cart Error",err.message);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
    alert("Product Remove From Cart")
  };

  const increaseQuantity = (itemId) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === itemId
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

  const getTotalAmount = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  };

  const getCartItemQuantity = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider