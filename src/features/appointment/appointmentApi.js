import { apiSlice } from "../api/apiSlice";

export const appointmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addAppointment: builder.mutation({
      query: (data) => ({
        url: "/appointment",
        method: "POST",
        body: data,
      }),
    }),
    getAppointments: builder.query({
      query: () => `/appointment`,
    }),
    getAppointmentsForCounsellor: builder.query({
      query: (id) => `/appointment_assign/${id}`,
    }),
    getSingleAppointment: builder.query({
      query: (id) => `/get_single_appointment/${id}`,
    }),
    updateAppointment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/appointment/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    getAppointmentsForStudent: builder.query({
      query: (id) => `/get_appointment_for_student/${id}`,
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointment/${id}`,
        method: "DELETE",
      }),
    }),
    addAppointmentServiceType: builder.mutation({
      query: (data) => ({
        url: "/appointment_service_types",
        method: "POST",
        body: data,
      }),
    }),
    getAppointmentServiceTypes: builder.query({
      query: () => "/appointment_service_types",
    }),
    deleteAppointmentServiceType: builder.mutation({
      query: (id) => ({
        url: `/appointment_service_types/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  // posts
  useAddAppointmentMutation,
  useGetAppointmentsQuery,
  useUpdateAppointmentMutation,
  useGetAppointmentsForCounsellorQuery,
  useGetSingleAppointmentQuery,
  useGetAppointmentsForStudentQuery,
  useDeleteAppointmentMutation,
  useAddAppointmentServiceTypeMutation,
  useGetAppointmentServiceTypesQuery,
  useDeleteAppointmentServiceTypeMutation,
} = appointmentApi;
