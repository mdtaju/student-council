import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
    // https://server-y29-p.applyversity.com
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
