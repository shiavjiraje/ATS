import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as FeatherIcon from 'react-feather';

import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';
import Hr from '../pages/hr/Hr';
import Attendance from '../pages/attendance/Attedance';
import Activity from '../pages/acyivity/Activity';
import ViewUser from '../pages/master/usermaster/ViewUser';

//clientwisesales
import clientwisesales from '../pages/clientwisesales/ClientWiseSales';
// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
// dashboard
//const DashboardOld = React.lazy(() => import('../pages/dashboardOld'));
//DashboardNew
const Dashboard =React.lazy(()=> import('../pages/dashboard/Dashboard'));
//working page
const dashboardOld =React.lazy(()=>import('../pages/dashboardOld/index'));

//Requirement
const Requirement =React.lazy(()=>import('../pages/requirement/Requirement'));
//List
const List =React.lazy(()=>import('../pages/list/List'));
//User
const Masters = React.lazy(()=> import('../pages/master/Masters'));
//Report
const Report = React.lazy(()=> import('../pages/report/Report'));
// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
           // console.log('loggedInUser=',loggedInUser);
            //console.log('roles',roles);
            //console.log(' roles.indexOf(loggedInUser.role) ', roles.indexOf(loggedInUser.Role) )
            // check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.Role) === -1) {
               //  console.log('user role check', roles);
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: '/' }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute,
};
//dashboard
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Dashboard',
    icon: FeatherIcon.Home,
    component: Dashboard,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
    route: PrivateRoute
};
//Requirement
const requirementRoutes= {
    path: '/reqirement',
    name: 'Requirement',
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
    component: Requirement,
    route: PrivateRoute,
};
//List
const listRoutes= {
    path: '/list',
    name: 'List',
    component: List,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
    route: PrivateRoute,
};
//Attendance
const attendanceRoutes= {
    path: '/attendance',
    name: 'Attendance',
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
    component: Attendance,
    route: PrivateRoute,
};
//activity
const activityRoutes = {
    path: '/activity',
    name: 'Activity',
    icon: FeatherIcon.Activity,
    component: Activity,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
    route: PrivateRoute
};
//Hr
const hrRoutes = {
    path: '/hr',
    name: 'HR',
    icon: FeatherIcon.Aperture,
    component: Hr,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
    route: PrivateRoute
};
// Master

const masterRoutes = {
    path: '/master',
    name: 'Master',
    icon: FeatherIcon.FileText,
    component: Masters,
    route: PrivateRoute,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
};
//View user
const viewUserRoutes= {
    path: '/viewuser',
    name: 'View User',
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
    component: ViewUser,
    route: PrivateRoute,
};
//clientwisesales
const clientWiseSalesRoutes = {
    path: '/clientwisesales',
    name: 'Client Wise Sales',
    icon: FeatherIcon.User,
    component: clientwisesales,
    route: PrivateRoute,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
};
//Report
const reportRoutes = {
    path: '/report',
    name: 'Report',
    icon: FeatherIcon.FileText,
    component: Report,
    route: PrivateRoute,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
};
//Revenue
const revenueRoutes = {
    path: '/revenue',
    name: 'Sales',
    icon: FeatherIcon.Shield,
    component: dashboardOld,
    route: PrivateRoute,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
};
//Aspl
const asplRoutes = {
    path: '/salaryslip',
    name: 'Salary Slip',
    icon: FeatherIcon.Download,
    component: dashboardOld,
    route: PrivateRoute,
    roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
};
//Rt
// const rtRoutes = {
//     path: '/rt',
//     name: 'RT',
//     icon: FeatherIcon.Download,
//     component: dashboardOld,
//     route: PrivateRoute,
//     roles:["Admin","Manager","Sales","VP","Teamlead","Recruiter","IT","HR","Account","Contract",],
// };

// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [    
    authRoutes,
    rootRoute,
    dashboardRoutes,
    activityRoutes,
    hrRoutes,
    masterRoutes,
    clientWiseSalesRoutes,
    reportRoutes,
    revenueRoutes,
    asplRoutes,
    //rtRoutes,
    requirementRoutes,
    attendanceRoutes,
    listRoutes,
    viewUserRoutes
];

const authProtectedRoutes = [dashboardRoutes, activityRoutes, hrRoutes, masterRoutes, clientWiseSalesRoutes,reportRoutes,revenueRoutes,asplRoutes];
const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, authProtectedRoutes, allFlattenRoutes };
