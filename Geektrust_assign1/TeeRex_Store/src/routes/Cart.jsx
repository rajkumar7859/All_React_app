import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import "../Style/Cart.css"

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const handleIncreaseQuantity = (id) => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id) => {
    decreaseQuantity(id);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  console.log("sdsda",cartItems);

  return (
    <div div style={{ padding: "1rem" , paddingTop:"4rem" }}>
    <h2>Shopping Cart</h2>
   {
    cartItems.length==0?(<p>Your cart is empty.</p>):
    (
      <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageURL} style={{ width: "20%" }} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.color}</p>
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </td>
              <td>
                <button className='removeBtn' onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">
        <p>Total: Rs {totalAmount.toFixed(2)}</p>
        <button>Checkout</button>
      </div>
      </div>
    )
}
<div>
  
</div>
</div>
  )
}
export default Cart;