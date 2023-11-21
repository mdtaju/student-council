import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import {
  useGetAppointmentsQuery,
  useUpdateAppointmentMutation,
} from "../../../features/appointment/appointmentApi";
import Input from "../../Inputs/Input";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

const Appointments = () => {
  const { data, refetch } = useGetAppointmentsQuery();
  const [updateAppointment] = useUpdateAppointmentMutation();
  const [allAppointments, setAllAppointments] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [counsellorList, setCounsellorList] = useState([]);
  const [counsellorId, setCounsellorId] = useState("");
  // message states
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    if (data) {
      setAllAppointments(data);
    }
  }, [data]);

  // assign handler -> assign to counsellor
  const handleAssign = async () => {
    selectionModel.map(async (id) => {
      const makeData = {
        assign_to: counsellorId,
        action_type: "Assigned",
      };
      await updateAppointment({ id, data: makeData })
        .unwrap()
        .then((data) => {
          if (data?.status === 404) {
            setMessage({
              error: true,
              message: data?.message,
            });
            setOpen(true);
            return;
          }
          refetch();
          setMessage({
            error: false,
            message: "Appointment has been successfully assign to counsellor",
          });
          setOpen(true);
        })
        .catch((err) => {
          setMessage({
            error: true,
            message: "Something went wrong. Please try again.",
          });
          setOpen(true);
        });
    });
  };

  // end handler -> mark as end
  const handleEnd = () => {
    selectionModel.map(async (id) => {
      const makeData = {
        assign_to: "",
        action_type: "End",
      };
      await updateAppointment({ id, data: makeData })
        .unwrap()
        .then((data) => {
          if (data?.status === 404) {
            setMessage({
              error: true,
              message: data?.message,
            });
            setOpen(true);
            return;
          }
          refetch();
          setMessage({
            error: false,
            message: "Appointment has been successfully mark as end.",
          });
          setOpen(true);
        })
        .catch((err) => {
          setMessage({
            error: true,
            message: "Something went wrong. Please try again.",
          });
          setOpen(true);
        });
    });
  };

  return (
    <div className="w-full min-h-screen grid place-items-center">
      {/* snack message */}
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <div className="w-[400px] sm:w-[600px] md:w-[980px] min-h-[700px] bg-white shadow-md rounded-md p-6">
        <h1 className="text-center mb-6 text-lg font-semibold text-gray-700">
          All Appointments
        </h1>

        {selectionModel?.length > 0 && (
          <div className="w-full my-4 flex flex-col gap-4 sm:flex-row justify-between items-end">
            <div className="flex items-end gap-4">
              <Input
                title={"Assign to counsellor"}
                placeholder="Enter counsellor id"
                value={counsellorId}
                onChange={(e) => setCounsellorId(e.target.value)}
              />
              <button
                disabled={!counsellorId}
                onClick={handleAssign}
                className={`px-4 py-1 text-white rounded-md active:scale-95 duration-200 ${
                  counsellorId ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
                }`}>
                Assign
              </button>
            </div>
            <div>
              <button
                onClick={handleEnd}
                className={`px-4 py-1 text-white rounded-md active:scale-95 duration-200 bg-red-500 hover:bg-red-600`}>
                Mark as End
              </button>
            </div>
          </div>
        )}
        <DataTableMui
          rows={allAppointments}
          //     getRowId={(row) => row.query_id}
          columns={[
            {
              field: "query_id",
              minWidth: 150,
              headerName: "Student ID",
              //     renderCell: (params) => (
              //       <Link
              //         target="_blank"
              //         to={`/dashboard/updateUniversity/${params.value}`}>
              //         {params.value}
              //       </Link>
              //     ),
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
              field: "assign_to",
              minWidth: 150,
              headerName: "Assign To",
            },
            {
              field: "assigned_at",
              minWidth: 150,
              headerName: "Delay To Reply",
              renderCell: (params) => {
                const { row, value } = params;
                let delayTime;
                if (row?.replied_at && value) {
                  delayTime = moment(params?.value)
                    .from(row?.replied_at)
                    .replace("ago", "");
                }
                if (!row?.replied_at && value) {
                  delayTime = moment(params?.value)
                    .fromNow()
                    .replace("ago", "");
                }
                if (!row?.replied_at && !value) {
                  delayTime = value;
                }
                return <span>{delayTime}</span>;
              },
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
          checkboxSelection
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

export default Appointments;
