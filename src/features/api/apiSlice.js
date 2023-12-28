import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server-y29-p.applyversity.com",
    // https://server-y29-p.applyversity.com
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
