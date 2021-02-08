import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../helpers/restApi';
import * as actions from './actions';
import {
    CREATE_CLIENT,
    GET_CLIENT_LIST_REQUEST,
    //SET_CLIENT_LIST_REQUEST
} from './constants'


function* getClientList () {
    try {
        const response = yield  call( api.getClientList );
       if (response.data && response.data.Data) {
        yield put( actions.setClientList( response.data.Data ) );
        //console.log(response.data, "Require saga working")
       }
       else{
        yield put( actions.setClientList( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
function* setClient( action ){
    try {
        const result = yield call( api.setClient, action.payload );
        yield put( actions.createClientSuccess( result.data ) );
        yield call( getClientList );
        console.log(result);
    } catch (error) {
        console.log(error);
       
    }
}
function* watchGetClientRequest(){
    yield takeEvery( GET_CLIENT_LIST_REQUEST, getClientList );
}
function* watchSetClientRequest(){
    yield takeEvery( CREATE_CLIENT, setClient );
}


function* clientSagas() {
    yield all([
        fork( watchGetClientRequest ),
        fork(watchSetClientRequest),
    ]);
}

export default clientSagas;
