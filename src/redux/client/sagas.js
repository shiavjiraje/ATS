import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../helpers/restApi';
import * as actions from './actions';
import {
    GET_CLIENT_LIST_REQUEST,
    //SET_CLIENT_LIST_REQUEST
} from './constants'


function* getClientList () {
    try {
        const response = yield  call( api.getClientList );
       if (response.data && response.data.Data) {
        yield put( actions.setClient( response.data.Data ) );
        //console.log(response.data, "Require saga working")
       }
       else{
        yield put( actions.setClient( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
// function* setClient( action ){
//     try {
//         const result = yield call( api.setClient, action.payload );
//         yield put( actions.setClient( result.data ) );
//         yield call( getClientList );
//     } catch (error) {
//         console.log(error);
       
//     }
// }
function* watchGetClientRequest(){
    yield takeEvery( GET_CLIENT_LIST_REQUEST, getClientList );
}

function* clientSagas() {
    yield all([
        fork( watchGetClientRequest ),
    ]);
}

export default clientSagas;
