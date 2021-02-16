import {GET_RPR_LIST_REQUEST, 
   SET_RPR_LIST_REQUEST,GET_DATEWISE_LIST_REQUEST, SET_DATEWISE_LIST_REQUEST, GET_MONTHCOUNT_LIST_REQUEST, SET_MONTHCOUNT_LIST_REQUEST,
  GET_TODAY_LIST_REQUEST, SET_TODAY_LIST_REQUEST, GET_REVENU_LIST_REQUEST, SET_REVENU_LIST_REQUEST} from './constants';



//date wise report
export const getDatewiseReportList =()=>({
  type:GET_DATEWISE_LIST_REQUEST
});
export const setDatewiseReport = ( datewsiereport ) => ( {
  type: SET_DATEWISE_LIST_REQUEST,
  payload: datewsiereport
} );

//Month count report
export const getMonthCountReportList =()=>({
  type:GET_MONTHCOUNT_LIST_REQUEST
});
export const setMonthCountReport = ( monthcountreport ) => ( {
  type: SET_MONTHCOUNT_LIST_REQUEST,
  payload: monthcountreport
} );

//Today report
export const getTodayReportList =()=>({
  type:GET_TODAY_LIST_REQUEST
});
export const setTodayReport = ( todayrepoert ) => ( {
  type: SET_TODAY_LIST_REQUEST,
  payload: todayrepoert
} );

//Revenu report
export const getRevenuReportList =()=>({
  type:GET_REVENU_LIST_REQUEST
})

export const setRevenuReport = ( revenureport ) => ( {
  type: SET_REVENU_LIST_REQUEST,
  payload: revenureport
} );

//requirement report
export const getReqReportList =()=>({
  type:GET_RPR_LIST_REQUEST
});
export const setReqReport = ( reqreport ) => ( {
  type: SET_RPR_LIST_REQUEST,
  payload: reqreport
} );