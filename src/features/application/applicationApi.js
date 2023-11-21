import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addApplicationRequirementStatus: builder.mutation({
      query: (data) => ({
        url: "/application_form",
        method: "POST",
        body: data,
      }),
    }),
    addApplicationRequirementNoteAns: builder.mutation({
      query: (data) => ({
        url: "/application_form_note",
        method: "POST",
        body: data,
      }),
    }),
    addApplicationRequirementDocuments: builder.mutation({
      query: (data) => ({
        url: "/application_form_documents",
        method: "POST",
        body: data,
      }),
    }),
    addApplicationRequirementTimeline: builder.mutation({
      query: (data) => ({
        url: "/application_form_status_workflow",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddApplicationRequirementStatusMutation,
  useAddApplicationRequirementNoteAnsMutation,
  useAddApplicationRequirementDocumentsMutation,
  useAddApplicationRequirementTimelineMutation,
} = authApi;
