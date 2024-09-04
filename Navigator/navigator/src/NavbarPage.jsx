import React from 'react'
import { Link } from 'react-router-dom'

const NavbarPage = () => {
  return (
    <div style={{width:"100%",backgroundColor:"black",padding:"15px 0",display:"flex",justifyContent:"space-around"}}>
      <Link to={"/"} style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Home</Link>
      <Link to={"/about"} style={{textDecoration:"none",color:"white",fontSize:"20px"}}>About</Link>
      <Link to={"/product"} style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Product</Link>
      <Link to={"/login"} style={{textDecoration:"none",color:"white",fontSize:"20px"}}>Login</Link>

    </div>
  )
}

export default NavbarPage
