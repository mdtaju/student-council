import { Container } from '@mui/material';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { BiUpArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import TextArea from '../../Components/Inputs/TextArea';
import SnackMessage from '../../Components/SnackBarMessage/SnackMessage';
import TestScores from '../../Components/StudentDashboard/StudentProfile/TestScores/TestScores';
import { useAddAssessmentMutation, useGetSingleAssessmentQuery } from '../../features/student/studentApi';
import useAuth from '../../hooks/useAuth';
import ApplicationDetails from './ApplicationDetails';
import EducationHistory from './Education/EducationHistory';
import GeneralInfo from './GeneralInfo';
import ImmigrationHistory from './Immigration/ImmigrationHistory';
import JobDetails from './Job/JobDetails';
import ReferenceDetails from './ReferenceDetails';
import SpecialTestScore from './SpecialTestScore';
import UploadFile from './UploadFile';

const FreeAssessment = () => {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    error: false,
  });

  const { data: assessment_data, refetch } = useGetSingleAssessmentQuery(auth?.id);
  const [addAssessment] = useAddAssessmentMutation();
  // const [updateStudentFrom] = useUpdateStudentFormMutation();

  //  file upload state
  const [uploadedFile, setUploadedFile] = useState(null);
  const [profileImgLink, setProfileImgLink] = useState("");
  // General information states
  const [firstName, setFirstName] = useState(""); // required
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState(""); // required
  const [birthDate, setBirthDate] = useState(null); // required
  const [maritalStatus, setMaritalStatus] = useState(""); // required
  const [gender, setGender] = useState(""); // required
  const [address, setAddress] = useState(""); // required
  const [city, setCity] = useState(""); // required
  const [country, setCountry] = useState(""); // required
  const [state, setState] = useState(""); // required
  const [zipCode, setZipCode] = useState(""); // required
  const [emails, setEmails] = useState(['']); // required

  const [AddressStatus, setAddressStatus] = useState("")

  /* new added  */
  const [placeOfBirth, setPlaceOfBirth] = useState(""); // required
  const [passportStatus, setPassportStatus] = useState(""); // required
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const [uploadedPhoneNumbers, setUploadedPhoneNumbers] = useState([]);
  const [whatsappNumbers, setWhatsappNumbers] = useState(['']);

  // Reference  Details
  const [referencesHistoryType, setReferencesHistoryType] = useState("")
  const [referenceName, setReferenceName] = useState("")
  const [referenceAddress, setReferenceAddress] = useState("")
  const [referenceMobile, setReferenceMobile] = useState("")
  const [referenceComment, setReferenceComment] = useState('')

  // Attended school states
  const [attendSchools, setAttendSchools] = useState([]);
  const [educationHistory, setEducationHistory] = useState([]);
  const [jobHistory, setJobHistory] = useState([]);
  // test scores
  const [engExamType, setEngExamType] = useState(""); // required
  const [engExamDate, setEngExamDate] = useState(null); // required with condition
  const [engListening, setEngListening] = useState(""); // required with condition
  const [engReading, setEngReading] = useState(""); // required with condition
  const [engWriting, setEngWriting] = useState(""); // required with condition
  const [engSpecking, setEngSpecking] = useState(""); // required with condition
  const [engOverall, setEngOverall] = useState(""); // required with condition

  const [specialExamsType, setSpecialExamsType] = useState("")
  const [specialExamOtherDetails, setSpecialExamOtherDetails] = useState('')
  const [selectSpecialExamType, setSelectSpecialExamType] = useState('')
  const [specialExamScore, setSpecialExamScore] = useState("")

  const [otherTestName, setOtherTestName] = useState(""); // required with condition
  const [otherTestScore, setOtherTestScore] = useState(""); // required with condition
  const [otherDetails, setOtherDetails] = useState(""); // required with condition

  // apply details
  const [applyDate, setApplyDate] = useState(null)
  const [applyCourse, setApplyCourse] = useState('')
  const [applyCountry, setApplyCountry] = useState("")

  // Immigration Details
  const [immigrationHistory, setImmigrationHistory] = useState([]);

  // Special Comments 
  const [specialComments, setSpecialComments] = useState("")

  // Terms and condition checked
  const [isChecked, setIsChecked] = useState(false);

  const [termsData, setTermsData] = useState({
    termsAndConditions: false,
  });

  // set the data 
  useEffect(() => {
    if (assessment_data) {
      setFirstName(assessment_data?.generalInfo?.first_name)
      setMiddleName(assessment_data?.generalInfo?.middle_name)
      setLastName(assessment_data?.generalInfo?.last_name)
      setBirthDate(moment.utc(assessment_data?.generalInfo?.date_of_birth))
      setMaritalStatus(assessment_data?.generalInfo?.marital_status)
      setGender(assessment_data?.generalInfo?.gender)
      setPlaceOfBirth(assessment_data?.generalInfo?.place_of_birth);
      setPassportStatus(assessment_data?.generalInfo?.passport_status);
      setAddress(assessment_data?.contactDetails?.address);
      setCity(assessment_data?.contactDetails?.city);
      setCountry(assessment_data?.contactDetails?.country);
      setState(assessment_data?.contactDetails?.state);
      setZipCode(assessment_data?.contactDetails?.zip_code);
      setAddressStatus(assessment_data?.contactDetails?.address_type);
      setReferencesHistoryType(assessment_data?.referenceDetails?.assessment_type);
      setReferenceName(assessment_data?.referenceDetails?.refer_name);
      setReferenceAddress(assessment_data?.referenceDetails?.refer_address);
      setReferenceMobile(assessment_data?.referenceDetails?.refer_phone);
      setReferenceComment(assessment_data?.referenceDetails?.comment);
    }
  }, [assessment_data])

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev); // Update the local state

    setTermsData((prevData) => ({
      ...prevData,
      termsAndConditions: !prevData.termsAndConditions, // Update the form data
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsData?.termsAndConditions) {
      return alert("You must agree with our terms and conditions");
    }
    if (!uploadedFile) {
      return alert("You must add profile image.");
    }

    const formData = new FormData();

    formData.append("file", uploadedFile);
    formData.append("query_id", auth?.id);
    // personal info
    formData.append("first_name", firstName);
    formData.append("middle_name", middleName);
    formData.append("last_name", lastName);
    formData.append("date_of_birth", birthDate);
    formData.append("place_of_birth", placeOfBirth);
    formData.append("marital_status", maritalStatus);
    formData.append("gender", gender);
    formData.append("passport_status", passportStatus);


    /* Reference Details */
    formData.append("reference_type", referencesHistoryType);
    formData.append("reference_name", referenceName);
    formData.append("reference_address", referenceAddress);
    formData.append("reference_mobile", referenceMobile);
    formData.append("reference_comment", referenceComment);


    // Address details
    formData.append("address", address);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("zip_code", zipCode);
    formData.append("emails", JSON.stringify(emails));
    formData.append("Phone_Numbers", JSON.stringify(phoneNumbers));
    formData.append("Whatsapp_Numbers", JSON.stringify(whatsappNumbers));
    formData.append("address_status", AddressStatus);

    // Educational info
    formData.append("educational_history", JSON.stringify(educationHistory));

    // test scores
    formData.append("english_exam_type", engExamType);
    formData.append("date_of_exam", engExamDate);
    formData.append("listening", engListening);
    formData.append("reading", engReading);
    formData.append("writing", engWriting);
    formData.append("specking", engSpecking);
    formData.append("overall", engOverall);

    formData.append("other_test_name", otherTestName);
    formData.append("other_test_score", otherTestScore);
    formData.append("other_details", otherDetails);

    formData.append("special_exam_types", specialExamsType);
    formData.append("special_exam_other_details", specialExamOtherDetails);
    formData.append("select_special_exam_type", selectSpecialExamType);
    formData.append("special_exam_score", specialExamScore);

    //  Application Details
    const getCountriesForApply = applyCountry.map((item) => item.label);
    formData.append("education_country", getCountriesForApply.join());
    formData.append("apply_date", applyDate);
    formData.append("apply_course", applyCourse);

    //  immigration Details 
    formData.append("immigration_history", JSON.stringify(immigrationHistory));

    // job  info
    formData.append("Job_History", JSON.stringify(jobHistory));

    // special comment
    formData.append("comment", JSON.stringify(specialComments));


    // find the removed passport files as array
    function findMissingObjectsByUniqueId(firstArray, secondArray) {
      const firstIds = new Set(firstArray?.map((obj) => obj?.id));
      const secondIds = new Set(secondArray?.map((obj) => obj?.id));

      // Find missing objects in the second array
      const missingIds = [...firstIds]?.filter((id) => !secondIds.has(id));
      const missingObjects = firstArray?.filter((obj) =>
        missingIds.includes(obj?.id)
      );

      return missingObjects;
    }

    if (attendSchools.length > 0) {
      const firstSchoolArray = assessment_data?.school_attend;
      const secondSchoolArray = attendSchools;

      const missingSchools = findMissingObjectsByUniqueId(
        firstSchoolArray,
        secondSchoolArray
      );

      formData.append("missingSchools", JSON.stringify(missingSchools));
    }

    const getNewSchools = attendSchools.filter((school) => !school?.id);

    if (getNewSchools?.length > 0) {
      formData.append("newSchools", JSON.stringify(getNewSchools));
    }

    if (!assessment_data) {
      addAssessment(formData)
        .unwrap()
        .then((d) => {
          refetch(auth?.id);
          setMessage({ message: d?.message, error: false });
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          setOpen(true);
        })
        .catch((e) => {
          setMessage({
            message: "Something went wrong. Please try again.",
            error: true,
          });
          setOpen(true)
        });
      return;
    }
    // else {
    //   updateStudentFrom(formData)
    //     .unwrap()
    //     .then((d) => {
    //       refetch(auth?.id);
    //       setMessage({ message: d?.message, error: false });
    //       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //       setOpen(true);
    //     })
    //     .catch((e) => {
    //       setMessage({
    //         message: "Something went wrong. Please try again.",
    //         error: true,
    //       });
    //       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //     });
    //   return;



    // }
  };
  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className='mb-16'>
        <Container>
          <SnackMessage open={open} setOpen={setOpen} message={message} />
          <div className="w-full min-h-screen">
            {
              assessment_data ?
                <div className='w-full min-h-screen grid place-items-center p-4'>
                  <div className={`px-2 py-1 ${assessment_data?.actions?.lead_status === "Lead" ? "bg-yellow-200" : "bg-green-200"} rounded-md text-sm font-medium text-center`}>
                    {
                      assessment_data?.actions?.lead_status === "Lead" ?
                        <>
                          <p>Your data has been successfully submitted.</p>
                          <p>Please, wait for approval.</p>
                        </> :
                        <>
                          <p>Your data has been approved.</p>
                          <p>To access your dashboard please logout your account and login again.</p>
                        </>
                    }
                  </div>
                </div>
                :
                <form onSubmit={handleSubmit}>
                  <UploadFile
                    uploadedFile={uploadedFile}
                    setUploadedFile={setUploadedFile}
                  />
                  <GeneralInfo
                    firstName={firstName}
                    setFirstName={setFirstName}
                    middleName={middleName}
                    setMiddleName={setMiddleName}
                    lastName={lastName}
                    setLastName={setLastName}

                    placeOfBirth={placeOfBirth}
                    setPlaceOfBirth={setPlaceOfBirth}
                    passportStatus={passportStatus}
                    setPassportStatus={setPassportStatus}
                    phoneNumbers={phoneNumbers}
                    setPhoneNumbers={setPhoneNumbers}
                    whatsappNumbers={whatsappNumbers}
                    setWhatsappNumbers={setWhatsappNumbers}

                    birthDate={birthDate}
                    setBirthDate={setBirthDate}
                    maritalStatus={maritalStatus}
                    setMaritalStatus={setMaritalStatus}
                    gender={gender}
                    setGender={setGender}
                    address={address}
                    setAddress={setAddress}
                    city={city}
                    setCity={setCity}
                    country={country}
                    setCountry={setCountry}
                    state={state}
                    setState={setState}
                    zipCode={zipCode}
                    setZipCode={setZipCode}
                    emails={emails}
                    setEmails={setEmails}

                    AddressStatus={AddressStatus}
                    setAddressStatus={setAddressStatus}
                  />



                  {/* References Details */}
                  <ReferenceDetails
                    referencesHistoryType={referencesHistoryType}
                    setReferencesHistoryType={setReferencesHistoryType}

                    referenceName={referenceName}
                    setReferenceName={setReferenceName}

                    referenceAddress={referenceAddress}
                    setReferenceAddress={setReferenceAddress}

                    referenceMobile={referenceMobile}
                    setReferenceMobile={setReferenceMobile}

                    referenceComment={referenceComment}
                    setReferenceComment={setReferenceComment}
                  />

                  <EducationHistory
                    attendSchools={educationHistory}
                    setAttendSchools={setEducationHistory}
                  />

                  <TestScores
                    engExamType={engExamType}
                    setEngExamType={setEngExamType}
                    engExamDate={engExamDate}
                    setEngExamDate={setEngExamDate}
                    engListening={engListening}
                    setEngListening={setEngListening}
                    engReading={engReading}
                    setEngReading={setEngReading}
                    engWriting={engWriting}
                    setEngWriting={setEngWriting}
                    engSpecking={engSpecking}
                    setEngSpecking={setEngSpecking}
                    engOverall={engOverall}
                    setEngOverall={setEngOverall}

                    otherTestName={otherTestName}
                    setOtherTestName={setOtherTestName}
                    otherTestScore={otherTestScore}
                    setOtherTestScore={setOtherTestScore}
                    otherDetails={otherDetails}
                    setOtherDetails={setOtherDetails}
                  />

                  <SpecialTestScore
                    specialExamsType={specialExamsType}
                    setSpecialExamsType={setSpecialExamsType}
                    specialExamOtherDetails={specialExamOtherDetails}
                    setSpecialExamOtherDetails={setSpecialExamOtherDetails}
                    selectSpecialExamType={selectSpecialExamType}
                    setSelectSpecialExamType={setSelectSpecialExamType}
                    specialExamScore={specialExamScore}
                    setSpecialExamScore={setSpecialExamScore}
                  />

                  <ApplicationDetails
                    applyCountry={applyCountry}
                    setApplyCountry={setApplyCountry}
                    applyDate={applyDate}
                    setApplyDate={setApplyDate}
                    applyCourse={applyCourse}
                    setApplyCourse={setApplyCourse}

                  />



                  <ImmigrationHistory
                    attendSchools={immigrationHistory}
                    setAttendSchools={setImmigrationHistory}
                  />


                  <JobDetails
                    attendSchools={jobHistory}
                    setAttendSchools={setJobHistory}
                  />



                  <div className='bg-white px-5 py-8 my-4 shadow-lg rounded-lg mb-20'>
                    {/* Comment Box here */}

                    <TextArea
                      title={"Comment Box"}
                      placeholder="If You Have Any Special Notes, Please leave Your Comments Here"
                      type="text"
                      value={specialComments}
                      onChange={(e) => setSpecialComments(e.target.value)}
                    />


                    {/* terms and condition button  */}
                    <div className="flex items-center justify-center mt-5">
                      <input
                        type="checkbox"
                        id="termsAndConditions"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={isChecked}
                        onChange={() => handleCheckboxChange((prevS) => !prevS)}
                      />
                      <label htmlFor="termsAndConditions" className="ml-2 text-black text-xl">
                        I agree to the <Link target='_blank' to="/terms_condition" className='font-bold'>terms and conditions</Link>
                      </label>
                    </div>
                  </div>

                  {/* <UploadDocuments /> */}
                  <div className="fixed bottom-0 left-1/2 z-20 bg-white bg-opacity-60 w-[250px] h-auto rounded-full p-4 flex items-center gap-4">
                    <button
                      type="submit"
                      // onClick={() => handleSubmit()}
                      className="px-8 py-2 text-lg font-normal text-white rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200">
                      Submit
                    </button>
                    <div
                      onClick={handleTop}
                      className="w-[40px] h-[40px] text-2xl font-normal text-white rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 grid place-items-center cursor-pointer">
                      <BiUpArrowAlt />
                    </div>
                  </div>
                </form>
            }
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FreeAssessment;