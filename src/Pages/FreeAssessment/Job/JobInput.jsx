import React, { useState } from 'react';
import GroupAutoSelectInput from '../../../Components/Inputs/GroupAutoSelectInput';
import Input from '../../../Components/Inputs/Input';
import DateInput from '../../../Components/Inputs/DateInput';

const JobInput = ({
    companyName,
    setCompanyName,
    companyPosition,
    setCompanyPosition,
    joinDate,
    setJoinDate,
    endDate,
    setEndDate,
    companyLocation,
    setCompanyLocation,



    setBoxShow,
    setAttendSchools,
    existsSchoolIndex,

}) => {


    // error message when all form no fill up
    const [error, setError] = useState("");
    const [inputErrors, setInputErrors] = useState({
        companyName: false,
        joinDate: false,
        endDate: false,
        companyPosition: false,
        companyLocation: false

    });

    const saveSchoolHandler = () => {

        if (!companyName) {
            setInputErrors((prevState) => ({ ...prevState, company_name: true }));
        }
        if (joinDate) {
            setInputErrors((prevState) => ({ ...prevState, join_date: false }));
        }
        if (endDate) {
            setInputErrors((prevState) => ({ ...prevState, end_date: false }));
        }
        if (!companyPosition) {
            setInputErrors((prevState) => ({ ...prevState, company_position: true }));
        }
        if (!companyLocation) {
            setInputErrors((prevState) => ({ ...prevState, company_location: true }));
        }
        if (companyName) {
            setInputErrors((prevState) => ({ ...prevState, companyName: false }));
        }
        if (companyPosition) {
            setInputErrors((prevState) => ({ ...prevState, company_position: false }));
        }
        if (companyLocation) {
            setInputErrors((prevState) => ({ ...prevState, company_location: false }));
        }



        if (
            !companyName ||
            !companyPosition ||
            !joinDate ||
            !endDate ||
            !companyLocation

        ) {
            return setError("Please fill up the all input.");
        }

        if (existsSchoolIndex === 0 || existsSchoolIndex) {
            setAttendSchools((prevState) => {
                const getSchools = prevState.map((s, i) => {
                    if (i === existsSchoolIndex) {
                        return {
                            ...s,
                            company_position: companyPosition,
                            name_of_institute: companyName,
                            join_date: joinDate?._d.toUTCString(),
                            end_date: endDate?._d.toUTCString(),
                            company_location: companyLocation,


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
                company_position: companyPosition,
                name_of_institute: companyName,
                join_date: joinDate?._d.toUTCString(),
                end_date: endDate?._d.toUTCString(),
                company_location: companyLocation,

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



                <Input
                    title={"Company Name"}
                    placeholder="Enter Name..."
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />

                <Input
                    title={"Position "}
                    placeholder="Enter Position..."
                    type="text"
                    value={companyPosition}
                    onChange={(e) => setCompanyPosition(e.target.value)}
                />


                <DateInput
                    title="Joining Date"
                    format="DD-MM-YYYY"
                    value={joinDate}
                    onChange={(e) => setJoinDate(e)}
                />

                <DateInput
                    title="Ending Date"
                    format="DD-MM-YYYY"
                    value={endDate}
                    onChange={(e) => setEndDate(e)}
                />


                <Input
                    title={"Location"}
                    placeholder="Enter Location..."
                    type="text"
                    value={companyLocation}
                    onChange={(e) => setCompanyLocation(e.target.value)}
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

export default JobInput;