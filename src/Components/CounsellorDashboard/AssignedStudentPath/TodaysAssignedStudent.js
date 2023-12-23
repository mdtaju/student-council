// import React from "react";

// const TodaysAssignedStudent = () => {
//   return <div>TodaysAssignedStudent</div>;
// };

// export default TodaysAssignedStudent;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetAppointmentsForCounsellorQuery,
  useUpdateAppointmentMutation,
} from "../../../features/appointment/appointmentApi";
import useAuth from "../../../hooks/useAuth";
import usePath from "../../../hooks/usePath";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

const AssignedStudent = () => {
  const auth = useAuth();
  const pathName = usePath();
  const { data, refetch } = useGetAppointmentsForCounsellorQuery(auth?.id);
  const [updateAppointment] = useUpdateAppointmentMutation();
  const [allAppointments, setAllAppointments] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [counsellorId, setCounsellorId] = useState("");
  // message states
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    if (data) {
      const assignAppointments = data.filter(
        (af) => af.action_type === "Assigned"
      );
      setAllAppointments(assignAppointments);
    }
  }, [data]);

  return (
    <div className="w-full min-h-screen grid place-items-center">
      {/* snack message */}
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <div className="w-[400px] sm:w-[600px] md:w-[980px] min-h-[700px] bg-white shadow-md rounded-md p-6">
        <h1 className="text-center mb-6 text-lg font-semibold text-gray-700">
          Active Appointments
        </h1>
        <DataTableMui
          rows={allAppointments}
          //     getRowId={(row) => row.query_id}
          columns={[
            {
              field: "query_id",
              minWidth: 150,
              headerName: "Student ID",
              renderCell: (params) => (
                <Link
                  target="_blank"
                  className="hover:text-blue-500 hover:underline"
                  to={`/${pathName}/contactDetails/${params?.id}`}>
                  {params.value}
                </Link>
              ),
            },
            {
              field: "full_name",
              minWidth: 150,
              headerName: "Full Name",
            },
            {
              field: "email",
              minWidth: 150,
              headerName: "Email",
            },
            {
              field: "phone",
              minWidth: 150,
              headerName: "Phone",
            },
            {
              field: "appointment_date",
              minWidth: 150,
              headerName: "Appointment Date",
            },
            {
              field: "appointment_time",
              minWidth: 150,
              headerName: "Appointment Time",
            },
            {
              field: "action_type",
              minWidth: 150,
              headerName: "Action",
              renderCell: (params) => {
                // console.log(params);
                let btnColor;
                if (params.value === "Pending") {
                  btnColor = "bg-blue-500";
                }
                if (params.value === "Assigned") {
                  btnColor = "bg-yellow-500";
                }
                if (params.value === "End") {
                  btnColor = "bg-green-500";
                }
                return (
                  <button
                    className={`px-3 py-1 text-white rounded-md ${btnColor}`}>
                    {params.value}
                  </button>
                );
              },
            },
          ]}
          // checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          getRowHeight={() => "auto"}
          selectionModel={selectionModel}
        />
      </div>
    </div>
  );
};

export default AssignedStudent;
