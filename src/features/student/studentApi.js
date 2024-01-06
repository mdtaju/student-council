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
    addStudentAssessment: builder.mutation({
      query: (data) => ({
        url: "/assessment",
        method: "POST",
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
    addPublicForm: builder.mutation({
      query: (data) => ({
        url: "/public_form",
        method: "POST",
        body: data,
      }),
    }),
    getAllForm: builder.query({
      query: () => `/public_form`,
    }),
    getSingleForm: builder.query({
      query: (id) => `/get_single_form/${id}`,
    }),
    getSingleFormAns: builder.mutation({
      query: (data) => ({
        url: "/get_single_form",
        method: "POST",
        body: data,
      }),
    }),
    deleteForm: builder.mutation({
      query: (data) => ({
        url: "/public_form",
        method: "DELETE",
        body: data,
      }),
    }),
    updateForm: builder.mutation({
      query: (data) => ({
        url: "/public_form",
        method: "PUT",
        body: data,
      }),
    }),
    addFormAns: builder.mutation({
      query: (data) => ({
        url: "/submit_form_ans_post",
        method: "POST",
        body: data,
      }),
    }),
    getAllFormAns: builder.query({
      query: (id) => `/submit_form_ans_post/${id}`,
    }),
    addAssessment: builder.mutation({
      query: (data) => ({
        url: "/assessment",
        method: "POST",
        body: data,
      }),
    }),
    getSingleAssessment: builder.query({
      query: (id) => `/assessment/${id}`,
    }),
    getAllAssessment: builder.query({
      query: () => `/get_all_assessment`,
    }),
    addAssessmentTags: builder.mutation({
      query: (data) => ({
        url: "/assessment_tags",
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
  useAddPublicFormMutation,
  useGetAllFormQuery,
  useDeleteFormMutation,
  useUpdateFormMutation,
  useGetSingleFormQuery,
  useAddFormAnsMutation,
  useGetAllFormAnsQuery,
  useGetSingleFormAnsMutation,
  useAddStudentAssessmentMutation,
  useAddAssessmentMutation,
  useGetSingleAssessmentQuery,
  useGetAllAssessmentQuery,
  useAddAssessmentTagsMutation,
} = studentApi;
