import {CREATE_TEAM, CREATE_TEAM_SUCCESS, GET_TEAM_LIST_REQUEST, 
   SET_TEAM_LIST_REQUEST,} from './constants';


export const getTeamList =()=>({
  type:GET_TEAM_LIST_REQUEST
})

export const setTeam = ( teams ) => ( {
  type: SET_TEAM_LIST_REQUEST,
  payload: teams
} );
export const createTeam = ( createteam ) => ( {
  type: CREATE_TEAM,
  payload: createteam
} );
export const createTeamSuccess = ( createteam ) => ( {
  type: CREATE_TEAM_SUCCESS,
  payload: createteam
} );