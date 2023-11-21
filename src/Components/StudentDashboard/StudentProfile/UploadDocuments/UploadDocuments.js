import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineFileText } from "react-icons/ai";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const UploadDocuments = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-600">Upload Documents</h1>
      {/* uploaded files */}
      <div className="my-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
            <AiOutlineFileText className="text-2xl text-blue-400" />
          </div>
          <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
            <h4 className="truncate">Passport.pdf</h4>
            <h4 className="text-xs">368.0 KiB · PDF</h4>
          </div>
          <button className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
            <MdOutlineCancel className="text-lg text-red-500" />
          </button>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
            <AiOutlineFileText className="text-2xl text-blue-400" />
          </div>
          <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
            <h4 className="truncate">Passport.pdf</h4>
            <h4 className="text-xs">368.0 KiB · PDF</h4>
          </div>
          <button className="w-[30px] h-[30px] grid place-items-center active:scale-95 duration-200 rounded-full bg-red-100 cursor-pointer">
            <MdOutlineCancel className="text-lg text-red-500" />
          </button>
        </div>
      </div>
      {/* drop zone for upload files */}
      <div
        {...getRootProps()}
        className="w-full px-6 py-10 border-2 border-dashed border-green-400 bg-green-50 rounded-lg mt-6 cursor-pointer">
        <input {...getInputProps()} />
        <div className="flex items-center gap-3 w-fit mx-auto">
          <BsFillFileEarmarkCheckFill className="text-green-500" />
          <h1 className="text-center font-semibold text-gray-600">
            Drag and drop or click to upload your file
          </h1>
          {/* <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 active:scale-95 duration-200 border border-gray-400 rounded-md">
            Upload
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
