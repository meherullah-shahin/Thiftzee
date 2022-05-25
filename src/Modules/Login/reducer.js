import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  authResult: {},
  userData: {}
};

export const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    authResultFetching: state => {
      state.fetchingAuthResult = true;
    },
    resetAuth: state => {
      state.fetchingAuthResult = false;
    },
    setAuthResult: (state, action) => {
      state.authResult = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    logout: state => {
      state = initialState;
    }
  }
});

export const {
  setToken,
  logout,
  setAuthResult,
  setUserData,
  authResultFetching,
  resetAuth
} = loginSlice.actions;

export default loginSlice.reducer;