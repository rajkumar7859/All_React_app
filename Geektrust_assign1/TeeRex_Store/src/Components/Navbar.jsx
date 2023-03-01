import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/">TeeRex Store</Link>
      <Link to="/">Product</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Navbar
