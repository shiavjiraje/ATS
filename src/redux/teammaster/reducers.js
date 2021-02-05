import {GET_TEAM_LIST_REQUEST,  SET_TEAM_LIST_REQUEST} from './constants'

const INIT_STATE = {
    teams: [],
    loading:false
}

export default( state = INIT_STATE, action ) => {
    switch( action.type ){
        case GET_TEAM_LIST_REQUEST:
            return{
                ...state,
                //requirement: action.payload,
                loading:true
            };
        case  SET_TEAM_LIST_REQUEST:
            return{
                ...state,
                teams: action.payload,
                loading:false
            };
        default:
            return state;
    }
};