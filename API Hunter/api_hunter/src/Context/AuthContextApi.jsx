import { createContext, useState } from "react"

const authData = {
    isAuth:false,
    token:null
}
export const AuthContext = createContext()
function AuthContextProvider({children}) {
    const [auth,setAuth] = useState(authData)
    const loginUser = (value)=>{
        setAuth({isAuth:true,token:value})
    }
    const logoutUser = ()=>{
        setAuth({isAuth:false,token:null})
    }
    return <AuthContext.Provider value={{auth,loginUser,logoutUser}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;
