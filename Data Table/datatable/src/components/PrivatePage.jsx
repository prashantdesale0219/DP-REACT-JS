import React from 'react'

const PrivatePage = ({children}) => {
  let isAuth = localStorage.getItem("Token")
  if (!isAuth) {
    window.location.href="./login"
  }
    return children
   
}

export default PrivatePage
