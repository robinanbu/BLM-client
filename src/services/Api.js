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

const userLogin = (loginData) => axios.post("https://server-blm.onrender.com/api/v1/user/login", loginData);
console.log(userLogin)

export { userLogin };
