import { Cancel } from "@mui/icons-material";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Input from "../../../Inputs/Input";

const StandardizedTest = ({ standardizedTests, setStandardizedTests }) => {
  const [showStandardizedForm, setStandardizedForm] = useState(false);
  const [standardizedTestName, setStandardizedName] = useState("");
  const [standardizedScore, setStandardizedScore] = useState("");
  const [updateIndex, setUpdateIndex] = useState("");

  // standardized
  const handleStandardizedTestSave = () => {
    const makeStandTest = {
      test_name: standardizedTestName,
      test_score: standardizedScore,
    };

    if (updateIndex === 0 || updateIndex > 0) {
      setStandardizedTests((prevTests) => {
        return prevTests.map((st, i) => {
          if (updateIndex === i) {
            return {
              ...st,
              ...makeStandTest,
            };
          } else {
            return st;
          }
        });
      });
      setStandardizedName("");
      setStandardizedScore("");
      setUpdateIndex("");
      setStandardizedForm(false);
      return;
    }

    setStandardizedTests((prevTests) => [...prevTests, makeStandTest]);
    setStandardizedName("");
    setStandardizedScore("");
    setUpdateIndex("");
  };

  const handleStandardizedTestCancel = () => {
    setStandardizedName("");
    setStandardizedScore("");
    setUpdateIndex("");
    setStandardizedForm(false);
  };

  const handleStandardizedTestDelete = (index) => {
    setStandardizedTests((prevTest) => {
      return prevTest.filter((t, i) => i !== index);
    });
  };

  const handleTestEdit = (st, index) => {
    setStandardizedName(st?.test_name);
    setStandardizedScore(st?.test_score);
    setUpdateIndex(index);
    setStandardizedForm(true);
  };
  return (
    <>
      <div className="col-span-3 space-y-2">
        {standardizedTests?.map((t, i) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 border border-green-400 bg-gray-100 rounded-md"
            key={i}>
            <div>
              <h1 className="text-sm font-medium">Test Name:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {t.test_name}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-sm font-medium">Test Score:</h1>
                <p className="text-normal font-semibold text-gray-700">
                  {t.test_score}
                </p>
              </div>
              {/* delete and edit handler container  */}
              <div className="flex items-center gap-4">
                <div
                  onClick={() => handleStandardizedTestDelete(i)}
                  className="w-[32px] h-[32px] bg-red-400 hover:bg-red-500 active:scale-95 duration-200 text-white rounded-full grid place-items-center cursor-pointer">
                  <Cancel />
                </div>
                <div
                  onClick={() => handleTestEdit(t, i)}
                  className="w-[32px] h-[32px] bg-blue-400 hover:bg-blue-500 active:scale-95 duration-200 text-white rounded-full grid place-items-center cursor-pointer">
                  <BiEdit />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showStandardizedForm && (
        <>
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              title="Test Title"
              placeholder="Enter title"
              type="text"
              // // isRequired
              // required
              value={standardizedTestName}
              onChange={(e) => setStandardizedName(e.target.value)}
            />
            <Input
              title="Test Score"
              placeholder="Enter score"
              type="number"
              // isRequired
              // required
              value={standardizedScore}
              onChange={(e) => setStandardizedScore(e.target.value)}
            />
          </div>
          <div className="col-span-3 ml-auto flex items-center gap-4">
            <div
              className="px-4 py-1 text-white bg-gray-500 hover:bg-gray-600 active:scale-95 duration-200 rounded-md cursor-pointer"
              onClick={handleStandardizedTestCancel}>
              Cancel
            </div>
            <div
              onClick={handleStandardizedTestSave}
              className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
              Save
            </div>
          </div>
        </>
      )}
      <button
        onClick={() => setStandardizedForm(true)}
        className="px-6 py-1 w-fit text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-full">
        Add Test
      </button>
    </>
  );
};

export default StandardizedTest;
