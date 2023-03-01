import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Cart from './Cart'
import Catalogs from './Catalogs'

const Allroutes = () => {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path='/' element={<Catalogs />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default Allroutes
