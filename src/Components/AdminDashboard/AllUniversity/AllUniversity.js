import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useDeleteUniversityMutation,
  useGetUniversityQuery,
} from "../../../features/university/universityApi";
import usePath from "../../../hooks/usePath";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

const AllUniversity = () => {
  const userPath = usePath();
  const { data, refetch } = useGetUniversityQuery();
  const [deleteUniversity] = useDeleteUniversityMutation();
  const [universities, setUniversities] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });

  useEffect(() => {
    if (data) {
      setUniversities(data);
    }
  }, [data]);

  // university delete handler
  const handleDelete = async () => {
    selectionModel.map(async (id) => {
      await deleteUniversity(id)
        .unwrap()
        .then((d) => {
          setMessage({
            error: false,
            message: `University successfully deleted.`,
          });
        })
        .catch((e) => {
          return setMessage({
            error: true,
            message: `University ${id} failed to delete.`,
          });
        });
    });
    await setOpen(true);
    await refetch();
  };

  return (
    <div className="w-full min-h-screen grid place-items-center">
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
          All University
        </h1>
        {selectionModel.length > 0 && (
          <div className="w-fit ml-auto my-2 flex items-center gap-3">
            <Link to={`/${userPath}/updateUniversity/${selectionModel[0]}`}>
              <button className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 shadow-sm active:scale-95 duration-150 rounded-md ">
                Update
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 shadow-sm active:scale-95 duration-150 rounded-md ">
              Delete
            </button>
          </div>
        )}
        <div className="mt-2 duration-200">
          <DataTableMui
            rows={universities}
            getRowId={(row) => row.query_id}
            columns={[
              {
                field: "query_id",
                minWidth: 150,
                headerName: "Query ID",
                renderCell: (params) => (
                  <Link
                    target="_blank"
                    to={`/${userPath}/updateUniversity/${params.value}`}>
                    {params.value}
                  </Link>
                ),
              },
              {
                field: "institute_name",
                minWidth: 150,
                headerName: "University Name",
              },
              {
                field: "institute_id",
                minWidth: 150,
                headerName: "University ID",
              },
              {
                field: "institute_partnership",
                minWidth: 150,
                headerName: "Institute Partnership",
              },
              {
                field: "national_ranking",
                minWidth: 150,
                headerName: "National Ranking",
              },
              {
                field: "website_url",
                minWidth: 150,
                headerName: "Website URL",
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
};

export default AllUniversity;
