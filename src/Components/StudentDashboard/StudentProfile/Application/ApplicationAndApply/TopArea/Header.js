import React from "react";

const Header = ({studentName,
  courseName,
  universityName}) => {
  return (
    <div className="p-4 border-b border-gray-400">
      <div className="flex items-center gap-4 text-base font-medium text-gray-600">
        <span>Student</span>
        <span>{">"}</span>
        <span>{studentName}</span>
        <span>{">"}</span>
        <span>Applications</span>
        <span>{">"}</span>
      </div>
      <p className="text-lg font-medium text-gray-800">
        {courseName} @
        {universityName}
      </p>
    </div>
  );
};

export default Header;
