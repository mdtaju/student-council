import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import formatBytes from "../../../../Utilities/GetFileSize";
import AppReqVisualization from "./AppReqVisualization";

const SavedCourses = ({ courses, setCourses, handleEdit }) => {
  const handleDelete = (index) => {
    setCourses((prevRe) => {
      return prevRe.filter((re, i) => i !== index);
    });
  };

  // intake months and years formate
  function formateArray(str) {
    const strType = typeof str;
    if (strType === "string") {
      return str.split(",");
    }
    return str;
  }
  return (
    <>
      {courses.map((course, i) => (
        <div
          key={i}
          className="p-2 bg-gray-100 rounded-md border border-green-300 col-span-3 mb-3">
          <h1 className="text-green-500 text-center mb-3 underline font-bold">
            Course No: {i + 1}
          </h1>
          <div className="sm:grid sm:grid-cols-4 gap-4 my-3">
            {/* course name */}
            <div>
              <h1 className="text-sm font-medium">Course Name:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.course_name}
              </p>
            </div>
            {/* subject area */}
            <div>
              <h1 className="text-sm font-medium">Subject Area:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.subject_area}
              </p>
            </div>
            {/* program level */}
            <div>
              <h1 className="text-sm font-medium">Program Level:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.program_level}
              </p>
            </div>
            {/* esl/epl */}
            <div>
              <h1 className="text-sm font-medium">ESL/EPL Available:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.esl_elp}
              </p>
            </div>
            {/* specialize */}
            <div>
              <h1 className="text-sm font-medium">Specialize:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.specialize}
              </p>
            </div>
            {/* intake month */}
            <div>
              <h1 className="text-sm font-medium">Intake Months:</h1>
              {formateArray(course.intake_months)?.map((m, i) => (
                <p key={i} className="text-normal font-semibold text-gray-700">
                  {m}
                </p>
              ))}
            </div>
            {/* intake years */}
            <div>
              <h1 className="text-sm font-medium">Intake Years:</h1>
              {formateArray(course.intake_year)?.map((m, i) => (
                <p key={i} className="text-normal font-semibold text-gray-700">
                  {m}
                </p>
              ))}
            </div>
            {/* duration */}
            <div>
              <h1 className="text-sm font-medium">Duration:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.duration}
              </p>
            </div>
            {/* deadline */}
            <div>
              <h1 className="text-sm font-medium">Deadline:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.deadline}
              </p>
            </div>
            {/* campus */}
            <div>
              <h1 className="text-sm font-medium">Campus:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.campus}
              </p>
            </div>
            {/* course url */}
            <div>
              <h1 className="text-sm font-medium">Course URL:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.course_url}
              </p>
            </div>
            {/* application fee */}
            <div>
              <h1 className="text-sm font-medium">Application Fees:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.application_fee}
              </p>
            </div>
            {/* yearly tuition fees */}
            <div>
              <h1 className="text-sm font-medium">Yearly Tuition Fees:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.yearly_tuition_fee}
              </p>
            </div>
            {/* avg time to receive letter */}
            <div>
              <h1 className="text-sm font-medium">
                Average Time to Received Acceptance Letter:
              </h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.average_time_acceptance_letter}
              </p>
            </div>
            {/* is admission Interview */}
            <div>
              <h1 className="text-sm font-medium">Admission Interview:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.admission_interview}
              </p>
            </div>
            {/* is scholarship available */}
            <div>
              <h1 className="text-sm font-medium">Is Scholarship Available:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.scholarship_available}
              </p>
            </div>
            {/* is scholarship available */}
            {course.scholarship_available === "Yes" && (
              <div>
                <h1 className="text-sm font-medium">Scholarship Duration:</h1>
                <p className="text-normal font-semibold overflow-auto text-gray-700">
                  {course.scholarship_duration}
                </p>
              </div>
            )}
            {/* course for */}
            <div>
              <h1 className="text-sm font-medium">Course For:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.course_for}
              </p>
            </div>
            {/* entry requirement */}
            <div>
              <h1 className="text-sm font-medium">Entry Requirements:</h1>
              <div className="w-full">
                <p className="text-normal font-semibold text-gray-700 overflow-auto">
                  {course.entry_requirements}
                </p>
              </div>
            </div>
            {/* app req visualization */}
            <div className="col-span-4 w-full">
              <AppReqVisualization
                requirements={course.application_requirements}
              />
            </div>
            {/* remarks */}
            <div>
              <h1 className="text-sm font-medium">Remarks:</h1>
              <p className="text-normal font-semibold text-gray-700 overflow-auto">
                {course.remarks}
              </p>
            </div>
            {/* pte overall */}
            <div>
              <h1 className="text-sm font-medium">PTE Overall:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.pte_overall}
              </p>
            </div>
            {/* pte no bands */}
            <div>
              <h1 className="text-sm font-medium">PTE No Bands Less Than:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.pte_no_band}
              </p>
            </div>
            {/* toefl score */}
            <div>
              <h1 className="text-sm font-medium">TOEFL iBT Overall:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.toefl_overall}
              </p>
            </div>
            {/* toefl no bands */}
            <div>
              <h1 className="text-sm font-medium">
                TOEFL iBT no Bands Less Than:
              </h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.toefl_no_band}
              </p>
            </div>
            {/* ielts score */}
            <div>
              <h1 className="text-sm font-medium">IELTS Overall:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.ielts_overall}
              </p>
            </div>
            {/* ielts no bands */}
            <div>
              <h1 className="text-sm font-medium">IELTS no Band Less Than:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.ielts_no_band}
              </p>
            </div>
            {/* custom tests array of objects */}
            {course.custom_test.map((t, i) => (
              <div
                key={i}
                className="col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-4 p-1 border border-green-400 rounded-md">
                {/* title */}
                <div>
                  <h1 className="text-sm font-medium">Test Title:</h1>
                  <p className="text-normal font-semibold overflow-auto text-gray-700">
                    {t.test_name}
                  </p>
                </div>
                {/* score */}
                <div>
                  <h1 className="text-sm font-medium">Test Score:</h1>
                  <p className="text-normal font-semibold overflow-auto text-gray-700">
                    {t.test_score}
                  </p>
                </div>
                {/* score no band */}
                <div>
                  <h1 className="text-sm font-medium">Test No Band:</h1>
                  <p className="text-normal font-semibold overflow-auto text-gray-700">
                    {t.test_no_band}
                  </p>
                </div>
              </div>
            ))}
            {/* gre exam */}
            <div>
              <h1 className="text-sm font-medium">GRE Exam Score:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.gre_exam_score}
              </p>
            </div>
            {/* emat exam  */}
            <div>
              <h1 className="text-sm font-medium">GMAT Exam Score:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.gmat_exam_score}
              </p>
            </div>
            {/* custom standarlized tests array of object */}
            <div className="col-span-4">
              {course?.standardized_tests?.map((t, i) => (
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-1 border border-green-400 bg-gray-100 rounded-md"
                  key={i}>
                  <div>
                    <h1 className="text-sm font-medium">Test Name:</h1>
                    <p className="text-normal font-semibold text-gray-700">
                      {t?.test_name}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-sm font-medium">Test Score:</h1>
                      <p className="text-normal font-semibold text-gray-700">
                        {t?.test_score}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* documents */}
            {course.require_documents?.map((file, i) => (
              <div key={i} className="flex items-start gap-4 w-fit">
                <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
                  <AiOutlineFileText className="text-2xl text-blue-400" />
                </div>
                <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
                  <h4 className="truncate">
                    {file?.name ? file.name : file.file_name}
                  </h4>
                  <h4 className="text-xs">
                    {formatBytes(file?.size ? file.size : file.file_size)} .{" "}
                    {file?.type
                      ? file?.type?.split("/")?.pop()?.toUpperCase()
                      : file?.file_name?.split(".")?.pop()?.toUpperCase()}
                  </h4>
                </div>
              </div>
            ))}
            {/* about documents */}
            <div>
              <h1 className="text-sm font-medium">About Documents:</h1>
              <p className="text-normal font-semibold overflow-auto text-gray-700">
                {course.about_documents}
              </p>
            </div>
            {/* delete and edit button container */}
            <div className="flex items-center gap-4">
              {/* delete button */}
              <div>
                <div
                  className="w-fit h-fit px-4 py-1 text-white bg-red-500 hover:bg-red-600 active:scale-95 duration-200 rounded-md cursor-pointer"
                  onClick={() => handleDelete(i)}>
                  Delete
                </div>
              </div>
              {/* edit button */}
              <div>
                <div
                  className="w-fit h-fit px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer"
                  onClick={() => handleEdit(course, i)}>
                  Edit
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SavedCourses;
