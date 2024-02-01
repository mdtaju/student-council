import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Dialog, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import {
  useAddAppointmentServiceTypeMutation,
  useDeleteAppointmentServiceTypeMutation,
  useGetAppointmentServiceTypesQuery,
  useGetAppointmentsQuery,
  useUpdateAppointmentMutation,
} from "../../../features/appointment/appointmentApi";
import Input from "../../Inputs/Input";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

const Appointments = () => {
  const { data, refetch } = useGetAppointmentsQuery();
  const { data: getServiceTypes = [], refetch: serviceRefetch } =
    useGetAppointmentServiceTypesQuery();
  const [deleteAppointmentServiceType] =
    useDeleteAppointmentServiceTypeMutation();
  const [updateAppointment] = useUpdateAppointmentMutation();
  const [allAppointments, setAllAppointments] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [counsellorList, setCounsellorList] = useState([]);
  const [addAppointmentServiceType] = useAddAppointmentServiceTypeMutation();
  const [serviceType, setServiceType] = useState("");
  const [counsellorId, setCounsellorId] = useState("");
  // message states
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  function handleDialogClose() {
    setDialogOpen(false);
  }
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

  // add appointment service types
  const addNewServiceHandler = () => {
    setLoading(true);
    if (!serviceType) {
      setMessage({
        error: true,
        message: "You must add a service type.",
      });
      setLoading(false);
      setOpen(true);
      return;
    }
    addAppointmentServiceType({ service_type: serviceType })
      .unwrap()
      .then(() => {
        serviceRefetch();
        setServiceType("");
        setMessage({
          error: false,
          message: "New service type successfully added.",
        });
        setLoading(false);
        setOpen(true);
      })
      .catch(() => {
        setMessage({
          error: true,
          message: "Something went wrong. Please, try again.",
        });
        setLoading(false);
        setOpen(true);
      });
  };

  // delete service types
  const handleDeleteServiceType = (id) => {
    deleteAppointmentServiceType(id)
      .unwrap()
      .then(() => {
        serviceRefetch();
        setServiceType("");
        setMessage({
          error: false,
          message: "Service successfully deleted",
        });
        setLoading(false);
        setOpen(true);
      })
      .catch(() => {
        setMessage({
          error: true,
          message: "Something went wrong. Please, try again.",
        });
        setLoading(false);
        setOpen(true);
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
        {/* view and add service types start  */}
        <Dialog
          fullScreen={fullScreen}
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="responsive-dialog-title">
          <div className="p-4 sm:w-[600px]">
            {/* title and close */}
            <div className=" flex items-center justify-between">
              <h4 className="text-gray-800 text-sm font-semibold mb-2">
                All Service Types
              </h4>
              <button
                onClick={handleDialogClose}
                className="w-[38px] h-[38px] grid place-items-center bg-gray-300 rounded-full">
                <CloseRoundedIcon />
              </button>
            </div>
            {/* body */}
            <ul className="mt-4 list-inside list-none space-y-2 text-sm font-medium">
              {getServiceTypes.map((service, i) => (
                <li key={i} className="flex flex-wrap items-center gap-2">
                  <span>{`${i + 1}. ${service?.service_type}`}</span>
                  <button
                    onClick={() => handleDeleteServiceType(service.id)}
                    className="text-xs font-medium bg-red-500 hover:bg-red-600 py-1 px-3 rounded-md text-white">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            {/* add new service */}
            <div className="mt-4 space-y-3">
              <Input
                title={"New Service type"}
                placeholder="Write a service..."
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              />
              <button
                disabled={loading}
                onClick={addNewServiceHandler}
                className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white text-sm font-medium px-3 py-2 rounded-md w-full">
                {loading ? "loading..." : "Add Service"}
              </button>
            </div>
          </div>
        </Dialog>
        {/* view and add service types end  */}
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
        <button
          onClick={() => setDialogOpen(true)}
          className="mb-4 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-md shadow-sm">
          Service Types
        </button>
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
