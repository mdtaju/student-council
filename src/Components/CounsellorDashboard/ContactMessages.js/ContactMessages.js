import React, { useEffect, useState } from "react";
import { useGetContactMessagesQuery } from "../../../features/student/studentApi";
import DataTableMui from "../../Table/Table";

const ContactMessages = () => {
  const { data } = useGetContactMessagesQuery();
  const [allAppointments, setAllAppointments] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  // message states

  useEffect(() => {
    if (data) {
      setAllAppointments(data);
    }
  }, [data]);

  return (
    <div className="w-full min-h-screen grid place-items-center">
      {/* snack message */}
      <div className="w-[400px] sm:w-[600px] md:w-[980px] min-h-[700px] bg-white shadow-md rounded-md p-6">
        <h1 className="text-center mb-6 text-lg font-semibold text-gray-700">
          Contact Messages
        </h1>

        {/* {selectionModel?.length > 0 && (
          <div className="w-full my-4 flex flex-col gap-4 sm:flex-row justify-between items-end">
            <div className="flex items-end gap-4">
              <button
                onClick={handleAssign}
                className={`px-4 py-1 text-white rounded-md active:scale-95 duration-200 bg-blue-500 hover:bg-blue-600`}>
                Assign
              </button>
            </div>
          </div>
        )} */}
        <DataTableMui
          rows={allAppointments}
          //     getRowId={(row) => row.query_id}
          columns={[
            {
              field: "id",
              minWidth: 30,
              headerName: "ID",
              //     renderCell: (params) => (
              //       <Link
              //         target="_blank"
              //         to={`/dashboard/updateUniversity/${params.value}`}>
              //         {params.value}
              //       </Link>
              //     ),
            },
            {
              field: "name",
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
              field: "subject",
              minWidth: 150,
              headerName: "Subject",
            },
            {
              field: "message",
              minWidth: 150,
              headerName: "Message",
            },
            {
              field: "created_at",
              minWidth: 150,
              headerName: "Created At",
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

export default ContactMessages;
