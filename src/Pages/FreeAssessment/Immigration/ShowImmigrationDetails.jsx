import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

// styles
const lightText = "text-gray-600 font-normal";

const ShowImmigrationDetails = ({ attendSchools, setAttendSchools, handleExpire }) => {

    // delete handler
    const handleDelete = (index) => {
        setAttendSchools((prevSchools) => {
            const getSchools = prevSchools?.filter((school, i) => i !== index);
            return getSchools;
        });
    };

    return (
        <div>
            {attendSchools?.map((school, i) => (
                <div
                    key={i}
                    className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6 border border-gray-300 p-4 rounded-md">
                    <div className="">
                        <h1 className="text-base font-medium text-gray-800">
                            Immigration Status: {school?.immigration_history_type}
                        </h1>
                        <p className="text-sm font-medium text-gray-700">
                            Reason: {school?.reason}
                        </p>
                    </div>
                    <div>
                        <ul className="font-medium text-gray-700 space-y-1">
                            <li>
                                <span>Country Nam:</span>
                                <span className={lightText}> {school?.select_visa_country}</span>
                            </li>
                            <li>
                                <span>Registration Date:</span>
                                <span className={lightText}> {school?.registration_date}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-end justify-end">
                        <div className="w-fit h-fit flex items-center gap-4">
                            <div
                                onClick={() => handleDelete(i)}
                                className="px-4 py-1 text-white bg-red-500 hover:bg-red-600 active:scale-95 duration-200 rounded-md cursor-pointer">
                                Delete
                            </div>
                            <div
                                onClick={() => handleExpire(i)}
                                className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
                                Expire
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowImmigrationDetails;