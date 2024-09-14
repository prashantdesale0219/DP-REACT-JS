import { THEME_CHANGER } from "../actiontype"


const initialState={
    theme:"light"
}
export const reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case THEME_CHANGER:
            return{...state,theme:payload};
            default:
                return state;
    }

}