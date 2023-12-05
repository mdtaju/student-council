import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Dialog, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-router-dom";
import formatBytes from "../../../Utilities/GetFileSize";
import axiosInstance from "../../../config/axiosInstance";
import { useDeleteVisaApplicationMutation } from "../../../features/student/studentApi";
import useAuth from "../../../hooks/useAuth";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

function AllVisa() {
  const auth = useAuth();
  const [deleteVisaApplication] = useDeleteVisaApplicationMutation();
  const [selectionModel, setSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [refetchData, setRefetchData] = useState(0);
  const [allVisa, setAllVisa] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });
  // console.log(selectedApplication);
  console.log(auth);

  useEffect(() => {
    async function getAllVisa() {
      const res = await axiosInstance.get("/visa_application");
      setAllVisa(res.data);
    }
    getAllVisa();
  }, [refetchData]);

  useEffect(() => {
    if (selectionModel.length) {
      const findStudent = allVisa?.find(
        (std) => std?.query_id === selectionModel[0]
      );
      setSelectedApplication(findStudent);
    }
  }, [selectionModel, allVisa]);

  function handleDialogClose() {
    setDialogOpen(false);
  }
  // restrict student for visa
  function handleVisaApplicationDelete() {
    deleteVisaApplication(selectionModel)
      .unwrap()
      .then((data) => {
        setRefetchData((prev) => prev + 1);
        setMessage({
          error: false,
          message: "Your Data Successfully Submitted",
        });
        setOpen(true);
      })
      .catch((error) => {
        setMessage({
          error: true,
          message: "Something went wrong. Please try again",
        });
        setOpen(true);
      });
  }

  // doc delete handler
  const handleDelete = (index) => {
    setSelectedApplication((prevDoc) => {
      const { documents } = prevDoc;
      const filterDoc = documents.filter((d, i) => i !== index);
      return {
        ...prevDoc,
        documents: filterDoc,
      };
    });
  };
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title">
        <div className="p-4 sm:w-[600px]">
          <div className=" flex items-center justify-between">
            <h4 className="text-gray-800 text-sm font-semibold mb-2">
              All documents for {selectedApplication?.country}
            </h4>
            <button
              onClick={handleDialogClose}
              className="w-[38px] h-[38px] grid place-items-center bg-gray-300 rounded-full">
              <CloseRoundedIcon />
            </button>
          </div>
          <div className="space-y-4 mt-6">
            {selectedApplication?.applications?.map((app, i) => (
              <div className="p-2 border border-gray-300 rounded-md">
                <h4>{`Title: ${app?.title}`}</h4>
                <p>{`Description: ${app?.description}`}</p>
                {/* document visualization */}
                <div className="w-full min-h-[40%] grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
                  {app?.documents?.map((file, i) => (
                    <div key={i} className="flex items-start gap-4 w-fit">
                      <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
                        <AiOutlineFileText className="text-2xl text-blue-400" />
                      </div>
                      <Link to={file?.file_url} target="_blank">
                        <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
                          <h4 className="truncate">
                            {file?.name ? file?.name : file?.file_name}
                          </h4>
                          <h4 className="text-xs">
                            {formatBytes(
                              file?.size ? file?.size : file?.file_size
                            )}{" "}
                            .{" "}
                            {file?.type
                              ? file?.type?.split("/")?.pop()?.toUpperCase()
                              : file?.file_name
                                  ?.split(".")
                                  ?.pop()
                                  ?.toUpperCase()}
                          </h4>
                        </div>
                      </Link>
                      {/* <div
                  onClick={() => handleDelete(i)}
                  className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
                  <MdOutlineCancel className="text-lg text-red-500" />
                </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Dialog>
      <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
          All Visa
        </h1>
        {selectionModel.length > 0 && (
          <div className="w-full my-2 flex items-center gap-3 justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => setDialogOpen(true)}
                className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 shadow-sm active:scale-95 duration-150 rounded-md ">
                View Documents
              </button>

              <button
                onClick={handleVisaApplicationDelete}
                className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 shadow-sm active:scale-95 duration-150 rounded-md ">
                Delete
              </button>
            </div>
          </div>
        )}
        <div className="mt-2 duration-200">
          <DataTableMui
            rows={allVisa}
            getRowId={(row) => row.query_id}
            columns={[
              {
                field: "query_id",
                minWidth: 150,
                headerName: "Document ID",
                renderCell: (params) => {
                  let link;
                  if (auth?.user === "Admin") {
                    link = `/dashboard/updateVisa/${params.value}`;
                  } else {
                    link = `/counsellor-dashboard/updateVisa/${params.value}`;
                  }
                  return (
                    <Link className="hover:underline text-blue-500" to={link}>
                      {params.value}
                    </Link>
                  );
                },
              },
              {
                field: "country",
                minWidth: 150,
                headerName: "Country Name",
              },
              {
                field: "applications",
                minWidth: 150,
                headerName: "Applications",
                renderCell: (params) => <span>{params?.value?.length}</span>,
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
    </div>
  );
}

export default AllVisa;
