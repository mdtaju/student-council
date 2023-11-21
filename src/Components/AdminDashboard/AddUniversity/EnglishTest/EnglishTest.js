import React from "react";
import Input from "../../../Inputs/Input";

const EnglishTest = () => {
  return (
    <>
      <h1 className="mt-6 mb-4 text-xl font-semibold text-gray-700">
        English Proficiency Test Requirements
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3">
        <Input
          title="PTE Overall"
          placeholder="Enter PTE overall score"
          type="number"
          // is// required
          // required
        />
        <Input
          title="PTE No Bands Less Than"
          placeholder="Enter score"
          type="number"
          // is// required
          // required
        />
        <Input
          title="TOEFL iBT Overall"
          placeholder="Enter score"
          type="number"
          // is// required
          // required
        />
        <Input
          title="TOEFL iBT no Bands Less Than"
          placeholder="Enter score"
          type="number"
          // is// required
          // required
        />
        <Input
          title="IELTS Overall"
          placeholder="Enter score"
          type="number"
          // is// required
          // required
        />
        <Input
          title="IELTS no Band Less Than"
          placeholder="Enter score"
          type="number"
          // is// required
          // required
        />
      </div>
    </>
  );
};

export default EnglishTest;
