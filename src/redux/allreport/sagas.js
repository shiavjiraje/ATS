import { fork, takeEvery, call, put, all } from 'redux-saga/effects';
import * as api from '../../helpers/restApi';
import * as actions from './actions';
import {
    GET_RPR_LIST_REQUEST,
    GET_DATEWISE_LIST_REQUEST,
    GET_MONTHCOUNT_LIST_REQUEST
    //SET_CLIENT_LIST_REQUEST
} from './constants'

// requirement report
function* getReqReportList () {
    try {
        const response = yield  call( api.getReqReport );
       if (response.data && response.data.Data) {
        yield put( actions.setReqReport( response.data.Data ) );
        //console.log(response.data, "Require saga working")
       }
       else{
        yield put( actions.setReqReport( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
function* watchGetReqReportRequest(){
    yield takeEvery( GET_RPR_LIST_REQUEST, getReqReportList );
}
// datewise report
function* getDatewiseReportList () {
    try {
        const response = yield  call( api.getDatewiseReport );
       if (response.data && response.data.Data) {
        yield put( actions.setDatewiseReport( response.data.Data ) );
        //console.log(response.data, "Datewiseuire saga working")
       }
       else{
        yield put( actions.setDatewiseReport( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
function* watchGetDatewiseReportRequest(){
    yield takeEvery( GET_DATEWISE_LIST_REQUEST, getDatewiseReportList );
}
// Month count report
function* getMonthCountReportList () {
    try {
        const response = yield  call( api.getMonthCountReport );
       if (response.data && response.data.Data) {
        yield put( actions.setMonthCountReport( response.data.Data ) );
        //console.log(response.data, "MonthCountuire saga working")
       }
       else{
        yield put( actions.setMonthCountReport( [] ) );
       }
    } catch (error) {
        console.log(error);
    }
}
function* watchGetMonthCountReportRequest(){
    yield takeEvery( GET_MONTHCOUNT_LIST_REQUEST, getMonthCountReportList );
}
function* reqReportSagas() {
    yield all([
        fork( watchGetReqReportRequest ),
        fork( watchGetDatewiseReportRequest ),
        fork(watchGetMonthCountReportRequest),
    ]);
}

export default reqReportSagas;
