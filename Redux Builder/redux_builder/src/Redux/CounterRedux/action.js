import { DECREMENT, INCREMENT, RESET } from "../actiontype"


export const handleAdd = ()=>{
    return {type:INCREMENT}
}

export const handleSub = ()=>{
    return {type:DECREMENT}
}

export const reset = ()=>{
    return {type:RESET}
}