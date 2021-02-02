import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as api from './service';
import * as action from './actions';
function * getUsers(){
    try{
        const result = yield call(api.getUsers);
        console.log(result)
        yield put(action.getUserSuccess({
            items:result.data
        }));
    }
    catch(e){
       console.log('e== getUsers saga ==',e);
    }
}
function * watchGetUsersRequest(){
    yield takeEvery(action.Types.GET_USERS_REQUEST, getUsers);
}
function * createUser(action){
    try{
        yield call(api.createUser, {firstName:action.payload.firstName, lastName:action.payload.lastName});
        yield call(getUsers);
    }
    catch{

    }
}
function * watchCreateUsersRequest(){
    yield takeLatest(action.Types.CREATE_USERS_REQUEST, createUser);
}
const userSaga = [
    fork(watchGetUsersRequest),
    fork(watchCreateUsersRequest)
]

export default userSaga;
