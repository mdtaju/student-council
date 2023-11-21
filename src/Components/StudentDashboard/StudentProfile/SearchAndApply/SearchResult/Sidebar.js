import SearchIcon from "@mui/icons-material/Search";
import { Slider } from "@mui/material";
import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
const Sidebar = ({
  universityWithCourseCount,
  programLevelsCount,
  selectedUniversity,
  setSelectedUniversity,
  selectedPrograms,
  setSelectedPrograms,
  tuitionFeeRange,
  setTuitionFeeRange,
  minTuitionFee,
  maxTuitionFee,
}) => {
  // university select change handler
  const handleUniversityChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedUniversity((prevUniversities) => [...prevUniversities, value]);
      return;
    } else {
      setSelectedUniversity((prevUniversities) => {
        return prevUniversities.filter((university) => university !== value);
      });
      return;
    }
  };

  // programs select change handler
  const handleProgramsChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedPrograms((prevPrograms) => [...prevPrograms, value]);
      return;
    } else {
      setSelectedPrograms((prevPrograms) => {
        return prevPrograms.filter((program) => program !== value);
      });
      return;
    }
  };

  const handleChange = (event, newValue) => {
    setTuitionFeeRange(newValue);
  };
  return (
    <div className="w-full flex-1">
      {/* filter title header */}
      <div className="w-full bg-white p-4 rounded-t-md flex items-center gap-2 text-xl">
        <HiOutlineFilter className="text-3xl text-gray-700" />
        <span className="font-semibold text-gray-700">Filters</span>
      </div>
      {/* university filter */}
      <div>
        {/* title container */}
        <div className="bg-blue-600 px-3 py-2 text-white flex justify-between items-center">
          <h1 className="uppercase font-medium">Universities</h1>
          <SearchIcon />
        </div>
        {/* options container */}
        <div className="bg-white rounded-b-md p-1">
          <div className="max-h-[240px] overflow-y-scroll custom_scrollbar">
            {/* single option container */}
            {universityWithCourseCount?.map((university, i) => (
              <div
                key={i}
                className="flex items-center gap-4 justify-between px-2 py-1">
                {/* label container */}
                <label
                  htmlFor={university?.university?.replaceAll(/\/| /gi, "") + i}
                  className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    id={university?.university?.replaceAll(/\/| /gi, "") + i}
                    className="cursor-pointer w-[18px] h-[18px]"
                    value={university?.university}
                    checked={selectedUniversity.includes(
                      university?.university
                    )}
                    onChange={handleUniversityChange}
                  />
                  <span className="text-sm">{university?.university}</span>
                </label>
                {/* university count */}
                <div className="w-[50px] h-[26px] grid place-items-center rounded-sm border border-gray-300 bg-gray-50 text-sm text-gray-500">
                  {university?.numCourses}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* program levels */}
      <div className="mt-2">
        {/* title container */}
        <div className="bg-blue-600 px-3 py-2 text-white flex justify-between items-center">
          <h1 className="uppercase font-medium">Program Level</h1>
          <SearchIcon />
        </div>
        <div className="bg-white rounded-b-md p-1">
          <div className="max-h-[240px] overflow-y-scroll custom_scrollbar">
            {/* options container */}
            {/* single option container */}
            {programLevelsCount?.map((program, i) => (
              <div
                key={i}
                className="flex items-center gap-4 justify-between px-2 py-1">
                {/* label container */}
                <label
                  htmlFor={
                    program?.programLevel?.replaceAll(/\/| |\+/gi, "") + i + 1
                  }
                  className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    id={
                      program?.programLevel?.replaceAll(/\/| |\+/gi, "", "") +
                      i +
                      1
                    }
                    className="cursor-pointer w-[18px] h-[18px]"
                    value={program?.programLevel}
                    checked={selectedPrograms.includes(program?.programLevel)}
                    onChange={handleProgramsChange}
                  />
                  <span className="text-sm">{program?.programLevel}</span>
                </label>
                {/* university count */}
                <div className="w-[50px] h-[26px] grid place-items-center rounded-sm border border-gray-300 bg-gray-50 text-sm text-gray-500">
                  {program?.numProgram}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* title container */}
      <div className="mt-2">
        <div className="bg-blue-600 px-3 py-2 text-white flex justify-between items-center">
          <h1 className="uppercase font-medium">Tuition Fees</h1>
          <SearchIcon />
        </div>
        <div className="bg-white rounded-b-md pt-12 pb-4 px-4">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={tuitionFeeRange}
            onChange={handleChange}
            valueLabelDisplay="on"
            min={minTuitionFee}
            max={maxTuitionFee}
            // getAriaValueText={valuetext}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
