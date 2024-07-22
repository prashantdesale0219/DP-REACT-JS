import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
   <div>
     <div style={{width:"100%",margin:"2% auto",display:"flex",justifyContent:"space-evenly",fontSize:"20px"}}>
      <NavLink to={"/home"} style={({isActive})=>{
        return isActive ? {color:"red",textDecoration:"none"}:{color:"black",textDecoration:"none"} ;}}>HOME</NavLink>
      <NavLink to={"/product"} style={({isActive})=>{
        return isActive ? {color:"red",textDecoration:"none"}:{color:"black",textDecoration:"none"} ;}}>PRODUCT</NavLink>
      <NavLink to={"/addproduct"} style={({isActive})=>{
        return isActive ? {color:"red",textDecoration:"none"}:{color:"black",textDecoration:"none"} ;}}>ADDPRODUCT</NavLink>
      <NavLink to={"/login"} style={({isActive})=>{
        return isActive ? {color:"red",textDecoration:"none"}:{color:"black",textDecoration:"none"} ;}}>LOGIN</NavLink>

    </div>
    <hr />
   </div>
    
  )
}

export default Navbar
