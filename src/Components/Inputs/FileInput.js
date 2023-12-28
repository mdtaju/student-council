// FileUpload.js
import { Container } from '@mui/material';
import React, { useState } from 'react';
// import './FileUpload.css'; // Create this file for styling
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const FileInput = ({
    selectedFile,
     setSelectedFile,
}) => {
   

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

    };

    return (
        <Container>
            <div className='bg-white rounded-lg shadow-lg mt-40'>
                <div className="flex justify-center items-center ">
                    <div className="w-3/4 p-4 relative ">
                        <label className="block mb-2 text-xl font-bold text-gray-700">Upload Your Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className=" border-2  border-black  inset-0 opacity-0 rounded py-2 px-4 h-52 w-full relative z-10"
                        />
                        {selectedFile ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-4xl font-bold text-gray-700"> <span className='text-4xl'><CloudUploadIcon sx={{ fontSize: 60 }}/></span> File Chosen</p>
                            </div>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-4xl font-bold text-gray-700"> <span className='text-4xl'><CloudUploadIcon sx={{ fontSize: 60 }}/></span> Choose File</p>
                            </div>
                        )}
                    </div>


                    {/* Right Section - Display Uploaded Image */}
                    <div className="w-1/4 p-4">
                        {!selectedFile && (
                            <div>
                                <label className="block mb-2 text-xl font-bold text-gray-700">Uploaded Image</label>
                                <img
                                    alt=''
                                    className="w-full h-52 rounded  border-2 border-dashed border-blue-300"
                                />
                            </div>
                        )}

                        {selectedFile && (
                            <div>
                                <label className="block mb-2 text-sm font-bold text-gray-700">Uploaded Image</label>
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Uploaded"
                                    className="max-w-full h-52 rounded "
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FileInput;
