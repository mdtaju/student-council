import React, { useState } from 'react';
import SnackMessage from '../../Components/SnackBarMessage/SnackMessage';
// import ProfileStepper from '../../Components/StudentDashboard/StudentProfile/ProfileStepper';
import PersonalInfo from '../../Components/StudentDashboard/StudentProfile/PersonalInfo/PersonalInfo';
import EducationInfo from '../../Components/StudentDashboard/StudentProfile/EducationInfo/EducationInfo';
import SchoolsAttended from '../../Components/StudentDashboard/StudentProfile/EducationInfo/SchoolsAttended/SchoolsAttended';
import TestScores from '../../Components/StudentDashboard/StudentProfile/TestScores/TestScores';
import AdditionalQuali from '../../Components/StudentDashboard/StudentProfile/AdditionalQuali/AdditionalQuali';
import BackgroundInfo from '../../Components/StudentDashboard/StudentProfile/BackgroundInfo/BackgroundInfo';
import BottomBlog from '../../Components/StudentDashboard/StudentProfile/BottomBlog/BottomBlog';
import { Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useAddStudentFormMutation, useGetStudentFormQuery, useUpdateStudentFormMutation } from '../../features/student/studentApi';

const FreeAssessment = () => {
    const auth = useAuth();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({
        message: "",
        error: false,
    });




    const [passportFiles, setPassportFiles] = useState([]);
    const { data: student_form_data, refetch } = useGetStudentFormQuery(auth?.id);
    const [addStudentForm] = useAddStudentFormMutation();
    const [updateStudentFrom] = useUpdateStudentFormMutation();
    
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
    const [refusedVisaAns, setRefusedVisaAns] = useState(""); // required with

   








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
        <div>
            <div className='py-32 '>
                <Container>
                <SnackMessage open={open} setOpen={setOpen} message={message} />
                <div className="w-full min-h-full">
                    {/* <ProfileStepper progressRate={progressRate} /> */}
                    <form onSubmit={handleSubmit}>
                        <PersonalInfo
                            // passportFiles={passportFiles}
                            // setPassportFiles={setPassportFiles}
                            // personalInfo={student_form_data?.personal_info}
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
                </Container>
            </div>
        </div>
    );
};

export default FreeAssessment;