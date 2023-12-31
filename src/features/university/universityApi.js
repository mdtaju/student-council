import { apiSlice } from "../api/apiSlice";

export const universityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUniversity: builder.mutation({
      query: (data) => ({
        url: "/add_university",
        method: "POST",
        body: data,
      }),
    }),
    getUniversity: builder.query({
      query: () => "/add_university",
    }),
    getSingleUniversity: builder.query({
      query: (id) => `/get_single_university/${id}`,
    }),
    deleteUniversity: builder.mutation({
      query: (id) => ({
        url: `/add_university/${id}`,
        method: "DELETE",
      }),
    }),
    updateUniversity: builder.mutation({
      query: ({ data, id }) => ({
        url: `/add_university/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    updateUniversityAppReq: builder.mutation({
      query: (data) => ({
        url: "/update_university_app_requirement",
        method: "POST",
        body: data,
      }),
    }),
    updateUniversityFeatures: builder.mutation({
      query: (data) => ({
        url: "/update_university_features",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  // queries

  // posts
  useAddUniversityMutation,
  // get
  useGetUniversityQuery,
  useDeleteUniversityMutation,
  useGetSingleUniversityQuery,
  // update
  useUpdateUniversityMutation,
  useUpdateUniversityAppReqMutation,
  useUpdateUniversityFeaturesMutation,
} = universityApi;
