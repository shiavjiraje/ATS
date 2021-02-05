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

 export const getClientList = () => {
   return api.get( '/client_master' );
};

export const setClient = ( clients ) => {
   return api.post( '/client_master', clients );
};
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
//User master 
export const getUserList = () => {
   return api.get( '/User_Master' );
};
export const setUser = (user) => {
   return api.post( '/User_Master',user);
};
//Role master 
export const getRoleList = () => {
   return api.get( '/UserRole_Master' );
};
/** Departamentos endpoints */
export const getDepartamentosList = () =>{
    return api.get( '/Requirement_Master' );
 };
 
 export const setDepartamento = ( departamento ) => {
    return api.post( '/Requirement_Master', departamento );
 };
 
/** Auth */
export const loginUser = ( token ) => {
   return api.post( '/login', {'GUID': token} );
};

export const getUserImage = ( userId ) => {
   return api.post( '/auth/userimage', { 'id': userId } );
}

/** Validate windows focus */
export const getWindowFocusRequest = ( token ) => {
   return api.get( `/auth/verifysession/${token}` );
};