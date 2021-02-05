import {GET_USER_LIST_REQUEST,  SET_USER_LIST_REQUEST, ADD_USER_REQUEST, GET_ERROR} from './constants'

const INIT_STATE = {
    users: [],
    user:{},
    loading:false,
    error:''
}

export default( state = INIT_STATE, action ) => {
    switch( action.type ){
        case GET_USER_LIST_REQUEST:
            return{
                ...state,
                //requirement: action.payload,
                loading:true
            };
        case  SET_USER_LIST_REQUEST:
            return{
                ...state,
                users: action.payload,
                loading:false
            };
            case  ADD_USER_REQUEST:
            return{
                ...state,
                user: action.payload,
                loading:false
            };
            case GET_ERROR:
                return{
                    ...state,
                    error: action.payload
                };
        default:
            return state;
    }
};