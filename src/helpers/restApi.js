import api from './axios';


 export const getRequirementList = () => {
    return api.get( '/Requirement_Master' );
 };
 export const getCriticleRequirementList = () => {
   return api.get( '/CriticalRequirement' );
};

 export const editRequirement = () => {
    return api.get( `/Requirement_Master` );
 };
//Client
 export const getClientList = () => {
   return api.get( '/client_master' );
};

export const setClient = ( createclients ) => {
   return api.post( '/client_master', createclients );
};
// recruter master
export const getRecruiterList = () => {
   return api.get( '/Recruiter_Mst' );
};

export const setRecruiter = ( recruiters ) => {
   return api.post( '/Recruiter_Mst', recruiters );
};


/** Puestos endpoints */

export const getRqsList = () => {
   return api.get( '/Recruiter_Mst' );
};

export const setRqs = ( puesto ) => {
   return api.post( '/Recruiter_Mst', puesto );
};
export const getAttendance = () => {
   return api.get( '/Attendance_Master' );
};
export const setAttendance = ( attendance ) => {
   return api.post( 'Attendance_Master', attendance );
};

export const getListList = () => {
   return api.get( '/OfferList' );
};

//offer List
export const getOfferList = () => {
   return api.get( '/OfferList' );
};
//ViewToBeJoin
export const getViewToBeJoinList = () => {
   return api.get( '/TobeJoinList' );
};
//JoinList
export const getJoinList = () => {
   return api.get( '/GetStartList' );
};
//BDList
export const getBDList = () => {
   return api.get( '/BDList' );
};

//ACtivity Pages Daily Target 
//Daily Target List
export const getDailyTargetList = () => {
   return api.get( '/DailyTarget' );
};
//TodaysInterview
export const getTodaysInterviewtList = () => {
   return api.get( '/TodaysInterview' );
};
//Month Offer
export const getMonthOfferList = () => {
   return api.get( '/MonthOffer' );
};
//Month to Be Join
export const getMonthToBeJoinList = () => {
   return api.get( '/MonthToBeJoin' );
};
//ATS Activity
export const getAtsActivityList = () => {
   return api.get( '/ActivityMaster' );
};
//Team master
export const getTeamList = () => {
   return api.get( '/TeamMaster' );
};
export const setTeam = (createteam) => {
   return api.post( '/TeamMaster',createteam );
};
//User master 
export const getUserList = () => {
   return api.get( '/User_Master' );
};
export const setUser = (user) => {
   return api.post( '/User_Master',user);
};
// Team Lead Master 
export const getTeamLead = () => {
   return api.get( '/TeamLead_Master' );
};
//Role master 
export const getRoleList = () => {
   return api.get( '/UserRole_Master' );
};
//Role master 
export const createRole = (createrole) => {
   return api.post( '/UserRole_Master',createrole );
};
//leave
export const getLeave = () => {
   return api.get( '/LeaveMaster?username=ajay.zala@archesoftronix.com', );
};
//holiday
export const getHoliday = () => {
   return api.get( '/HolidayMaster', );
};
//client wise sales
export const getCwsList = () => {
   return api.get( '/SalesClientMaster' );
};
export const setCws = ( createcws ) => {
   return api.post( '/SalesClientMaster', createcws );
};
//sales user list
export const getSalesUserList=()=>{
   return api.get('/SalesUser');
}
//requirement progress report 
export const getReqReport=()=>{
   return api.get('/RequirementProgressReport');
}
//datewsie report 
export const getDatewiseReport=()=>{
   return api.get('/DateWiseCountReportMaster?username=ajay.zala@archesoftronix.com&ssd=2021-01-12&eed=2021-02-12');
}
// month count report 
//datewsie report 
export const getMonthCountReport=()=>{
   return api.get('/MonthReport?username=ajay.zala@archesoftronix.com');
}
//today report 
export const getTodayReport=()=>{
   return api.get('/TodayReport?username=ajay.zala@archesoftronix.com');
}
//today report 
export const getRevenuReport=()=>{
   return api.get('/RevenueReportDateWise?username=ajay.zala@archesoftronix.com&ssd=2020-01-12&eed=2021-02-12');
}
// Sales Revenue 
export const getRevenueList = () => {
   return api.get( '/SalesMonthlyRevenueReport' );
};
export const setRevenue = (revenue) => {
   return api.post( '/SalesMonthlyRevenueReport',revenue);
};
// Sales Month Report 
export const getMonthList = () => {
   return api.get( '/SalesMonthlyReport' );
};
export const setMonth = (month) => {
   return api.post( '/SalesMonthlyReport',month);
};
// Sales Call Report 
export const getCallList = () => {
   return api.get( '/SalesClientCallRecordMaster?username=jigar.jadav@archesoftronix.com' );
};
export const setCall = (call) => {
   return api.post( '/SalesClientCallRecordMaster',call);
};
/** Departamentos endpoints */
export const getDepartamentosList = () =>{
    return api.get( '/Requirement_Master' );
 };
 
 export const setDepartamento = ( departamento ) => {
    return api.post( '/Requirement_Master', departamento );
 };
 
/** Auth */
export const loginUser = ( username,password) => {
   return api.post( '/login',{username,password});
}; 

export const getUserImage = ( userId ) => {
   return api.post( '/auth/userimage', { 'id': userId } );
}

/** Validate windows focus */
export const getWindowFocusRequest = ( token ) => {
   return api.get( `/auth/verifysession/${token}` );
};