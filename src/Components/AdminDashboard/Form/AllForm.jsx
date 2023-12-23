import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDeleteFormMutation, useGetAllFormQuery } from "../../../features/student/studentApi";
import usePath from "../../../hooks/usePath";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

const AllForm = () => {
      const pathName = usePath();
      const { data, refetch } = useGetAllFormQuery();
      const [deleteForm] = useDeleteFormMutation();
      const [allForms, setAllForms] = useState([]);
      const [selectionModel, setSelectionModel] = useState([]);
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });

      useEffect(() => {
            if (data) {
                  setAllForms(data);
            }
      }, [data]);

      // university delete handler
      const handleDelete = async () => {
            deleteForm(selectionModel).unwrap().then((data) => {
                  setMessage({
                        error: false,
                        message: "Form successfully deleted"
                  });
                  setOpen(true);
                  refetch()
            }).catch(err => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please, try again."
                  });
                  setOpen(true);
            })
      };

      return (
            <div className="w-full min-h-screen grid place-items-center">
                  <SnackMessage open={open} setOpen={setOpen} message={message} />
                  <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
                        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
                              All Forms
                        </h1>
                        {selectionModel.length > 0 && (
                              <div className="w-fit ml-auto my-2 flex items-center gap-3">
                                    <Link to={`/${pathName}/allForm/${selectionModel[0]}`} target="_blank">
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
                                    rows={allForms}
                                    getRowId={(row) => row.query_id}
                                    columns={[
                                          {
                                                field: "query_id",
                                                minWidth: 150,
                                                headerName: "Query ID",
                                                renderCell: (params) => (
                                                      <Link className="text-blue-500 hover:underline"
                                                            target="_blank"
                                                            to={`/${pathName}/allForm/view/${params.value}`}>
                                                            {params.value}
                                                      </Link>
                                                ),
                                          },
                                          {
                                                field: "title",
                                                minWidth: 150,
                                                headerName: "Title",
                                                renderCell: (params) => (
                                                      <p className="line-clamp-2">
                                                            {params.value}
                                                      </p>
                                                ),
                                          },
                                          {
                                                field: "description",
                                                minWidth: 150,
                                                headerName: "Description",
                                                renderCell: (params) => (
                                                      <p className="line-clamp-2">
                                                            {params.value}
                                                      </p>
                                                ),
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

export default AllForm;
