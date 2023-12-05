import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Dialog, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import {
  useAddAllowStudentVisaMutation,
  useDeleteAllowStudentVisaMutation,
  useGetAllStudentsQuery,
} from "../../../features/student/studentApi";
import SelectCountry from "../../Inputs/SelectCountry";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";
import CountryVisa from "./CountryVisa/CountryVisa";

function AllStudents() {
  const { data, refetch } = useGetAllStudentsQuery("student");
  const [addAllowStudentVisa] = useAddAllowStudentVisaMutation();
  const [deleteAllowStudentVisa] = useDeleteAllowStudentVisaMutation();
  const [selectionModel, setSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [selectedStudent, setSelectedStudent] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    if (selectionModel.length) {
      const findStudent = data?.find(
        (std) => std?.query_id === selectionModel[0]
      );
      setSelectedStudent(findStudent);
    }
  }, [selectionModel, data]);

  function handleDialogClose() {
    setDialogOpen(false);
  }

  console.log(selectedStudent);
  // handle student allow for visa
  const handleVisaAllow = () => {
    if (!countryName) {
      alert("Please select a country first");
      return;
    }
    const studentData = selectionModel.map((id) => {
      return {
        id,
        country: countryName,
      };
    });
    addAllowStudentVisa(studentData)
      .unwrap()
      .then((data) => {
        refetch("student");
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
  };

  // restrict student for visa
  function handleRestrictVisa() {
    const studentData = selectionModel.map((id) => {
      return {
        id,
        country: countryName,
      };
    });
    deleteAllowStudentVisa(studentData)
      .unwrap()
      .then((data) => {
        refetch("student");
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
              Allow countries for this student:
            </h4>
            <button
              onClick={handleDialogClose}
              className="w-[38px] h-[38px] grid place-items-center bg-gray-300 rounded-full">
              <CloseRoundedIcon />
            </button>
          </div>
          <div className="mt-4">
            <ul className="list-inside space-y-3">
              {selectedStudent?.countries?.map((item, i) => (
                <CountryVisa
                  i={i}
                  key={i}
                  country={item.country}
                  applications={item.applications}
                  approvalStatus={item.status}
                  studentId={selectedStudent?.query_id}
                />
              ))}
            </ul>
          </div>
        </div>
      </Dialog>
      <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
          All University
        </h1>
        {selectionModel.length > 0 && (
          <div className="w-full my-2 flex items-center gap-3 justify-between">
            <div className="w-full max-w-[300px]">
              <SelectCountry
                title={"Select country"}
                placeholder="country"
                countryName={countryName}
                setCountryName={setCountryName}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={handleVisaAllow}
                className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 shadow-sm active:scale-95 duration-150 rounded-md ">
                Allow
              </button>
              <button
                onClick={() => setDialogOpen(true)}
                className="px-3 py-1 text-white bg-green-500 hover:bg-green-600 shadow-sm active:scale-95 duration-150 rounded-md ">
                View
              </button>
              <button
                onClick={handleRestrictVisa}
                className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 shadow-sm active:scale-95 duration-150 rounded-md ">
                Restrict
              </button>
            </div>
          </div>
        )}
        <div className="mt-2 duration-200">
          <DataTableMui
            rows={data || []}
            getRowId={(row) => row.query_id}
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
                field: "first_name",
                minWidth: 150,
                headerName: "First Name",
              },
              {
                field: "last_name",
                minWidth: 150,
                headerName: "Last Name",
              },
              {
                field: "date_of_birth",
                minWidth: 150,
                headerName: "Date Of Birth",
              },
              {
                field: "first_language",
                minWidth: 150,
                headerName: "First Language",
              },
              {
                field: "country_of_citizenship",
                minWidth: 150,
                headerName: "Citizenship",
              },
              {
                field: "passport_number",
                minWidth: 150,
                headerName: "Passport Number",
              },
              {
                field: "passport_expiry_date",
                minWidth: 150,
                headerName: "Passport Expiry Date",
              },
              {
                field: "gender",
                minWidth: 150,
                headerName: "Gender",
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

export default AllStudents;
