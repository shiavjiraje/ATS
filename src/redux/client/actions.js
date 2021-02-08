import {CREATE_CLIENT, CREATE_CLIENT_SUCCESS, GET_CLIENT_LIST_REQUEST, 
   SET_CLIENT_LIST_REQUEST,} from './constants';


export const getClientList =()=>({
  type:GET_CLIENT_LIST_REQUEST
})

export const setClientList = ( clients ) => ( {
  type: SET_CLIENT_LIST_REQUEST,
  payload: clients
} );

export const createClient = ( clients ) => ( {
  type: CREATE_CLIENT,
  payload: clients
} );
export const createClientSuccess = ( createclients ) => ( {
  type: CREATE_CLIENT_SUCCESS,
  payload: createclients
} );