import {GET_HOLIDAY_LIST_REQUEST, 
   SET_HOLIDAY_LIST_REQUEST,} from './constants';


export const getHolidayList =()=>({
  type:GET_HOLIDAY_LIST_REQUEST
})

export const setHoliday = ( holiday ) => ( {
  type: SET_HOLIDAY_LIST_REQUEST,
  payload: holiday
} );