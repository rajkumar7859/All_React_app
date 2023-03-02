import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {GiShoppingCart} from "react-icons/gi"
import { CartContext } from '../Context/CartContext'


const Navbar = () => {
  const {getCartItemQuantity} = useContext(CartContext)
  return (
    <nav className='navbar'>
      <div>
      <Link to="/">TeeRex Store</Link>
      </div>
      <div className='activeLink'>
      <Link to="/">Products</Link>
      <Link to="/cart"><GiShoppingCart fontSize={"40px"} style={{marginTop:"-5px"}} /></Link>
      <div className='badge'>{getCartItemQuantity()}</div>
      </div>
    </nav>
  )
}

export default Navbar
