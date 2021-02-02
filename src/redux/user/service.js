import axios from 'axios';
export const getUsers=()=>{
    return axios.get("https://crolnom035restapi.azurewebsites.net/api/sucursales/list",{
        params:{
            limit:1000
        }
    })
};
export const createUser =(firstName, lastname)=>{
    return axios.post('https://crolnom035restapi.azurewebsites.net/api/sucursales',{
        firstName,
        lastname
    })
};