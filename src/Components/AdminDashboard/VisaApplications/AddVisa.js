import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import formatBytes from "../../../Utilities/GetFileSize";
import { useAddVisaDocumentMutation } from "../../../features/student/studentApi";
import Input from "../../Inputs/Input";
import SelectCountry from "../../Inputs/SelectCountry";
import TextArea from "../../Inputs/TextArea";
import SnackMessage from "../../SnackBarMessage/SnackMessage";

function AddVisa() {
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [documents, setDocuments] = useState([]);
  const [visaDocuments, setVisaDocuments] = useState([]);
  const [addMore, setAddMore] = useState(false);
  const [addVisaDocument] = useAddVisaDocumentMutation();
  const [mssOpen, setMssOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setDocuments((prevImages) => [...prevImages, file]);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // doc delete handler
  const handleDelete = (index) => {
    setDocuments((prevDoc) => {
      return prevDoc.filter((d, i) => i !== index);
    });
  };

  // handle visa document delete
  const handleVisaDocDelete = (index) => {
    setVisaDocuments((prevDoc) => {
      return prevDoc.filter((d, i) => i !== index);
    });
  };

  // state clear
  function stateClear() {
    setTitle("");
    setDescription("");
    setDocuments([]);
    setVisaDocuments([]);
  }

  // local submit
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    if (!country || !title || !documents || !description) {
      alert("Please fill up form first");
      return;
    }
    const makeDoc = {
      country,
      title,
      documents,
      description,
    };

    setVisaDocuments((prevDocs) => [...prevDocs, makeDoc]);
    setTitle("");
    setDescription("");
    setDocuments([]);
    setAddMore(false);
  };

  // server submit
  const handleServerSubmit = () => {
    visaDocuments.forEach((visa) => {
      const formData = new FormData();
      formData.append("title", visa?.title);
      formData.append("description", visa?.description);
      formData.append("country", visa?.country);
      visa?.documents.forEach((doc) => {
        formData.append("files", doc);
      });
      addVisaDocument(formData)
        .unwrap()
        .then((data) => {
          console.log(data);
          if (data?.status === 201) {
            setMessage({
              message: "Data Successfully Submitted",
              error: false,
            });
            stateClear();
            return setMssOpen(true);
          } else {
            setMessage({
              message: "Something went wrong. Please try again.",
              error: true,
            });
            return setMssOpen(true);
          }
        })
        .catch((e) => {
          setMessage({
            message: "Something went wrong. Please try again.",
            error: true,
          });
          return setMssOpen(true);
        });
    });
  };
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <SnackMessage message={message} open={mssOpen} setOpen={setMssOpen} />
      <div className="w-full max-w-[600px] mx-auto shadow-md rounded-md p-4 bg-white">
        <h1 className="text-xl font-semibold text-center text-gray-800">
          Add Visa Application
        </h1>
        {/* added documents start */}
        <div className="w-full py-2 space-y-3">
          {visaDocuments.map((item, i) => (
            <div
              key={i}
              className="border p-2 border-secondary rounded-md flex items-start justify-between w-full">
              <h1>{item?.title}</h1>
              <div
                onClick={() => handleVisaDocDelete(i)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
                <MdOutlineCancel className="text-lg text-red-500" />
              </div>
            </div>
          ))}
        </div>
        {/* added documents end */}
        <div></div>
        <div className="space-y-3 mt-4">
          <SelectCountry
            countryName={country}
            setCountryName={setCountry}
            title={"Select a country"}
            placeholder="Country"
            isRequired
          />

          {/* form start */}
          {addMore && (
            <form
              onSubmit={handleLocalSubmit}
              className="space-y-4 p-2 border border-secondary rounded-md">
              <Input
                title={"Document title"}
                placeholder="Write a document title"
                isRequired
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
              {/* application documents start */}
              <div className="">
                <h1 className="text-sm font-medium text-gray-800">
                  Add Documents
                </h1>
                <div className="w-full min-h-[220px] h-auto mt-1 border border-dashed border-gray-400 bg-gray-100 rounded-md">
                  {/* document visualization */}
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
                      click or drag and drop to select documents
                    </h1>
                  </div>
                </div>
              </div>
              {/* application documents end */}
              <TextArea
                title={"Description"}
                placeholder="Write about documents"
                isRequired
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-2 text-sm text-white rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200">
                Add
              </button>
            </form>
          )}
          {/* form end */}
          {!addMore && (
            <button
              onClick={() => setAddMore(true)}
              className="w-full py-2 text-sm text-white rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200">
              Add Document
            </button>
          )}

          {/* server submit button */}
          {visaDocuments?.length && (
            <button
              onClick={handleServerSubmit}
              className="w-full py-2 text-sm text-white rounded-lg bg-secondary hover:brightness-105 active:scale-95 duration-200">
              Submit All Data
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddVisa;
