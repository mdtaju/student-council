import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import formatBytes from "../../../../Utilities/GetFileSize";
import TextArea from "../../../Inputs/TextArea";

const CourseDocuments = ({
  courseDocuments,
  setCourseDocuments,
  aboutDocument,
  setAboutDocument,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        setCourseDocuments((prevImages) => [...prevImages, file]);
      });
    },
    [setCourseDocuments]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // doc delete handler
  const handleDelete = (index) => {
    setCourseDocuments((prevDoc) => {
      return prevDoc.filter((d, i) => i !== index);
    });
  };
  return (
    <>
      {/* institute images upload container start */}
      <div className="col-span-3">
        <h1 className="text-sm font-medium text-gray-800">
          Required Course Documents
        </h1>
        <div className="w-full min-h-[220px] h-auto mt-1 border border-dashed border-gray-400 bg-gray-100 rounded-md">
          {/* image visualization */}
          <div className="w-full min-h-[40%] border-b border-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-4">
            {courseDocuments?.map((file, i) => (
              <div key={i} className="flex items-start gap-4 w-fit">
                <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
                  <AiOutlineFileText className="text-2xl text-blue-400" />
                </div>
                <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
                  <h4 className="truncate">
                    {file?.name ? file?.name : file?.file_name}
                  </h4>
                  <h4 className="text-xs">
                    {formatBytes(file?.size ? file?.size : file?.file_size)} .{" "}
                    {file?.type
                      ? file?.type?.split("/")?.pop()?.toUpperCase()
                      : file?.file_name?.split(".")?.pop()?.toUpperCase()}
                  </h4>
                </div>
                <div
                  onClick={() => handleDelete(i)}
                  className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
                  <MdOutlineCancel className="text-lg text-red-500" />
                </div>
              </div>
            ))}
          </div>
          <div
            {...getRootProps()}
            className="w-full h-[120px] p-4 grid place-items-center cursor-pointer">
            <input {...getInputProps()} />
            <h1 className="text-gray-800">
              click or drag and drop to select images
            </h1>
          </div>
        </div>
      </div>
      {/* institute images upload container end */}
      <div className="col-span-3">
        <TextArea
          title={"About Documents"}
          placeholder="Write about documents"
          // isRequired
          // required
          value={aboutDocument}
          onChange={(e) => setAboutDocument(e.target.value)}
        />
      </div>
    </>
  );
};

export default CourseDocuments;
