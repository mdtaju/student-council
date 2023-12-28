import { Container } from '@mui/material';
import React, { useState } from 'react';
import SelectInput from '../../../Components/Inputs/SelectInput';
import SelectCountry from '../../../Components/Inputs/SelectCountry';
import DateInput from '../../../Components/Inputs/DateInput';
import Input from '../../../Components/Inputs/Input';

const ImmigrationInput = ({
    emigrationHistoryType,
    setEmigrationHistoryType,

    reason,
    setReason,

    regDate,
    setRegDate,

    selectVisaCountry,
    setSelectVisaCountry,

    setBoxShow,

    setAttendSchools,

    existsSchoolIndex,


}) => {

    const visaType = [
        "",
        "Yes",
        "No"
    ];






    // error message when all form no fill up
    const [error, setError] = useState("");
    const [inputErrors, setInputErrors] = useState({
        immigration_history_type: false,
        reason: false,
        select_visa_country: false,
        registration_date: false,

    });

    const saveSchoolHandler = () => {

        if (regDate) {
            setInputErrors((prevState) => ({ ...prevState, registration_date: false }));
        }



        if (!emigrationHistoryType) {
            setInputErrors((prevState) => ({ ...prevState, immigration_history_type: true }));
        }
        if (!reason) {
            setInputErrors((prevState) => ({ ...prevState, reason: true }));
        }
        if (!selectVisaCountry) {
            setInputErrors((prevState) => ({ ...prevState, select_visa_country: true }));
        }


        if (emigrationHistoryType) {
            setInputErrors((prevState) => ({ ...prevState, immigration_history_type: false }));
        }
        if (reason) {
            setInputErrors((prevState) => ({ ...prevState, reason: false }));
        }
        if (selectVisaCountry) {
            setInputErrors((prevState) => ({ ...prevState, select_visa_country: false }));
        }



        if (
            !emigrationHistoryType ||
            !reason ||
            !selectVisaCountry ||
            !regDate

        ) {
            return setError("Please fill up the all input.");
        }

        if (existsSchoolIndex === 0 || existsSchoolIndex) {
            setAttendSchools((prevState) => {
                const getSchools = prevState.map((s, i) => {
                    if (i === existsSchoolIndex) {
                        return {
                            ...s,
                            immigration_history_type: emigrationHistoryType,
                            reason: reason,
                            registration_date: regDate?._d.toUTCString(),
                            select_visa_country: selectVisaCountry,

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
                immigration_history_type: emigrationHistoryType,
                reason: reason,
                registration_date: regDate?._d.toUTCString(),
                select_visa_country: selectVisaCountry,

            },
        ]);
        setError("");
        setBoxShow(false);
    };

    const handleCancel = () => {
        setBoxShow(false);
    };





    return (
        <div className="pb-4 border-b-2 border-gray-300">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">

                <SelectInput
                    className="w-full"
                    title={"Have You Experienced Any Previous Visa Rejection?"}
                    placeholder="Select "
                    isRequired
                    selectState={emigrationHistoryType}
                    setSelectState={setEmigrationHistoryType}
                    optionsArray={visaType}
                />


                {(emigrationHistoryType === "Yes") && (
                    <>
                        <SelectCountry
                            title={"Country Name"}
                            isRequired
                            countryName={selectVisaCountry}
                            setCountryName={setSelectVisaCountry}
                            placeholder="Search country"
                        />

                        <DateInput
                            title="Date of Rejection"
                            isRequired={true}
                            format="DD-MM-YYYY"
                            value={regDate}
                            onChange={(value) => setRegDate(value)}
                            disableFuture={true}
                        />

                        <Input
                            title={"State The Reasons for the Rejection"}
                            isRequired
                            required
                            placeholder="Enter Reason"
                            type="text"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}

                        />

                    </>
                )}
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

export default ImmigrationInput;