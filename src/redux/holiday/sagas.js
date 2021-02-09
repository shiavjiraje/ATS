import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../helpers/restApi';
import * as actions from './actions';
import {
    GET_HOLIDAY_LIST_REQUEST,
    //SET_CLIENT_LIST_REQUEST
} from './constants'


function* getHolidayList () {
    try {
        const response = yield  call( api.getHoliday );
       if (response.data && response.data.Data) {
        yield put( actions.setHoliday( response.data.Data ) );
        //console.log(response.data, "Require saga working")
       }
       else{
        yield put( actions.setHoliday( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
// function* setHoliday( action ){
//     try {
//         const result = yield call( api.setHoliday, action.payload );
//         yield put( actions.setHoliday( result.data ) );
//         yield call( getHolidayList );
//     } catch (error) {
//         console.log(error);
       
//     }
// }
function* watchGetHolidayRequest(){
    yield takeEvery( GET_HOLIDAY_LIST_REQUEST, getHolidayList );
}

function* holidaySagas() {
    yield all([
        fork( watchGetHolidayRequest ),
    ]);
}

export default holidaySagas;
