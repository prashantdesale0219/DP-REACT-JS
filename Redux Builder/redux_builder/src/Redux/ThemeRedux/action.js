import { THEME_CHANGER } from "../actiontype"

export const darktheam =()=>{
    return{type:THEME_CHANGER,payload:"dark"}
}

export const lighttheam =()=>{
    return{type:THEME_CHANGER,payload:"light"}
}