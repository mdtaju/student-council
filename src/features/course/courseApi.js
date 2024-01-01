import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleCourse: builder.query({
      query: (id) => `/get_single_course/${id}`,
    }),
    getCourses: builder.mutation({
      query: (data) => ({
        url: "/course",
        method: "POST",
        body: data,
      }),
    }),
    addCourseShortList: builder.mutation({
      query: (data) => ({
        url: "/course_short_list",
        method: "POST",
        body: data,
      }),
    }),
    deleteCourseShortList: builder.mutation({
      query: (data) => ({
        url: "/course_short_list",
        method: "DELETE",
        body: data,
      }),
    }),
    getCourseShortList: builder.query({
      query: (student_id) => `/course_short_list/${student_id}`,
    }),
    getAllCourseShortListForAdmin: builder.query({
      query: () => `/get_all_course_shortlist_admin`,
    }),
    getAllCourseShortlist: builder.query({
      query: (id) => `/get_all_course_shortlist/${id}`,
    }),
    updateCourseShortList: builder.mutation({
      query: (data) => ({
        url: "/course_short_list",
        method: "PATCH",
        body: data,
      }),
    }),
    addAppointmentReplyMessage: builder.mutation({
      query: (data) => ({
        url: "/appointment_reply",
        method: "PATCH",
        body: data,
      }),
    }),
    addAppointmentPriorityStatus: builder.mutation({
      query: (data) => ({
        url: "/appointment_reply",
        method: "POST",
        body: data,
      }),
    }),
    getCourseListForUpdate: builder.query({
      query: (id) => `/course_for_update/${id}`,
    }),
    courseUpdate: builder.mutation({
      query: (data) => ({
        url: "/course_for_update",
        method: "PUT",
        body: data,
      }),
    }),
    deleteCourses: builder.mutation({
      query: (data) => ({
        url: "/course_for_update",
        method: "DELETE",
        body: data,
      }),
    }),
    addCoursesToServer: builder.mutation({
      query: (data) => ({
        url: "/course_for_update",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetSingleCourseQuery,
  useGetCoursesMutation,
  useAddCourseShortListMutation,
  useDeleteCourseShortListMutation,
  useGetCourseShortListQuery,
  useGetAllCourseShortlistQuery,
  useUpdateCourseShortListMutation,
  useAddAppointmentPriorityStatusMutation,
  useAddAppointmentReplyMessageMutation,
  useGetAllCourseShortListForAdminQuery,
  useGetCourseListForUpdateQuery,
  useCourseUpdateMutation,
  useDeleteCoursesMutation,
  useAddCoursesToServerMutation,
} = courseApi;
