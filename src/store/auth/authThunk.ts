import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, isAxiosError } from "axios";
import { loginRequest, registerRequest } from "../../api/auth/authService";
import { LoginType, RegisterType } from "../../utils/types/types";

export const loginThunk = createAsyncThunk("auth/login", async (loginData: LoginType, { rejectWithValue }) => {
    try {
        const result = await loginRequest(loginData);
        localStorage.setItem("token", JSON.stringify(result.data))
        return result.data;
    } catch (e) {
        if (isAxiosError(e)) {
            const error = e as AxiosError<{
                status: number;
                message: string;
            }>;
            return rejectWithValue(error.response?.data.message);
        }
        return rejectWithValue("Something went wrong");
    }
})

export const registerThunk = createAsyncThunk("auth/register", async (registerData: RegisterType, { rejectWithValue }) => {
    try {
        const result = await registerRequest(registerData);
        localStorage.setItem("token", result.data)
        return result.data;
    } catch (e) {
        if (isAxiosError(e)) {
            const error = e as AxiosError<{
                status: number;
                message: string;
            }>;
            return rejectWithValue(error.response?.data.message);
        }
        return rejectWithValue("Something went wrong");
    }
})

export const logOutFunction = () => {
    window.location.pathname = "/";
    return localStorage.clear();
};