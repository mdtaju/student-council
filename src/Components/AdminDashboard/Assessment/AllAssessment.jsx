import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Avatar, Popper } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAddAssessmentTagsMutation, useDeleteFormMutation, useGetAllAssessmentQuery } from "../../../features/student/studentApi";
import usePath from "../../../hooks/usePath";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

const AllAssessment = () => {
      const pathName = usePath();
      const { data, refetch } = useGetAllAssessmentQuery();
      const [addAssessmentTags] = useAddAssessmentTagsMutation();
      const [deleteForm] = useDeleteFormMutation();
      const [allForms, setAllForms] = useState([]);
      const [selectionModel, setSelectionModel] = useState([]);
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });
      const [loading, setLoading] = useState(false);
      const [tagForSearch, setTagForSearch] = useState([]);
      const [selectedTags, setSelectedTags] = useState([]);
      const tagInputRef = useRef(null);

      useEffect(() => {
            if (data) {
                  setAllForms(data);
            }
      }, [data]);

      // popup 
      const [anchor, setAnchor] = useState(null);

      const handleClick = (event) => {
            setAnchor(anchor ? null : event.currentTarget);
      };

      const popupOpen = Boolean(anchor);
      const id = popupOpen ? 'simple-popper' : undefined;

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

      // key down handler for tag 
      const handleTag = (e) => {
            if (e.key === "Enter") {
                  setTagForSearch((prevTags) => [...prevTags, e.target.value]);
                  tagInputRef.current.value = "";

            }
      }

      // tag unselect handler 
      const handleTagUnselect = (index) => {
            setTagForSearch(prevTags => {
                  const filterTags = prevTags.filter((tag, i) => i !== index);
                  return filterTags
            })
      }

      // add tag handler 
      const addTagHandler = () => {
            setLoading(true)
            addAssessmentTags({
                  query_id: selectionModel,
                  tags: JSON.stringify(tagForSearch)
            }).unwrap().then((d) => {
                  setMessage({
                        error: false,
                        message: "Tags successfully added."
                  })
                  setOpen(true);
                  setTagForSearch([])
                  setLoading(false);
            }).catch(e => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please try again."
                  })
                  setOpen(true);
                  setLoading(false);
            })
      }

      // handle search 
      const handleSearchByTags = () => {

      }
      return (
            <div className="w-full min-h-screen grid place-items-center">
                  <SnackMessage open={open} setOpen={setOpen} message={message} />
                  <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
                        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
                              All Assessment
                        </h1>
                        <div className="w-full flex-col sm:flex-row justify-between my-2 flex items-center gap-3">
                              <div className="flex flex-wrap gap-4 items-center">
                                    {/* selected tag and tag input container */}
                                    <div className='p-1 w-[180px] border border-gray-400 rounded-sm'>
                                          {/* selected tags container */}
                                          <div className='flex flex-wrap gap-1'>
                                                {
                                                      tagForSearch.map((item, i) => (
                                                            <div key={i} className='text-xs py-1 px-2 bg-gray-200 rounded-full text-gray-800 flex gap-1'>
                                                                  <span key={i}>{item}</span>
                                                                  <div onClick={() => handleTagUnselect(i)} className="w-[15px] h-[15px] rounded-full grid place-items-center cursor-pointer bg-gray-300">
                                                                        <CloseRoundedIcon sx={{ width: "12px", height: "12px" }} />
                                                                  </div>
                                                            </div>
                                                      ))
                                                }
                                          </div>
                                          {/* tag input */}
                                          <input onKeyDown={handleTag} placeholder='Select tag' type='text' className='outline-none p-1 text-xs placeholder:text-xs' ref={tagInputRef} />
                                    </div>
                                    {/* add and search tag button */}
                                    {
                                          selectionModel?.length > 0 ?
                                                <button disabled={loading} onClick={addTagHandler} className="text-xs px-3 py-2 text-white font-medium bg-blue-500 rounded-sm h-fit">{loading ? "loading..." : "Add Tags"}</button> :
                                                <button disabled={loading} onClick={handleSearchByTags} className="text-xs px-3 py-2 text-white font-medium bg-blue-500 rounded-sm h-fit">{loading ? "loading..." : "Search"}</button>
                                    }
                              </div>

                              <button
                                    onClick={handleDelete}
                                    className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 shadow-sm active:scale-95 duration-150 rounded-md ">
                                    Delete
                              </button>
                        </div>
                        <div className="mt-2 duration-200">
                              <DataTableMui
                                    rows={allForms}
                                    getRowId={(row) => row.query_id}
                                    columns={[
                                          {
                                                field: "query_id",
                                                minWidth: 150,
                                                headerName: "Query ID",
                                                renderCell: (params) => {
                                                      // console.log(params)
                                                      return (
                                                            <Link className="text-blue-500 hover:underline"
                                                                  target="_blank"
                                                                  to={`/${pathName}/allForm/view/${params.value}`}>
                                                                  {params.value}
                                                            </Link>
                                                      )
                                                },
                                          },
                                          {
                                                field: "first_name",
                                                minWidth: 150,
                                                headerName: "First Name",
                                                renderCell: (params) => (
                                                      <p className="line-clamp-2">
                                                            {params.value}
                                                      </p>
                                                ),
                                          },
                                          {
                                                field: "last_name",
                                                minWidth: 150,
                                                headerName: "Last Name",
                                                renderCell: (params) => (
                                                      <p className="line-clamp-2">
                                                            {params.value}
                                                      </p>
                                                ),
                                          },
                                          {
                                                field: "gender",
                                                minWidth: 150,
                                                headerName: "Gender",
                                                renderCell: (params) => (
                                                      <p className="line-clamp-2">
                                                            {params.value}
                                                      </p>
                                                ),
                                          },
                                          {
                                                field: "passport_status",
                                                minWidth: 150,
                                                headerName: "Passport Status",
                                                renderCell: (params) => (
                                                      <p className="line-clamp-2">
                                                            {params.value}
                                                      </p>
                                                ),
                                          },
                                          {
                                                field: "profileImage",
                                                minWidth: 150,
                                                headerName: "Profile Image",
                                                renderCell: (params) => (
                                                      <Avatar
                                                            alt="Remy Sharp"
                                                            src={params.value?.file_url}
                                                            sx={{ width: 24, height: 24 }}
                                                      />
                                                ),
                                          },
                                          {
                                                field: "middle_name",
                                                minWidth: 150,
                                                headerName: "Action",
                                                renderCell: (params) => (
                                                      <div onClick={handleClick} className='p-1 cursor-pointer'>
                                                            <Popper id={id} open={popupOpen} anchorEl={anchor}>
                                                                  <div className='w-[220px] py-2 rounded-md border border-gray-200 shadow-md bg-white'>
                                                                        <Link to={`/${pathName}/allAssessment/${params?.row?.query_id}?tab=profile`} target='_blank' >
                                                                              <div className='px-2 py-1 flex gap-2 items-center hover:bg-gray-100 cursor-pointer'>
                                                                                    <RemoveRedEyeIcon className='text-gray-800' />
                                                                                    <span className='text-sm font-medium'>View</span>
                                                                              </div>
                                                                        </Link>
                                                                        <div className='px-2 py-1 flex gap-2 items-center hover:bg-gray-100 cursor-pointer'>
                                                                              <DeleteIcon className='text-gray-800' />
                                                                              <span className='text-sm font-medium'>Delete</span>
                                                                        </div>
                                                                        <div className='px-2 py-1 flex gap-2 items-center hover:bg-gray-100 cursor-pointer'>
                                                                              <PersonIcon className='text-gray-800' />
                                                                              <span className='text-sm font-medium'>Change to Client</span>
                                                                        </div>
                                                                  </div>
                                                            </Popper>
                                                            <MoreVertIcon />
                                                      </div>
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

export default AllAssessment;
