// ENDPOINT IMPORT
import { USER_REGISTER, USER_LOGIN, USER_DATA} from "./endpoints";

// LIBRARY IMPORT
import axios from "axios";

export const accountRegister = async (formData) => {
    try {
        const response = await axios.post(USER_REGISTER, formData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        const message = error.response.data;
        console.error("Error on request:", message);
        throw error;
    }
};


export const accountLogin = async (formData) => {
    try {
        const response = await axios.post(USER_LOGIN, formData);
        return response.data;
    } catch (error) {
        const message = error.response.data;
        console.error("Error on request:", message);
        throw error;
    }
}


export const accountData = async(formData) => {
    try {
        const response = await axios.get(USER_DATA, formData);
        return response.data;
    } catch (error) {
        const message = error.response.data;
        console.error("Error on request:", message);
        throw error;
    }
}