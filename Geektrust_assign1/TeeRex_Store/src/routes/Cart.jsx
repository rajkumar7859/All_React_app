import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import "../Style/Cart.css"

const Cart = () => {
  const navigate= useNavigate()
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart ,placeOrder ,getCartItemQuantity} = useContext(CartContext);

  const handleIncreaseQuantity = (item) => {
    increaseQuantity(item);
    console.log(cartItems);
    console.log("item",item);
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


  return (
    <div div style={{ padding: "1rem" , paddingTop:"4rem" }}>
    <h2 style={{lineHeight:"3rem"}}>Shopping Cart</h2>
    
   {
    cartItems.length==0?(<><p style={{lineHeight:"2rem"}}>Your cart is empty.</p> <button className='PlacedBtn' onClick={()=>navigate("/")}>See Product</button></>):
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
              <td >
                <img src={item.imageURL} className="productImg" alt={item.name} />
                <div className='ProductInfo'>
                  <p>Name: {item.name}</p>
                  <p>Colour: {item.color}</p>
                </div>
              </td>
              <td>Rs {item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleDecreaseQuantity(item.id ,item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item)}>+</button>
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
        <p>Total Cart Items: {getCartItemQuantity()} </p>
        <button className='PlacedBtn' onClick={placeOrder}>Place Order</button>
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