import axios from 'axios';
//import { setSession } from './authUtils';

const api = axios.create( {
    baseURL : 'http://144.48.250.235:98/api',  
} );

api.interceptors.response.use( 
    ( response ) => {
        return response;
    },
    ( error ) => {
        const originalRequest = error.config;
        let guid = localStorage.getItem( 'crolGUID' );
        delete api.defaults.headers.common['Authorization'];

        if( guid && error.response.status === 401 && !originalRequest._retry ) {
            originalRequest._retry = true;
            return axios
                .post( `http://144.48.250.235:98/api/auth`, { GUID: guid } )
                .then( ( res ) => {
                    if( res.status === 200 ){
                       // setSession( res.data.token, '' );
                        originalRequest.headers.Authorization = `Bearer ` + res.data.token;
                        return axios( originalRequest );
                    }
                } );
        }

        return Promise.reject( error );
    }
 );

export default api;