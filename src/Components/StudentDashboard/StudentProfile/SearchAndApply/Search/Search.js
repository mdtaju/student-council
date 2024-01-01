import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetCoursesMutation } from "../../../../../features/course/courseApi";
import { setSearchResultCourses } from "../../../../../features/searchAndApply/searchAndApplySlice";
import useAuth from "../../../../../hooks/useAuth";
import Input from "../../../../Inputs/Input";
import SelectInput from "../../../../Inputs/SelectInput";

const Search = () => {
  const [advanceOption, setAdvanceOption] = useState(false);
  const [monthNames, setMonthNames] = useState([
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const fullYear = `${new Date().getFullYear()}`;
  const [searchQuery, setSearchQuery] = useState("");
  const [getCourses] = useGetCoursesMutation();
  const [years, setYears] = useState([fullYear]);
  const [countryNames, setCountryNames] = useState([]);
  const [subjectArea, setSubjectArea] = useState([]);
  const [duration, setDuration] = useState([]);
  const [isEsl, setIsEsl] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const dispatch = useDispatch();
  const auth = useAuth();

  const intakeMonthNames = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const intakeYears = [
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];

  const programLevels = [
    "High School (11th - 12th)",
    "UG Diploma/ Certificate/ Associate Degree",
    "UG",
    "PG Diploma/Certificate",
    "PG",
    "UG+PG (Accelerated) Degree",
    "PhD",
    "Foundation",
    "Short Term Programs",
    "Pathway Programs",
    "Twinning Programmes (UG)",
    "Twinning Programmes (PG)",
    "English Language Program",
    "Online Programmes / Distance Learning",
  ];

  const countryOptions = [
    "United States of America",
    "Australia",
    "Canada",
    "United Kingdom",
    "New Zealand",
    "Singapore",
    "Dubai",
    "Ireland",
    "Germany",
    "France",
    "Sweden",
    "Netherlands",
    "Austria",
    "Denmark",
    "Finland",
    "Italy",
    "Hungary",
    "Switzerland",
    "Spain",
    "Lithuania",
    "Cyprus",
    "Poland",
    "Malaysia",
    "Mauritius",
    "China",
    "Vietnam",
    "Malta",
    "Japan",
    "Belgium",
    "Russia",
    "South Korea",
  ];

  const subjectAreaArray = [
    "Agriculture, Forestry and Fishery",
    "Architecture and Building",
    "Arts",
    "Commerce, Business and Administration",
    "Computer Science and Information Technology",
    "Education",
    "Engineering and Engineering Trades",
    "Environmental Science/Protection",
    "Health",
    "Humanities",
    "Journalism and Information",
    "Law",
    "Life Sciences",
    "Manufacturing and Processing",
    "Mathematics and Statistics",
    "Personal Services",
    "Physical Sciences, Sciences",
    "Security Services",
    "Social and Behavioural Science",
    "Social Services",
    "Transport Services",
    "Veterinary",
  ];

  const eslOption = ["", "Yes", "No"];

  const requirementsArray = [
    "PTE",
    "TOEFL iBT",
    "IELTS",
    "DET",
    "SAT",
    "ACT",
    "GRE",
    "GMAT",
    "Without English Proficiency",
    "Without GRE",
    "Without GMAT",
    "Without Maths",
    "STEM Courses",
    "Scholarship Available",
    "With 15 Years of Education",
    "Application Fee Waiver (upto 100%)",
  ];

  const courseDuration = [
    "0 - 1 Years",
    "1 - 2 Years",
    "2 - 3 Years",
    "3 - 4 Years",
    "4 and above Years",
  ];

  // months change handler
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    //     check if all is exists in the state
    const getAllFromState = monthNames.find((m) => m === "All");

    //     check if all is exists in event value
    const getAll = value?.find((a) => a === "All");

    //     remove all value and set empty
    if (!getAll && getAllFromState) {
      setMonthNames([]);
      return;
    }

    //     set all values
    if (getAll && !getAllFromState) {
      setMonthNames([
        "All",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]);
      return;
    }

    //     remove "all" value
    const valuesWithout$All = value.filter((v) => v !== "All");

    setMonthNames(
      // On autofill we get a stringified value.
      typeof valuesWithout$All === "string"
        ? valuesWithout$All.split(",")
        : valuesWithout$All
    );
  };

  //   year change handler
  const handleChangeYear = (event) => {
    const {
      target: { value },
    } = event;

    setYears(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   year change handler
  const handleChangeCountry = (event) => {
    const {
      target: { value },
    } = event;

    setCountryNames(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   year change handler
  const handleChangeSubject = (event) => {
    const {
      target: { value },
    } = event;

    setSubjectArea(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // handle change duration
  const handleChangeDuration = (event) => {
    const {
      target: { value },
    } = event;

    setDuration(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // search handler
  const handleSearch = () => {
    const searchAppearance = {
      query: searchQuery,
      months: monthNames,
      years,
      countryNames,
      subjectArea,
      duration,
      isEsl,
      programLevels: selectedPrograms,
      requirements,
      student_id: auth?.id,
    };
    getCourses(searchAppearance)
      .unwrap()
      .then((data) => {
        // const shortedData = data
        //   ?.slice()
        //   ?.sort(
        //     (a, b) =>
        //       +a?.university?.world_ranking - +b?.university?.world_ranking
        //   );
        dispatch(setSearchResultCourses(data));
      })
      .catch((err) => {});
  };

  // handle program change
  const handleProgramChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedPrograms((prevPrograms) => [...prevPrograms, value]);
      return;
    } else {
      setSelectedPrograms((prevPrograms) => {
        return prevPrograms.filter((program) => program !== value);
      });
    }
  };

  // handle requirement change
  const handleRequirementsChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setRequirements((prevPrograms) => [...prevPrograms, value]);
      return;
    } else {
      setRequirements((prevPrograms) => {
        return prevPrograms.filter((program) => program !== value);
      });
    }
  };

  // handle clear filter
  const handleClear = () => {
    setSearchQuery("");
    setYears([fullYear]);
    setCountryNames([]);
    setSubjectArea([]);
    setDuration([]);
    setIsEsl("");
    setSelectedPrograms([]);
    setRequirements([]);
  };
  return (
    <div className="w-full relative sm:w-[600px] md:w-[800px] mx-auto bg-white shadow-md rounded-md px-6 pt-8 pb-12">
      <div className="w-full flex flex-col md:flex-row items-start md:items-end gap-4">
        <div className="w-full">
          <Input
            title={"Search All"}
            placeholder="Course | University | Country"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* intake months */}
        <div className="w-full max-w-[200px]">
          <h1>Intake</h1>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
            <Select
              size="small"
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={monthNames}
              onChange={handleChange}
              input={<OutlinedInput label="" />}
              renderValue={(selected) => selected.join(", ")}
              //     MenuProps={MenuProps}
            >
              {intakeMonthNames.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={monthNames?.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {/* intake years */}
        <div className="w-full max-w-[200px]">
          <h1>Years</h1>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
            <Select
              size="small"
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={years}
              onChange={handleChangeYear}
              input={<OutlinedInput placeholder="Year" />}
              renderValue={(selected) => selected.join(", ")}
              //     MenuProps={MenuProps}
            >
              {intakeYears.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={years?.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <button
            onClick={handleSearch}
            className="px-4 py-2 mt-auto bg-blue-500 text-white rounded-md active:scale-95 duration-200">
            Search
          </button>
        </div>
      </div>
      {/* middle hidden side */}
      <div className={`py-4 ${advanceOption ? "block" : "hidden"}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">
          {/* programs levels */}
          <div className="col-span-3">
            <h1>Program Level</h1>
            <div className="flex flex-col gap-4 mt-4">
              {programLevels.map((p, i) => (
                <label
                  htmlFor={p + i}
                  key={i}
                  className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    id={p + i}
                    value={p}
                    checked={selectedPrograms.includes(p)}
                    onChange={handleProgramChange}
                  />
                  <span className="text-xs">{p}</span>
                </label>
              ))}
            </div>
          </div>
          {/* programs levels */}
          <div className="col-span-5 flex flex-col sm:flex-row gap-4">
            {/* element 1 */}
            <div className="space-y-4">
              {/* country select */}
              <div className="w-full sm:max-w-[220px] md:max-w-[150px]">
                <h1>Country</h1>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                  <Select
                    size="small"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={countryNames}
                    onChange={handleChangeCountry}
                    input={<OutlinedInput placeholder="Year" />}
                    renderValue={(selected) => selected.join(", ")}
                    //     MenuProps={MenuProps}
                  >
                    {countryOptions.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={countryNames?.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {/* subject select */}
              <div className="w-full sm:max-w-[220px] md:max-w-[150px]">
                <h1>Subject Area</h1>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                  <Select
                    size="small"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={subjectArea}
                    onChange={handleChangeSubject}
                    input={<OutlinedInput placeholder="Year" />}
                    renderValue={(selected) => selected.join(", ")}
                    //     MenuProps={MenuProps}
                  >
                    {subjectAreaArray.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={subjectArea?.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            {/* element 2 */}
            <div className="space-y-4">
              {/* course duration */}
              <div className="w-full sm:max-w-[220px] md:max-w-[150px]">
                <h1>Duration</h1>
                <FormControl fullWidth>
                  {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                  <Select
                    size="small"
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={duration}
                    onChange={handleChangeDuration}
                    input={<OutlinedInput placeholder="Year" />}
                    renderValue={(selected) => selected.join(", ")}
                    //     MenuProps={MenuProps}
                  >
                    {courseDuration.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={duration?.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              {/* esl elp option */}
              <div className="w-full sm:max-w-[220px] md:max-w-[150px]">
                <SelectInput
                  title="ESL/ELP Option"
                  optionsArray={eslOption}
                  selectState={isEsl}
                  setSelectState={setIsEsl}
                />
              </div>
            </div>
          </div>
          {/* requirements */}
          <div className="col-span-4">
            {/* requirements */}
            <h1>Requirements</h1>
            <div className="flex flex-col gap-4 mt-4">
              {requirementsArray.map((p, i) => (
                <label
                  htmlFor={p + i}
                  key={i}
                  className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name=""
                    id={p + i}
                    value={p}
                    onChange={handleRequirementsChange}
                    checked={requirements.includes(p)}
                  />
                  <span className="text-xs">{p}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* clear all */}
        <div className="text-left mt-4">
          <span
            onClick={handleClear}
            className="text-lg font-medium text-red-500 underline cursor-pointer">
            Clear all
          </span>
        </div>
      </div>
      {/* advance search */}
      <div
        onClick={() => setAdvanceOption((prevState) => !prevState)}
        className="w-fit absolute left-1/2 -bottom-[25px] transform -translate-x-1/2 px-6 py-3 bg-white border border-blue-700 text-blue-700 font-medium rounded-md cursor-pointer whitespace-nowrap">
        {advanceOption ? "Close" : "Advance Search"}
      </div>
    </div>
  );
};

export default Search;
