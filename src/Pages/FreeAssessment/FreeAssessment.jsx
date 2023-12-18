import React, { useState } from 'react';
import SnackMessage from '../../Components/SnackBarMessage/SnackMessage';
import TestScores from '../../Components/StudentDashboard/StudentProfile/TestScores/TestScores';
import BottomBlog from '../../Components/StudentDashboard/StudentProfile/BottomBlog/BottomBlog';
import { Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useAddStudentFormMutation, useGetStudentFormQuery, useUpdateStudentFormMutation } from '../../features/student/studentApi';
import GeneralInfo from './GeneralInfo';
import EducationHistory from './EducationHistory';
import ApplicationDetails from './ApplicationDetails';
import ImmigrationHistory from './ImmigrationHistory';
import JobDetails from './JobDetails';

const FreeAssessment = () => {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    error: false,
  });

  const { data: student_form_data, refetch } = useGetStudentFormQuery(auth?.id);
  const [addStudentForm] = useAddStudentFormMutation();
  const [updateStudentFrom] = useUpdateStudentFormMutation();

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
  const [email, setEmail] = useState(""); // required



  /* new added  */
  const [placeOfBirth, setPlaceOfBirth] = useState(""); // required
  const [passportStatus, setPassportStatus] = useState(""); // required
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const [whatsappNumbers, setWhatsappNumbers] = useState(['']);
  const [referenceName, setReferenceName] = useState("")
  const [referenceAddress, setReferenceAddress] = useState("")
  const [referenceMobile, setReferenceMobile] = useState("")


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

  // apply details
  const [applyDate, setApplyDate] = useState(null)
  const [applyCourse, setApplyCourse] = useState('')
  const [applyCountry, setApplyCountry] = useState("")


  // Immigration Details
  const [emigrationHistoryType, setEmigrationHistoryType] = useState("")
  const [reason, setReason] = useState("")
  const [selectVisaCountry, setSelectVisaCountry] = useState("")
  const [regDate, setRegDate] = useState(null)


// Terms and condition checked
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
 }

    const handleSubmit = async (e) => {

      e.preventDefault();
      const formData = new FormData();
      
      // personal info
      formData.append("first_name", firstName);
      formData.append("middle_name", middleName);
      formData.append("last_name", lastName);
      formData.append("date_of_birth", birthDate);
      formData.append("place_of_birth", placeOfBirth);
      formData.append("marital_status", maritalStatus);
      formData.append("gender", gender);
      formData.append("passport_Status", passportStatus);

      
      /* Reference Details */
      formData.append("reference_name", referenceName);
      formData.append("reference_address", referenceAddress);
      formData.append("reference_mobile", referenceMobile);
      
      // Address details
      formData.append("address", address);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("state", state);
      formData.append("zip_code", zipCode);
      formData.append("email", email);
      formData.append("Phone_Numbers", phoneNumbers);
      formData.append("Whatsapp_Numbers", whatsappNumbers);

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

      //  Application Details
      formData.append("education_country", applyCountry);
      formData.append("apply_date", applyDate);
      formData.append("apply_course", applyCourse);
      
      //  immigration Details 
      formData.append("emigration_history_type", emigrationHistoryType);
      formData.append("reason", reason);
      formData.append("registration_date", regDate);
      formData.append("select_visa_country", selectVisaCountry);
      
      // job  info
      formData.append("Job_History", JSON.stringify(jobHistory));
     



// Log the FormData entries
for (const pair of formData.entries()) {
  console.log(pair[0] + ': ' + pair[1]);
}
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
        <div className='mb-16'>
          <Container>
            <SnackMessage open={open} setOpen={setOpen} message={message} />
            <div className="w-full min-h-full">
              {/* <ProfileStepper progressRate={progressRate} /> */}
              <form onSubmit={handleSubmit}>
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
                  email={email}
                  setEmail={setEmail}

                  referenceName={referenceName}
                  setReferenceName={setReferenceName}
                  referenceAddress={referenceAddress}
                  setReferenceAddress={setReferenceAddress}
                  referenceMobile={referenceMobile}
                  setReferenceMobile={setReferenceMobile}
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
                  emigrationHistoryType={emigrationHistoryType}
                  setEmigrationHistoryType={setEmigrationHistoryType}

                  reason={reason}
                  setReason={setReason}

                  regDate={regDate}
                  setRegDate={setRegDate}

                  selectVisaCountry={selectVisaCountry}
                  setSelectVisaCountry={setSelectVisaCountry}
                />


                <JobDetails

                  attendSchools={jobHistory}
                  setAttendSchools={setJobHistory}

                />


                {/* terms and condition button  */}
                <div className="flex items-center justify-center mt-5 mb-20">
                  <input
                    type="checkbox"
                    id="termsAndConditions"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange((prevS) => !prevS)}
                  />
                  <label htmlFor="termsAndConditions" className="ml-2 text-black text-xl  ">
                    I agree to the terms and conditions
                  </label>
                </div>

                
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