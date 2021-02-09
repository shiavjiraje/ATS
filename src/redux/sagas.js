// @flow
import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import layoutSaga from './layout/saga';
import appMenuSaga from './appMenu/saga';
import userSaga from './user/sagas';
import requirementSagas from './requirement/sagas';
import clientSagas from './client/sagas';
import recruiterSagas from './recruiter/sagas';
import attendanceSagas from './attendance/sagas';
import listSagas from './list/sagas';
import activitySagas from './activity/sagas';
import teamSagas from './teammaster/sagas';
import roleSagas from './role/sagas';
import leaveSagas from './leave/sagas';
import holidaySagas from './holiday/sagas';
export default function* rootSaga(getState: any): any {
    yield all( [
        authSaga(), 
        layoutSaga(), 
        appMenuSaga(), 
        userSaga(),
        requirementSagas(),
        clientSagas(),
       recruiterSagas(),
       attendanceSagas(),
       listSagas(),
       activitySagas(),
       teamSagas(),
       roleSagas(),
       leaveSagas(),
       holidaySagas(),
    ] );
}
