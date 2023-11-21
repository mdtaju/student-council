import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
  id: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.id = action.payload.id;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      state.id = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
