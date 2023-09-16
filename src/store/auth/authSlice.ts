import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./authThunk";
import { InitialState, ROLES } from "../../utils/types/types";

const data = localStorage.getItem("token");

const getInitialState = (): InitialState => {
    if (data) {
        const parsed = JSON.parse(data);
        return {
            role: parsed.role,
            token: parsed.token,
            isAuthorized: false,
            isLoading: false,
        };
    } else {
        return {
            role: ROLES.GUEST,
            token: "",
            isAuthorized: false,
            isLoading: false,
        };
    }
};
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