import axios from "axios";
import { server_API } from "../server";
import { server_API1 } from "../server";

export const requestBlood = async (formData) => {
  try {
    const response = await axios.post(`${server_API}/post-blood-data`,formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

// const userLogin = (loginData) => axios.post(`${server_API1}/login`, loginData);
// console.log(userLogin)
// export { userLogin };

export const userRegister = async (registerData) => {
  try {
    const response = await axios.post(`${server_API1}/register`,registerData);
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    const eM =error.response?.data?.message || "an unknown error occured";
    alert(eM)
    console.log(eM)
    throw new Error(eM);
  }
}

const userLogin = async (loginData) => {
  try {
    const response = await axios.post(`${server_API1}/login`,loginData);
    return response;
  } catch (error) {
    console.error("Error submitting form:", error);
    const status = error.response?.status; 
    const message =error.response?.data?.message || "an unknown error occured";
    throw {status,message};
  }
}
export { userLogin };
