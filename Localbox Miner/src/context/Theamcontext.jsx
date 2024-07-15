// CPC :CREATE / PROVIDE /CONSUME
import { createContext, useState } from "react";

export const theamcont=createContext()


export function Theamcontextprovider({children}){
    const [theam,setheam]=useState("light")
    const theamupdate=()=>{
        setheam(theam=="light"? "dark":"light")

    }
    return(
        <theamcont.Provider value={{theam,theamupdate}}>{children}</theamcont.Provider>
    )
}