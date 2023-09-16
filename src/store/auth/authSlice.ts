import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./authThunk";
import { InitialState, ROLES } from "../../utils/types/types";

const getInitialState = (): InitialState => {
    const json = localStorage.getItem("token")
    if (json) {
        const userData = JSON.parse(json)
        return {
            isAuthorized: true,
            token: userData.token,
            isLoading: false,
            role: userData.role,
        }
    }
    return {
        token: '',
        isAuthorized: false,
        isLoading: false,
        role: ROLES.GUEST,
    }
}
const initialState: InitialState = getInitialState();

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.isAuthorized = true;
                state.isLoading = false;
            })
            .addCase(loginThunk.pending, (state) => {
                state.isAuthorized = false;
                state.isLoading = true;
            })
            .addCase(loginThunk.rejected, (state) => {
                state.isAuthorized = false;
                state.isLoading = false;
            })
            .addCase(registerThunk.fulfilled, (state, { payload }) => {
                state.isAuthorized = true;
                state.isLoading = false;
                state.role = payload.role;
                state.token = payload.token
            })
            .addCase(registerThunk.pending, (state) => {
                state.isAuthorized = false;
                state.isLoading = true
            })
            .addCase(registerThunk.rejected, (state) => {
                state.isAuthorized = false;
                state.isLoading = true
            })
    },
});