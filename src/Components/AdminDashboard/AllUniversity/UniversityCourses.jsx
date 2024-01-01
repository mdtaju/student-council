import React from 'react';
import { Link } from 'react-router-dom';
import usePath from '../../../hooks/usePath';
import DataTableMui from '../../Table/Table';
import AddCourse from '../AddUniversity/AddCourse/AddCourse';

function UniversityCourses({ courses = [], addCourses = [],
      setAddCourses, selectionModel,
      setSelectionModel, handleDelete }) {
      const pathName = usePath();

      return (
            <div>
                  <h1 className="mt-3 text-xl font-semibold text-gray-700">Courses</h1>
                  <div className='mt-4'>
                        {
                              selectionModel.length > 0 &&
                              <button
                                    onClick={handleDelete}
                                    className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 shadow-sm active:scale-95 duration-150 rounded-md mb-4">
                                    Delete Courses
                              </button>
                        }
                        <DataTableMui
                              rows={courses}
                              columns={[
                                    {
                                          field: "id",
                                          minWidth: 150,
                                          headerName: "View to Edit",
                                          renderCell: (params) => {
                                                return (
                                                      <Link
                                                            className='px-4 py-1 text-xs font-medium rounded-md text-white bg-blue-500'
                                                            target="_blank"
                                                            to={`/${pathName}/updateCourse/${params.value}`}>
                                                            Edit
                                                      </Link>
                                                )
                                          }
                                    },
                                    {
                                          field: "application_availability",
                                          minWidth: 150,
                                          headerName: "Application Availability",
                                          renderCell: (params) => (
                                                <p className={`px-2 py-1 text-xs font-medium ${params.value === "Open" ? "bg-green-500" : "bg-red-500"} rounded-md text-white`}>{params.value}</p>
                                          ),
                                    },
                                    {
                                          field: "course_name",
                                          minWidth: 150,
                                          headerName: "Course Name",
                                          renderCell: (params) => (
                                                <p className='line-clamp-3'>{params.value}</p>
                                          ),
                                    },

                                    {
                                          field: "course_for",
                                          minWidth: 150,
                                          headerName: "Course For",
                                          renderCell: (params) => (
                                                <p className='line-clamp-3'>{params.value}</p>
                                          ),
                                    },
                                    {
                                          field: "program_level",
                                          minWidth: 150,
                                          headerName: "Program Level",
                                          renderCell: (params) => (
                                                <p className='line-clamp-3'>{params.value}</p>
                                          ),
                                    },
                                    {
                                          field: "subject_area",
                                          minWidth: 150,
                                          headerName: "Subject Area",
                                          renderCell: (params) => (
                                                <p className='line-clamp-3'>{params.value}</p>
                                          ),
                                    },
                                    {
                                          field: "scholarship_available",
                                          minWidth: 150,
                                          headerName: "Is scholarship available?",
                                          renderCell: (params) => (
                                                <p className='line-clamp-3'>{params.value}</p>
                                          ),
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
                  <AddCourse courses={addCourses} setCourses={setAddCourses} />

            </div>
      )
}

export default UniversityCourses