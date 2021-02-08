import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../helpers/restApi';
import * as actions from './actions';
import {
    CREATE_TEAM,
    GET_TEAM_LIST_REQUEST,
    //SET_TEAM_LIST_REQUEST
} from './constants'


function* getTeamList () {
    try {
        const response = yield  call( api.getTeamList );
       if (response.data && response.data.Data) {
        yield put( actions.setTeam( response.data.Data ) );
        //console.log(response.data, "Require saga working")
       }
       else{
        yield put( actions.setTeam( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
function* setTeam( action ){
    try {
        const result = yield call( api.setTeam, action.payload );
        yield put( actions.createTeamSuccess( result.data ) );
        yield call( getTeamList );
        console.log(result);
    } catch (error) {
        console.log(error);
       
    }
}
function* watchGetTeamRequest(){
    yield takeEvery( GET_TEAM_LIST_REQUEST, getTeamList );
}
function* watchSetTeamRequest(){
    yield takeEvery( CREATE_TEAM, setTeam );
}
function* teamSagas() {
    yield all([
        fork( watchGetTeamRequest ),
        fork( watchSetTeamRequest ),
    ]);
}

export default teamSagas;
