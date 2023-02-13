import jwtDecode from "jwt-decode";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthSliceStateProps, AuthResponseProps } from "../../types/auth";
import {
  getAccessToken,
  getIdToken,
  persistAuthTokens,
} from "../../services/token";
import { Auth0User } from "../../types/user";

/**
 * Get the required data from the local storage.
 */
const dataFromLocalStorage = {
  isLoggedIn: !!getAccessToken(),
  user: getIdToken() ? jwtDecode<Auth0User>(getIdToken()) : null,
};

/**
 * Auth initial state.
 */
const initialState: AuthSliceStateProps = {
  isLoggedIn: dataFromLocalStorage.isLoggedIn,
  isLoggingIn: false,
  error: "",
  currentAuth0User: dataFromLocalStorage?.user,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    },

    setAuthData: (state, action: PayloadAction<AuthResponseProps>) => {
      const user = jwtDecode(action.payload?.accessToken) as Auth0User;
      const { accessToken } = action.payload;

      persistAuthTokens({
        accessToken,
      });
      state.isLoggedIn = true;
      state.isLoggingIn = false;
      state.currentAuth0User = user;
    },

    setAuthError: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

// Action creators
export const { setIsLoggedIn, setAuthData, setAuthError } = authSlice.actions;
export default authSlice.reducer;
