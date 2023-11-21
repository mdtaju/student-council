import moment from "moment/moment";
import React, { memo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import DetailsBox from "./DetailsBox";
import InputBox from "./InputBox";

const SchoolsAttended = ({ attendSchools, setAttendSchools }) => {
  const [inputBoxShow, setInputBoxShow] = useState(false);
  const [countryOfIns, setCountryOfIns] = useState(""); // required
  const [nameOfIns, setNameOfIns] = useState(""); // required
  const [attSclLevelOfEdu, setAttSclLevelOfEdu] = useState(""); // required
  const [instructionLang, setInstructionLang] = useState(""); // required
  const [attInsFrom, setAttInsFrom] = useState(null); // required
  const [attInsTo, setAttInsTo] = useState(null); // required
  const [degreeName, setDegreeName] = useState(""); // required
  const [graduatedFromThisIns, setGraduatedFromThisIns] = useState("Yes"); // required
  const [graduationDate, setGraduationDate] = useState(null); // required
  const [isPhysicalCer, setIsPhysicalCer] = useState(false);
  const [insAddress, setInsAddress] = useState(""); // required
  const [insCity, setInsCity] = useState(""); // required
  const [insState, setInsState] = useState(""); // required
  const [insZipCode, setInsZipCode] = useState(""); // required
  const [existsSchoolIndex, setExistsSchoolIndex] = useState("");

  const handleAddSchools = () => {
    setCountryOfIns("");
    setNameOfIns("");
    setAttSclLevelOfEdu("");
    setInstructionLang("");
    setAttInsFrom(null);
    setAttInsTo(null);
    setDegreeName("");
    setGraduatedFromThisIns("");
    setGraduationDate(null);
    setIsPhysicalCer("");
    setInsAddress("");
    setInsCity("");
    setInsState("");
    setInsZipCode("");
    setInputBoxShow(true);
  };

  const handleExpire = (index) => {
    setExistsSchoolIndex(index);
    const getSchool = attendSchools.find((s, i) => i === index);
    setCountryOfIns(getSchool?.country_of_institute);
    setNameOfIns(getSchool?.name_of_institute);
    setAttSclLevelOfEdu(getSchool?.level_of_education);
    setInstructionLang(getSchool?.primary_language_of_institute);
    setAttInsFrom(moment.utc(getSchool?.attend_institute_from));
    setAttInsTo(moment.utc(getSchool?.attend_institute_to));
    setDegreeName(getSchool?.degree_name);
    setGraduatedFromThisIns(getSchool?.graduated_from_this_institute);
    setGraduationDate(moment.utc(getSchool?.graduation_date));
    setIsPhysicalCer(getSchool?.is_physical_certificate);
    setInsAddress(getSchool?.institute_address);
    setInsCity(getSchool?.institute_city);
    setInsState(getSchool?.institute_state);
    setInsZipCode(getSchool?.institute_zip_code);
    setInputBoxShow(true);
  };
  return (
    <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-600">Schools Attended</h1>
      {inputBoxShow && (
        <InputBox
          countryOfIns={countryOfIns}
          setCountryOfIns={setCountryOfIns}
          nameOfIns={nameOfIns}
          setNameOfIns={setNameOfIns}
          attSclLevelOfEdu={attSclLevelOfEdu}
          setAttSclLevelOfEdu={setAttSclLevelOfEdu}
          instructionLang={instructionLang}
          setInstructionLang={setInstructionLang}
          attInsFrom={attInsFrom}
          setAttInsFrom={setAttInsFrom}
          attInsTo={attInsTo}
          setAttInsTo={setAttInsTo}
          degreeName={degreeName}
          setDegreeName={setDegreeName}
          graduatedFromThisIns={graduatedFromThisIns}
          setGraduatedFromThisIns={setGraduatedFromThisIns}
          graduationDate={graduationDate}
          setGraduationDate={setGraduationDate}
          isPhysicalCer={isPhysicalCer}
          setIsPhysicalCer={setIsPhysicalCer}
          insAddress={insAddress}
          setInsAddress={setInsAddress}
          insCity={insCity}
          setInsCity={setInsCity}
          insState={insState}
          setInsState={setInsState}
          insZipCode={insZipCode}
          setInsZipCode={setInsZipCode}
          attendSchools={attendSchools}
          setAttendSchools={setAttendSchools}
          existsSchoolIndex={existsSchoolIndex}
          setExistsSchoolIndex={setExistsSchoolIndex}
          setBoxShow={setInputBoxShow}
        />
      )}
      <DetailsBox
        attendSchools={attendSchools}
        setAttendSchools={setAttendSchools}
        handleExpire={handleExpire}
      />
      <div
        onClick={handleAddSchools}
        className="w-fit px-6 py-2 text-base text-white bg-blue-500 rounded-full hover:bg-blue-600 active:scale-95 duration-200 flex items-center gap-2 cursor-pointer">
        <span>Add Attended Schools</span> <FiPlus />
      </div>
    </div>
  );
};

export default memo(SchoolsAttended);
