import React, { useState } from "react";
import DateInput from "../../../../Inputs/DateInput";
import GroupAutoSelectInput from "../../../../Inputs/GroupAutoSelectInput";
import Input from "../../../../Inputs/Input";
import RadioInput from "../../../../Inputs/RadioInut";
import SelectCountry from "../../../../Inputs/SelectCountry";

const InputBox = ({
  countryOfIns,
  setCountryOfIns,
  nameOfIns,
  setNameOfIns,
  attSclLevelOfEdu,
  setAttSclLevelOfEdu,
  instructionLang,
  setInstructionLang,
  attInsFrom,
  setAttInsFrom,
  attInsTo,
  setAttInsTo,
  degreeName,
  setDegreeName,
  graduatedFromThisIns,
  setGraduatedFromThisIns,
  graduationDate,
  setGraduationDate,
  isPhysicalCer,
  setIsPhysicalCer,
  insAddress,
  setInsAddress,
  insCity,
  setInsCity,
  insState,
  setInsState,
  insZipCode,
  setInsZipCode,
  setAttendSchools,
  existsSchoolIndex,
  setExistsSchoolIndex,
  setBoxShow,
}) => {
  // error message when all form no fill up
  const [error, setError] = useState("");
  const [inputErrors, setInputErrors] = useState({
    country: false,
    ins_name: false,
    level_of_edu: false,
    primary_language: false,
    attend_from: false,
    attend_to: false,
    degree_name: false,
    graduation_date: false,
    address: false,
    city: false,
    state: false,
    zip_code: false,
  });

  const saveSchoolHandler = () => {
    if (!countryOfIns) {
      setInputErrors((prevState) => ({ ...prevState, country: true }));
    }
    if (!nameOfIns) {
      setInputErrors((prevState) => ({ ...prevState, ins_name: true }));
    }
    if (!attSclLevelOfEdu) {
      setInputErrors((prevState) => ({ ...prevState, level_of_edu: true }));
    }
    if (!instructionLang) {
      setInputErrors((prevState) => ({ ...prevState, primary_language: true }));
    }
    if (!attInsFrom) {
      setInputErrors((prevState) => ({ ...prevState, attend_from: true }));
    }
    if (!attInsTo) {
      setInputErrors((prevState) => ({ ...prevState, attend_to: true }));
    }
    if (!degreeName) {
      setInputErrors((prevState) => ({ ...prevState, attend_to: true }));
    }
    if (!graduationDate) {
      setInputErrors((prevState) => ({ ...prevState, graduation_date: true }));
    }
    if (!insAddress) {
      setInputErrors((prevState) => ({ ...prevState, address: true }));
    }
    if (!insCity) {
      setInputErrors((prevState) => ({ ...prevState, city: true }));
    }
    if (!insState) {
      setInputErrors((prevState) => ({ ...prevState, state: true }));
    }
    if (!insZipCode) {
      setInputErrors((prevState) => ({ ...prevState, zip_code: true }));
    }

    if (countryOfIns) {
      setInputErrors((prevState) => ({ ...prevState, country: false }));
    }
    if (nameOfIns) {
      setInputErrors((prevState) => ({ ...prevState, ins_name: false }));
    }
    if (attSclLevelOfEdu) {
      setInputErrors((prevState) => ({ ...prevState, level_of_edu: false }));
    }
    if (instructionLang) {
      setInputErrors((prevState) => ({
        ...prevState,
        primary_language: false,
      }));
    }
    if (attInsFrom) {
      setInputErrors((prevState) => ({ ...prevState, attend_from: false }));
    }
    if (attInsTo) {
      setInputErrors((prevState) => ({ ...prevState, attend_to: false }));
    }
    if (degreeName) {
      setInputErrors((prevState) => ({ ...prevState, attend_to: false }));
    }
    if (graduationDate) {
      setInputErrors((prevState) => ({ ...prevState, graduation_date: false }));
    }
    if (insAddress) {
      setInputErrors((prevState) => ({ ...prevState, address: false }));
    }
    if (insCity) {
      setInputErrors((prevState) => ({ ...prevState, city: false }));
    }
    if (insState) {
      setInputErrors((prevState) => ({ ...prevState, state: false }));
    }
    if (insZipCode) {
      setInputErrors((prevState) => ({ ...prevState, zip_code: false }));
    }

    if (
      !countryOfIns ||
      !nameOfIns ||
      !attSclLevelOfEdu ||
      !instructionLang ||
      !attInsFrom ||
      !attInsTo ||
      !degreeName ||
      !graduationDate ||
      !insAddress ||
      !insCity ||
      !insState ||
      !insZipCode
    ) {
      return setError("Please fill up the all input.");
    }

    if (existsSchoolIndex === 0 || existsSchoolIndex) {
      setAttendSchools((prevState) => {
        const getSchools = prevState.map((s, i) => {
          if (i === existsSchoolIndex) {
            return {
              ...s,
              country_of_institute: countryOfIns,
              name_of_institute: nameOfIns,
              level_of_education: attSclLevelOfEdu,
              primary_language_of_institute: instructionLang,
              attend_institute_from: attInsFrom?._d.toUTCString(),
              attend_institute_to: attInsTo?._d.toUTCString(),
              degree_name: degreeName,
              graduated_from_this_institute: graduatedFromThisIns,
              graduated_date: graduationDate?._d.toUTCString(),
              is_physical_certificate: isPhysicalCer,
              institute_address: insAddress,
              institute_city: insCity,
              institute_state: insState,
              institute_zip_code: insZipCode,
            };
          } else {
            return s;
          }
        });
        return getSchools;
      });
      setError("");
      setBoxShow(false);
      return;
    }
    setAttendSchools((prevState) => [
      ...prevState,
      {
        country_of_institute: countryOfIns,
        name_of_institute: nameOfIns,
        level_of_education: attSclLevelOfEdu,
        primary_language_of_institute: instructionLang,
        attend_institute_from: attInsFrom?._d.toUTCString(),
        attend_institute_to: attInsTo?._d.toUTCString(),
        degree_name: degreeName,
        graduated_from_this_institute: graduatedFromThisIns,
        graduated_date: graduationDate?._d.toUTCString(),
        is_physical_certificate: isPhysicalCer,
        institute_address: insAddress,
        institute_city: insCity,
        institute_state: insState,
        institute_zip_code: insZipCode,
      },
    ]);
    setError("");
    setBoxShow(false);
  };

  const handleCancel = () => {
    setBoxShow(false);
  };
  const handleIsGraduate = (value) => {
    setGraduatedFromThisIns(value);
  };

  const levelOfEducation = [
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

  const graduatedOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  return (
    <div className="pb-4 border-b-2 border-gray-300">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
        <SelectCountry
          title={"Country of Institution"}
          isRequired
          countryName={countryOfIns}
          setCountryName={setCountryOfIns}
          placeholder="Search a country"
          error={inputErrors?.country}
        />
        <Input
          title={"Name of Institution"}
          error={inputErrors?.ins_name}
          isRequired
          required
          placeholder="Enter Institution Name..."
          type="text"
          value={nameOfIns}
          onChange={(e) => setNameOfIns(e.target.value)}
        />
        <GroupAutoSelectInput
          title={"Level of Education"}
          isRequired
          required
          optionsArray={levelOptions}
          state={attSclLevelOfEdu}
          setState={setAttSclLevelOfEdu}
          error={inputErrors?.level_of_edu}
        />
        <Input
          title={"Primary Language of Instruction"}
          isRequired
          required
          placeholder="Enter Language of Instruction..."
          type="text"
          value={instructionLang}
          onChange={(e) => setInstructionLang(e.target.value)}
          error={inputErrors?.primary_language}
        />
        <DateInput
          title="Attended Institution From"
          isRequired={true}
          required
          format="DD-MM-YYYY"
          value={attInsFrom}
          onChange={(e) => setAttInsFrom(e)}
          error={inputErrors?.attend_from}
        />
        <DateInput
          title="Attended Institution To"
          isRequired={true}
          required
          format="DD-MM-YYYY"
          value={attInsTo}
          onChange={(e) => setAttInsTo(e)}
          error={inputErrors?.attend_to}
        />
        <Input
          title={"Degree Name"}
          isRequired
          required
          placeholder="Enter Degree Name..."
          type="text"
          value={degreeName}
          onChange={(e) => setDegreeName(e.target.value)}
          error={inputErrors?.degree_name}
        />
      </div>
      <div className="w-full flex flex-col gap-6">
        <RadioInput
          title={"I have graduated from this institution"}
          isRequired
          options={graduatedOptions}
          selectedValue={graduatedFromThisIns}
          onChange={handleIsGraduate}
        />
        <div className="w-1/3">
          <DateInput
            title="Graduation Date"
            isRequired={true}
            required
            format="DD-MM-YYYY"
            value={graduationDate}
            onChange={(e) => setGraduationDate(e)}
            error={inputErrors?.graduation_date}
          />
        </div>
        <label className="flex items-center gap-4 select-none cursor-pointer">
          <input
            type="checkbox"
            checked={isPhysicalCer}
            onChange={() => setIsPhysicalCer((prevS) => !prevS)}
            className="w-[24px] h-[24px]"
          />
          <span>I have the physical certificate for this degree</span>
        </label>
      </div>
      {/* school address */}
      <h1 className="text-lg font-bold text-gray-600 mt-10">School Address</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
        <Input
          title={"Address"}
          isRequired
          required
          placeholder="Enter Address..."
          type="text"
          value={insAddress}
          onChange={(e) => setInsAddress(e.target.value)}
          error={inputErrors?.address}
        />
        <Input
          title={"City/Town"}
          isRequired
          required
          placeholder="Enter your city..."
          type="text"
          value={insCity}
          onChange={(e) => setInsCity(e.target.value)}
          error={inputErrors?.city}
        />

        <Input
          title={"Provence/State"}
          isRequired
          required
          placeholder="Enter state name..."
          type="text"
          value={insState}
          onChange={(e) => setInsState(e.target.value)}
          error={inputErrors?.state}
        />
        <Input
          title={"Postal/Zip Code"}
          isRequired
          required
          placeholder="Enter code..."
          type="number"
          value={insZipCode}
          onChange={(e) => setInsZipCode(e.target.value)}
          error={inputErrors?.zip_code}
        />
      </div>
      <p className="text-red-600 font-medium text-sm text-center my-4">
        {error}
      </p>
      <div className="w-fit ml-auto flex items-center gap-4">
        <div
          className="px-4 py-1 text-white bg-gray-500 hover:bg-gray-600 active:scale-95 duration-200 rounded-md cursor-pointer"
          onClick={handleCancel}>
          Cancel
        </div>
        <div
          onClick={saveSchoolHandler}
          className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
          Save
        </div>
      </div>
    </div>
  );
};

export default InputBox;
