import React from 'react';
import SelectInput from '../../Components/Inputs/SelectInput';
import TextArea from '../../Components/Inputs/TextArea';
import Input from '../../Components/Inputs/Input';
import { Container } from '@mui/material';

const SpecialTestScore = ({
    specialExamsType,
    setSpecialExamsType,
    specialExamOtherDetails,
    setSpecialExamOtherDetails,
    selectSpecialExamType,
    setSelectSpecialExamType,
    specialExamScore,
    setSpecialExamScore,
}) => {

    const specialExamType = [
        "",
        "Yes",
        "No",
        "Others"
    ];

    const specialExamOptions = [
        "",
        "Graduate Record Examination (GRE)",
        "Graduate Management Admission Test (GMAT)",
        "Scholastic Assessment Test (SAT)",
        "American College testing (ACT)",
        "Medical College Admission Test (MCAT)",
        "Law School Admission Test (LSAT)",
        "Dental Admission Test(DAT)",
        "Graduate Aptitude Test in Engineering (GATE)",
        "Common Admission (CAT)",

    ]


    return (
            <div>
                {/* special exam section  */}
                <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
                    <h1 className="text-2xl font-bold text-gray-600">Special Test Score</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 my-6">
                        <SelectInput
                            title={"Special Exam Type"}
                            placeholder="Select exam type"
                            isRequired
                            selectState={specialExamsType}
                            setSelectState={setSpecialExamsType}
                            optionsArray={specialExamType}
                        />
                    </div>


                    <div className="">
                        {/* Others exam functionalities */}
                        {(specialExamsType === "Others") && (
                            <TextArea
                                title={"Details"}
                                placeholder="Enter Full Details"
                                type="text"
                                value={specialExamOtherDetails}
                                onChange={(e) => setSpecialExamOtherDetails(e.target.value)}
                            />
                        )}

                        <div className="grid  grid-cols-2  gap-6 my-6">
                            {(specialExamsType === "Yes") && (
                                <>
                                    <SelectInput
                                        title={"Special Exam "}
                                        placeholder="Select exam "
                                        isRequired
                                        selectState={selectSpecialExamType}
                                        setSelectState={setSelectSpecialExamType}
                                        optionsArray={specialExamOptions}
                                    />

                                    <Input
                                        title={"Test Score"}
                                        isRequired
                                        required
                                        placeholder="Overall Score"
                                        type="number"
                                        value={specialExamScore}
                                        onChange={(e) => setSpecialExamScore(e.target.value)}
                                        max={10}
                                        min={0}
                                    />
                                </>
                            )}
                        </div>

                    </div>
                </div>

            </div>
    );
};

export default SpecialTestScore;