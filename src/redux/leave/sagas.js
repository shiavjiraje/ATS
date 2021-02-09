import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../helpers/restApi';
import * as actions from './actions';
import {
    GET_LEAVE_LIST_REQUEST,
    //SET_CLIENT_LIST_REQUEST
} from './constants'


function* getLeaveList () {
    try {
        const response = yield  call( api.getLeave );
       if (response.data && response.data.Data) {
        yield put( actions.setLeave( response.data.Data ) );
        //console.log(response.data, "Require saga working")
       }
       else{
        yield put( actions.setLeave( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
// function* setLeave( action ){
//     try {
//         const result = yield call( api.setLeave, action.payload );
//         yield put( actions.setLeave( result.data ) );
//         yield call( getLeaveList );
//     } catch (error) {
//         console.log(error);
       
//     }
// }
function* watchGetLeaveRequest(){
    yield takeEvery( GET_LEAVE_LIST_REQUEST, getLeaveList );
}

function* leaveSagas() {
    yield all([
        fork( watchGetLeaveRequest ),
    ]);
}

export default leaveSagas;
