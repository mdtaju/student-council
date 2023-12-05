import React, { memo, useState } from "react";
import Input from "../../../Inputs/Input";
import TextArea from "../../../Inputs/TextArea";
import ApplicationRequirement from "./ApplicationRequirement";
import CourseDetails from "./CourseDetails";
import CourseDocuments from "./CourseDocuments";
import CustomTest from "./CustomTest";
import SavedCourses from "./SavedCourses";
import StandardizedTest from "./StandardizedTest";

const AddCourse = ({ courses, setCourses }) => {
  const [isCourseForm, setCourseForm] = useState(false);

  const [monthNames, setMonthNames] = useState([]);
  const [year, setYear] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [subjectArea, setSubjectArea] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [avgTimeToReceiveLetter, setAvgTimeToReceiveLetter] = useState("");
  const [isScholarship, setScholarship] = useState("");
  const [scholarShipDuration, setScholarshipDuration] = useState("");
  const [isInterview, setIsInterview] = useState("");
  // custom tests
  const [tests, setTests] = useState([]);
  // documents
  const [courseDocuments, setCourseDocuments] = useState([]);

  const [courseForLevel, setCourseForLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [campus, setCampus] = useState("");
  const [courseUrl, setCourseUrl] = useState("");
  const [currency, setCurrency] = useState("");
  const [applicationFee, setApplicationFee] = useState("");
  const [applicationOfferFee, setApplicationOfferFee] = useState("");
  const [tuitionFee, setTuitionFee] = useState("");
  const [minimumTuitionFee, setMinimumTuitionFee] = useState("");
  const [entryRequirement, setEntryRequirement] = useState("");
  const [remarks, setRemarks] = useState("");
  const [scholarshipAmount, setScholarshipAmount] = useState("");
  const [PTEOverall, setPTEOverall] = useState("");
  const [PTENoBands, setPTENoBands] = useState("");
  const [TOEFLiBTOverall, setTOEFLiBTOverall] = useState("");
  const [TOEFLiBTNoBands, setTOEFLiBTNoBands] = useState("");
  const [IELTSOverall, setIELTSOverall] = useState("");
  const [IELTSNoBands, setIELTSNoBands] = useState("");
  const [GREExamScore, setGREExamScore] = useState("");
  const [GMATExamScore, setGMATExamScore] = useState("");
  const [program, setProgram] = useState("");
  const [courseRequirements, setCourseRequirements] = useState([]);
  const [eslOption, setEslOption] = useState("");
  const [aboutDocument, setAboutDocument] = useState("");
  const [deadline, setDeadline] = useState("");
  const [applicationAvailability, setApplicationAvailability] = useState("");
  // multi Standardized custom score
  const [standardizedTests, setStandardizedTests] = useState([]);
  const [requirements, setRequirements] = useState([]);

  // index number of course element for update
  const [updateIndex, setUpdateIndex] = useState("");

  const handleSaveCourse = () => {
    const makeCourse = {
      course_name: courseName,
      subject_area: subjectArea,
      program_level: program,
      esl_elp: eslOption,
      specialize: specialization,
      intake_months: monthNames,
      intake_year: year,
      duration,
      deadline: deadline,
      campus,
      course_url: courseUrl,
      currency,
      application_fee: applicationFee,
      application_offer_fee: applicationOfferFee,
      yearly_tuition_fee: tuitionFee,
      minimum_tuition_fee: minimumTuitionFee,
      average_time_acceptance_letter: avgTimeToReceiveLetter,
      admission_interview: isInterview,
      scholarship_available: isScholarship,
      course_for: courseForLevel,
      application_availability: applicationAvailability,
      entry_requirements: entryRequirement,
      remarks,
      pte_overall: PTEOverall,
      pte_no_band: PTENoBands,
      toefl_overall: TOEFLiBTOverall,
      toefl_no_band: TOEFLiBTNoBands,
      ielts_overall: IELTSOverall,
      ielts_no_band: IELTSNoBands,
      custom_test: tests,
      gre_exam_score: GREExamScore,
      gmat_exam_score: GMATExamScore,
      require_documents: courseDocuments,
      about_documents: aboutDocument,
      scholarship_duration: scholarShipDuration,
      scholarship_amount: scholarshipAmount,
      standardized_tests: standardizedTests,
      application_requirements: requirements,
      course_requirements: courseRequirements,
    };
    if (updateIndex === 0 || updateIndex > 0) {
      setCourses((prevCourses) => {
        return prevCourses.map((c, i) => {
          if (updateIndex === i) {
            return {
              ...c,
              ...makeCourse,
            };
          } else {
            return c;
          }
        });
      });
      stateCleanHandler();
      setUpdateIndex("");
      setCourseForm(false);
      return;
    }
    setCourses((prevCourses) => [...prevCourses, makeCourse]);
    stateCleanHandler();
    setUpdateIndex("");
  };

  const handleCancel = () => {
    setCourseForm(false);
    stateCleanHandler();
  };

  // intake months and years formate
  function formateArray(str) {
    if (!str) {
      return [];
    }
    const strType = typeof str;
    if (strType === "string") {
      return str.split(",");
    }
    return str;
  }

  // course edit handler
  const handleEdit = (course, index) => {
    setUpdateIndex(index);
    setCourseForm(true);
    setMonthNames(formateArray(course?.intake_months));
    setYear(formateArray(course?.intake_year));
    setCourseName(course?.course_name);
    setSubjectArea(course?.subject_area);
    setSpecialization(course?.specialize);
    setAvgTimeToReceiveLetter(course?.average_time_acceptance_letter);
    setScholarship(course?.scholarship_available);
    setScholarshipDuration(course?.scholarship_duration);
    setIsInterview(course?.admission_interview);
    setTests(course?.custom_test);
    setCourseDocuments(course?.require_documents);
    setCourseForLevel(course?.course_for);
    setApplicationAvailability(course?.application_availability);
    setDuration(course?.duration);
    setCampus(course?.campus);
    setCourseUrl(course?.course_url);
    setApplicationFee(course?.application_fee);
    setApplicationOfferFee(course?.application_offer_fee);
    setTuitionFee(course?.yearly_tuition_fee);
    setEntryRequirement(course?.entry_requirements);
    setRemarks(course?.remarks);
    setScholarshipAmount(course?.scholarship_amount);
    setPTEOverall(course?.pte_overall);
    setPTENoBands(course?.pte_no_band);
    setTOEFLiBTOverall(course?.toefl_overall);
    setTOEFLiBTNoBands(course?.toefl_no_band);
    setIELTSOverall(course?.ielts_overall);
    setIELTSNoBands(course?.ielts_no_band);
    setGREExamScore(course?.gre_exam_score);
    setGMATExamScore(course?.gmat_exam_score);
    setProgram(course?.program_level);
    setEslOption(course?.esl_elp);
    setAboutDocument(course?.about_documents);
    setDeadline(course?.deadline);
    setStandardizedTests(course?.standardized_tests);
    setRequirements(course?.application_requirements);
    setCourseRequirements(formateArray(course?.course_requirements));
    setCurrency(course?.currency);
  };

  // clean the states
  const stateCleanHandler = () => {
    setMonthNames([]);
    setYear([]);
    setCourseName("");
    setSubjectArea("");
    setSpecialization("");
    setAvgTimeToReceiveLetter("");
    setScholarship("");
    setScholarshipDuration("");
    setIsInterview("");
    setTests([]);
    setCourseDocuments([]);
    setCourseForLevel("");
    setCampus("");
    setDuration("");
    setApplicationAvailability("");
    setCourseUrl("");
    setApplicationFee("");
    setApplicationOfferFee("");
    setTuitionFee("");
    setMinimumTuitionFee("");
    setEntryRequirement("");
    setRemarks("");
    setScholarshipAmount("");
    setPTEOverall("");
    setPTENoBands("");
    setTOEFLiBTOverall("");
    setTOEFLiBTNoBands("");
    setIELTSOverall("");
    setIELTSNoBands("");
    setGREExamScore("");
    setGMATExamScore("");
    setProgram("");
    setEslOption("");
    setAboutDocument("");
    setDeadline(null);
    setStandardizedTests([]);
    setRequirements([]);
    setCourseRequirements([]);
    setCurrency("");
  };

  return (
    <>
      <h1 className="mt-6 mb-4 text-xl font-semibold text-gray-700">
        Add Courses
      </h1>
      {/* saved courses */}
      <SavedCourses
        courses={courses}
        setCourses={setCourses}
        handleEdit={handleEdit}
      />
      {isCourseForm && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
          {/* course general details */}
          <CourseDetails
            courseName={courseName}
            setCourseName={setCourseName}
            subjectArea={subjectArea}
            setSubjectArea={setSubjectArea}
            program={program}
            setProgram={setProgram}
            eslOption={eslOption}
            setEslOption={setEslOption}
            specialization={specialization}
            setSpecialization={setSpecialization}
            monthNames={monthNames}
            setMonthNames={setMonthNames}
            year={year}
            setYear={setYear}
            duration={duration}
            setDuration={setDuration}
            deadline={deadline}
            setDeadline={setDeadline}
            campus={campus}
            setCampus={setCampus}
            courseUrl={courseUrl}
            setCourseUrl={setCourseUrl}
            applicationFee={applicationFee}
            setApplicationFee={setApplicationFee}
            applicationOfferFee={applicationOfferFee}
            setApplicationOfferFee={setApplicationOfferFee}
            tuitionFee={tuitionFee}
            setTuitionFee={setTuitionFee}
            minimumTuitionFee={minimumTuitionFee}
            setMinimumTuitionFee={setMinimumTuitionFee}
            avgTimeToReceiveLetter={avgTimeToReceiveLetter}
            setAvgTimeToReceiveLetter={setAvgTimeToReceiveLetter}
            isInterview={isInterview}
            isScholarship={isScholarship}
            scholarShipDuration={scholarShipDuration}
            scholarshipAmount={scholarshipAmount}
            setScholarshipAmount={setScholarshipAmount}
            courseForLevel={courseForLevel}
            setCourseForLevel={setCourseForLevel}
            setScholarship={setScholarship}
            setScholarshipDuration={setScholarshipDuration}
            setIsInterview={setIsInterview}
            courseRequirements={courseRequirements}
            setCourseRequirements={setCourseRequirements}
            currency={currency}
            setCurrency={setCurrency}
            applicationAvailability={applicationAvailability}
            setApplicationAvailability={setApplicationAvailability}
          />
          <div className="col-span-3">
            <TextArea
              title={"Entry Requirements"}
              placeholder="Write Requirements"
              // // isRequired
              // required
              value={entryRequirement}
              onChange={(e) => setEntryRequirement(e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <TextArea
              title={"Remarks"}
              placeholder="Write Remarks"
              // // isRequired
              // required
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <h1 className="my-4 text-base font-semibold text-gray-700">
              English Proficiency Test Requirements
            </h1>
          </div>
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              title="PTE Overall"
              placeholder="Enter PTE overall score"
              type="number"
              // // isRequired
              // required
              value={PTEOverall}
              onChange={(e) => setPTEOverall(e.target.value)}
            />
            <Input
              title="PTE No Bands Less Than"
              placeholder="Enter score"
              type="number"
              // // isRequired
              // required
              value={PTENoBands}
              onChange={(e) => setPTENoBands(e.target.value)}
            />
            <Input
              title="TOEFL iBT Overall"
              placeholder="Enter score"
              type="number"
              // // isRequired
              // required
              value={TOEFLiBTOverall}
              onChange={(e) => setTOEFLiBTOverall(e.target.value)}
            />
            <Input
              title="TOEFL iBT no Bands Less Than"
              placeholder="Enter score"
              type="number"
              // // isRequired
              // required
              value={TOEFLiBTNoBands}
              onChange={(e) => setTOEFLiBTNoBands(e.target.value)}
            />
            <Input
              title="IELTS Overall"
              placeholder="Enter score"
              type="number"
              // // isRequired
              // required
              value={IELTSOverall}
              onChange={(e) => setIELTSOverall(e.target.value)}
            />
            <Input
              title="IELTS no Band Less Than"
              placeholder="Enter score"
              type="number"
              // // isRequired
              // required
              value={IELTSNoBands}
              onChange={(e) => setIELTSNoBands(e.target.value)}
            />
          </div>
          {/* custom test component */}
          <CustomTest tests={tests} setTests={setTests} />

          <div className="col-span-3">
            <h1 className="mt-6 mb-4 text-base font-semibold text-gray-700">
              Standardized Test Requirements
            </h1>
          </div>
          <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              title="GRE Exam Score"
              placeholder="Enter score"
              type="number"
              // isRequired
              // required
              value={GREExamScore}
              onChange={(e) => setGREExamScore(e.target.value)}
            />
            <Input
              title="GMAT Exam Score"
              placeholder="Enter score"
              type="number"
              // isRequired
              // required
              value={GMATExamScore}
              onChange={(e) => setGMATExamScore(e.target.value)}
            />
          </div>
          {/* standardized custom tests */}
          <StandardizedTest
            standardizedTests={standardizedTests}
            setStandardizedTests={setStandardizedTests}
          />
          {/* application requirements */}
          <ApplicationRequirement
            requirements={requirements}
            setRequirements={setRequirements}
          />

          {/* course documents component */}
          <CourseDocuments
            courseDocuments={courseDocuments}
            setCourseDocuments={setCourseDocuments}
            aboutDocument={aboutDocument}
            setAboutDocument={setAboutDocument}
          />

          <div className="w-fit col-span-3 ml-auto flex items-center gap-4">
            <div
              className="px-4 py-1 text-white bg-gray-500 hover:bg-gray-600 active:scale-95 duration-200 rounded-md cursor-pointer"
              onClick={handleCancel}>
              Cancel
            </div>
            <div
              onClick={handleSaveCourse}
              className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
              Save Course
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setCourseForm(true)}
        className="px-6 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-full">
        Add Course
      </button>
    </>
  );
};

export default memo(AddCourse);
