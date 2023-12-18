import React, { useState } from 'react';
import moment from 'moment/moment';
import { FiPlus } from 'react-icons/fi';
import EducationInput from './EducationInput';
import ShowDetails from './ShowEduDetails';

const EducationHistory = ({attendSchools, setAttendSchools}) => {

  const [inputBoxShow, setInputBoxShow] = useState(false);
  const [attSclLevelOfEdu, setAttSclLevelOfEdu] = useState(""); // required
  const [nameOfIns, setNameOfIns] = useState(""); // required
  const [graduationDate, setGraduationDate] = useState(null); // required
  const [degreeName, setDegreeName] = useState(""); // required
  const [grade, setGrade] = useState("")//required




  const handleAddSchools = () => {
    setNameOfIns("");
    setAttSclLevelOfEdu("");
    setDegreeName("");
    setGraduationDate(null);
    setGrade("")
    setInputBoxShow(true);
  };

  const handleExpire = (index) => {
    const getSchool = attendSchools.find((s, i) => i === index);

    setNameOfIns(getSchool?.name_of_institute);
    setGrade(getSchool?.grade);
    setAttSclLevelOfEdu(getSchool?.level_of_education);
    setDegreeName(getSchool?.degree_name);
    setGraduationDate(moment.utc(getSchool?.graduation_date));
    setInputBoxShow(true);
  };


  return (

    <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-5">
      <h1 className="text-2xl font-bold text-gray-600">Eduction History </h1>

      {inputBoxShow && (
        <EducationInput
          nameOfIns={nameOfIns}
          setNameOfIns={setNameOfIns}

          attSclLevelOfEdu={attSclLevelOfEdu}
          setAttSclLevelOfEdu={setAttSclLevelOfEdu}

          degreeName={degreeName}
          setDegreeName={setDegreeName}

          graduationDate={graduationDate}
          setGraduationDate={setGraduationDate}

          attendSchools={attendSchools}
          setAttendSchools={setAttendSchools}

          grade={grade}
          setGrade={setGrade}

          setBoxShow={setInputBoxShow}
        />
      )}
      <ShowDetails
        attendSchools={attendSchools}
        setAttendSchools={setAttendSchools}
        handleExpire={handleExpire}
      />
      <div
        onClick={handleAddSchools}
        className="w-fit px-6 py-2 my-5 text-base text-white bg-green-600 rounded-xl  active:scale-95 duration-200 flex items-center gap-2 cursor-pointer">
        <span>Add Education History</span> <FiPlus />
      </div>
    </div>

  );
};

export default EducationHistory;