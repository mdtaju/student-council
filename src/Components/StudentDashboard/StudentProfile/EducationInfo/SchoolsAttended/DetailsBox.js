import React from "react";
import { BsCheckLg } from "react-icons/bs";

// styles
const liStyle = "flex items-center gap-3";
const lightText = "text-gray-600 font-normal";

const DetailsBox = ({ attendSchools, setAttendSchools, handleExpire }) => {
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
              {school?.name_of_institute}
            </h1>
            <p className="text-sm font-medium text-gray-700">
              {school?.degree_name}
            </p>
          </div>
          <div>
            <ul className="font-medium text-gray-700 space-y-1">
              {school?.graduated_from_this_institute === "Yes" && (
                <li className={liStyle}>
                  <BsCheckLg className="text-green-600 text-xl" />{" "}
                  <span>Graduated from Institution</span>
                  <span className={`${lightText} ml-[-4px]`}>
                    {school?.attend_institute_from}
                  </span>
                </li>
              )}
              {school?.is_physical_certificate && (
                <li className={liStyle}>
                  <BsCheckLg className="text-green-600 text-xl" />{" "}
                  <span>Certificate awarded</span>
                </li>
              )}
              <li>
                <span>Level:</span>
                <span className={lightText}> {school?.level_of_education}</span>
              </li>
              <li>
                <span>Attended</span>{" "}
                <span className={lightText}>
                  from {school?.attend_institute_from}
                </span>{" "}
                to{" "}
                <span className={lightText}>{school?.attend_institute_to}</span>
              </li>
              <li>
                <span>Language of instruction:</span>{" "}
                <span className={lightText}>
                  {school?.primary_language_of_institute}
                </span>
              </li>
              <li>
                <span>Address:</span>{" "}
                <span className={lightText}>{school?.institute_address}</span>
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

export default DetailsBox;
