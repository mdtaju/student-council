import { Dialog } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import {
  useDeleteAppointmentMutation,
  useGetAppointmentsForStudentQuery,
} from "../../../features/appointment/appointmentApi";
import useAuth from "../../../hooks/useAuth";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

const MyAppointments = () => {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });
  const [selectionModel, setSelectionModel] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { data, refetch } = useGetAppointmentsForStudentQuery(auth?.id);
  const [deleteAppointment] = useDeleteAppointmentMutation();

  useEffect(() => {
    if (data) {
      setAppointments(data);
    }
  }, [data]);

  useEffect(() => {
    if (selectionModel.length && appointments.length) {
      const getAppointment = appointments.find(
        ({ id }) => id === selectionModel[0]
      );
      setSelectedAppointment(getAppointment);
    }
  }, [selectionModel, appointments]);

  function handleDelete() {
    selectionModel.map((id) => {
      deleteAppointment(id)
        .unwrap()
        .then((d) => {
          setMessage({
            error: false,
            message: "Appointment successfully deleted",
          });
          setOpen(true);
          refetch(auth?.id);
        })
        .catch((err) => {
          setMessage({
            error: true,
            message: "Something went wrong. Please try again",
          });
          setOpen(true);
        });
      return id;
    });
  }

  function handleDialogClose() {
    setDialogOpen(false);
  }

  return (
    <div className="w-full min-h-screen grid place-items-center">
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title">
        <div className="p-4 sm:w-[600px]">
          <h4 className="text-gray-800 text-sm font-semibold mb-2">
            Appointment Note:
          </h4>
          <div
            className="p-2 border border-gray-300 rounded-md mb-4"
            dangerouslySetInnerHTML={{
              __html: selectedAppointment?.appointment_note,
            }}></div>
          <h4 className="text-gray-800 text-sm font-semibold mb-2">
            Appointment Reply:
          </h4>
          <p className="p-2 border border-gray-300 rounded-md">
            {selectedAppointment?.appointment_reply}
          </p>
        </div>
      </Dialog>
      <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
          My Appointments
        </h1>
        {selectionModel.length > 0 && (
          <div className="w-fit ml-auto my-2 flex items-center gap-3">
            <button
              onClick={() => setDialogOpen(true)}
              className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 shadow-sm active:scale-95 duration-150 rounded-md ">
              View
            </button>
            <button
              onClick={handleDelete}
              className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 shadow-sm active:scale-95 duration-150 rounded-md ">
              Delete
            </button>
          </div>
        )}
        <div className="mt-2 duration-200">
          <DataTableMui
            rows={appointments}
            getRowId={(row) => row.id}
            columns={[
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
                field: "service_type",
                minWidth: 150,
                headerName: "Service Type",
              },
              {
                field: "action_type",
                minWidth: 150,
                headerName: "Status",
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
    </div>
  );
};

export default MyAppointments;
