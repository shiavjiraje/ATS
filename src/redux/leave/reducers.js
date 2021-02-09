import {GET_LEAVE_LIST_REQUEST,  SET_LEAVE_LIST_REQUEST} from './constants'

const INIT_STATE = {
    leave: [],
    loading:false
}

export default( state = INIT_STATE, action ) => {
    switch( action.type ){
        case GET_LEAVE_LIST_REQUEST:
            return{
                ...state,
                //requirement: action.payload,
                loading:true
            };
        case  SET_LEAVE_LIST_REQUEST:
            return{
                ...state,
                leave: action.payload,
                loading:false
            };
        default:
            return state;
    }
};