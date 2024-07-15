import React, { useContext } from 'react'
import { theamcont } from '../context/Theamcontext'

const Button = () => {

    const {theamupdate}=useContext(theamcont)
   
  return (
    <div>
      <button onClick={theamupdate}>CHANGE THEAM</button>
    </div>
  )
}

export default Button
