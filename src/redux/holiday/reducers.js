import {GET_HOLIDAY_LIST_REQUEST,  SET_HOLIDAY_LIST_REQUEST} from './constants'

const INIT_STATE = {
    holiday: [],
    loading:false
}

export default( state = INIT_STATE, action ) => {
    switch( action.type ){
        case GET_HOLIDAY_LIST_REQUEST:
            return{
                ...state,
                //requirement: action.payload,
                loading:true
            };
        case  SET_HOLIDAY_LIST_REQUEST:
            return{
                ...state,
                holiday: action.payload,
                loading:false
            };
        default:
            return state;
    }
};