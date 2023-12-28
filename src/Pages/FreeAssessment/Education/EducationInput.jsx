import React, { useState } from 'react';
import Input from '../../../Components/Inputs/Input';
import GroupAutoSelectInput from '../../../Components/Inputs/GroupAutoSelectInput';
import DateInput from '../../../Components/Inputs/DateInput';

const EducationInput = ({
    nameOfIns,
    setNameOfIns,

    attSclLevelOfEdu,
    setAttSclLevelOfEdu,

    degreeName,
    setDegreeName,

    graduationDate,
    setGraduationDate,

    setAttendSchools,

    existsSchoolIndex,

    setBoxShow,
    
    grade,
    setGrade,
    
}) => {


    // error message when all form no fill up
    const [error, setError] = useState("");
    const [inputErrors, setInputErrors] = useState({
        ins_name: false,
        level_of_edu: false,
        degree_name: false,
        graduation_date: false,
        grade:false 
        
    });

    const saveSchoolHandler = () => {
        if (!attSclLevelOfEdu) {
            setInputErrors((prevState) => ({ ...prevState, level_of_edu: true }));
        }
        if (!nameOfIns) {
            setInputErrors((prevState) => ({ ...prevState, ins_name: true }));
        }
        if (graduationDate) {
            setInputErrors((prevState) => ({ ...prevState, graduation_date: false }));
        }
        if (!degreeName) {
            setInputErrors((prevState) => ({ ...prevState, attend_to: true }));
        }
        if (!grade) {
            setInputErrors((prevState) => ({ ...prevState, grade: true }));
        }
        if (nameOfIns) {
            setInputErrors((prevState) => ({ ...prevState, ins_name: false }));
        }
        if (degreeName) {
            setInputErrors((prevState) => ({ ...prevState, attend_to: false }));
        }
        if (grade) {
            setInputErrors((prevState) => ({ ...prevState, grade: false }));
        }

        

        if (
            !attSclLevelOfEdu ||
            !nameOfIns ||
            !graduationDate ||
            !degreeName ||
            !grade
           
        ) {
            return setError("Please fill up the all input.");
        }

        if (existsSchoolIndex === 0 || existsSchoolIndex) {
            setAttendSchools((prevState) => {
                const getSchools = prevState.map((s, i) => {
                    if (i === existsSchoolIndex) {
                        return {
                            ...s,
                            level_of_education: attSclLevelOfEdu,
                            name_of_institute: nameOfIns,
                            graduated_date: graduationDate?._d.toUTCString(),
                            degree_name: degreeName,
                            grade: grade,
                            
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
                level_of_education: attSclLevelOfEdu,
                name_of_institute: nameOfIns,
                graduated_date: graduationDate?._d.toUTCString(),
                degree_name: degreeName,
                grade: grade,
                
            },
        ]);
        setError("");
        setBoxShow(false);
    };

    const handleCancel = () => {
        setBoxShow(false);
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


    return (
        <div className="pb-4 border-b-2 border-gray-300">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
               
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
                    title={"Name of Institution"}
                    error={inputErrors?.ins_name}
                    isRequired
                    required
                    placeholder="Enter Institution Name..."
                    type="text"
                    value={nameOfIns}
                    onChange={(e) => setNameOfIns(e.target.value)}
                />
                <DateInput
                    title="Passing Year"
                    isRequired={true}
                    required
                    format="DD-MM-YYYY"
                    value={graduationDate}
                    onChange={(e) => setGraduationDate(e)}
                    error={inputErrors?.graduation_date}
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
                <Input
                    title={"Grade"}
                    isRequired
                    required
                    placeholder="Enter Your Grade..."
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    error={inputErrors?.grade}
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

export default EducationInput;