import { Cancel } from "@mui/icons-material";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Input from "../../../Inputs/Input";
import TextArea from "../../../Inputs/TextArea";

const Features = ({ features, setFeatures }) => {
  const [addFeature, setAddFeature] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateIndex, setUpdateIndex] = useState("");

  // useEffect(() => {
  //   setTitle("");
  //   setDescription("");
  // }, [features]);

  const handleSaveFeature = () => {
    const makeFeature = {
      title,
      description,
    };
    if (updateIndex === 0 || updateIndex > 0) {
      setFeatures((prevF) => {
        return prevF.map((f, i) => {
          if (updateIndex === i) {
            return {
              ...f,
              ...makeFeature,
            };
          } else {
            return f;
          }
        });
      });
      setUpdateIndex("");
      setTitle("");
      setDescription("");
      return;
    }
    setFeatures((prevFeature) => [...prevFeature, makeFeature]);
    setUpdateIndex("");
    setTitle("");
    setDescription("");
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setAddFeature(false);
    setUpdateIndex("");
  };

  const deleteHandler = (index) => {
    setFeatures((prevFea) => {
      return prevFea.filter((f, i) => i !== index);
    });
  };

  const editHandler = (f, i) => {
    setUpdateIndex(i);
    setTitle(f?.title);
    setDescription(f?.description);
    setAddFeature(true);
  };
  return (
    <>
      <h1 className="mt-3 text-xl font-semibold text-gray-700">Features</h1>
      {features?.map((f, i) => (
        <div
          key={i}
          className="my-4 p-4 border border-green-300 rounded-md mb-3 bg-gray-100">
          <div className="flex gap-4 items-start justify-between">
            <h1 className="text-lg font-medium text-gray-700">{f.title}</h1>
            {/* delete handler */}
            <div className="flex items-center gap-4">
              <div
                onClick={() => deleteHandler(i)}
                className="w-[32px] h-[32px] bg-red-400 hover:bg-red-500 active:scale-95 duration-200 text-white rounded-full grid place-items-center cursor-pointer">
                <Cancel />
              </div>
              <div
                onClick={() => editHandler(f, i)}
                className="w-[32px] h-[32px] bg-blue-400 hover:bg-blue-500 active:scale-95 duration-200 text-white rounded-full grid place-items-center cursor-pointer">
                <BiEdit />
              </div>
            </div>
          </div>
          {/* description */}
          <p className="text-normal font-normal">{f.description}</p>
        </div>
      ))}
      {addFeature && (
        <div className="grid grid-cols-3 gap-4 my-4">
          <Input
            title={"Title"}
            // isRequired
            placeholder="Add a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="col-span-3">
            <TextArea
              title={`Description`}
              placeholder={"Provide details..."}
              // isRequired
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-fit col-span-3 ml-auto flex items-center gap-4">
            <div
              className="px-4 py-1 text-white bg-gray-500 hover:bg-gray-600 active:scale-95 duration-200 rounded-md cursor-pointer"
              onClick={handleCancel}>
              Cancel
            </div>
            <div
              onClick={handleSaveFeature}
              className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
              Save
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setAddFeature(true)}
        className="px-6 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-full">
        Add Feature
      </button>
    </>
  );
};

export default Features;
