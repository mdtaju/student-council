import React, { memo } from "react";
import GroupAutoSelectInput from "../../../Inputs/GroupAutoSelectInput";
import Input from "../../../Inputs/Input";
import SelectCountry from "../../../Inputs/SelectCountry";
import SelectInput from "../../../Inputs/SelectInput";

const EducationInfo = ({
  educationCountry,
  setEducationCountry,
  levelOfEdu,
  setLevelOfEdu,
  grade,
  setGrade,
  gradeAva,
  setGradeAva,
  graduatedFrom,
  setGraduatedFrom,
}) => {
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

  const groups = ["Primary", "Secondary", "Undergraduate", "Postgraduate"];

  const levelOptions = levelOfEducation.map((option, i) => {
    let groupName;
    if (i < 8) {
      groupName = groups[0];
    } else if (i < 12 && i > 8) {
      groupName = groups[1];
    } else if (i < 17 && i > 12) {
      groupName = groups[2];
    } else {
      groupName = groups[3];
    }

    return {
      firstLetter: groupName,
      title: option,
    };
  });

  const gradingScheme = [
    "",
    "Higher Education Letter Scale F - A+",
    "Higher Education Grade Point 4.0 Scale (2.0 as Passing Grade)",
    "Higher Education Percentage Scale 0-100",
    "Other",
  ];
  return (
    <div>
      <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
        <h1 className="text-2xl font-bold text-gray-600">
          Latest Education Summary
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
          <SelectCountry
            title={"Country of Education"}
            isRequired
            countryName={educationCountry}
            setCountryName={setEducationCountry}
            placeholder="Search country"
          />
        
          <GroupAutoSelectInput
            title={"Highest Level of Education"}
            isRequired
            required
            optionsArray={levelOptions}
            state={levelOfEdu}
            setState={setLevelOfEdu}
          />
          <SelectInput
            title={"Grading Scheme"}
            isRequired
            // inputValue={selectGrade}
            // onInputChange={(event, newInputValue) => {
            //   setSelectGrade(newInputValue);
            // }}
            selectState={grade}
            setSelectState={setGrade}
            placeholder="Select a grade..."
            optionsArray={gradingScheme}
          />
          <Input
            title={"Grade Average"}
            isRequired
            required
            placeholder="Enter grade..."
            type="number"
            value={gradeAva}
            onChange={(e) => setGradeAva(e.target.value)}
          />
          <label className="flex items-center gap-4 select-none cursor-pointer mt-4">
            <input
              type="checkbox"
              checked={graduatedFrom}
              onChange={() => setGraduatedFrom((prevS) => !prevS)}
              className="w-[24px] h-[24px]"
            />
            <span>Graduated from most recent school</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default memo(EducationInfo);
