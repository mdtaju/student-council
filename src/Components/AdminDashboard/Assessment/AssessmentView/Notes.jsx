import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Dialog, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useAddAssessmentNotesMutation, useGetAssessmentNotesQuery } from "../../../../features/notes/notesApi";
import Input from '../../../Inputs/Input';
import TextArea from '../../../Inputs/TextArea';
import DataTableMui from '../../../Table/Table';

function Notes() {
      const params = useParams();
      const { data = [], refetch } = useGetAssessmentNotesQuery(params?.id);
      const [addAssessmentNotes] = useAddAssessmentNotesMutation();
      const [dialogOpen, setDialogOpen] = useState(false);
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [loading, setLoading] = useState(false);
      const [isNoteView, setIsNoteView] = useState(false);
      const [singleNote, setSingleNote] = useState({});
      const theme = useTheme();
      const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
      function handleDialogClose() {
            setDialogOpen(false);
      }

      // add note handler 
      const handleAddNote = () => {
            setIsNoteView(false);
            setDialogOpen(true)
      }

      // submit note handler 
      const handleSubmit = () => {
            setLoading(true);
            if (!title || !description) {
                  return alert("You must write title and description.");
            }
            addAssessmentNotes({
                  query_id: params?.id,
                  title,
                  description
            }).unwrap().then((d) => {
                  refetch(params?.id)
                  setLoading(false);
                  setDialogOpen(false);
            })
      }

      // handle note view
      const handleNoteView = (id) => {
            setIsNoteView(true);
            const getSingleNote = data?.find((note) => note?.id === id);
            if (getSingleNote) {
                  setSingleNote(getSingleNote);
            }
            setDialogOpen(true)
      }
      return (
            <div className='mt-4 w-full bg-white rounded-md shadow-sm p-4'>
                  <Dialog
                        fullScreen={fullScreen}
                        open={dialogOpen}
                        onClose={handleDialogClose}
                        aria-labelledby="responsive-dialog-title">
                        <div className="p-4 sm:w-[600px]">
                              {/* title and close */}
                              <div className=" flex items-center justify-between">
                                    <h4 className="text-gray-800 text-sm font-semibold mb-2">
                                          {isNoteView ? "Note View:" : "Add a Note:"}
                                    </h4>
                                    <button
                                          onClick={handleDialogClose}
                                          className="w-[38px] h-[38px] grid place-items-center bg-gray-300 rounded-full">
                                          <CloseRoundedIcon />
                                    </button>
                              </div>
                              {/* body */}
                              <div className="mt-4 space-y-4">
                                    {
                                          isNoteView ?
                                                <>
                                                      <h1>Title: {singleNote?.title}</h1>
                                                      <p>Description: {singleNote?.description}</p>
                                                </> :
                                                <>
                                                      <Input
                                                            title={"Title"}
                                                            isRequired
                                                            required
                                                            placeholder="Enter a title"
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                      />
                                                      <TextArea
                                                            title={"Description"}
                                                            placeholder="Write a description"
                                                            value={description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                      />
                                                      <button
                                                            onClick={() => handleSubmit()}
                                                            disabled={loading}
                                                            className='mt-4 bg-secondary text-sm font-medium text-white w-full py-2 rounded-md'>{loading ? "loading..." : "Submit"}</button>
                                                </>
                                    }
                              </div>
                        </div>
                  </Dialog>
                  <h1 className='text-lg font-medium text-gray-800'>Notes</h1>
                  <button onClick={() => handleAddNote()} className='mt-4 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-md'>Add Note+</button>
                  <div className='mt-2'>
                        <DataTableMui
                              rows={data}
                              getRowId={(row) => row.id}
                              getRowHeight={() => "auto"}
                              columns={[{
                                    field: "id",
                                    minWidth: 150,
                                    headerName: "View",
                                    renderCell: (params) => (
                                          <div onClick={() => handleNoteView(params.value)} className='px-3 py-1 bg-blue-500 text-white text-xs font-medium cursor-pointer rounded-sm'>View</div>
                                    )
                              },
                              {
                                    field: "title",
                                    minWidth: 150,
                                    headerName: "Title",
                                    renderCell: (params) => (
                                          <p className='line-clamp-3'>{params.value}</p>
                                    )
                              },
                              {
                                    field: "description",
                                    minWidth: 150,
                                    headerName: "Description",
                                    renderCell: (params) => (
                                          <p className='line-clamp-3'>{params.value}</p>
                                    )
                              },
                              {
                                    field: "created_at",
                                    minWidth: 150,
                                    headerName: "Created At",
                              },
                              ]}
                        />
                  </div>
            </div>
      )
}

export default Notes