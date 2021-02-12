import {GET_RPR_LIST_REQUEST,  SET_RPR_LIST_REQUEST, GET_DATEWISE_LIST_REQUEST, SET_DATEWISE_LIST_REQUEST,
GET_MONTHCOUNT_LIST_REQUEST, SET_MONTHCOUNT_LIST_REQUEST} from './constants'

const INIT_STATE = {
    reqreport: [],
    datewsiereport: [],
    loading:false,
    monthcountreport:[],
}

export default( state = INIT_STATE, action ) => {
    switch( action.type ){
        case GET_RPR_LIST_REQUEST:
            return{
                ...state,
                //requirement: action.payload,
                loading:true
            };
        case  SET_RPR_LIST_REQUEST:
            return{
                ...state,
                reqreport: action.payload,
                loading:false
            };
            case GET_DATEWISE_LIST_REQUEST:
            return{
                ...state,
                //requirement: action.payload,
                loading:true
            };
        case  SET_DATEWISE_LIST_REQUEST:
            return{
                ...state,
                datewsiereport: action.payload,
                loading:false
            };
            case GET_MONTHCOUNT_LIST_REQUEST:
                return{
                    ...state,
                    //requirement: action.payload,
                    loading:true
                };
            case  SET_MONTHCOUNT_LIST_REQUEST:
                return{
                    ...state,
                    monthcountreport: action.payload,
                    loading:false
                };
        default:
            return state;
    }
};