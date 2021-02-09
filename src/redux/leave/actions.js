import {GET_LEAVE_LIST_REQUEST, 
   SET_LEAVE_LIST_REQUEST,} from './constants';


export const getLeaveList =()=>({
  type:GET_LEAVE_LIST_REQUEST
})

export const setLeave = ( leave ) => ( {
  type: SET_LEAVE_LIST_REQUEST,
  payload: leave
} );