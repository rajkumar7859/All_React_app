import React from 'react'

const Cart = ({decrementCartItem ,incrementCartItem ,removeCartItem , cartItems , totalAmount}) => {
  return (
    <div>
      <h1>Cart</h1>

      <div className="cart-container">
  <div className="cart-items-container">
    {cartItems.map((item) => (
      <div className="cart-item" key={item.id}>
        <img src={item.image} alt={item.name} />
        <div className="cart-item-details">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <div className="cart-item-quantity">
            <button onClick={() => decrementCartItem(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementCartItem(item.id)}>+</button>
          </div>
          <button onClick={() => removeCartItem(item.id)}>Remove</button>
        </div>
      </div>
    ))}
  </div>
  <div className="cart-total-container">
    <p>Total: ${totalAmount}</p>
    <button>Checkout</button>
  </div>
</div>

    </div>
  )
}

export default Cart
