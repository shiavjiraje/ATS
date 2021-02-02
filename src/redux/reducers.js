// @flow

import { combineReducers } from 'redux';
import Layout from './layout/reducers';
import Auth from './auth/reducers';
import AppMenu from './appMenu/reducers';
import User from './user/reducers'
import Requirements from './requirement/reducers';
import Client from './client/reducers';
import Recruiter from './recruiter/reducers';
import Attendance from './attendance/reducers';
import List from './list/reducers';
import Activity from './activity/reducers';
export default combineReducers({
    Auth,
    AppMenu,
    Layout,
    User,
    Requirements,
    Client,
    Recruiter,
    Attendance,
    List,
    Activity
});
