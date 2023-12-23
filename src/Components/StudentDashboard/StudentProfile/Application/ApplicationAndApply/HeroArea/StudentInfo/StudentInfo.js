import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SchoolIcon from "@mui/icons-material/School";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCourseShortListQuery } from "../../../../../../../features/course/courseApi";
import usePath from "../../../../../../../hooks/usePath";

const StudentInfo = ({
  university_details = {},
  course = {},
  personal_info = {},
  education_info = {},
  school_attend = [],
  test_score = {},
  additional_qualification = {},
  background_info = {},
}) => {
  const { institute_name, institute_logo_url, delivery_method } =
    university_details;
  const { course_name, program_level } = course;
  const {
    first_name,
    middle_name,
    last_name,
    query_id,
    email,
    date_of_birth,
    phone,
    first_language,
    gender,
    marital_status,
    passport_number,
    passport_expiry_date,
    country_of_citizenship,
    address,
    city,
    country,
    state,
    zip_code,
  } = personal_info;
  const pathName = usePath();
  const params = useParams();
  const { data } = useGetCourseShortListQuery(query_id);
  const { grading_scheme, country_of_education, grade_average } =
    education_info;
  const { listening, reading, writing, specking } = test_score;
  const [stuInfoOpen, setStuInfoOpen] = useState(false);
  const [backgroundInfoOpen, setBackgroundInfoOpen] = useState(false);
  const [educationInfoOpen, setEducationInfoOpen] = useState(false);
  const [englishTestOpen, setEnglishTestOpen] = useState(false);
  const [othersList, setOthersList] = useState([]);
  const [otherListValue, setOtherListValue] = useState("");

  //   get course list
  useEffect(() => {
    if (data?.length) {
      const getOtherList = data?.filter((list) => list?.id !== params?.id);
      setOthersList(getOtherList);
    }
  }, [data, params]);

  function handleOtherListClick(e) {
    setOtherListValue(e.target.value);
    window.open(`/${pathName}/applications/${e.target.value}`, "_blank");
    // navigate(`${courseLinkPath}/${e.target.value}`);
  }

  return (
    <div className="w-full md:w-[40%] border-4 border-gray-200 rounded-md p-4">
      <select
        name=""
        id=""
        value={otherListValue}
        onChange={handleOtherListClick}
        className="w-full px-3 py-1 outline-none border-gray-400 border rounded-lg mb-4">
        <option value="" disabled>
          Other Applications
        </option>
        {othersList?.map((list) => (
          <option key={list?.id} value={list?.id}>
            {`${list?.university_name} | ${list?.course_name}`}
          </option>
        ))}
      </select>
      {/* profile, logo and university info container */}
      <div className="flex items-start gap-4">
        {/* student image */}
        <Avatar src="" alt="profile" sx={{ width: 80, height: 80 }} />
        {/* university logo */}
        <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] relative">
          <img
            src={institute_logo_url}
            alt="logo"
            className="absolute w-full h-full object-contain object-center"
          />
        </div>
        {/* university info */}
        <div className="flex-1">
          <h1 className="text-lg font-medium text-blue-500 hover:text-blue-600">
            {institute_name}
          </h1>
          <p className="text-sm font-normal text-blue-500">{course_name}</p>
          <div className="space-y-1 mt-2">
            <h4 className="text-sm font-medium text-gray-800">
              Delivery Method:{" "}
              <span className="px-3 py-1 bg-blue-300 font-normal text-gray-800 rounded-full">
                {delivery_method}
              </span>
            </h4>
            <h4 className="text-sm font-medium text-gray-800">
              Level:{" "}
              <span className="px-2 py-1 font-normal text-gray-800 rounded-full">
                {program_level}
              </span>
            </h4>
            <h4 className="text-sm font-medium text-gray-800">
              Required Level: {" "}
              <span className="px-2 py-1 font-normal text-gray-800 rounded-full">
                {program_level}
              </span>
            </h4>
            <h4 className="text-sm font-medium text-gray-800">
              Application ID:  {" "}
              <span className="px-2 py-1 font-normal text-gray-800 rounded-full">
                {`3688839`}
              </span>
            </h4>
          </div>
        </div>
      </div>
      {/* student info container */}
      <div className="mt-4">
        {/* intakes */}
        <div className="flex items-center gap-2 justify-between border-b border-gray-300 p-4">
          <span className="text-base text-gray-700">Intakes(s)</span>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-600">ESL</span>
            <span className="text-base text-gray-600">N/A</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-600">Academic</span>
            <span className="text-base text-gray-600">2024-Jan</span>
          </div>
        </div>
        {/* Academic Submission Deadline: */}
        <div className="flex items-center gap-2 border-b border-gray-300 p-4">
          <div className="max-w-[150px]">
            <span className="text-base text-gray-700">
              Academic Submission Deadline:
            </span>
          </div>
          <span className="text-base text-gray-600">Jan 02, 2024</span>
        </div>
        {/* status */}
        <div className="flex items-center gap-2 border-b border-gray-300 p-4">
          <div className="w-[150px]">
            <span className="text-base text-gray-700">Status:</span>
          </div>
          <div className="space-y-4">
            {/* ready to submit */}
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Ready to Submit</span>
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[24px] h-[24px]"
              />
            </div>
            {/* Submitted to School */}
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Submitted to School</span>
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[24px] h-[24px]"
              />
            </div>
            {/* Ready for Visa */}
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Ready for Visa</span>
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[24px] h-[24px]"
              />
            </div>
            {/* Ready to Enroll */}
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Ready to Enroll</span>
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[24px] h-[24px]"
              />
            </div>
            {/* Enrollment Confirmed */}
            <div className="flex items-center gap-2 text-base text-gray-500">
              <span>Enrollment Confirmed</span>
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </div>
        {/* student */}
        <div className="py-4 border-b border-gray-300">
          {/* header */}
          <div
            className={`flex items-center justify-between rounded-md p-4 ${
              stuInfoOpen ? "bg-gray-200" : ""
            }`}>
            <div className="max-w-[150px]">
              <span className="text-base text-gray-700">Student:</span>
            </div>
            <h4 className="text-sm text-gray-600">
              {query_id} |{" "}
              <span className="text-blue-600">{`${first_name} ${middle_name} ${last_name}`}</span>
            </h4>
            <div
              onClick={() => setStuInfoOpen((prevState) => !prevState)}
              className={`w-[35px] h-[35px] border border-gray-300 grid place-items-center rounded-full cursor-pointer ${
                stuInfoOpen ? "rotate-180" : ""
              } transition-all duration-200`}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {/* body */}
          <div
            className={`w-full bg-white ${
              stuInfoOpen ? "h-[700px] sm:h-[630px]" : "h-[0px] overflow-hidden"
            } transition-all duration-500`}>
            <div className="p-4">
              {/* login email */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Login Email</h4>
                <h4 className="text-sm text-gray-800">{email}</h4>
              </div>
              {/* primary email */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Primary Email</h4>
                <h4 className="text-sm text-gray-800">{email}</h4>
              </div>
              {/* first name */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">First Email</h4>
                <h4 className="text-sm text-gray-800">{first_name}</h4>
              </div>
              {/* last name */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Last Email</h4>
                <h4 className="text-sm text-gray-800">{last_name}</h4>
              </div>
              {/* birthday */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Birthday Date</h4>
                <h4 className="text-sm text-gray-800">{date_of_birth}</h4>
              </div>
              {/* Phone Number */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Phone Number</h4>
                <h4 className="text-sm text-gray-800">{phone}</h4>
              </div>
              {/* First Language */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">First Language</h4>
                <h4 className="text-sm text-gray-800">{first_language}</h4>
              </div>
              {/* Gender */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Gender</h4>
                <h4 className="text-sm text-gray-800">{gender}</h4>
              </div>
              {/* Marital Status */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Marital Status</h4>
                <h4 className="text-sm text-gray-800">{marital_status}</h4>
              </div>
              {/* Passport Number */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Passport Number</h4>
                <h4 className="text-sm text-gray-800">{passport_number}</h4>
              </div>
              {/* Passport Expiry Date */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">
                  Passport Expiry Date
                </h4>
                <h4 className="text-sm text-gray-800">
                  {passport_expiry_date}
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* background info */}
        <div className="py-4 border-b border-gray-300">
          {/* header */}
          <div
            className={`flex items-center justify-between rounded-md p-4 ${
              backgroundInfoOpen ? "bg-gray-200" : ""
            }`}>
            <div className="max-w-[150px]">
              <span className="text-base text-gray-700">Background:</span>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="text-sm">Nationality</span>
              <span>{country_of_citizenship}</span>
            </div>
            <div
              onClick={() => setBackgroundInfoOpen((prevState) => !prevState)}
              className={`w-[35px] h-[35px] border border-gray-300 grid place-items-center rounded-full cursor-pointer ${
                backgroundInfoOpen ? "rotate-180" : ""
              } transition-all duration-200`}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {/* body */}
          <div
            className={`w-full bg-white ${
              backgroundInfoOpen
                ? "h-[320px] sm:h-[280px]"
                : "h-[0px] overflow-hidden"
            } transition-all duration-500`}>
            <div className="p-4">
              {/* Street */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Street</h4>
                <h4 className="text-sm text-gray-800">{address}</h4>
              </div>
              {/* City/Town */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">City/Town</h4>
                <h4 className="text-sm text-gray-800">{city}</h4>
              </div>
              {/* Country */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Country</h4>
                <h4 className="text-sm text-gray-800">{country}</h4>
              </div>
              {/* Province/State */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Province/State</h4>
                <h4 className="text-sm text-gray-800">{state}</h4>
              </div>
              {/* Postal/Zip */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Postal/Zip</h4>
                <h4 className="text-sm text-gray-800">{zip_code}</h4>
              </div>
            </div>
          </div>
        </div>
        {/* education info */}
        <div className="py-4 border-b border-gray-300">
          {/* header */}
          <div
            className={`flex items-center justify-between gap-3 rounded-md p-4 ${
              educationInfoOpen ? "bg-gray-200" : ""
            }`}>
            <div className="max-w-[150px]">
              <span className="text-base text-gray-700">Education:</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm">{grading_scheme}</span>
              <SchoolIcon className="text-lg text-green-600" />
            </div>
            <div
              onClick={() => setEducationInfoOpen((prevState) => !prevState)}
              className={`w-[35px] h-[35px] border border-gray-300 grid place-items-center rounded-full cursor-pointer ${
                educationInfoOpen ? "rotate-180" : ""
              } transition-all duration-200`}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {/* body */}
          <div
            className={`w-full bg-white ${
              educationInfoOpen
                ? "h-[830px] sm:h-[800px]"
                : "h-[0px] overflow-hidden"
            } transition-all duration-500`}>
            <div className="p-4">
              {/* country of education */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">
                  Country of Education
                </h4>
                <h4 className="text-sm text-gray-800">
                  {country_of_education}
                </h4>
              </div>
              {/* grade */}
              <div className="grid grid-cols-3 py-2 gap-6">
                <h4 className="text-base text-gray-700">Grade</h4>
                <h4 className="text-sm text-gray-800">{grade_average}</h4>
              </div>
              {/* attended school */}
              <div className="py-2">
                {/* header */}
                <div className="pb-1 border-b border-gray-400">
                  <h4 className="text-base text-gray-700">Schools Attended</h4>
                </div>
                {/* info start */}
                {school_attend.map((school, i) => (
                  <div key={i} className="p-4">
                    {/* School Name */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">School Name</h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.name_of_institute}
                      </h4>
                    </div>
                    {/* Level */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">Level</h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.level_of_education}
                      </h4>
                    </div>
                    {/* Language */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">Language</h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.primary_language_of_institute}
                      </h4>
                    </div>
                    {/* Attended From*/}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">Attended From</h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.attend_institute_from}
                      </h4>
                    </div>
                    {/* Attended To */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">Attended To</h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.attend_institute_to}
                      </h4>
                    </div>
                    {/* Address */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">Address</h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.institute_address}
                      </h4>
                    </div>
                    {/* Degree Name */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">Degree Name</h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.degree_name}
                      </h4>
                    </div>
                    {/* Graduated? */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">Graduated?</h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.graduated_from_this_institute}
                      </h4>
                    </div>
                    {/* Certificate Awarded? */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">
                        Certificate Awarded?
                      </h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.is_physical_certificate === "1" ? "Yes" : "No"}
                      </h4>
                    </div>
                    {/* Graduation Date */}
                    <div className="grid grid-cols-3 py-2 gap-6">
                      <h4 className="text-base text-gray-700">
                        Graduation Date
                      </h4>
                      <h4 className="text-sm text-gray-800">
                        {school?.graduated_date}
                      </h4>
                    </div>
                  </div>
                ))}
                {/* info end */}
              </div>
            </div>
          </div>
        </div>
        {/* English Test */}
        <div className="py-4 border-b border-gray-300">
          {/* header */}
          <div
            className={`flex items-center justify-between rounded-md p-4 ${
              englishTestOpen ? "bg-gray-200" : ""
            }`}>
            <div className="max-w-[150px]">
              <span className="text-base text-gray-700">English Test:</span>
            </div>
            <div>
              <h1>IELTS</h1>
              <div className="flex items-start gap-3">
                <span className="text-sm">L</span>
                <span className="text-xs bg-gray-100 py-1 px-2 rounded-md">
                  {listening}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sm">R</span>
                <span className="text-xs bg-gray-100 py-1 px-2 rounded-md">
                  {reading}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sm">W</span>
                <span className="text-xs bg-gray-100 py-1 px-2 rounded-md">
                  {writing}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sm">S</span>
                <span className="text-xs bg-gray-100 py-1 px-2 rounded-md">
                  {specking}
                </span>
              </div>
            </div>
            <div
              onClick={() => setEnglishTestOpen((prevState) => !prevState)}
              className={`w-[35px] h-[35px] border border-gray-300 grid place-items-center rounded-full cursor-pointer ${
                englishTestOpen ? "rotate-180" : ""
              } transition-all duration-200`}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          {/* body */}
          {/* <div
            className={`w-full bg-white ${
              backgroundInfoOpen
                ? "h-[320px] sm:h-[280px]"
                : "h-[0px] overflow-hidden"
            } transition-all duration-500`}>
            <div className="p-4"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
