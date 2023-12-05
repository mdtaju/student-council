import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useAddVisaDocumentFromStudentMutation } from "../../../../../features/student/studentApi";
import useAuth from "../../../../../hooks/useAuth";
import Applications from "../Applications/Applications";

function Country({
      country,
      status,
      documents,
}) {
      const auth = useAuth();
      const [addVisaDocumentFromStudent] = useAddVisaDocumentFromStudentMutation();
      const [selectedDocuments, setSelectedDocuments] = useState([]);
      const [mess, setMess] = useState({
            error: false,
            message: "",
      });

      // doc delete handler
      const handleDelete = (index) => {
            setSelectedDocuments((prevDoc) => {
                  return prevDoc.filter((d, i) => i !== index);
            });
      };

      const onDrop = useCallback((acceptedFiles) => {
            acceptedFiles.forEach((file) => {
                  setSelectedDocuments((prevImages) => [...prevImages, file]);
            });
      }, []);

      const { getRootProps, getInputProps } = useDropzone({ onDrop });

      const handleSubmitDocument = () => {
            if (!selectedDocuments.length) {
                  alert("Please select the chose document file first");
                  return;
            }
            const formData = new FormData();
            // formData.append("query_id", id);
            formData.append("student_id", auth?.id);
            formData.append("country", country);

            selectedDocuments.forEach((doc) => {
                  formData.append("files", doc);
            });

            addVisaDocumentFromStudent(formData)
                  .unwrap()
                  .then((data) => {
                        setMess({
                              error: false,
                              message: "Documents successfully submitted",
                        });
                  })
                  .catch((err) => {
                        setMess({
                              error: true,
                              message: "Something went wrong. Please try again.",
                        });
                  });
      };
      return (
            <div className="w-full h-auto bg-white rounded-md shadow-md">
                  {/* header start */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 rounded-t-md">
                        {/* title area */}
                        <div className="space-y-2">
                              <h4 className="text-lg text-gray-800 font-medium">{country}</h4>
                        </div>
                  </div>
                  {/* header end */}
                  {/* applications */}
                  <div className={`w-full flex items-start relative`}>
                        {/* status title */}
                        <div
                              className={`${status === "Pending" ? "bg-orange-600" : ""} ${status === "Approved" ? "bg-green-600" : ""
                                    } ${status === "Rejected" ? "bg-red-600" : ""
                                    } text-white w-[40px] min-h-full absolute flex items-center justify-around rounded-l-sm`}>
                              <div>
                                    <h1 className="rotate-[-90deg] text-sm font-bold">
                                          {/* {requirement_type} */}
                                          {status}
                                    </h1>
                              </div>
                        </div>
                        <div>

                              {
                                    documents?.applications?.map((doc, i) => (
                                          <Applications
                                                key={i}
                                                id={doc?.query_id}
                                                country={doc?.country}
                                                title={doc?.title}
                                                description={doc?.description}
                                                status={status}
                                                documents={doc?.documents}
                                                studentUploaded={doc?.studentUploadedDoc}
                                          />
                                    ))
                              }
                        </div>

                  </div>
            </div>
      );
}

export default Country;
