import axios from "axios";
import apiConfig from "../config.json"

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
    (response) => response,
    (error) => {
        return Promise.reject(error)
    }
)