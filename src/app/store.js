import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import searchAndApplySlice from "../features/searchAndApply/searchAndApplySlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    searchAndApply: searchAndApplySlice,
  },
  //   devTools: process.env.NODE_ENV !== "production",
  devTools: false,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
});
