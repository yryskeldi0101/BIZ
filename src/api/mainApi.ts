import axios from "axios";
import apiConfig from "../config.json"
import { logOutFunction } from "../store/auth/authThunk";

export const mainApi = axios.create({
    baseURL: apiConfig.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

mainApi.interceptors.request.use((config) => {
    const data = localStorage.getItem("token")
    const token = data ? JSON.parse(data).token : null
    if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`
    } else {
        config.headers.Authorization = ''
    }
    return config
})

mainApi.interceptors.response.use(
    function handleResponse(response: any) {
      return response;
    },
    function handleErrorResponse(error: any) {
      if (error) {
        if (error.status === 401) {
          logOutFunction()
          throw new Error('Error');
        }
      }
      return Promise.reject(error);
    }
  );