import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Avatar, Popper } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAddAssessmentAssignMutation, useAddAssessmentLeadStatusMutation, useAddAssessmentTagsMutation, useAddCommissionMutation, useDeleteAssessmentMutation, useGetAllAssessmentQuery } from "../../../features/student/studentApi";
import usePath from "../../../hooks/usePath";
import Input from "../../Inputs/Input";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import DataTableMui from "../../Table/Table";

const AllAssessment = () => {
      const pathName = usePath();
      const { data } = useGetAllAssessmentQuery();
      const [addAssessmentTags] = useAddAssessmentTagsMutation();
      const [addAssessmentAssign, { isLoading }] = useAddAssessmentAssignMutation();
      const [addAssessmentLeadStatus] = useAddAssessmentLeadStatusMutation();
      const [addCommission, { isLoading: commissionLoading }] = useAddCommissionMutation();
      const [deleteAssessment, { isLoading: deleteLoading }] = useDeleteAssessmentMutation();
      const [allAssessment, setAllAssessment] = useState([]);
      const [selectionModel, setSelectionModel] = useState([]);
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });
      const [loading, setLoading] = useState(false);
      const [tagForSearch, setTagForSearch] = useState([]);
      const [idsForAssign, setIdsForAssign] = useState([]);
      const tagInputRef = useRef(null);
      const counsellorIdsInputRef = useRef(null);
      const [commission, setCommission] = useState("");

      useEffect(() => {
            if (data) {
                  setAllAssessment(data);
            }
      }, [data]);

      // popup 
      const [anchor, setAnchor] = useState(null);

      const handleClick = (event) => {
            setAnchor(anchor ? null : event.currentTarget);
      };

      const popupOpen = Boolean(anchor);
      const id = popupOpen ? 'simple-popper' : undefined;

      // multiple lead delete delete handler
      const handleMultipleDelete = () => {
            deleteAssessment(selectionModel).unwrap().then((data) => {
                  setAllAssessment((prevAss) => prevAss.filter((element) => !selectionModel.includes(element?.query_id)));
                  setMessage({
                        error: false,
                        message: "Form successfully deleted"
                  });
                  setOpen(true);
            }).catch(err => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please, try again."
                  });
                  setOpen(true);
            })
      };

      // lead single delete 
      const handleSingleDelete = (id) => {
            deleteAssessment([id]).unwrap().then((data) => {
                  setAllAssessment((prevAss) => prevAss.filter((element) => !selectionModel.includes(element?.query_id)));
                  setMessage({
                        error: false,
                        message: "Form successfully deleted"
                  });
                  setOpen(true);
            }).catch(err => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please, try again."
                  });
                  setOpen(true);
            })
      }

      // key down handler for tag 
      const handleTag = (e) => {
            if (e.key === "Enter") {
                  setTagForSearch((prevTags) => [...prevTags, e.target.value]);
                  tagInputRef.current.value = "";

            }
      }

      // key down handler for counsellor id's 
      const handleCounsellorIds = (e) => {
            if (e.key === "Enter") {
                  setIdsForAssign((prevIds) => [...prevIds, e.target.value]);
                  counsellorIdsInputRef.current.value = "";
            }
      }

      // counsellor unselect handler 
      const handleCounsellorIdsUnselect = (index) => {
            setIdsForAssign(prevIds => {
                  const filterIds = prevIds.filter((id, i) => i !== index);
                  return filterIds
            })
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
            if (!tagForSearch?.length) {
                  alert("Please, select minimum one tag.");
                  return
            }
            setLoading(true)
            addAssessmentTags({
                  query_id: selectionModel,
                  tags: JSON.stringify(tagForSearch)
            }).unwrap().then((d) => {
                  setMessage({
                        error: false,
                        message: "Tags successfully added."
                  })
                  setAllAssessment((prevAss) => {
                        return prevAss.map((assessment) => {
                              if (selectionModel.includes(assessment?.query_id)) {
                                    return {
                                          ...assessment,
                                          actions: { ...assessment.actions, tags: tagForSearch.join() }
                                    }
                              } else {
                                    return assessment
                              }
                        })
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
            const filteredObjects = data?.filter(obj => {
                  if (obj.actions.tags) {
                        const tagArr = obj.actions.tags.split(",");
                        const getIsTag = tagForSearch.find((tag) => tagArr.includes(tag));
                        if (getIsTag) {
                              return true;
                        } else {
                              return false;
                        }
                  } else {
                        return false
                  }
            });
            setAllAssessment(filteredObjects)
      }

      // change to client handler 
      const handleChangeToClient = (id) => {
            const getLead = allAssessment?.find((item) => item?.query_id === id);
            console.log(id)
            console.log(getLead)
            let LeadStatus;
            if (getLead?.actions?.lead_status === "Lead") {
                  LeadStatus = "Student";
            } else {
                  LeadStatus = "Lead";
            }
            addAssessmentLeadStatus({ query_id: id, lead_status: LeadStatus }).unwrap().then((d) => {
                  setAllAssessment((prevAss) => {
                        return prevAss.map((assessment) => {
                              if (assessment?.query_id === id) {
                                    return {
                                          ...assessment,
                                          actions: { ...assessment.actions, lead_status: LeadStatus }
                                    }
                              } else {
                                    return assessment
                              }
                        })
                  })
            }).catch((e) => { });
      }

      // assign handler 
      const addAssessmentAssignHandler = () => {
            if (!idsForAssign?.length) {
                  alert("Please, select minimum one counsellor.");
                  return;
            }
            addAssessmentAssign({
                  lead_ids: selectionModel,
                  counsellors_ids: idsForAssign
            }).unwrap().then(() => {
                  setMessage({
                        error: false,
                        message: "Leads successfully assign to counsellors."
                  })
                  setOpen(true);
                  setIdsForAssign([])
            }).catch(() => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please try again."
                  })
                  setOpen(true);
            })
      }
      // add commission handler 
      const addCommissionHandler = () => {
            if (!selectionModel?.length > 0 || !commission) {
                  alert("Please, select minimum one lead and write commission value.");
                  return
            }
            addCommission({
                  lead_ids: selectionModel,
                  commission
            }).unwrap().then(() => {
                  setMessage({
                        error: false,
                        message: "Commission successfully added."
                  })
                  setOpen(true);
                  setCommission("")
            }).catch(() => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please try again."
                  })
                  setOpen(true);
            })
      }
      return (
            <div className="w-full min-h-screen grid place-items-center">
                  <SnackMessage open={open} setOpen={setOpen} message={message} />
                  <div className="w-full sm:w-[600px] md:w-[960px] h-auto p-6 bg-white shadow-md rounded-md">
                        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-6">
                              All Assessment
                        </h1>
                        {/* commission add */}
                        <div className="flex items-end gap-4 mb-2">
                              <Input
                                    title={"Add Commission"}
                                    placeholder="Write amount..."
                                    type="number"
                                    value={commission}
                                    onChange={(e) => setCommission(e.target.value)}
                              />
                              <button disabled={commissionLoading} onClick={addCommissionHandler} className="text-xs px-3 py-2 text-white font-medium bg-blue-500 rounded-sm h-fit">{commissionLoading ? "loading..." : "Submit"}</button>
                        </div>
                        <div className="w-full flex-col sm:flex-row justify-between my-2 flex items-center gap-3">
                              <div className="w-full flex flex-col sm:flex-row gap-4 items-center">
                                    <div className="flex items-center gap-4 p-2 border border-gray-400 rounded-md">
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
                                    {/* counsellor assign */}
                                    <div className="flex items-center gap-4 p-2 border border-gray-400 rounded-md">
                                          {/* selected counsellor and input tag */}
                                          <div className='p-1 w-[180px] border border-gray-400 rounded-sm'>
                                                {/* selected counsellor for assign */}
                                                <div className='flex flex-wrap gap-1'>
                                                      {
                                                            idsForAssign.map((item, i) => (
                                                                  <div key={i} className='text-xs py-1 px-2 bg-gray-200 rounded-full text-gray-800 flex gap-1'>
                                                                        <span key={i}>{item}</span>
                                                                        <div onClick={() => handleCounsellorIdsUnselect(i)} className="w-[15px] h-[15px] rounded-full grid place-items-center cursor-pointer bg-gray-300">
                                                                              <CloseRoundedIcon sx={{ width: "12px", height: "12px" }} />
                                                                        </div>
                                                                  </div>
                                                            ))
                                                      }
                                                </div>
                                                {/* counsellor i's input */}
                                                <input onKeyDown={handleCounsellorIds} placeholder='Select counsellor' type='text' className='outline-none p-1 text-xs placeholder:text-xs' ref={counsellorIdsInputRef} />
                                          </div>
                                          {/* submit assign button */}
                                          <button disabled={(selectionModel?.length > 0 || isLoading) ? false : true} onClick={addAssessmentAssignHandler} className="text-xs px-3 py-2 text-white font-medium bg-blue-500 rounded-sm h-fit">{isLoading ? "loading..." : "Assign"}</button>
                                    </div>
                              </div>

                              <button
                                    disabled={(selectionModel?.length > 0 || deleteLoading) ? false : true}
                                    onClick={handleMultipleDelete}
                                    className={`px-3 py-1 text-white bg-red-500  shadow-sm  duration-150 rounded-md ${selectionModel?.length > 0 ? "hover:bg-red-600 active:scale-95" : "opacity-60 cursor-not-allowed "}`}>
                                    {deleteLoading ? "loading..." : "Delete"}
                              </button>
                        </div>
                        <div className="mt-2 duration-200">
                              <DataTableMui
                                    rows={allAssessment}
                                    getRowId={(row) => row.query_id}
                                    columns={[
                                          {
                                                field: "query_id",
                                                minWidth: 150,
                                                headerName: "Query ID",
                                                // renderCell: (params) => {
                                                //       // console.log(params)
                                                //       return (
                                                //             <Link className="text-blue-500 hover:underline"
                                                //                   target="_blank"
                                                //                   to={`/${pathName}/allForm/view/${params.value}`}>
                                                //                   {params.value}
                                                //             </Link>
                                                //       )
                                                // },
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
                                                                        <div onClick={() => handleSingleDelete(params?.row?.query_id)} className='px-2 py-1 flex gap-2 items-center hover:bg-gray-100 cursor-pointer'>
                                                                              <DeleteIcon className='text-gray-800' />
                                                                              <span className='text-sm font-medium'>Delete</span>
                                                                        </div>
                                                                        {
                                                                              params?.row?.actions?.lead_status === "Lead" ?
                                                                                    <div onClick={() => handleChangeToClient(params?.row?.query_id)} className='px-2 py-1 flex gap-2 items-center hover:bg-gray-100 cursor-pointer'>
                                                                                          <PersonIcon className='text-gray-800' />
                                                                                          <span className='text-sm font-medium'>Change to Client</span>
                                                                                    </div> :
                                                                                    <div onClick={() => handleChangeToClient(params?.row?.query_id)} className='px-2 py-1 flex gap-2 items-center hover:bg-gray-100 cursor-pointer'>
                                                                                          <PersonIcon className='text-gray-800' />
                                                                                          <span className='text-sm font-medium'>Client to Lead</span>
                                                                                    </div>
                                                                        }
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
