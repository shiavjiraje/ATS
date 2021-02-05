import {GET_ROLE_LIST_REQUEST, 
   SET_ROLE_LIST_REQUEST,} from './constants';


export const getRoleList =()=>({
  type:GET_ROLE_LIST_REQUEST
})

export const setRole = ( role ) => ( {
  type: SET_ROLE_LIST_REQUEST,
  payload: role
} );