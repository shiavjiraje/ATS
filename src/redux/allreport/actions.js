import {GET_RPR_LIST_REQUEST, 
   SET_RPR_LIST_REQUEST,GET_DATEWISE_LIST_REQUEST, SET_DATEWISE_LIST_REQUEST, GET_MONTHCOUNT_LIST_REQUEST, SET_MONTHCOUNT_LIST_REQUEST} from './constants';

//requirement report
export const getReqReportList =()=>({
  type:GET_RPR_LIST_REQUEST
})

export const setReqReport = ( reqreport ) => ( {
  type: SET_RPR_LIST_REQUEST,
  payload: reqreport
} );
//date wise report
export const getDatewiseReportList =()=>({
  type:GET_DATEWISE_LIST_REQUEST
})

export const setDatewiseReport = ( datewsiereport ) => ( {
  type: SET_DATEWISE_LIST_REQUEST,
  payload: datewsiereport
} );
//Month count report
export const getMonthCountReportList =()=>({
  type:GET_MONTHCOUNT_LIST_REQUEST
})

export const setMonthCountReport = ( monthcountreport ) => ( {
  type: SET_MONTHCOUNT_LIST_REQUEST,
  payload: monthcountreport
} );