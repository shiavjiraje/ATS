import {GET_CLIENT_LIST_REQUEST, 
   SET_CLIENT_LIST_REQUEST,} from './constants';


export const getClientList =()=>({
  type:GET_CLIENT_LIST_REQUEST
})

export const setClient = ( clients ) => ( {
  type: SET_CLIENT_LIST_REQUEST,
  payload: clients
} );