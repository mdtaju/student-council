import { Container } from '@mui/material';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs';

const UploadFile = ({
     uploadedFile,
     setUploadedFile,
}) => {
//   const [uploadedFile, setUploadedFile] = useState(null);

  console.log(uploadedFile)
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile({
      file,
      id: Math.random(),
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Container>
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
        <div {...getRootProps()} className="w-full flex items-center justify-between">
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
            <div key={uploadedFile.id} className="w-52  ">
            <p className='text-center font-bold py-1'>Uploaded Image</p>
              <img
                src={URL.createObjectURL(uploadedFile.file)}
                alt={`uploaded-img-${uploadedFile.id}`}
                className="max-w-full h-auto rounded"
              />
            </div>
          )}
        </div>
        </div>
        </div>
      </div>
    </Container>
  );
};

export default UploadFile;




// import { Container } from '@mui/material';
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { AiOutlineFileText } from 'react-icons/ai';
// import { BsFillFileEarmarkCheckFill } from 'react-icons/bs';
// import { MdOutlineCancel } from 'react-icons/md';

// const UploadFile = () => {
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newFiles = acceptedFiles.map((file) => ({
//       file,
//       id: Math.random(),
//     }));
//     setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <Container>
//       <div className="flex flex-wrap">
//         <div >
//           <div className="my-6 space-y-4">
//             {uploadedFiles.map(({ file, id }) => (
//               <div key={id} className="flex items-start gap-4">
//                 <button
//                   onClick={() => {
//                     setUploadedFiles((prevFiles) =>
//                       prevFiles.filter((uploadedFile) => uploadedFile.id !== id)
//                     );
//                   }}
//                 >
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* right side for uploaded images */}
//         <div className="w-full md:w-1/3 p-4 sm:p-6 mt-10">

         
//         </div>
//       </div>




//      <div  className="w-full px-6 h-[300px] py-10 border-2 flex  border-dashed border-green-400 bg-green-50 rounded-lg mt-6 cursor-pointer" >
//          {/* drop zone for upload files */}
//       <div
//         {...getRootProps()}
//         className="w-full  flex items-center justify-between "
//       >
//         <div className='mr-5 '><input {...getInputProps()} />
//         <div className="flex items-center gap-3 w-fit mx-auto ">
//           <BsFillFileEarmarkCheckFill className="text-green-500" />
//           <h1 className="text-center font-semibold text-2xl   text-gray-600">
//             Drag and drop or click to upload your file
//           </h1>
//         </div>
//         </div>




//         <div className=" ">
//           {/* <h1 className="text-2xl font-bold text-gray-600">Uploaded Images</h1> */}

//           <div className="flex flex-wrap">
//             {uploadedFiles.map(({ file, id }) => (
//               <div key={id} className="w-60 h-full border-2 border-dashed border-red-400">
//                 <img
//                   src={URL.createObjectURL(file)}
//                   alt={`uploaded-img-${id}`}
//                   className="max-w-full h-auto rounded"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>


//       </div>
//      </div>
//     </Container>
//   );
// };

// export default UploadFile;





// import { Container } from '@mui/material';
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { AiOutlineFileText } from 'react-icons/ai';
// import { BsFillFileEarmarkCheckFill } from 'react-icons/bs';
// import { MdOutlineCancel } from 'react-icons/md';

// const UploadFile = () => {
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newFiles = acceptedFiles.map((file) => ({
//       file,
//       id: Math.random(),
//     }));
//     setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <Container>
//       <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
//         <h1 className="text-2xl font-bold text-gray-600">Upload Documents</h1>

//         {/* uploaded files */}
//         <div className="my-6 space-y-4">
//           {uploadedFiles.map(({ file, id }) => (
//             <div key={id} className="flex items-start gap-4">
//               <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
//                 <AiOutlineFileText className="text-2xl text-blue-400" />
//               </div>

//               <button
//                 className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer"
//                 onClick={() => {
//                   setUploadedFiles((prevFiles) =>
//                     prevFiles.filter((uploadedFile) => uploadedFile.id !== id)
//                   );
//                 }}
//               >
//                 <MdOutlineCancel className="text-lg text-red-500" />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* drop zone for upload files */}
//         <div
//           {...getRootProps()}
//           className="w-full px-6 py-10 border-2 border-dashed border-green-400 bg-green-50 rounded-lg mt-6 cursor-pointer"
//         >
//           <input {...getInputProps()} />
//           <div className="flex items-center gap-3 w-fit mx-auto">
//             <BsFillFileEarmarkCheckFill className="text-green-500" />
//             <h1 className="text-center font-semibold text-gray-600">
//               Drag and drop or click to upload your file
//             </h1>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default UploadFile;




















// import { Container } from '@mui/material';
// import React from 'react';
// import { useCallback } from 'react'
// import { useDropzone } from 'react-dropzone'
// import { AiOutlineFileText } from 'react-icons/ai';
// import { BsFillFileEarmarkCheckFill } from 'react-icons/bs';
// import { MdOutlineCancel } from 'react-icons/md';


// const UploadFile = () => {
//     const onDrop = useCallback(acceptedFiles => {
//         // Do something with the files
//     }, [])
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

//     return (
//         <Container>
          

//             <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
//                 <h1 className="text-2xl font-bold text-gray-600">Upload Documents</h1>
//                 {/* uploaded files */}
//                 <div className="my-6 space-y-4">
//                     <div className="flex items-start gap-4">
//                         <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
//                             <AiOutlineFileText className="text-2xl text-blue-400" />
//                         </div>

//                         <button className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
//                             <MdOutlineCancel className="text-lg text-red-500" />
//                         </button>
//                     </div>
//                     <div className="flex items-start gap-4">
//                         <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
//                             <AiOutlineFileText className="text-2xl text-blue-400" />
//                         </div>
//                         <button className="w-[30px] h-[30px] grid place-items-center active:scale-95 duration-200 rounded-full bg-red-100 cursor-pointer">
//                             <MdOutlineCancel className="text-lg text-red-500" />
//                         </button>
//                     </div>
//                 </div>
//                 {/* drop zone for upload files */}
//                 <div
//                     {...getRootProps()}
//                     className="w-full px-6 py-10 border-2 border-dashed border-green-400 bg-green-50 rounded-lg mt-6 cursor-pointer">
//                     <input {...getInputProps()} />
//                     <div className="flex items-center gap-3 w-fit mx-auto">
//                         <BsFillFileEarmarkCheckFill className="text-green-500" />
//                         <h1 className="text-center font-semibold text-gray-600">
//                             Drag and drop or click to upload your file
//                         </h1>
//                         {/* <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 active:scale-95 duration-200 border border-gray-400 rounded-md">
//             Upload
//           </button> */}
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default UploadFile;