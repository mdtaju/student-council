import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCourses } from "../../../../features/searchAndApply/searchAndApplySlice";
import Layout from "../Layout.js/Layout";
import Search from "./Search/Search";
import SearchResult from "./SearchResult/SearchResult";
import Sidebar from "./SearchResult/Sidebar";

const SearchAndApply = ({ isForPublicUser = false }) => {
  const [universityWithCourseCount, setUniversityWithCourseCount] = useState(
    []
  );
  const [programLevelsCount, setProgramLevelsCount] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState([]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [tuitionFeeRange, setTuitionFeeRange] = useState([0, 1000]);
  const [minTuitionFee, setMinTuitionFee] = useState(0);
  const [maxTuitionFee, setMaxTuitionFee] = useState(1000);
  const { allCourses } = useSelector((state) => state.searchAndApply);
  const dispatch = useDispatch();

  // university count with courses and program level count and tuition fees calculation
  useEffect(() => {
    if (allCourses.length) {
      // university count with courses
      const universityCourseCounts = allCourses.reduce(
        (accumulator, currentCourse) => {
          const universityName = currentCourse?.university?.institute_name;

          // Check if there's already an entry for this university in the accumulator
          const existingEntry = accumulator.find(
            (entry) => entry?.university === universityName
          );

          if (existingEntry) {
            // If an entry for this university exists, increment the course count
            existingEntry.numCourses += 1;
          } else {
            // If no entry exists, create a new entry with a course count of 1
            accumulator.push({
              university: universityName,
              numCourses: 1,
            });
          }
          return accumulator;
        },
        []
      );
      setUniversityWithCourseCount(universityCourseCounts);

      // program level count
      const programLevels = allCourses.reduce((accumulator, currentProgram) => {
        const programName = currentProgram?.program_level;

        // Check if there's already an entry for this university in the accumulator
        const existingEntry = accumulator.find(
          (entry) => entry?.programLevel === programName
        );

        if (existingEntry) {
          // If an entry for this university exists, increment the course count
          existingEntry.numProgram += 1;
        } else {
          // If no entry exists, create a new entry with a course count of 1
          accumulator.push({
            programLevel: programName,
            numProgram: 1,
          });
        }
        return accumulator;
      }, []);
      setProgramLevelsCount(programLevels);

      // tuition fee max and min calculation
      const getMinTuitionFee = Math.min.apply(
        null,
        allCourses.map(({ yearly_tuition_fee }) => yearly_tuition_fee)
      );
      const getMaxTuitionFee = Math.max.apply(
        null,
        allCourses.map(({ yearly_tuition_fee }) => yearly_tuition_fee)
      );
      setMinTuitionFee(getMinTuitionFee);
      setMaxTuitionFee(getMaxTuitionFee);
      setTuitionFeeRange([getMinTuitionFee, getMaxTuitionFee]);
    }
  }, [allCourses]);

  // university and program level filter -> sidebar
  useEffect(() => {
    if (allCourses.length) {
      const getFilteredCourses = allCourses.filter((course) => {
        if (
          tuitionFeeRange &&
          (course.yearly_tuition_fee < tuitionFeeRange[0] ||
            course.yearly_tuition_fee > tuitionFeeRange[1])
        ) {
          return false;
        }
        if (
          selectedUniversity.length &&
          !selectedUniversity.includes(course?.university?.institute_name)
        ) {
          return false;
        }
        if (
          selectedPrograms.length &&
          !selectedPrograms.includes(course?.program_level)
        ) {
          return false;
        }
        return true;
      });
      // short by filter
      let getShortByFilterCourses = [];
      getShortByFilterCourses = getFilteredCourses
        ?.slice()
        ?.sort(
          (a, b) =>
            +a?.university?.world_ranking - +b?.university?.world_ranking
        );
      dispatch(setFilterCourses(getShortByFilterCourses));
    }
  }, [
    dispatch,
    allCourses,
    selectedUniversity,
    selectedPrograms,
    tuitionFeeRange,
  ]);

  if (isForPublicUser) {
    return (
      <div
        // onClick={() => handleClick({ vertical: "top", horizontal: "right" })}
        className="w-full min-h-screen">
        <div className="w-full min-h-full">
          <div>
            <Search />
            {allCourses.length && (
              <div className="flex flex-col md:flex-row gap-6 items-start justify-between mt-12">
                <Sidebar
                  universityWithCourseCount={universityWithCourseCount}
                  programLevelsCount={programLevelsCount}
                  selectedUniversity={selectedUniversity}
                  setSelectedUniversity={setSelectedUniversity}
                  selectedPrograms={selectedPrograms}
                  setSelectedPrograms={setSelectedPrograms}
                  tuitionFeeRange={tuitionFeeRange}
                  setTuitionFeeRange={setTuitionFeeRange}
                  minTuitionFee={minTuitionFee}
                  maxTuitionFee={maxTuitionFee}
                />
                <SearchResult />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Layout>
        <div
          // onClick={() => handleClick({ vertical: "top", horizontal: "right" })}
          className="w-full min-h-screen">
          <div className="w-full min-h-full">
            <div>
              <Search />
              {allCourses.length && (
                <div className="flex flex-col md:flex-row gap-6 items-start justify-between mt-12">
                  <Sidebar
                    universityWithCourseCount={universityWithCourseCount}
                    programLevelsCount={programLevelsCount}
                    selectedUniversity={selectedUniversity}
                    setSelectedUniversity={setSelectedUniversity}
                    selectedPrograms={selectedPrograms}
                    setSelectedPrograms={setSelectedPrograms}
                    tuitionFeeRange={tuitionFeeRange}
                    setTuitionFeeRange={setTuitionFeeRange}
                    minTuitionFee={minTuitionFee}
                    maxTuitionFee={maxTuitionFee}
                  />
                  <SearchResult />
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default SearchAndApply;
