import { Autocomplete, Switch, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterCourses } from "../../../../../../features/searchAndApply/searchAndApplySlice";
import useAuth from "../../../../../../hooks/useAuth";

const Header = ({
  courseFound,
  numberOfPages,
  activePage,
  // shortBy,
  // setShortBy,
  shortListAll,
  setShortListAll,
  shortListHandler,
}) => {
  const shoringOptions = [
    "Ranking",
    "Tuition Fee - Low to High",
    "Tuition Fee - High to Low",
    "Application Fee - Low to High",
    "Application Fee - High to Low",
  ];
  const [shortBy, setShortBy] = useState("Ranking");
  const { courses } = useSelector((state) => state.searchAndApply);
  const dispatch = useDispatch();
  const auth = useAuth();

  useEffect(() => {
    if (courses) {
      const getNotShortlisted = courses.find((c) => !c?.isSortListed);
      if (!getNotShortlisted) {
        setShortListAll(true);
        return;
      } else {
        setShortListAll(false);
      }
    }
  }, [courses, setShortListAll]);

  const handleChange = (event, newInputValue) => {
    setShortBy(newInputValue);

    let filterCourses = [];
    if (newInputValue === "Ranking") {
      filterCourses = courses
        ?.slice()
        ?.sort(
          (a, b) =>
            +a?.university?.world_ranking - +b?.university?.world_ranking
        );
    }
    if (newInputValue === "Tuition Fee - Low to High") {
      filterCourses = courses
        ?.slice()
        ?.sort((a, b) => +a?.yearly_tuition_fee - +b?.yearly_tuition_fee);
    }
    if (newInputValue === "Tuition Fee - High to Low") {
      filterCourses = courses
        ?.slice()
        ?.sort((a, b) => +b?.yearly_tuition_fee - +a?.yearly_tuition_fee);
    }
    if (newInputValue === "Application Fee - Low to High") {
      filterCourses = courses
        ?.slice()
        ?.sort((a, b) => +a?.application_fee - +b?.application_fee);
    }
    if (newInputValue === "Application Fee - High to Low") {
      filterCourses = courses
        ?.slice()
        ?.sort((a, b) => +b?.application_fee - +a?.application_fee);
    }
    dispatch(setFilterCourses(filterCourses));
  };

  return (
    <div id="topAreaOfSearchAndApplyHeader">
      {/* top result area */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:items-center bg-white p-2 rounded-t-md">
        {/* result count container */}
        <div className="flex items-center gap-4">
          <h4 className="font-medium">{courseFound} COURSES FOUND</h4>
          <span className="text-sm text-gray-500">
            Page {activePage} Of {numberOfPages}
          </span>
        </div>
        {/* filter container */}
        <div className="flex items-center gap-6 w-[300px]">
          <h4 className="whitespace-nowrap text-base ">Short By</h4>
          <div className="w-full max-w-[260px]">
            <Autocomplete
              // disablePortal
              id="combo-box-demo"
              options={shoringOptions}
              sx={{ width: "100%", marginTop: "2px" }}
              size="small"
              value={shortBy}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
              isOptionEqualToValue={(option, value) => option === value}
            />
          </div>
        </div>
      </div>
      {/* bottom area */}
      <div className="w-full px-4 py-1 bg-blue-600 flex flex-col sm:flex-row items-start justify-between sm:items-center">
        <button className="px-3 py-1 text-sm rounded-full text-blue-700 bg-white">
          Download
        </button>
        {auth?.accessToken && (
          <div className="flex items-center gap-4">
            <h4 className="font-medium text-white">Shortlist All</h4>
            <Switch
              checked={shortListAll}
              // onChange={handleGreChange}
              onClick={shortListHandler}
              inputProps={{ "aria-label": "controlled A" }}
              size="medium"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
