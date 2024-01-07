import { apiSlice } from "../api/apiSlice";

export const notesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addAssessmentNotes: builder.mutation({
      query: (data) => ({
        url: "/assessment_notes",
        method: "POST",
        body: data,
      }),
    }),
    getAssessmentNotes: builder.query({
      query: (id) => `/assessment_notes/${id}`,
    }),
  }),
});

export const { useAddAssessmentNotesMutation, useGetAssessmentNotesQuery } =
  notesApi;
