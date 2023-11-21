import React from "react";
import Input from "../../../Inputs/Input";

const CostAndDuration = ({ programLevels, setProgramLevels }) => {
  const levelOfEducation = [
    "",
    "Grade-1",
    "Grade-2",
    "Grade-3",
    "Grade-4",
    "Grade-5",
    "Grade-6",
    "Grade-7",
    "Grade-8",
    "Grade-9",
    "Grade-10",
    "Grade-11",
    "Grade-12/High School",
    "1-Year Post-Secondary Certificate",
    "2-Year Undergraduate Diploma",
    "3-Year Undergraduate Advanced Diploma",
    "3-Year Bachelors Degree",
    "4-Year Bachelors Degree",
    "Postgraduate Certificate/Diploma",
    "Master DEgree",
    "Doctoral Degree (Phd, M.D.,...)",
  ];

  const handleChange = (e, v) => {
    setProgramLevels(
      // On autofill we get a stringified value.
      typeof v === "string" ? v?.split(",") : v
    );
  };
  return (
    <>
      <h1 className="mt-3 text-xl font-semibold text-gray-700">
        Institute Cost and Duration
      </h1>
      <div className="grid grid-cols-3 gap-4 my-4">
        <Input
          type="text"
          title={"Application Free"}
          isRequired
          required
          placeholder="Enter fee"
        />
        <Input
          type="text"
          title={"Average Graduated Program"}
          isRequired
          required
          placeholder="Enter program"
        />
        <Input
          type="text"
          title={"Average Undergraduate Program"}
          isRequired
          required
          placeholder="Enter program"
        />
        <Input
          type="text"
          title={"Cost of Living"}
          isRequired
          required
          placeholder="Enter cost"
        />
        <Input
          type="text"
          title={"Grass Tuition"}
          isRequired
          required
          placeholder="Enter grass"
        />
        {/* <SelectChip
          title="Program Levels"
          options={levelOfEducation}
          stateArr={programLevels}
          isRequired
          setStateArr={setProgramLevels}
          onChangeHandler={handleChange}
        /> */}
      </div>
    </>
  );
};

export default CostAndDuration;
