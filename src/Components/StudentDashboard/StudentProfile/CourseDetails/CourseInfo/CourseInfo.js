import React from "react";

const CourseInfo = ({ course, customTest = [], standardizedTest = [] }) => {
  const {
    course_name,
    duration,
    intake_months,
    campus,
    course_url,
    application_fee,
    yearly_tuition_fee,
    pte_overall,
    pte_no_band,
    toefl_overall,
    toefl_no_band,
    ielts_no_band,
    ielts_overall,
    gre_exam_score,
    gmat_exam_score,
    entry_requirements,
    remarks,
  } = course || {};

  return (
    <div className="w-full md:w-[700px] ">
      {/* course details */}
      <div className="mb-6 bg-white">
        <div className="w-full px-4 py-2 bg-blue-600 text-white text-base font-medium">
          <h1>{course_name}</h1>
        </div>
        {/* intakes */}
        <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
          <h4 className="text-sm font-medium text-gray-800 col-span-4">
            Intakes
          </h4>
          <p className="text-sm text-gray-500 col-span-8">
            {intake_months?.replaceAll(",", ", ")}
          </p>
        </div>
        {/* Duration */}
        <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
          <h4 className="text-sm font-medium text-gray-800 col-span-4">
            Duration
          </h4>
          <p className="text-sm text-gray-500 col-span-8">{duration}</p>
        </div>
        {/* Campus */}
        <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
          <h4 className="text-sm font-medium text-gray-800 col-span-4">
            Campus
          </h4>
          <p className="text-sm text-gray-500 col-span-8">{campus}</p>
        </div>
        {/* Course Url */}
        <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
          <h4 className="text-sm font-medium text-gray-800 col-span-4">
            Course Url
          </h4>
          <a
            href={course_url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 col-span-8 overflow-x-scroll">
            {course_url}
          </a>
        </div>
        {/* Application Fees */}
        <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
          <h4 className="text-sm font-medium text-gray-800 col-span-4">
            Application Fees
          </h4>
          <p className="text-sm text-gray-500 col-span-8">{application_fee}</p>
        </div>
        {/* Yearly Tuition Fees */}
        <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
          <h4 className="text-sm font-medium text-gray-800 col-span-4">
            Yearly Tuition Fees
          </h4>
          <p className="text-sm text-gray-500 col-span-8">
            {yearly_tuition_fee}
          </p>
        </div>
      </div>
      {/* test details */}
      <div className="mb-6 bg-white">
        <div className="w-full px-4 py-2 bg-blue-600 text-white text-base font-medium">
          <h1>English Proficiency Test Requirements</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* PTE Overall */}
          <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
            <h4 className="text-sm font-medium text-gray-800 col-span-8">
              PTE Overall
            </h4>
            <p className="text-sm text-gray-500 col-span-4">{pte_overall}</p>
          </div>
          {/* PTE No Bands Less Than */}
          <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
            <h4 className="text-sm font-medium text-gray-800 col-span-8">
              PTE No Bands Less Than
            </h4>
            <p className="text-sm text-gray-500 col-span-4">{pte_no_band}</p>
          </div>
          {/* TOEFL iBT Overall */}
          <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
            <h4 className="text-sm font-medium text-gray-800 col-span-8">
              TOEFL iBT Overall
            </h4>
            <p className="text-sm text-gray-500 col-span-4">{toefl_overall}</p>
          </div>
          {/* TOEFL iBT no Bands Less Than */}
          <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
            <h4 className="text-sm font-medium text-gray-800 col-span-8">
              TOEFL iBT no Bands Less Than
            </h4>
            <p className="text-sm text-gray-500 col-span-4">{toefl_no_band}</p>
          </div>
          {/* IELTS Overall */}
          <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
            <h4 className="text-sm font-medium text-gray-800 col-span-8">
              IELTS Overall
            </h4>
            <p className="text-sm text-gray-500 col-span-4">{ielts_overall}</p>
          </div>
          {/* IELTS no Band Less Than */}
          <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
            <h4 className="text-sm font-medium text-gray-800 col-span-8">
              IELTS no Band Less Than
            </h4>
            <p className="text-sm text-gray-500 col-span-4">{ielts_no_band}</p>
          </div>
          {/* custom tests */}
          {customTest.map((test, i) => (
            <div
              key={i}
              className="md:col-span-2 grid grid-cols-1 md:grid-cols-2">
              <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
                <h4 className="text-sm font-medium text-gray-800 col-span-8">
                  {test?.test_name + " Overall"}
                </h4>
                <p className="text-sm text-gray-500 col-span-4">
                  {test?.test_score}
                </p>
              </div>
              <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
                <h4 className="text-sm font-medium text-gray-800 col-span-8">
                  {test?.test_name + " No Band"}
                </h4>
                <p className="text-sm text-gray-500 col-span-4">
                  {test?.test_no_band}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Standardized details */}
      {standardizedTest.length > 0 && gre_exam_score && gmat_exam_score && (
        <div className="mb-6 bg-white">
          <div className="w-full px-4 py-2 bg-blue-600 text-white text-base font-medium">
            <h1>Standardized Test Requirements</h1>
          </div>
          {/* gre exam score */}
          {gre_exam_score && (
            <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
              <h4 className="text-sm font-medium text-gray-800 col-span-4">
                GRE Score
              </h4>
              <p className="text-sm text-gray-500 col-span-8">
                {gre_exam_score}
              </p>
            </div>
          )}
          {/* gmat exam score */}
          {gmat_exam_score && (
            <div className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
              <h4 className="text-sm font-medium text-gray-800 col-span-4">
                GMAT Score
              </h4>
              <p className="text-sm text-gray-500 col-span-8">
                {gmat_exam_score}
              </p>
            </div>
          )}
          {/* custom tests */}
          {standardizedTest.map((test, i) => (
            <div
              key={i}
              className="px-5 py-3 border-b border-gray-400 grid grid-cols-2 md:grid-cols-12 gap-4">
              <h4 className="text-sm font-medium text-gray-800 col-span-4">
                {test?.test_name}
              </h4>
              <p className="text-sm text-gray-500 col-span-8">
                {test?.test_score}
              </p>
            </div>
          ))}
        </div>
      )}
      {/* Entry Requirements */}
      <div className="mb-6 bg-white">
        <div className="w-full px-4 py-2 bg-blue-600 text-white text-base font-medium">
          <h1>Entry Requirements</h1>
        </div>
        <div className="p-5 text-sm font-normal text-gray-600">
          <p className="text-justify">{entry_requirements}</p>
        </div>
      </div>
      {/* Remarks */}
      <div className="mb-6 bg-white">
        <div className="w-full px-4 py-2 bg-blue-600 text-white text-base font-medium">
          <h1>Remarks</h1>
        </div>
        <div className="p-5 text-sm font-normal text-gray-600">
          <p className="text-justify">{remarks}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
