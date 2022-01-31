// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

// Auth Slice
const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      console.log("isLogIn");
    },
    logout(state) {
      state.isAuthenticated = false;
      console.log("isLogOut");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
