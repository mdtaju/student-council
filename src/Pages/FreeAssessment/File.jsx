import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs';
import Cropper from 'react-easy-crop';
import getCroppedImg from './getCroppedImg';

const File = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile({
      file,
      id: Math.random(),
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleCropImage = () => {
    // Use the croppedAreaPixels to get the cropped image
    const croppedImage = getCroppedImg(uploadedFile.file, croppedAreaPixels);
    // Handle the cropped image as needed (e.g., upload to server)
    console.log('Cropped Image:', croppedImage);
  };

  return (
    <div className="flex flex-wrap mt-40">
      {/* <div>
        <div className="my-6 space-y-4">
          {uploadedFile && (
            <div className="flex items-start gap-4">
              <button
                onClick={() => {
                  setUploadedFile(null);
                }}
              >
                Remove Uploaded Image
              </button>
            </div>
          )}
        </div>
      </div> */}

      {/* drop zone for upload file */}
      <div className="w-full h-[300px] py-10 border-2  border-dashed border-green-400 bg-green-50 rounded-lg  cursor-pointer">
        <p className="-mb-10 font-bold w-full ml-8">Upload Your Image</p>
        <div className="flex relative">
          <div {...getRootProps()} className="w-full flex items-center justify-between">
            <div className={`${uploadedFile ? 'absolute left-10 border-2 border-dashed border-green-400 w-[700px] pt-10  mx-auto mt-4 ' : "absolute border-2 top-20 left-8  border-dashed border-green-400   mx-auto  "}`}>
              <div className="mr-5">
                <input {...getInputProps()} />
                <div className={`flex ${uploadedFile ? 'mt-8' : 'mt-10 '}items-center ml-10 gap-3 w-fit mx-auto`}>
                  <h1 className="text-center pb-10 flex gap-2 font-semibold text-2xl text-gray-600">
                    <BsFillFileEarmarkCheckFill className="text-green-500" />
                    Drag and drop or click to upload your Image
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:w-2/3 pb-10">
            {uploadedFile && (
              <div key={uploadedFile.id} className="flex items-center justify-center">
                <div className="w-52 h-52">
                  <p className="text-center font-bold py-1">Uploaded Image</p>
                  <img
                    src={URL.createObjectURL(uploadedFile.file)}
                    alt={`uploaded-img-${uploadedFile.id}`}
                    className="w-40 mx-auto min-h-3 rounded"
                  />
                </div>
                <div className="ml-4">
                  <Cropper
                    image={URL.createObjectURL(uploadedFile.file)}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3} // You can adjust the aspect ratio as needed
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                  {/* <button onClick={handleCropImage}>Crop Image</button> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default File;
