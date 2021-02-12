// @flow

import { combineReducers } from 'redux';
import Layout from './layout/reducers';
import Auth from './auth/reducers';
import AppMenu from './appMenu/reducers';
import Users from './user/reducers'
import Requirements from './requirement/reducers';
import Client from './client/reducers';
import Recruiter from './recruiter/reducers';
import Attendance from './attendance/reducers';
import List from './list/reducers';
import Activity from './activity/reducers';
import Teams from './teammaster/reducers';
import Role from './role/reducers';
import Leave from './leave/reducers';
import Holiday from './holiday/reducers';
import CWS from './clientwisesales/reducers';
import SalesUser from './salesuser/reducers';
import Report from'./allreport/reducers';
export default combineReducers({
    Auth,
    AppMenu,
    Layout,
    Users,
    Requirements,
    Client,
    Recruiter,
    Attendance,
    List,
    Activity,
    Teams,
    Role,
    Leave,
    Holiday,
    CWS,
    SalesUser,
    Report
});
