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
    addAllowStudentVisa: builder.mutation({
      query: (data) => ({
        url: "/visa_application",
        method: "PUT",
        body: data,
      }),
    }),
    deleteAllowStudentVisa: builder.mutation({
      query: (data) => ({
        url: "/visa_application",
        method: "DELETE",
        body: data,
      }),
    }),
    deleteVisaApplication: builder.mutation({
      query: (data) => ({
        url: "/visa_application_delete",
        method: "DELETE",
        body: data,
      }),
    }),
    getAllStudents: builder.query({
      query: (id) => `/auth_users/${id}`,
    }),
    getVisaForStudent: builder.query({
      query: (id) => `/get_visa_for_student/${id}`,
    }),
    addVisaDocumentFromStudent: builder.mutation({
      query: (data) => ({
        url: "/visa_documents_from_student",
        method: "POST",
        body: data,
      }),
    }),
    addVisaStatusUpdate: builder.mutation({
      query: (data) => ({
        url: "/status_update",
        method: "POST",
        body: data,
      }),
    }),
    deleteVisaSubmittedFile: builder.mutation({
      query: (data) => ({
        url: "/delete_student_upload",
        method: "DELETE",
        body: data,
      }),
    }),
    getVisaByCountry: builder.query({
      query: (id) => `/get_visa_by_country/${id}`,
    }),
    addVisaDocumentFiles: builder.mutation({
      query: (data) => ({
        url: "/add_visa_documents",
        method: "POST",
        body: data,
      }),
    }),
    deleteVisaDocuments: builder.mutation({
      query: (data) => ({
        url: "/delete_visa_documents",
        method: "DELETE",
        body: data,
      }),
    }),
    updateVisaApplication: builder.mutation({
      query: (data) => ({
        url: "/update_visa_application",
        method: "POST",
        body: data,
      }),
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
  useAddAllowStudentVisaMutation,
  useDeleteAllowStudentVisaMutation,
  useDeleteVisaApplicationMutation,
  useGetVisaForStudentQuery,
  useGetAllStudentsQuery,
  useAddVisaDocumentFromStudentMutation,
  useAddVisaStatusUpdateMutation,
  useDeleteVisaSubmittedFileMutation,
  useGetVisaByCountryQuery,
  useAddVisaDocumentFilesMutation,
  useDeleteVisaDocumentsMutation,
  useUpdateVisaApplicationMutation,
} = studentApi;
