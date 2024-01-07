import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs';

const UploadFile = ({
  uploadedFile,
  setUploadedFile,
}) => {

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFile(acceptedFiles[0]);
  }, [setUploadedFile]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: false });
  return (
    <div className="flex flex-wrap mt-40">
      <div>
        <div className="my-6 space-y-4">
          {uploadedFile && (
            <div className="flex items-start gap-4">
              <button
                onClick={() => {
                  setUploadedFile(null);
                }}
              >
              </button>
            </div>
          )}
        </div>
      </div>

      {/* drop zone for upload file */}
      <div className="w-full h-[300px] py-10 border-2  border-dashed border-green-400 bg-green-50 rounded-lg  cursor-pointer">
        <p className='-mb-10 font-bold w-full ml-8 '>Upload Your Image</p>
        <div className='flex'>
          <div {...getRootProps()} className="w-full flex items-center justify-between`">
            <div className="mr-5">
              <input {...getInputProps()} />
              <div className={`flex ${uploadedFile ? 'mt-8' : 'mt-24 '}items-center ml-20 gap-3 w-fit mx-auto`}>

                <h1 className="text-center flex gap-2 font-semibold text-2xl text-gray-600">
                  <BsFillFileEarmarkCheckFill className="text-green-500" />
                  Drag and drop or click to upload your Image
                </h1>
              </div>
            </div>
          </div>


          <div className="w-full h-full md:w-1/3  pb-10">
            {uploadedFile && (
              <div className="w-52">
                <p className='text-center font-bold py-1'>Uploaded Image</p>
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt={`uploaded-img`}
                  className="max-w-full h-auto rounded"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;


