// import bcrypt from "bcryptjs";
import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
// import jwt_decode from "jwt-decode";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth_users",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // const salt = bcrypt.genSaltSync(10);
        try {
          const result = await queryFulfilled;
          // const hashRole = bcrypt.hashSync(result.data.user, salt);
          // let decoded = jwt_decode(result?.data?.accessToken);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              // user: hashRole,
              // id: result.data.id,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result?.data?.accessToken,
              user: result?.data?.user,
              id: result?.data?.id,
            })
          );
        } catch (error) {
          // noting to do
        }
      },
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // const salt = bcrypt.genSaltSync(10);
          // const hashRole = bcrypt.hashSync(result.data.user, salt);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              // user: hashRole,
              // id: result.data.id,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result?.data?.user,
              id: result.data.id,
            })
          );
        } catch (error) {
          // nothing to do
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useUserLoginMutation } = authApi;
