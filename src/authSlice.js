// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
