
import {GET_USER_LIST_REQUEST, 
   SET_USER_LIST_REQUEST, ADD_USER, ADD_USER_REQUEST, GET_ERROR} from './constants';


export const getUserList =()=>({
  type:GET_USER_LIST_REQUEST,
  
})

export const getUser = ( users ) => ( {
  type: SET_USER_LIST_REQUEST,
  payload: users
} );

export const setUser = ( user ) => ( {
  type: ADD_USER,
  payload: user
} );
export const setUserRquest = ( user ) => ( {
  type: ADD_USER_REQUEST,
  payload: user
} );
export const getError = ( error ) => ( {
  type: GET_ERROR,
  payload: error
} );