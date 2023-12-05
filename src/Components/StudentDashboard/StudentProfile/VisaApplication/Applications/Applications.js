import { CloseOutlined } from "@mui/icons-material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { CircularProgress } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import {
  useAddVisaDocumentFromStudentMutation,
  useDeleteVisaSubmittedFileMutation,
} from "../../../../../features/student/studentApi";
import useAuth from "../../../../../hooks/useAuth";

function Applications({
  studentUploaded = [],
  id,
  title,
  country,
  description,
  documents,
  status,
}) {
  const auth = useAuth();
  const [addVisaDocumentFromStudent] = useAddVisaDocumentFromStudentMutation();
  const [deleteVisaSubmittedFile] = useDeleteVisaSubmittedFileMutation();
  const [allUploadedFiles, setAllUploadedFiles] = useState(studentUploaded);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [isDocDeleteLoading, setIsDocDeleteLoading] = useState(false);
  const [isDocUploadLoading, setIsDocUploadLoading] = useState(false);

  // doc delete handler
  const handleDelete = (id) => {
    setIsDocDeleteLoading(true);
    deleteVisaSubmittedFile({ id: id })
      .unwrap()
      .then((d) => {
        setAllUploadedFiles((prevDoc) => {
          return prevDoc.filter((d) => d.id !== id);
        });
        setIsDocDeleteLoading(false);
      })
      .catch((e) => {
        setIsDocDeleteLoading(false);
      });
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setIsDocUploadLoading(true);
      const formData = new FormData();
      formData.append("query_id", id);
      formData.append("student_id", auth?.id);
      formData.append("country", country);

      acceptedFiles.forEach((doc) => {
        formData.append("files", doc);
      });
      addVisaDocumentFromStudent(formData)
        .unwrap()
        .then((data) => {
          setAllUploadedFiles(data?.data);
          setIsDocUploadLoading(false);
        })
        .catch((err) => {
          setIsDocUploadLoading(false);
        });
    },
    [addVisaDocumentFromStudent, id, auth?.id, country]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex-1 w-[calc(100%-40px)] ml-[40px]">
      {/* text body */}
      <div
        className={`flex items-center justify-between gap-4 p-4 pr-0 overflow-y-scroll`}>
        {/* info */}
        <div className={`flex-1`}>
          <h1 className="text-lg font-medium text-gray-700">{title}</h1>
          <div
            className={`mt-3 flex items-start gap-1  ${
              isSeeMore ? "max-h-[500px]" : "max-h-[60px] overflow-hidden"
            } transform transition-all duration-200`}>
            <p>{description}</p>
            <div
              onClick={() => setIsSeeMore((prevState) => !prevState)}
              className="flex items-center cursor-pointer select-none">
              <span className="text-blue-500 text-xs font-semibold whitespace-nowrap">
                {isSeeMore ? "see less" : "see more"}
              </span>
              <ArrowDropDownRoundedIcon
                className={`text-blue-500 ${
                  isSeeMore ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
              />
            </div>
          </div>
        </div>

        {/* upload and note button */}
        <div className="flex items-center gap-2">
          {/* upload */}
          {status === "Approved" ? (
            <div className="w-[40px] h-[40px] bg-blue-400 rounded-full grid place-items-center text-white cursor-not-allowed">
              <FileUploadOutlinedIcon />
            </div>
          ) : (
            <>
              {isDocUploadLoading ? (
                <CircularProgress size={"22px"} />
              ) : (
                <div
                  {...getRootProps()}
                  className="w-[40px] h-[40px] bg-blue-400 rounded-full grid place-items-center text-white cursor-pointer">
                  <input {...getInputProps()} />
                  <FileUploadOutlinedIcon />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* bottom area file show start */}

      <div className="w-full px-4 py-1 bg-gray-200 space-y-1">
        <h2 className="text-base font-medium text-gray-700">
          Attached Documents:
        </h2>
        {/* Attached documents start */}
        <div
          style={{ marginBottom: "10px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-3">
          {/* single document */}
          {documents.map((doc, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-blue-200 px-3 py-1 rounded-full cursor-pointer group">
              <FileDownloadOutlinedIcon className="text-gray-800" />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Link to={doc?.file_url} target="_blank">
                  <div className="flex items-center">
                    <span className="text-base font-light whitespace-nowrap group-hover:underline">
                      {doc?.file_name?.length > 10
                        ? doc?.file_name?.slice(0, 10) + "[...]"
                        : doc?.file_name}
                    </span>
                    <span>
                      {"."}
                      {doc?.file_extension}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Attached documents end */}
        {allUploadedFiles?.length > 0 && (
          <h2 className="text-base font-medium text-gray-700">
            Your Uploaded Documents:
          </h2>
        )}
        {/* uploaded documents start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-3">
          {/* single document */}
          {allUploadedFiles.map((doc, i) => {
            if (isDocDeleteLoading) {
              return <CircularProgress key={i} size={"22px"} />;
            } else {
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-blue-200 px-3 py-1 rounded-full cursor-pointer group">
                  <FileDownloadOutlinedIcon className="text-gray-800" />
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <Link to={doc?.file_url} target="_blank">
                      <div className="flex items-center">
                        <span className="text-base font-light whitespace-nowrap group-hover:underline">
                          {doc?.file_name?.length > 10
                            ? doc?.file_name?.slice(0, 10) + "[...]"
                            : doc?.file_name}
                        </span>
                        <span>
                          {"."}
                          {doc?.file_extension}
                        </span>
                      </div>
                    </Link>
                  </div>
                  {status !== "Approved" && (
                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="bg-red-400 w-[28px] h-[28px] rounded-full grid place-items-center">
                      <CloseOutlined />
                    </button>
                  )}
                </div>
              );
            }
          })}
        </div>
        {/* uploaded documents end */}
      </div>
      {/* bottom area file show end */}
    </div>
  );
}

export default Applications;
