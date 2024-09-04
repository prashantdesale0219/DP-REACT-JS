import React from 'react'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'

const LoginSignUp = () => {
  return (
    <div  style={{width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center",margin:"10% auto"}}>
      <LoginPage/>
        <SignUpPage/>
    </div>
  )
}

export default LoginSignUp
