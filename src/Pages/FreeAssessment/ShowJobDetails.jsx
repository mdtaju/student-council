import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
// styles
const liStyle = "flex items-center gap-3";
const lightText = "text-gray-600 font-normal";

const ShowJobDetails = ({ attendSchools, setAttendSchools, handleExpire }) => {
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
              Company Name: {school?.name_of_institute}
            </h1>
            <p className="text-sm font-medium text-gray-700">
              Position Name: {school?.company_position}
            </p>
            <p className="text-sm font-medium text-gray-700">
              Join Date: {school?.join_date}
            </p>

          </div>
          <div>
            <ul className="font-medium text-gray-700 space-y-1">
                          <ul>
                <p className="text-sm font-medium text-gray-700">
                  End Date: {school?.end_date}
                </p>
              </ul>
              <li>
                <span>Location:</span>
                <span className={lightText}> {school?.company_location}</span>
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

export default ShowJobDetails;