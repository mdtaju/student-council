import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const ProfileStepper = ({ progressRate }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-4 justify-around text-gray-600">
        <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold cursor-pointer">
          <h1>General Info</h1>
          {progressRate >= 20 && (
            <BsCheckCircleFill className="text-green-500" />
          )}
        </div>
        <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold cursor-pointer">
          <h1>Education History</h1>
          {progressRate >= 40 && (
            <BsCheckCircleFill className="text-green-500" />
          )}
        </div>
        <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold cursor-pointer">
          <h1>Test Scores</h1>
          {progressRate >= 60 && (
            <BsCheckCircleFill className="text-green-500" />
          )}
        </div>
        <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold cursor-pointer">
          <h1>Background Information</h1>
          {progressRate >= 80 && (
            <BsCheckCircleFill className="text-green-500" />
          )}
        </div>
        <div className="flex items-center gap-2 text-blue-500 text-sm font-semibold cursor-pointer">
          <h1>Upload Documents</h1>
          {progressRate >= 100 && (
            <BsCheckCircleFill className="text-green-500" />
          )}
        </div>
      </div>
      <div className="w-full bg-gray-300 rounded-full sticky top-0 overflow-clip">
        <div
          style={{ width: `${progressRate}%` }}
          className={`h-[10px] bg-green-500 duration-200 rounded-full`}></div>
      </div>
    </div>
  );
};

export default ProfileStepper;
