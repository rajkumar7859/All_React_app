// Cart.js

import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);

  const handleIncreaseQuantity = (id) => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id) => {
    decreaseQuantity(id);
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  console.log("sdsda",cartItems);

  return (
    <>
    <h2>Shopping Cart</h2>
   {
    cartItems.length==0?(<p>Your cart is empty.</p>):
    (
      cartItems.map((item) => (
        <div key={item.id}>
        <img style={{width:"10%"}} src={item.imageURL} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
        <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
      </div>
      ))
    )
}
<div>
  
</div>
</>
  )
}
export default Cart;