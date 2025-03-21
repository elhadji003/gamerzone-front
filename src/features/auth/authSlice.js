import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  } catch (error) {
    return true;
  }
};

const storedToken = localStorage.getItem("token");
const storedUser = JSON.parse(localStorage.getItem("user"));
const storedRole = localStorage.getItem("role");

const initialState = {
  user: storedToken && !isTokenExpired(storedToken) ? storedUser : null,
  token: storedToken && !isTokenExpired(storedToken) ? storedToken : null,
  role: storedToken && !isTokenExpired(storedToken) ? storedRole : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.access;
      state.role = action.payload.user.role;

      localStorage.setItem("token", action.payload.access);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("role", action.payload.user.role);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
