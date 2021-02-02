import {GET_CLIENT_LIST_REQUEST,  SET_CLIENT_LIST_REQUEST} from './constants'

const INIT_STATE = {
    clients: [],
    loading:false
}

export default( state = INIT_STATE, action ) => {
    switch( action.type ){
        case GET_CLIENT_LIST_REQUEST:
            return{
                ...state,
                //requirement: action.payload,
                loading:true
            };
        case  SET_CLIENT_LIST_REQUEST:
            return{
                ...state,
                clients: action.payload,
                loading:false
            };
        default:
            return state;
    }
};