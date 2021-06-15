/**
 * @param email
 */
import axios from "axios";
import apiConfig from "./apiConfig";
const  {apiUrl} = apiConfig;
export const loginServices = async (email,password) =>{
    let response = {
        success: true,
        data: {},
    };
    try {
        const data = {email,password};
        const dataResponse = await axios.post(`${apiUrl}usuarios/login`,data);
        response.data = dataResponse.data;
    } catch (error) {
        response.success = false;
        response.data = null;
        if(error?.response?.data?.message){
            alert(`Error ${error.response.data.message}`)
        }else{
            alert("Error inesperado");
        }
        
    }
    return response;
};

export const registroServices = async (email,password) =>{
    let response = {
        success: true,
        data: {},
    };
    try {
        const data = {email,password};
        const dataResponse = await axios.post(`${apiUrl}usuarios/sign-up`,data);
        response.data = dataResponse.data;
    } catch (error) {
        response.success = false;
        response.data = null;
        if(error?.response?.data?.message){
            alert(`Error ${error.response.data.message}`)
        }else{
            alert("Error inesperado");
        }
        
    }
    return response;
};