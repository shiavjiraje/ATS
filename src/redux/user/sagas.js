import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../helpers/restApi';
import * as actions from './actions';
//import swal from 'sweetalert';
import {
    ADD_USER,
    GET_USER_LIST_REQUEST,
    //SET_USER_LIST_REQUEST
} from './constants'


function* getUserList () {
    try {
        const response = yield  call( api.getUserList );
       if (response.data && response.data.Data) {
        yield put( actions.getUser( response.data.Data ) );
        //console.log(response.data, "Require saga working")
       }
       else{
        yield put( actions.getUser( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
function* setUser( action ){
    try {
        const result = yield call( api.setUser, action.payload );
        yield put( actions.setUserRquest( result.data ) );
        yield call( getUserList );
        console.log(result.data);
    } catch (error) {
        console.log(error);
       
    }
}
function* watchGetUserRequest(){
    yield takeEvery( GET_USER_LIST_REQUEST, getUserList );
}
function* watchSetUser(){
    yield takeEvery( ADD_USER, setUser );
}
function* userSagas() {
    yield all([
        fork( watchGetUserRequest ),
        fork( watchSetUser ),
    ]);
}

export default userSagas;
