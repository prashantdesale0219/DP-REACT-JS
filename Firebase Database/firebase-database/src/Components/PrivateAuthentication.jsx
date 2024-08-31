import { React } from "react";
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../Services/Firebase";

const PrivateAuthentication = ({children}) => {
    const [user]= useAuthState(auth)
    if(!user){
        return <Navigate to="/login"/>
    }
  return children
}

export default PrivateAuthentication
