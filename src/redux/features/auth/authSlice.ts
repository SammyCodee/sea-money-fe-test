import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Login {
    loading: boolean,
    userInfo: {},
    userToken: string | null,
    isSuccess: boolean,
    isAuthenticate: boolean
}

const initialState: Login = {
        loading: false,
        userInfo: {}, // for user object
        userToken: null, // for storing the JWT
        isSuccess: true, // for monitoring the registration process.
        isAuthenticate: false
    }

export const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
      authenticate: (state, action: PayloadAction<Login>) => {
        state.loading = action.payload.loading
        state.userInfo = action.payload.userInfo
        state.userToken = action.payload.userToken
        state.isSuccess = action.payload.isSuccess
        state.isAuthenticate = action.payload.isAuthenticate;
      },
    },
  });

export const { authenticate } = authSlice.actions;

export const authSelector = (state: RootState) => state.authSlice;

export default authSlice.reducer;