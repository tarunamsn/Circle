import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../type/state";
import { IAuthor } from "../../types/app";
import { authCheckAsync, loginAsync } from "../async/auth";

const storedToken = localStorage.getItem('token');
const initialIsLogin = storedToken ? true : false;

const initialState: IAuthState = {
    isLogin: initialIsLogin,
    token: storedToken || "",
    profile: {} as IAuthor,
};

export const authSlice = createSlice({
    name: "auth", initialState, reducers: {
        LOGIN: (state, action) => {
            console.log("FROM LOGIN ACTION", action.payload);

            state.isLogin = true;
        },
        SET_LOGOUT: (state) => {
            localStorage.removeItem("token");
            state.isLogin = false;
            state.token = "";
        },
        REGISTER: (state, action) => {
            console.log("FROM REGISTER ACTION", action.payload);
            state.isLogin = false;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.isLogin = true;
                state.token = action.payload;
            })
            .addCase(loginAsync.rejected, (_, action) => {
                console.log("rejected", action);
            })
            .addCase(loginAsync.pending, (_, action) => {
                console.log("pending", action);
            });

        builder
            .addCase(authCheckAsync.fulfilled, (state, action) => {
                state.isLogin = true;
                state.profile = action.payload;
            })
            .addCase(authCheckAsync.rejected, (_, action) => {
                console.log("rejected", action);
            })
            .addCase(authCheckAsync.pending, (_, action) => {
                console.log("pending", action);
            });
    },
});

export const { LOGIN, SET_LOGOUT } = authSlice.actions;

export default authSlice.reducer;