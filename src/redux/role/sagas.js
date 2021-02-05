import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../helpers/restApi';
import * as actions from './actions';
import {
    GET_ROLE_LIST_REQUEST,
    //SET_ROLE_LIST_REQUEST
} from './constants'


function* getRoleList () {
    try {
        const response = yield  call( api.getRoleList );
       if (response.data && response.data.Data) {
        yield put( actions.setRole( response.data.Data ) );
        //console.log(response.data, "Require saga working")
       }
       else{
        yield put( actions.setRole( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
// function* setRole( action ){
//     try {
//         const result = yield call( api.setRole, action.payload );
//         yield put( actions.setRole( result.data ) );
//         yield call( getRoleList );
//     } catch (error) {
//         console.log(error);
       
//     }
// }
function* watchGetRoleRequest(){
    yield takeEvery( GET_ROLE_LIST_REQUEST, getRoleList );
}

function* roleSagas() {
    yield all([
        fork( watchGetRoleRequest ),
    ]);
}

export default roleSagas;
