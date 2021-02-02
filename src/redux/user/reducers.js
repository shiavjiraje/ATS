import { Types } from "./actions";

const INITAIL_STATE={
    items:[]
};
export default function users(state= INITAIL_STATE, action){
    //debugger;
    switch(action.type){
      
        case Types.GET_USERS_SUCCESS:
        //console.log('GET_USERS_SUCCESS ===',action.payload);
       return {...state,items:action.payload}
        //return state;
    
    default:
        return state;
    
    }
}