import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div style={{ border:"1px solid ", fontSize:"20px" , fontWeight:"500" , display:"flex" , justifyContent:"space-evenly" , padding:"10px"}}>
     <Link to="/" >Sign Up </Link>
     <Link to="/Login" >Login</Link>
     <Link to="/Task" >Task page</Link>
    </div>
  )
}

export default Navbar
