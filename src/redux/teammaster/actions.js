import {GET_TEAM_LIST_REQUEST, 
   SET_TEAM_LIST_REQUEST,} from './constants';


export const getTeamList =()=>({
  type:GET_TEAM_LIST_REQUEST
})

export const setTeam = ( teams ) => ( {
  type: SET_TEAM_LIST_REQUEST,
  payload: teams
} );