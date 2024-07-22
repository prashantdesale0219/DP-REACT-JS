import React, { useState } from 'react'
import axios from 'axios';
const Login = () => {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')


  const submitForm=(e)=>{
    e.preventDefault()
    let userData = {email,password}

    axios.post('https://reqres.in/api/login',userData)
    .then((response)=>{console.log(response.data.token)
      localStorage.setItem("Token",response.data.token)
    }).catch((error)=>{ console.log(error)})
  }
  return (
    <div>
      <h1>LOGIN ACCOUNT</h1>
      <form action="" onSubmit={(e)=>submitForm(e)}>
        <input type="email" style={{height:"30px",width:"300px"}} placeholder="UserEmail" onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
        <input type="password" style={{height:"30px",width:"300px"}} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
        <input type="submit" style={{height:"30px",width:"150px"}}/> <br /><br />
      </form>
      <button style={{height:"25px",width:"100px"}} onClick={(e)=>{
        localStorage.removeItem("Token")
      }}>LOGOUT</button>
    </div>
  )
}

export default Login
