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

// const API = "http://localhost:3333";

const userLogin = (loginData) => axios.post(`${server_API1}/login`, loginData);
console.log(userLogin)

export { userLogin };
