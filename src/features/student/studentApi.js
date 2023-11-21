import { apiSlice } from "../api/apiSlice";

export const studentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudent: builder.query({
      query: (id) => `/student_login/${id}`,
    }),
    getStudentForm: builder.query({
      query: (query_id) => `/student_form/${query_id}`,
    }),
    addStudentForm: builder.mutation({
      query: (data) => ({
        url: "/student_form",
        method: "POST",
        body: data,
      }),
    }),
    updateStudentForm: builder.mutation({
      query: (data) => ({
        url: "/student_form",
        method: "PUT",
        body: data,
      }),
    }),
    addContactMessage: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
    getContactMessages: builder.query({
      query: () => `/contact`,
    }),
    addVisaDocument: builder.mutation({
      query: (data) => ({
        url: "/visa_application",
        method: "POST",
        body: data,
      }),
    }),
    getAllStudents: builder.query({
      query: (id) => `/auth_users/${id}`,
    }),
  }),
});

export const {
  // queries
  useGetStudentQuery,
  useGetStudentFormQuery,
  // posts
  useAddStudentFormMutation,
  // PUT
  useUpdateStudentFormMutation,
  useAddContactMessageMutation,
  useGetContactMessagesQuery,
  useAddVisaDocumentMutation,
  useGetAllStudentsQuery,
} = studentApi;
