import React from "react";
import Input from "../../../Inputs/Input";

const StandardizedTest = () => {
  return (
    <>
      <h1 className="mt-6 mb-4 text-xl font-semibold text-gray-700">
        Standardized Test Requirements
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3">
        <Input
          title="GRE Exam Score"
          placeholder="Enter score"
          type="number"
          // is// required
          // required
        />
        <Input
          title="GMAT Exam Score"
          placeholder="Enter score"
          type="number"
          // is// required
          // required
        />
      </div>
    </>
  );
};

export default StandardizedTest;
