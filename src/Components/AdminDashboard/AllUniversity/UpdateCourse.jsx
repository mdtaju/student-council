import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCourseUpdateMutation, useGetCourseListForUpdateQuery } from '../../../features/course/courseApi';
import Input from '../../Inputs/Input';
import TextArea from '../../Inputs/TextArea';
import SnackMessage from '../../SnackBarMessage/SnackMessage';
import CourseDetails from "../AddUniversity/AddCourse/CourseDetails";
import CourseDocuments from '../AddUniversity/AddCourse/CourseDocuments';
import CustomTest from '../AddUniversity/AddCourse/CustomTest';
import StandardizedTest from '../AddUniversity/AddCourse/StandardizedTest';
import ApplicationRequirement from '../AddUniversity/ApplicationRequirement/ApplicationRequirement';

function UpdateCourse() {
      const { id } = useParams();
      const { data, refetch } = useGetCourseListForUpdateQuery(id);
      const [courseUpdate] = useCourseUpdateMutation();
      const [courses, setCourses] = useState([]);
      const [isCourseForm, setCourseForm] = useState(false);
      const [loading, setLoading] = useState(false);

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
      console.log(courseDocuments)

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
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });

      useEffect(() => {
            if (data) {
                  setCourseForm(true);
                  setMonthNames(formateArray(data?.intake_months));
                  setYear(formateArray(data?.intake_year));
                  setCourseName(data?.course_name);
                  setSubjectArea(data?.subject_area);
                  setSpecialization(data?.specialize);
                  setAvgTimeToReceiveLetter(data?.average_time_acceptance_letter);
                  setScholarship(data?.scholarship_available);
                  setScholarshipDuration(data?.scholarship_duration);
                  setIsInterview(data?.admission_interview);
                  setTests(data?.custom_test);
                  setCourseDocuments(data?.require_documents);
                  setCourseForLevel(data?.course_for);
                  setApplicationAvailability(data?.application_availability);
                  setDuration(data?.duration);
                  setCampus(data?.campus);
                  setCourseUrl(data?.course_url);
                  setApplicationFee(data?.application_fee);
                  setApplicationOfferFee(data?.application_offer_fee);
                  setTuitionFee(data?.yearly_tuition_fee);
                  setEntryRequirement(data?.entry_requirements);
                  setRemarks(data?.remarks);
                  setScholarshipAmount(data?.scholarship_amount);
                  setPTEOverall(data?.pte_overall);
                  setPTENoBands(data?.pte_no_band);
                  setTOEFLiBTOverall(data?.toefl_overall);
                  setTOEFLiBTNoBands(data?.toefl_no_band);
                  setIELTSOverall(data?.ielts_overall);
                  setIELTSNoBands(data?.ielts_no_band);
                  setGREExamScore(data?.gre_exam_score);
                  setGMATExamScore(data?.gmat_exam_score);
                  setProgram(data?.program_level);
                  setEslOption(data?.esl_elp);
                  setAboutDocument(data?.about_documents);
                  setDeadline(data?.deadline);
                  setStandardizedTests(data?.standardized_tests);
                  setRequirements(data?.application_requirements);
                  setCourseRequirements(formateArray(data?.course_requirements));
                  setCurrency(data?.currency);
            }
      }, [data])



      const handleSaveCourse = () => {
            setLoading(true);
            const formData = new FormData();

            formData.append("id", data?.id);
            formData.append("query_id", data?.query_id);
            formData.append("course_name", courseName);
            formData.append("subject_area", subjectArea);
            formData.append("program_level", program);
            formData.append("esl_elp", eslOption);
            formData.append("specialize", specialization);
            formData.append("intake_months", monthNames);
            formData.append("intake_year", year);
            formData.append("duration", duration);
            formData.append("deadline", deadline);
            formData.append("campus", campus);
            formData.append("course_url", courseUrl);
            formData.append("currency", currency);
            formData.append("application_fee", applicationFee);
            formData.append("application_offer_fee", applicationOfferFee);
            formData.append("yearly_tuition_fee", tuitionFee);
            formData.append("minimum_tuition_fee", minimumTuitionFee);
            formData.append("average_time_acceptance_letter", avgTimeToReceiveLetter);
            formData.append("admission_interview", isInterview);
            formData.append("scholarship_available", isScholarship);
            formData.append("course_for", courseForLevel);
            formData.append("application_availability", applicationAvailability);
            formData.append("entry_requirements", entryRequirement);
            formData.append("remarks", remarks);
            formData.append("pte_overall", PTEOverall);
            formData.append("pte_no_band", PTENoBands);
            formData.append("toefl_overall", TOEFLiBTOverall);
            formData.append("toefl_no_band", TOEFLiBTNoBands);
            formData.append("ielts_overall", IELTSOverall);
            formData.append("ielts_no_band", IELTSNoBands);
            formData.append("custom_test", JSON.stringify(tests));
            formData.append("gre_exam_score", GREExamScore);
            formData.append("gmat_exam_score", GMATExamScore);
            formData.append("require_documents", JSON.stringify(courseDocuments));
            formData.append("about_documents", aboutDocument);
            formData.append("scholarship_duration", scholarShipDuration);
            formData.append("scholarship_amount", scholarshipAmount);
            formData.append("standardized_tests", JSON.stringify(standardizedTests));
            formData.append("application_requirements", JSON.stringify(requirements));
            formData.append("course_requirements", courseRequirements);

            if (courseDocuments.length > 0) {
                  courseDocuments.forEach((doc) => {
                        formData.append("files", doc);
                  })
            }

            courseUpdate(formData).unwrap().then((d) => {
                  setMessage({
                        error: false,
                        message: "Course Successfully Updated.",
                  });
                  setOpen(true);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  refetch(id)
                  setLoading(false);
            }).catch((c) => {
                  setMessage({
                        error: false,
                        message: "Something went wrong. Please, try again.",
                  });
                  setOpen(true);
                  setLoading(false)
            })
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
            <div className="w-full min-h-screen grid place-items-center">
                  <SnackMessage open={open} setOpen={setOpen} message={message} />
                  <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-[400px] sm:w-[600px] md:w-[960px]">
                        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-10">
                              Edit Course
                        </h1>
                        <div className='mt-4 space-y-4'>
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
                              <button
                                    disabled={loading}
                                    onClick={() => handleSaveCourse()}
                                    className={`w-full px-4 py-2 ${loading
                                          ? "bg-gray-200 hover:bg-gray-300 cursor-wait"
                                          : "bg-blue-500 hover:bg-blue-600"
                                          } active:scale-95 duration-200 text-white font-medium rounded-md mt-6`}>
                                    {loading ? <CircularProgress size={22} /> : "Submit"}
                              </button>
                        </div>
                  </div>
            </div>
      )
}

export default UpdateCourse