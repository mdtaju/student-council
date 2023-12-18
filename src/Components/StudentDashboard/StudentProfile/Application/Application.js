import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import WarningIcon from "@mui/icons-material/Warning";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetAllCourseShortlistQuery,
  useUpdateCourseShortListMutation,
} from "../../../../features/course/courseApi";
import useAuth from "../../../../hooks/useAuth";
import SnackMessage from "../../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../../Table/Table";
import Layout from "../Layout.js/Layout";

const Application = () => {
  const auth = useAuth();
  const { data, refetch } = useGetAllCourseShortlistQuery(auth?.id);
  const [updateCourseShortList, { data: updatedData }] =
    useUpdateCourseShortListMutation();
  const [selectionModel, setSelectionModel] = useState([]);
  const [courseShortlist, setCourseShortlist] = useState([]);
  const [listNumber, setListNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });

  //   get course list
  useEffect(() => {
    async function getShortlistData() {
      const res = await fetch(
        `https://server-y29-p.applyversity.com/get_all_course_shortlist/${auth?.id}`
      );
      const getData = await res.json();
      setCourseShortlist(getData);
    }
    getShortlistData();
  }, []);

  const handleSubmit = () => {
    const makeData = {
      id: selectionModel[0],
      priority_no: listNumber,
      updated_by: "Student",
    };
    const getCourseName = courseShortlist.find(
      (c) => c.id === selectionModel[0]
    );
    updateCourseShortList(makeData)
      .unwrap()
      .then((data) => {
        refetch(auth?.id);
        setMessage({
          error: false,
          message: `Successfully updated course: ${getCourseName.course_name}`,
        });
        setOpen(true);
        setListNumber("");
        setSelectionModel([]);
      })
      .catch((err) => {
        setMessage({
          error: true,
          message: `Update operation has failed for this course: ${getCourseName.course_name}`,
        });
        setOpen(true);
      });
  };

  return (
    <Layout>
      <div className="w-full min-h-screen grid place-items-center">
        <SnackMessage open={open} setOpen={setOpen} message={message} />
        <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
            Course Shortlist
          </h1>
          {selectionModel.length > 0 && (
            <div className="w-fit my-2 flex items-end gap-3">
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-800">
                  Set Priority Number
                </h4>
                <input
                  type="number"
                  name=""
                  id=""
                  value={listNumber}
                  onChange={(e) => setListNumber(e.target.value)}
                  placeholder="Enter a valid number"
                  className="py-1 px-2 outline-none border border-gray-400 rounded-md"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 shadow-sm active:scale-95 duration-150 rounded-md ">
                Update
              </button>
            </div>
          )}
          {/* table */}
          <div className="mt-2 duration-200">
            <DataTableMui
              rows={courseShortlist}
              getRowId={(row) => row.id}
              columns={[
                {
                  field: "priority_no",
                  minWidth: 100,
                  headerName: "SL. NO.",
                  renderCell: (params) => {
                    let slNo;
                    if (params.value) {
                      slNo = params.value;
                    } else {
                      slNo = "Not Set";
                    }
                    return (
                      <div className="py-1 w-[70px] bg-blue-600 text-white grid place-items-center rounded-md text-xs font-medium">
                        {slNo}
                      </div>
                    );
                  },
                },
                {
                  field: "university",
                  minWidth: 150,
                  headerName: "University Name",
                  renderCell: (params) => {
                    const { course_query_id, university } = params?.row;
                    return (
                      <Link
                        className="text-blue-600"
                        target="_blank"
                        to={`/student-dashboard/university/${course_query_id}`}>
                        {university}
                      </Link>
                    );
                  },
                },
                {
                  field: "course_name",
                  minWidth: 150,
                  headerName: "Course Name",
                  renderCell: (params) => {
                    const { course_id, course_name } = params?.row;
                    return (
                      <Link
                        className="text-blue-600"
                        target="_blank"
                        to={`/student-dashboard/courseDetails/${course_id}`}>
                        {course_name}
                      </Link>
                    );
                  },
                },
                {
                  field: "is_eligible",
                  minWidth: 150,
                  headerName: "Is Eligible",
                },
                {
                  field: "created_at",
                  minWidth: 150,
                  headerName: "Created At",
                },
                {
                  field: "tuition_fee",
                  minWidth: 220,
                  headerName: "Requirements",
                  renderCell: (params) => {
                    return (
                      <div>
                        <p>All Requirements</p>
                        <div className="flex items-center gap-2">
                          {/* warning */}
                          <div className="text-xs flex items-end gap-1 text-orange-600">
                            <WarningIcon
                              sx={{
                                width: 15,
                                height: 15,
                                marginBottom: "3px",
                              }}
                            />{" "}
                            <div className="text-xs w-[22px] h-[22px] rounded-full grid place-items-center border border-orange-600">
                              10
                            </div>
                          </div>
                          {/* pending */}
                          <div className="text-xs flex items-end gap-1 text-blue-600">
                            <HourglassEmptyIcon
                              sx={{
                                width: 15,
                                height: 15,
                                marginBottom: "3px",
                              }}
                            />{" "}
                            <div className="text-xs w-[22px] h-[22px] rounded-full grid place-items-center border border-blue-600">
                              0
                            </div>
                          </div>
                          {/* not approved */}
                          <div className="text-xs flex items-end gap-1 text-red-600">
                            <CloseIcon
                              sx={{
                                width: 15,
                                height: 15,
                                marginBottom: "3px",
                              }}
                            />{" "}
                            <div className="text-xs w-[22px] h-[22px] rounded-full grid place-items-center border border-red-600">
                              0
                            </div>
                          </div>
                          {/* approved */}
                          <div className="text-xs flex items-end gap-1 text-green-600">
                            <DoneIcon
                              sx={{
                                width: 15,
                                height: 15,
                                marginBottom: "3px",
                              }}
                            />{" "}
                            <div className="text-xs w-[22px] h-[22px] rounded-full grid place-items-center border border-green-600">
                              0
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  },
                },
                {
                  field: "world_ranking",
                  minWidth: 150,
                  headerName: "Created At",
                  renderCell: (params) => {
                    const { id, is_eligible } = params?.row;
                    let content;
                    if (is_eligible === "Yes") {
                      content = (
                        <Link
                          to={`/student-dashboard/applications/${id}`}
                          target="_blank">
                          <button className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-md shadow-sm">
                            <OpenInNewOutlinedIcon
                              sx={{ width: "14px", height: "14px" }}
                            />{" "}
                            View
                          </button>
                        </Link>
                      );
                    } else {
                      content = <></>;
                    }
                    return content;
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
      </div>
    </Layout>
  );
};

export default Application;
