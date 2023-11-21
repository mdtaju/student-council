import { Cancel } from "@mui/icons-material";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Input from "../../../Inputs/Input";

const CustomTest = ({ tests, setTests }) => {
  const [isTest, setIsTest] = useState(false);
  const [testTitle, setTestTitle] = useState("");
  const [testScore, setTestScore] = useState("");
  const [testNoBand, setTestNoBand] = useState("");
  const [updateIndex, setUpdateIndex] = useState("");

  const handleTestCancel = () => {
    setIsTest(false);
    setTestTitle("");
    setTestScore("");
    setTestNoBand("");
    setUpdateIndex("");
  };

  const handleTestDelete = (index) => {
    setTests((prevTest) => {
      return prevTest.filter((t, i) => i !== index);
    });
  };

  const handleTestEdit = (test, index) => {
    setTestTitle(test?.test_name);
    setTestScore(test?.test_score);
    setTestNoBand(test?.test_no_band);
    setUpdateIndex(index);
    setIsTest(true);
  };

  const handleTestSave = () => {
    const makeTest = {
      test_name: testTitle,
      test_score: testScore,
      test_no_band: testNoBand,
    };

    if (updateIndex === 0 || updateIndex > 0) {
      setTests((prevTests) => {
        return prevTests.map((t, i) => {
          if (updateIndex === i) {
            return {
              ...t,
              ...makeTest,
            };
          } else {
            return t;
          }
        });
      });
      setTestTitle("");
      setTestScore("");
      setTestNoBand("");
      setUpdateIndex("");
      setIsTest(false);
      return;
    }

    setTests((prevTest) => [...prevTest, makeTest]);

    setTestTitle("");
    setTestScore("");
    setTestNoBand("");
    setUpdateIndex("");
  };
  return (
    <>
      <div className="col-span-3 space-y-2">
        {tests?.map((t, i) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 border border-green-400 bg-gray-100 rounded-md"
            key={i}>
            <div>
              <h1 className="text-sm font-medium">Test Name:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {t.test_name}
              </p>
            </div>
            <div>
              <h1 className="text-sm font-medium">Test Score:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {t.test_score}
              </p>
            </div>
            {/* delete and text area container */}
            <div className="flex items-start justify-between">
              {/* text area */}
              <div>
                <h1 className="text-sm font-medium">Test No Band:</h1>
                <p className="text-normal font-semibold text-gray-700">
                  {t.test_no_band}
                </p>
              </div>

              {/* delete and edit handler container  */}

              <div className="flex items-center gap-4">
                <div
                  onClick={() => handleTestDelete(i)}
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
            {/* delete and text area container end */}
          </div>
        ))}
      </div>
      {isTest && (
        <div className="w-full space-y-3 md:col-span-3 md:space-y-0 md:grid md:grid-cols-3 gap-4">
          <Input
            title="Test Title"
            placeholder="Enter title"
            type="text"
            // // isRequired
            // required
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
          />
          <Input
            title="Test Score"
            placeholder="Enter score"
            type="number"
            // isRequired
            // required
            value={testScore}
            onChange={(e) => setTestScore(e.target.value)}
          />
          <Input
            title="Test no Band Less Than"
            placeholder="Enter score"
            type="number"
            // isRequired
            // required
            value={testNoBand}
            onChange={(e) => setTestNoBand(e.target.value)}
          />

          <div className="w-fit col-span-3 ml-auto flex items-center gap-4">
            <div
              className="px-4 py-1 text-white bg-gray-500 hover:bg-gray-600 active:scale-95 duration-200 rounded-md cursor-pointer"
              onClick={handleTestCancel}>
              Cancel
            </div>
            <div
              onClick={handleTestSave}
              className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
              Save
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsTest(true)}
        className="px-6 mt-4 py-1 w-fit text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-full">
        Add Test
      </button>
    </>
  );
};

export default CustomTest;
