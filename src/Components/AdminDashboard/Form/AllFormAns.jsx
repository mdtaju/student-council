import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllFormAnsQuery } from "../../../features/student/studentApi";
import usePath from "../../../hooks/usePath";
import DataTableMui from "../../Table/Table";

const AllFormAns = () => {
      const pathName = usePath();
      const params = useParams();
      const { data = [] } = useGetAllFormAnsQuery(params?.id);

      return (
            <div className="w-full min-h-screen grid place-items-center">
                  <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
                        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
                              All Form Answers
                        </h1>

                        <div className="mt-2 duration-200">
                              <DataTableMui
                                    rows={data}
                                    // getRowId={(row) => row.query_id}
                                    columns={[
                                          {
                                                field: "form_query_id",
                                                minWidth: 150,
                                                headerName: "View Answer",
                                                renderCell: (params) => {
                                                      // console.log(params)
                                                      return (
                                                            <Link className="text-xs px-2 py-1 text-white bg-blue-500 rounded-md"
                                                                  target="_blank"
                                                                  to={`/${pathName}/allForm/answers/view/${params.value}?email=${params?.row?.user_email}`}>
                                                                  View
                                                            </Link>
                                                      )
                                                },
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
                                                field: "user_email",
                                                minWidth: 150,
                                                headerName: "User Email",
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
                                    disableRowSelectionOnClick
                                    getRowHeight={() => "auto"}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default AllFormAns;
