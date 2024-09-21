import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextApi";

function PrivateRoute({children}) {
    const {auth}= useContext(AuthContext)
    return !auth.isAuth ? <Navigate to="/login" /> : children
}

export default PrivateRoute;
