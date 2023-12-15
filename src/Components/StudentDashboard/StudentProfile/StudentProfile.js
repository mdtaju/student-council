import { PDFDownloadLink } from "@react-pdf/renderer";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import {
  useAddStudentFormMutation,
  useGetStudentFormQuery,
  useUpdateStudentFormMutation,
} from "../../../features/student/studentApi";
import useAuth from "../../../hooks/useAuth";
import AdditionalQuali from "./AdditionalQuali/AdditionalQuali";
// import Application from "./Application/Application";
import BackgroundInfo from "./BackgroundInfo/BackgroundInfo";
import BottomBlog from "./BottomBlog/BottomBlog";
import EducationInfo from "./EducationInfo/EducationInfo";
import SchoolsAttended from "./EducationInfo/SchoolsAttended/SchoolsAttended";
// import MenuTab from "./MenuTab/MenuTab";
import PDFMaker from "./PDFMaker/PDFMaker";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfileStepper from "./ProfileStepper";
// import SearchAndApply from "./SearchAndApply/SearchAndApply";
import TestScores from "./TestScores/TestScores";
// import TopArea from "./TopArea.js/TopArea";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import Layout from "./Layout.js/Layout";

const StudentProfile = () => {
  // auth
  const auth = useAuth();
  // api request state
  const [addStudentForm] = useAddStudentFormMutation();
  const [updateStudentFrom] = useUpdateStudentFormMutation();
  const { data: student_form_data, refetch } = useGetStudentFormQuery(auth?.id);
  const [passportFiles, setPassportFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    error: false,
  });
  // personal information states
  const [passport, setPassport] = useState([]); // required
  const [firstName, setFirstName] = useState(""); // required
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState(""); // required
  const [birthDate, setBirthDate] = useState(null); // required
  const [firstLanguage, setFirstLanguage] = useState(""); // required
  const [citizenship, setCitizenship] = useState(""); // required
  const [passportNum, setPassportNum] = useState(""); // required
  const [passportExpDate, setPassportExpDate] = useState(null); // required
  const [maritalStatus, setMaritalStatus] = useState(""); // required
  const [gender, setGender] = useState(""); // required
  const [address, setAddress] = useState(""); // required
  const [city, setCity] = useState(""); // required
  const [country, setCountry] = useState(""); // required
  const [state, setState] = useState(""); // required
  const [zipCode, setZipCode] = useState(""); // required
  const [email, setEmail] = useState(""); // required
  const [phone, setPhone] = useState(""); // required

  // education information states
  const [educationCountry, setEducationCountry] = useState(""); // required
  const [levelOfEdu, setLevelOfEdu] = useState(""); // required
  const [grade, setGrade] = useState(""); // required
  const [gradeAva, setGradeAva] = useState(""); // required
  const [graduatedFrom, setGraduatedFrom] = useState(false);

  // Attended school states
  const [attendSchools, setAttendSchools] = useState([]);

  // test scores
  const [engExamType, setEngExamType] = useState(""); // required
  const [engExamDate, setEngExamDate] = useState(null); // required with condition
  const [engListening, setEngListening] = useState(""); // required with condition
  const [engReading, setEngReading] = useState(""); // required with condition
  const [engWriting, setEngWriting] = useState(""); // required with condition
  const [engSpecking, setEngSpecking] = useState(""); // required with condition
  const [engOverall, setEngOverall] = useState(""); // required with condition

  // additional qualification
  const [isGREExam, setIsGREExam] = useState(false);
  const [greExamDate, setGREExamDate] = useState(null); // required with condition
  const [greVerbalScore, setGREVerbalScore] = useState("");
  const [greVerbalRank, setGREVerbalRank] = useState("");
  const [greQuantitativeScore, setGREQuantitativeScore] = useState("");
  const [greQuantitativeRank, setGREQuantitativeRank] = useState("");
  const [greWritingScore, setGREWritingScore] = useState("");
  const [greWritingRank, setGREWritingRank] = useState("");
  // GMAT
  const [isGMATExam, setIsGMATExam] = useState(false);
  const [GMATExamDate, setGMATExamDate] = useState(null); // required with condition
  const [GMATVerbalScore, setGMATVerbalScore] = useState("");
  const [GMATVerbalRank, setGMATVerbalRank] = useState("");
  const [GMATQuantitativeScore, setGMATQuantitativeScore] = useState("");
  const [GMATQuantitativeRank, setGMATQuantitativeRank] = useState("");
  const [GMATWritingScore, setGMATWritingScore] = useState("");
  const [GMATWritingRank, setGMATWritingRank] = useState("");
  const [GMATTotalScore, setGMATTotalScore] = useState("");
  const [GMATTotalRank, setGMATTotalRank] = useState("");

  // background information
  const [isRefusedVisa, setIsRefusedVisa] = useState("No"); // required
  const [studyPermitVisa, setStudyPermitVisa] = useState([]);
  const [refusedVisaAns, setRefusedVisaAns] = useState(""); // required with condition
  // pdf component
  const [PDFComponent, setPdfComponent] = useState("");

  // progress timeline  state
  const [progressRate, setProgressRate] = useState(0);

  // set input default values from server data
  useEffect(() => {
    if (student_form_data) {
      setPassportFiles(student_form_data?.passport_files);
      setFirstName(student_form_data?.personal_info?.first_name);
      setMiddleName(student_form_data?.personal_info?.middle_name);
      setLastName(student_form_data?.personal_info?.last_name);
      setBirthDate(moment.utc(student_form_data?.personal_info?.date_of_birth));
      setFirstLanguage(student_form_data?.personal_info?.first_language);
      setCitizenship(student_form_data?.personal_info?.country_of_citizenship);
      setPassportNum(+student_form_data?.personal_info?.passport_number);
      setPassportExpDate(
        moment.utc(student_form_data?.personal_info?.passport_expiry_date)
      );
      setMaritalStatus(student_form_data?.personal_info?.marital_status);
      setGender(student_form_data?.personal_info?.gender);
      setAddress(student_form_data?.personal_info?.address);
      setCity(student_form_data?.personal_info?.city);
      setCountry(student_form_data?.personal_info?.country);
      setState(student_form_data?.personal_info?.state);
      setZipCode(student_form_data?.personal_info?.zip_code);
      setEmail(student_form_data?.personal_info?.email);
      setPhone(+student_form_data?.personal_info?.phone);
      // education summary
      setEducationCountry(
        student_form_data?.education_info?.country_of_education
      );
      setLevelOfEdu(
        student_form_data?.education_info?.highest_level_of_education
      );
      setGrade(student_form_data?.education_info?.grading_scheme);
      setGradeAva(+student_form_data?.education_info?.grade_average);
      setGraduatedFrom(
        student_form_data?.education_info?.graduated_from_recent_school ===
          "true"
      );
      // attend schools
      setAttendSchools(student_form_data?.school_attend);
      // test score
      setEngExamType(student_form_data?.test_score?.english_exam_type);
      setEngExamDate(moment.utc(student_form_data?.test_score?.date_of_exam));
      setEngListening(+student_form_data?.test_score?.listening);
      setEngReading(+student_form_data?.test_score?.reading);
      setEngWriting(+student_form_data?.test_score?.writing);
      setEngSpecking(+student_form_data?.test_score?.specking);
      setEngOverall(+student_form_data?.test_score?.overall);
      // additional qualification
      setIsGREExam(
        student_form_data?.additional_qualification?.is_gre_exam === "true"
      );
      setGREExamDate(
        moment.utc(student_form_data?.additional_qualification?.gre_exam_date)
      );
      setGREVerbalScore(
        +student_form_data?.additional_qualification?.gre_verbal_score
      );
      setGREVerbalRank(
        +student_form_data?.additional_qualification?.gre_verbal_rank
      );
      setGREQuantitativeScore(
        +student_form_data?.additional_qualification?.gre_quantitative_score
      );
      setGREQuantitativeRank(
        +student_form_data?.additional_qualification?.gre_quantitative_rank
      );
      setGREWritingScore(
        +student_form_data?.additional_qualification?.gre_writing_score
      );
      setGREWritingRank(
        +student_form_data?.additional_qualification?.gre_writing_rank
      );
      setIsGMATExam(
        student_form_data?.additional_qualification?.is_gmat_exam === "true"
      );
      setGMATExamDate(
        moment.utc(student_form_data?.additional_qualification?.gmat_exam_date)
      );
      setGMATVerbalScore(
        +student_form_data?.additional_qualification?.gmat_verbal_score
      );
      setGMATVerbalRank(
        +student_form_data?.additional_qualification?.gmat_verbal_rank
      );
      setGMATQuantitativeScore(
        +student_form_data?.additional_qualification?.gmat_quantitative_score
      );
      setGMATQuantitativeRank(
        +student_form_data?.additional_qualification?.gmat_quantitative_rank
      );
      setGMATWritingScore(
        +student_form_data?.additional_qualification?.gmat_writing_score
      );
      setGMATWritingRank(
        +student_form_data?.additional_qualification?.gmat_writing_rank
      );
      setGMATTotalScore(
        +student_form_data?.additional_qualification?.gmat_total_score
      );
      setGMATTotalRank(
        +student_form_data?.additional_qualification?.gmat_total_rank
      );
      // background info
      setIsRefusedVisa(student_form_data?.background_info?.refused_visa);
      const visaArray =
        student_form_data?.background_info?.visa_question_ans?.split(",");
      setStudyPermitVisa(visaArray);
      setRefusedVisaAns(student_form_data?.background_info?.visa_details);
      // pdf maker
      setPdfComponent(
        <button className="text-xs font-medium px-3 py-1 bg-green-500 hover:bg-green-600 active:scale-95 duration-200 text-white rounded-md">
          <PDFDownloadLink
            document={<PDFMaker studentData={student_form_data} />}
            fileName={student_form_data?.personal_info?.query_id}>
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </button>
      );
      setProgressRate(100);
    }
  }, [student_form_data]);



  
  // data send form submit to database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // personal info
    for (let i = 0; i < passport.length; i++) {
      formData.append("files", passport[i]);
    }
    formData.append("first_name", firstName);
    formData.append("middle_name", middleName);
    formData.append("last_name", lastName);
    formData.append("date_of_birth", birthDate);
    formData.append("first_language", firstLanguage);
    formData.append("country_of_citizenship", citizenship);
    formData.append("passport_number", passportNum);
    formData.append("passport_expiry_date", passportExpDate);
    formData.append("marital_status", maritalStatus);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("zip_code", zipCode);
    formData.append("email", email);
    formData.append("phone", phone);
    // education info
    formData.append("country_of_education", educationCountry);
    formData.append("highest_level_of_education", levelOfEdu);
    formData.append("grading_scheme", grade);
    formData.append("grade_average", gradeAva);
    formData.append("graduated_from_recent_school", graduatedFrom);

    // school attend
    formData.append("attended_schools", JSON.stringify(attendSchools));

    // test scores
    formData.append("english_exam_type", engExamType);
    formData.append("date_of_exam", engExamDate);
    formData.append("listening", engListening);
    formData.append("reading", engReading);
    formData.append("writing", engWriting);
    formData.append("specking", engSpecking);
    formData.append("overall", engOverall);
    // additional qualification
    formData.append("is_gre_exam", isGREExam);
    formData.append("gre_exam_date", greExamDate);
    formData.append("gre_verbal_score", greVerbalScore);
    formData.append("gre_verbal_rank", greVerbalRank);
    formData.append("gre_quantitative_score", greQuantitativeScore);
    formData.append("gre_quantitative_rank", greQuantitativeRank);
    formData.append("gre_writing_score", greWritingScore);
    formData.append("gre_writing_rank", greWritingRank);
    formData.append("is_gmat_exam", isGMATExam);
    formData.append("gmat_exam_date", GMATExamDate);
    formData.append("gmat_verbal_score", GMATVerbalScore);
    formData.append("gmat_verbal_rank", GMATVerbalRank);
    formData.append("gmat_quantitative_score", GMATQuantitativeScore);
    formData.append("gmat_quantitative_rank", GMATQuantitativeRank);
    formData.append("gmat_writing_score", GMATWritingScore);
    formData.append("gmat_writing_rank", GMATWritingRank);
    formData.append("gmat_total_score", GMATTotalScore);
    formData.append("gmat_total_rank", GMATTotalRank);
    // background info
    formData.append("refused_visa", isRefusedVisa);
    formData.append("visa_question_ans", JSON.stringify(studyPermitVisa));
    formData.append("visa_details", refusedVisaAns);
    formData.append("query_id", auth?.id);

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

    if (passportFiles.length > 0) {
      const firstArray = student_form_data?.passport_files;
      const secondArray = passportFiles;

      const missingObjectsArray = findMissingObjectsByUniqueId(
        firstArray,
        secondArray
      );
      formData.append("missingPassport", JSON.stringify(missingObjectsArray));
    }

    if (attendSchools.length > 0) {
      const firstSchoolArray = student_form_data?.school_attend;
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

    if (!student_form_data) {
      addStudentForm(formData)
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
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
      return;
    } else {
      updateStudentFrom(formData)
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
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
      return;
    }
  };

  return (
    <Layout>
      {PDFComponent && PDFComponent}
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <div className="w-full min-h-full">
        <ProfileStepper progressRate={progressRate} />
        <form onSubmit={handleSubmit}>
          <PersonalInfo
            passportFiles={passportFiles}
            setPassportFiles={setPassportFiles}
            personalInfo={student_form_data?.personal_info}
            passport={passport}
            setPassport={setPassport}
            firstName={firstName}
            setFirstName={setFirstName}
            middleName={middleName}
            setMiddleName={setMiddleName}
            lastName={lastName}
            setLastName={setLastName}
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            firstLanguage={firstLanguage}
            setFirstLanguage={setFirstLanguage}
            citizenship={citizenship}
            setCitizenship={setCitizenship}
            passportNum={passportNum}
            setPassportNum={setPassportNum}
            passportExpDate={passportExpDate}
            setPassportExpDate={setPassportExpDate}
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
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
          <EducationInfo
            educationCountry={educationCountry}
            setEducationCountry={setEducationCountry}
            levelOfEdu={levelOfEdu}
            setLevelOfEdu={setLevelOfEdu}
            grade={grade}
            setGrade={setGrade}
            gradeAva={gradeAva}
            setGradeAva={setGradeAva}
            graduatedFrom={graduatedFrom}
            setGraduatedFrom={setGraduatedFrom}
          />
          <SchoolsAttended
            attendSchools={attendSchools}
            setAttendSchools={setAttendSchools}
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
          />
          <AdditionalQuali
            isGREExam={isGREExam}
            setIsGREExam={setIsGREExam}
            greExamDate={greExamDate}
            setGREExamDate={setGREExamDate}
            greVerbalScore={greVerbalScore}
            setGREVerbalScore={setGREVerbalScore}
            greVerbalRank={greVerbalRank}
            setGREVerbalRank={setGREVerbalRank}
            greQuantitativeScore={greQuantitativeScore}
            setGREQuantitativeScore={setGREQuantitativeScore}
            greQuantitativeRank={greQuantitativeRank}
            setGREQuantitativeRank={setGREQuantitativeRank}
            greWritingScore={greWritingScore}
            setGREWritingScore={setGREWritingScore}
            greWritingRank={greWritingRank}
            setGREWritingRank={setGREWritingRank}
            // GMAT
            isGMATExam={isGMATExam}
            setIsGMATExam={setIsGMATExam}
            GMATExamDate={GMATExamDate}
            setGMATExamDate={setGMATExamDate}
            GMATVerbalScore={GMATVerbalScore}
            setGMATVerbalScore={setGMATVerbalScore}
            GMATVerbalRank={GMATVerbalRank}
            setGMATVerbalRank={setGMATVerbalRank}
            GMATQuantitativeScore={GMATQuantitativeScore}
            setGMATQuantitativeScore={setGMATQuantitativeScore}
            GMATQuantitativeRank={GMATQuantitativeRank}
            setGMATQuantitativeRank={setGMATQuantitativeRank}
            GMATWritingScore={GMATWritingScore}
            setGMATWritingScore={setGMATWritingScore}
            GMATWritingRank={GMATWritingRank}
            setGMATWritingRank={setGMATWritingRank}
            GMATTotalScore={GMATTotalScore}
            setGMATTotalScore={setGMATTotalScore}
            GMATTotalRank={GMATTotalRank}
            setGMATTotalRank={setGMATTotalRank}
          />
          <BackgroundInfo
            isRefusedVisa={isRefusedVisa}
            setIsRefusedVisa={setIsRefusedVisa}
            studyPermitVisa={studyPermitVisa}
            setStudyPermitVisa={setStudyPermitVisa}
            refusedVisaAns={refusedVisaAns}
            setRefusedVisaAns={setRefusedVisaAns}
          />
          {/* <UploadDocuments /> */}
          <BottomBlog />
        </form>
      </div>
    </Layout>
  );
};

export default StudentProfile;
