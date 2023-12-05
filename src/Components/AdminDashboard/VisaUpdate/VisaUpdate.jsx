import { CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineFileText } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import formatBytes from '../../../Utilities/GetFileSize';
import { useAddVisaDocumentFilesMutation, useDeleteVisaDocumentsMutation, useGetVisaByCountryQuery, useUpdateVisaApplicationMutation } from '../../../features/student/studentApi';
import Input from "../../Inputs/Input";
import TextArea from '../../Inputs/TextArea';
import SnackMessage from '../../SnackBarMessage/SnackMessage';

function VisaUpdate() {
      const params = useParams();
      const { data, refetch } = useGetVisaByCountryQuery(params.id);
      const [addVisaDocumentFiles] = useAddVisaDocumentFilesMutation();
      const [deleteVisaDocuments] = useDeleteVisaDocumentsMutation();
      const [updateVisaApplication] = useUpdateVisaApplicationMutation();
      const [selectedApplication, setSelectedApplication] = useState({});
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [documents, setDocuments] = useState([]);
      const [documentUploadLoading, setDocumentUploadLoading] = useState(false);
      const [mssOpen, setMssOpen] = useState(false);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });

      useEffect(() => {
            if (selectedApplication) {
                  setTitle(selectedApplication?.title);
                  setDescription(selectedApplication?.description);
                  setDocuments(selectedApplication?.documents)
            }
      }, [selectedApplication])

      const onDrop = useCallback((acceptedFiles) => {
            setDocumentUploadLoading(true);
            const formData = new FormData();
            formData.append("query_id", selectedApplication?.query_id);
            acceptedFiles.forEach((file) => {
                  formData.append("files", file);
            });
            addVisaDocumentFiles(formData).unwrap().then((data) => {
                  setDocuments([...data.data]);
                  setDocumentUploadLoading(false);
            }).catch((err) => {
                  setDocumentUploadLoading(false);
            });
      }, [selectedApplication, addVisaDocumentFiles]);

      const { getRootProps, getInputProps } = useDropzone({ onDrop });

      // doc delete handler
      const handleDelete = (id) => {
            setDocumentUploadLoading(true);
            deleteVisaDocuments({ id }).unwrap().then((data) => {
                  setDocuments((prevDoc) => {
                        return prevDoc.filter((d, i) => d?.id !== id);
                  });
                  setDocumentUploadLoading(false);
            }).catch((err) => {
                  setDocumentUploadLoading(false);
            })
      };

      const handleSubmit = () => {
            if (!title || !description || !documents.length) {
                  return alert("Please add title, description and least 1 document");
            }
            updateVisaApplication({
                  id: selectedApplication?.id,
                  title,
                  description
            }).unwrap().then((data) => {
                  refetch(params.id);
                  setMessage({
                        error: false,
                        message: "Data successfully updated."
                  });
                  setMssOpen(true);
            }).catch((error) => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please, try again."
                  });
                  setMssOpen(true);
            })
      }
      return (
            <div className='w-full min-h-screen grid place-items-center'>
                  <SnackMessage message={message} open={mssOpen} setOpen={setMssOpen} />
                  <div className='w-full sm:w-[650px] bg-white shadow-sm rounded-md p-4'>
                        <h1 className='text-center text-lg font-medium'>{data?.country}</h1>
                        <div className='space-y-4 mt-6'>
                              {
                                    data?.applications.map((application, i) => (
                                          <div key={i} className='p-2 border border-gray-300 rounded-md bg-gray-100'>
                                                <div className='flex items-center justify-between gap-4'>
                                                      <h4 className='flex-1 truncate'>{application?.title}</h4>
                                                      <button onClick={() => setSelectedApplication(application)} className='text-xs text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-sm shadow-sm'>Edit</button>
                                                </div>
                                          </div>
                                    ))
                              }
                        </div>
                        {/* edit form  start */}
                        {
                              selectedApplication?.title &&
                              <div className='p-4 mt-4 border border-gray-300 rounded-md space-y-4'>
                                    <Input
                                          title="Title"
                                          placeholder={"Enter a title"}
                                          type="text"
                                          value={title}
                                          onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <TextArea
                                          title={"Description"}
                                          placeholder="write description ..."
                                          value={description}
                                          onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <div className="">
                                          <h1 className="text-sm font-medium text-gray-800">
                                                Add Documents
                                          </h1>
                                          <div className="w-full min-h-[220px] h-auto mt-1 border border-dashed border-gray-400 bg-gray-100 rounded-md grid place-items-center">
                                                {/* document visualization */}
                                                {
                                                      documentUploadLoading ?
                                                            <CircularProgress size={22} /> :
                                                            <div className="w-full min-h-[40%] border-b border-gray-300 grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
                                                                  {documents?.map((file, i) => (
                                                                        <div key={i} className="flex items-start gap-4 w-fit">
                                                                              <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
                                                                                    <AiOutlineFileText className="text-2xl text-blue-400" />
                                                                              </div>
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
                                                                              <div
                                                                                    onClick={() => handleDelete(file?.id)}
                                                                                    className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
                                                                                    <MdOutlineCancel className="text-lg text-red-500" />
                                                                              </div>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                }
                                                <div
                                                      {...getRootProps()}
                                                      className="w-full h-[120px] p-4 grid place-items-center cursor-pointer">
                                                      <input {...getInputProps()} />
                                                      <h1 className="text-gray-800">
                                                            click or drag and drop to select documents
                                                      </h1>
                                                </div>
                                          </div>
                                    </div>
                                    <button className='w-full rounded-md py-2 text-white bg-secondary' onClick={handleSubmit}>Submit</button>
                              </div>
                        }
                  </div>
            </div>
      )
}

export default VisaUpdate