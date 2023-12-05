import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";
import Input from "../../../Inputs/Input";
import RadioInput from "../../../Inputs/RadioInut";
import SelectChip from "../../../Inputs/SelectChip";
import SelectInput from "../../../Inputs/SelectInput";

const CourseDetails = ({
  courseName,
  setCourseName,
  subjectArea,
  setSubjectArea,
  program,
  setProgram,
  eslOption,
  setEslOption,
  specialization,
  setSpecialization,
  monthNames,
  setMonthNames,
  year,
  setYear,
  duration,
  setDuration,
  deadline,
  setDeadline,
  campus,
  setCampus,
  courseUrl,
  setCourseUrl,
  applicationFee,
  setApplicationFee,
  tuitionFee,
  setTuitionFee,
  avgTimeToReceiveLetter,
  setAvgTimeToReceiveLetter,
  isInterview,
  isScholarship,
  scholarShipDuration,
  scholarshipAmount,
  setScholarshipAmount,
  courseForLevel,
  setCourseForLevel,
  setScholarship,
  setScholarshipDuration,
  setIsInterview,
  minimumTuitionFee,
  setMinimumTuitionFee,
  courseRequirements,
  setCourseRequirements,
  currency,
  setCurrency,
  applicationOfferFee,
  setApplicationOfferFee,
  applicationAvailability,
  setApplicationAvailability,
}) => {
  const monthName = [
    "",
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

  const yearsArray = [
    "",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
    "2041",
    "2042",
    "2043",
    "2044",
    "2045",
    "2046",
    "2047",
    "2048",
    "2049",
    "2050",
    "2051",
    "2052",
    "2053",
    "2054",
    "2055",
    "2056",
    "2057",
    "2058",
    "2059",
    "2060",
    "2061",
    "2062",
    "2063",
    "2064",
    "2065",
    "2066",
    "2067",
    "2068",
    "2069",
    "2070",
    "2071",
    "2072",
    "2073",
    "2074",
    "2075",
    "2076",
    "2077",
    "2078",
    "2079",
    "2080",
  ];

  // const courseFor = [
  //   "",
  //   "School",
  //   "Foundation",
  //   "Bachelor",
  //   "Masters",
  //   "PSD",
  //   "ESL",
  //   "Online",
  // ];

  const subjectAreaArray = [
    "",
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

  const scholarshipOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const scholarshipDurationOptions = [
    { value: "Yearly", label: "Yearly" },
    { value: "Overall Course", label: "Overall Course" },
  ];

  const isInterviewOptions = scholarshipOptions;

  const applicationAvailabilityOption = [
    { value: "Open", label: "Open" },
    { value: "Close", label: "Close" },
  ];

  const courseDuration = [
    "0 - 1 Years",
    "1 - 2 Years",
    "2 - 3 Years",
    "3 - 4 Years",
    "4 and above Years",
  ];

  const programLevels = [
    "",
    "School/ O Level (1st-10th)",
    "High School / A Level (11th - 12th)",
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

  const requirementsArray = [
    "MOI",
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

  const ESLELPOption = ["", "Yes", "No"];

  const handleScholarOption = (value) => {
    setScholarship(value);
  };

  const handleScholarshipDuration = (value) => {
    setScholarshipDuration(value);
  };

  const handleInterview = (value) => {
    setIsInterview(value);
  };

  const handleApplicationAvailability = (value) => {
    setApplicationAvailability(value);
  };

  const handleChange = (e, v) => {
    const getAll = v.find((a) => a === "All");
    if (getAll) {
      setMonthNames([
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
    setMonthNames(
      // On autofill we get a stringified value.
      typeof v === "string" ? v?.split(",") : v
    );
  };

  const handleChangeYear = (e, v) => {
    setYear(
      // On autofill we get a stringified value.
      typeof v === "string" ? v?.split(",") : v
    );
  };

  const handleChangeCourseRequirements = (event) => {
    const {
      target: { value },
    } = event;

    setCourseRequirements(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Input
        title={"Course Name"}
        // isRequired
        // required
        placeholder="Enter course name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <SelectInput
        title={"Subject Area"}
        optionsArray={subjectAreaArray}
        // // isRequired
        selectState={subjectArea}
        setSelectState={setSubjectArea}
      />
      <SelectInput
        title={"Program Levels"}
        optionsArray={programLevels}
        // // isRequired
        selectState={program}
        setSelectState={setProgram}
      />
      <div>
        <h1>Requirements</h1>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
          <Select
            size="small"
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={courseRequirements}
            onChange={handleChangeCourseRequirements}
            input={<OutlinedInput label="" />}
            renderValue={(selected) => selected.join(", ")}
            //     MenuProps={MenuProps}
          >
            {requirementsArray.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={courseRequirements?.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <SelectInput
        title={"ESL/ELP Available"}
        optionsArray={ESLELPOption}
        // // isRequired
        selectState={eslOption}
        setSelectState={setEslOption}
      />
      <Input
        title={"Specialize"}
        // // isRequired
        // required
        placeholder="Enter specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      />
      <SelectChip
        title="Intakes Months"
        options={monthName}
        stateArr={monthNames}
        // // isRequired
        setStateArr={setMonthNames}
        onChangeHandler={handleChange}
      />
      <SelectChip
        title={"Intakes Year"}
        options={yearsArray}
        stateArr={year}
        // // isRequired
        setStateArr={setYear}
        onChangeHandler={handleChangeYear}
      />
      <SelectInput
        title={"Duration"}
        // // isRequired
        // required
        placeholder="Select course duration"
        optionsArray={courseDuration}
        selectState={duration}
        setSelectState={setDuration}
      />
      <Input
        title={"Deadline"}
        // // isRequired
        // required
        placeholder="Enter course deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <Input
        title={"Campus"}
        // // isRequired
        // required
        placeholder="Enter campus location"
        value={campus}
        onChange={(e) => setCampus(e.target.value)}
      />
      <Input
        title={"Course URL"}
        // // isRequired
        // required
        placeholder="Enter url"
        value={courseUrl}
        onChange={(e) => setCourseUrl(e.target.value)}
      />
      <Input
        title={"Currency"}
        // // isRequired
        // required
        placeholder="Enter currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      <Input
        title={"Application Fees"}
        type="number"
        // // isRequired
        // required
        placeholder="Enter amount with currency"
        value={applicationFee}
        onChange={(e) => setApplicationFee(e.target.value)}
      />
      <Input
        title={"Application Offer Fees"}
        type="number"
        // // isRequired
        // required
        placeholder="Enter amount with currency"
        value={applicationOfferFee}
        onChange={(e) => setApplicationOfferFee(e.target.value)}
      />
      <Input
        title={"Yearly Tuition Fees"}
        type={"number"}
        // // isRequired
        // required
        placeholder="Enter amount with currency"
        value={tuitionFee}
        onChange={(e) => setTuitionFee(e.target.value)}
      />
      <Input
        title={"Minimum Deposit Tuition Fees"}
        type={"number"}
        // // isRequired
        // required
        placeholder="Enter amount with currency"
        value={minimumTuitionFee}
        onChange={(e) => setMinimumTuitionFee(e.target.value)}
      />

      <Input
        title={"Average time to received acceptance letter"}
        // // isRequired
        // required
        placeholder="Enter average time"
        value={avgTimeToReceiveLetter}
        onChange={(e) => setAvgTimeToReceiveLetter(e.target.value)}
      />
      <RadioInput
        title={"Admission Interview"}
        // // isRequired
        // required
        name="admissionInterview"
        options={isInterviewOptions}
        selectedValue={isInterview}
        onChange={handleInterview}
      />

      <RadioInput
        title={"Is scholarship available?"}
        // // isRequired
        // required
        name="scholarship"
        options={scholarshipOptions}
        selectedValue={isScholarship}
        onChange={handleScholarOption}
      />

      {isScholarship === "Yes" && (
        <>
          <RadioInput
            title={"Scholarship duration"}
            // // isRequired
            // required
            name="scholarshipDuration"
            options={scholarshipDurationOptions}
            selectedValue={scholarShipDuration}
            onChange={handleScholarshipDuration}
          />
          <Input
            title={"Scholarship amount"}
            // // isRequired
            // required
            placeholder="Enter amount"
            value={scholarshipAmount}
            onChange={(e) => setScholarshipAmount(e.target.value)}
          />
        </>
      )}
      <SelectInput
        title={"Course For"}
        optionsArray={programLevels}
        // // isRequired
        selectState={courseForLevel}
        setSelectState={setCourseForLevel}
      />
      <RadioInput
        title={"Application Availability"}
        // // isRequired
        // required
        name="applicationAvailability"
        options={applicationAvailabilityOption}
        selectedValue={applicationAvailability}
        onChange={handleApplicationAvailability}
      />
    </div>
  );
};

export default CourseDetails;
