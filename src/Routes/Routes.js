import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard/AdminDashboard";
// import GeneralLead from "../Components/AdminDashboard/ContactLead/GeneralLead";
// import LeadFromAssessmentDay from "../Components/AdminDashboard/ContactLead/LeadFromAssessmentDay";
// import LeadFromEvent from "../Components/AdminDashboard/ContactLead/LeadFromEvent";
// import LeadFromExpo from "../Components/AdminDashboard/ContactLead/LeadFromExpo";
// import LeadFromSeminar from "../Components/AdminDashboard/ContactLead/LeadFromSeminar";
import ContactDetails from "../Components/AdminDashboard/Contacts/ContactDetails";
// import TodaysContact from "../Components/AdminDashboard/Contacts/TodaysContact";
// import AddUniversity from "../Components/AdminDashboard/CountryAndUniversity/AddUniversity";
// import AssessmentDayContent from "../Components/AdminDashboard/Events/AssessmentDayContent/AssessmentDayContent";
// import EventExpoContent from "../Components/AdminDashboard/Events/EventExpoContent/EventExpoContent";
// import EventRegistrationContent from "../Components/AdminDashboard/Events/EventRegistrationContent/EventRegistrationContent";
// import SeminarContent from "../Components/AdminDashboard/Events/SeminarContent/SeminarContent";
// import AboutCompany from "../Components/AdminDashboard/SystemSetting/AboutCompanyContent";
// import CompanyStats from "../Components/AdminDashboard/SystemSetting/CompanyStats";
// import FooterContent from "../Components/AdminDashboard/SystemSetting/FooterContent";
// import HeroContent from "../Components/AdminDashboard/SystemSetting/HeroContent";
// import LogoSection from "../Components/AdminDashboard/SystemSetting/LogoSection";
// import PrivacyPolicyContent from "../Components/AdminDashboard/SystemSetting/PrivacyPolicyContent";
// import ServicesContent from "../Components/AdminDashboard/SystemSetting/ServicesContent";
// import TestimonialSection from "../Components/AdminDashboard/SystemSetting/TestimonialSection";
// import WhyUsContent from "../Components/AdminDashboard/SystemSetting/WhyUsContent";
import AdminLayOut from "../Layout/AdminDashboardLayOut/AdminLayout";
// import EventAlbumLayout from "../Layout/EventAlbumLayout/EventAlbumLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";
// import UkEduExpo2022 from "../Pages/Album/UkEduExpo_2022";
import Home from "../Pages/Home/Home";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
// import PrivateRoute from "./PrivateRoute";

import StudentDashboard from "../Components/StudentDashboard/StudentDashboard.js/StudentDashboard";

// import AddBlog from "../Components/AdminDashboard/BlogAndNews/AddBlog";
// import AddNews from "../Components/AdminDashboard/BlogAndNews/AddNews";
// import AddScholarship from "../Components/AdminDashboard/BlogAndNews/AddScholarship";
// import ImportantContact from "../Components/AdminDashboard/Contacts/ImportantContact";
// import NonImportantContacts from "../Components/AdminDashboard/Contacts/NonImportantContacts";
// import ProcessingContact from "../Components/AdminDashboard/Contacts/ProcessingContact";
// import RejectedContact from "../Components/AdminDashboard/Contacts/RejectedContact";
// import TodaysVisitingStudent from "../Components/AdminDashboard/VisitingStudentt/TodaysVisitingStudent";
// import VisitingStudent from "../Components/AdminDashboard/VisitingStudentt/VisitingStudent";
// import VisitingStudentDetails from "../Components/AdminDashboard/VisitingStudentt/VisitingStudentDetails";
import AssignedStudent from "../Components/CounsellorDashboard/AssignedStudentPath/AssignedStudent";
import TodaysAssignedStudent from "../Components/CounsellorDashboard/AssignedStudentPath/TodaysAssignedStudent";
// import ProgressingVisa from "../Components/CounsellorDashboard/MyStatesPath/ProgressingVisa";
// import RejectedVisa from "../Components/CounsellorDashboard/MyStatesPath/RejectedVisa";
// import SuccessVisa from "../Components/CounsellorDashboard/MyStatesPath/SuccessVisa";
// import WaitingVisa from "../Components/CounsellorDashboard/MyStatesPath/WaitingVisa";
// import MyReferenceStudent from "../Components/CounsellorDashboard/StudentPathName/MyReferenceStudent";
// import MyStudent from "../Components/CounsellorDashboard/StudentPathName/MyStudent";

// import Offers from "../Components/CounsellorDashboard/OtherPathName/Offers";

// import CommunityLink from "../Components/CounsellorDashboard/OtherPathName/CommunityLink";
// import Notification from "../Components/CounsellorDashboard/OtherPathName/Notification";
// import Resource from "../Components/CounsellorDashboard/OtherPathName/Resource";

// import TermsAndConditions from "../Components/CounsellorDashboard/TAndCPath/TermsAndConditions";
// import WrittenAgreement from "../Components/CounsellorDashboard/TAndCPath/WrittenAgreement";

import CounsellorDashboard from "../Components/CounsellorDashboard/CounsellorDashboard/CounsellorDashboard";
// import MyPayment from "../Components/CounsellorDashboard/PaymentPath/MyPayment";
// import PaymentReceived from "../Components/CounsellorDashboard/PaymentPath/PaymentReceived";
// import PendingPayment from "../Components/CounsellorDashboard/PaymentPath/PendingPayment";
// import AddStudentByCounsellor from "../Components/CounsellorDashboard/StudentPathName/AddStudentByCounsellor";
import AddUniversity from "../Components/AdminDashboard/AddUniversity/AddUniversity";
import AllStudents from "../Components/AdminDashboard/AllStudents/AllStudents";
import AllUniversity from "../Components/AdminDashboard/AllUniversity/AllUniversity";
import UpdateUniversity from "../Components/AdminDashboard/AllUniversity/UpdateUniversity";
import AllVisa from "../Components/AdminDashboard/AllVisa/AllVisa";
import Appointments from "../Components/AdminDashboard/Appointments/Appointments";
import MakeUser from "../Components/AdminDashboard/MakeUser/MakeUser";
import AddVisa from "../Components/AdminDashboard/VisaApplications/AddVisa";
import VisaUpdate from "../Components/AdminDashboard/VisaUpdate/VisaUpdate";
import CounsellorAppointments from "../Components/CounsellorDashboard/Appointments/Appointments";
import ContactMessages from "../Components/CounsellorDashboard/ContactMessages.js/ContactMessages";
import StudentCourseList from "../Components/CounsellorDashboard/StudentCourseList/StudentCourseList";
import CreateAppointment from "../Components/StudentDashboard/CreateAppoinment/CreateAppointment";
import MyAppointments from "../Components/StudentDashboard/MyAppointments/MyAppointments";
import Application from "../Components/StudentDashboard/StudentProfile/Application/Application";
import ApplicationAndApply from "../Components/StudentDashboard/StudentProfile/Application/ApplicationAndApply/ApplicationAndApply";
import CourseDetails from "../Components/StudentDashboard/StudentProfile/CourseDetails/CourseDetails";
import SearchAndApply from "../Components/StudentDashboard/StudentProfile/SearchAndApply/SearchAndApply";
import StudentProfile from "../Components/StudentDashboard/StudentProfile/StudentProfile";
import VisaApplication from "../Components/StudentDashboard/StudentProfile/VisaApplication/VisaApplication";
import UniversityDetails from "../Components/StudentDashboard/UniversityDetails/UniversityDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import CourseDetailsPublic from "../Pages/CourseDetails/CourseDetails";
import Login from "../Pages/Login/Login";
import SearchAndApplyHomePage from "../Pages/SearchAndApply/SearchAndApply";
import StudentRegister from "../Pages/StudentRegister/StudentRegister";
import AdminPrivateRoute from "./AdminPrivateRoute";
import CouncilPrivateRoute from "./CouncilPrivateRoute";
import StudentPrivateRoute from "./StudentPrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/search_and_apply",
        element: <SearchAndApplyHomePage />,
      },
      {
        path: "/contact_us",
        element: <ContactUs />,
      },
      {
        path: "/course_details/:id",
        element: <CourseDetailsPublic />,
      },
      {
        path: "/university/:id",
        element: <UniversityDetails />,
      },
      // {
      //   path: "/countries/:id",
      //   element: <CountriesLandingPage></CountriesLandingPage>,
      // },
      // {
      //   path: "/university/details/:id",
      //   element: <UniversityDetails></UniversityDetails>,
      // },
      // {
      //   path: "/eCounselling",
      //   element: <ECounselling></ECounselling>,
      // },

      // {
      //   path: "/events/educationExpo",
      //   element: <EducationExpo />,
      // },
      // {
      //   path: "/events/eventRegistration",
      //   element: <EventRegistration />,
      // },
      // {
      //   path: "/events/assessmentDay",
      //   element: <AssesmentDay />,
      // },
      // {
      //   path: "/events/seminars",
      //   element: <Seminar />,
      // },
      // {
      //   path: "/events/educationExpo/eventDetails/:id",
      //   element: <EventDetails />,
      // },
      // {
      //   path: "/whyUs",
      //   element: <WhyUs></WhyUs>,
      // },
      // {
      //   path: "/blog",
      //   element: <Blog></Blog>,
      // },
      // {
      //   path: "/blogDetails/:id",
      //   element: <BlogDetails />,
      // },
      // {
      //   path: "/news",
      //   element: <News></News>,
      // },

      // {
      //   path: "/newsDetails/:id",
      //   element: <NewsDetails />,
      // },
      // {
      //   path: "/scholarship",
      //   element: <Scholarship></Scholarship>,
      // },
      // {
      //   path: "/scholarshipDetails/:id",
      //   element: <ScholarshipDetails />,
      // },
      // {
      //   path: "/videosContent",
      //   element: <VideosPage />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <StudentRegister />,
      },
      // {
      //   path: "/applyNow",
      //   element: <ApplyNow></ApplyNow>,
      // },
      // {
      //   path: "/addPartnet",
      //   element: <AddPartnersContent></AddPartnersContent>,
      // },
      // {
      //   path: "/student-form",
      //   element: <StudentForm></StudentForm>,
      // },
    ],
  },
  {
    path: "/dashboard/",
    element: (
      <AdminPrivateRoute>
        <AdminLayOut />
      </AdminPrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "makeUser",
        element: <MakeUser />,
      },
      {
        path: "addUniversity",
        element: <AddUniversity />,
      },
      {
        path: "allUniversity",
        element: <AllUniversity />,
      },
      {
        path: "updateUniversity/:id",
        element: <UpdateUniversity />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "addVisa",
        element: <AddVisa />,
      },
      {
        path: "allVisa",
        element: <AllVisa />,
      },
      {
        path: "updateVisa/:id",
        element: <VisaUpdate />,
      },
      {
        path: "allStudents",
        element: <AllStudents />,
      },

      // {
      //   path: "profile",
      //   element: <Profile></Profile>,
      // },
      // {
      //   path: "chat",
      //   element: <Chat></Chat>,
      // },
      // {
      //   path: "contactRequest",
      //   element: <ContactList></ContactList>,
      // },
      // {
      //   path: "todaysContactRequest",
      //   element: <TodaysContact />,
      // },
      // {
      //   path: "inProcessContacts",
      //   element: <ProcessingContact />,
      // },
      // {
      //   path: "importantContacts",
      //   element: <ImportantContact />,
      // },
      // {
      //   path: "nonImportantContacts",
      //   element: <NonImportantContacts />,
      // },
      // {
      //   path: "rejectedContacts",
      //   element: <RejectedContact />,
      // },
      // {
      //   path: "normalLead",
      //   element: <GeneralLead />,
      // },
      // {
      //   path: "expoLead",
      //   element: <LeadFromExpo />,
      // },
      // {
      //   path: "eventLead",
      //   element: <LeadFromEvent />,
      // },
      // {
      //   path: "assessmentLead",
      //   element: <LeadFromAssessmentDay />,
      // },
      // {
      //   path: "seminarLead",
      //   element: <LeadFromSeminar />,
      // },
      // {
      //   path: "contactDetails/:id",
      //   element: <ContactDetails />,
      // },
      // {
      //   path: "visitingStudent",
      //   element: <VisitingStudent />,
      // },
      // {
      //   path: "todaysVisitingStudent",
      //   element: <TodaysVisitingStudent />,
      // },
      // {
      //   path: "visitingStudentDetails/:id",
      //   element: <VisitingStudentDetails />,
      // },
      // {
      //   path: "addCouncilor",
      //   element: <AddCounselor></AddCounselor>,
      // },
      // {
      //   path: "administrationList",
      //   element: <CounselorList></CounselorList>,
      // },
      // {
      //   path: "addStudent",
      //   element: <AddStudent></AddStudent>,
      // },
      // {
      //   path: "studentList",
      //   element: <StudentList></StudentList>,
      // },
      // {
      //   path: "addBlog",
      //   element: <AddBlog></AddBlog>,
      // },
      // {
      //   path: "scholarship",
      //   element: <AddScholarship />,
      // },
      // {
      //   path: "addCountry",
      //   element: <AddCountry></AddCountry>,
      // },
      // {
      //   path: "addUniversity",
      //   element: <AddUniversity></AddUniversity>,
      // },
      // {
      //   path: "settings/heroSection",
      //   element: <HeroContent></HeroContent>,
      // },
      // {
      //   path: "settings/logo",
      //   element: <LogoSection />,
      // },
      // {
      //   path: "settings/testimonial",
      //   element: <TestimonialSection />,
      // },
      // {
      //   path: "settings/whyUs",
      //   element: <WhyUsContent></WhyUsContent>,
      // },
      // {
      //   path: "settings/services",
      //   element: <ServicesContent></ServicesContent>,
      // },
      // {
      //   path: "settings/partners",
      //   element: <AddPartnersContent></AddPartnersContent>,
      // },
      // {
      //   path: "settings/footer",
      //   element: <FooterContent />,
      // },
      // {
      //   path: "settings/privacyPolicy",
      //   element: <PrivacyPolicyContent />,
      // },
      // {
      //   path: "settings/about",
      //   element: <AboutCompany></AboutCompany>,
      // },
      // {
      //   path: "settings/stats",
      //   element: <CompanyStats></CompanyStats>,
      // },
      // {
      //   path: "addBlog",
      //   element: (
      //     <SharedFormBlogNewsScholarship
      //       title={" Blog"}
      //       type={"blog"}
      //     ></SharedFormBlogNewsScholarship>
      //   ),
      // },
      // {
      //   path: "addNews",
      //   element: <AddNews></AddNews>,
      // },
      // {
      //   path: "scholarship",
      //   element: (
      //     <SharedFormBlogNewsScholarship
      //       title={" Scholarship"}
      //       type={"scholarship"}
      //     ></SharedFormBlogNewsScholarship>
      //   ),
      // },
      // {
      //   path: "videos",
      //   element: <Videos></Videos>,
      // },
      // {
      //   path: "addCountry",
      //   element: <AddCountry></AddCountry>,
      // },
      // {
      //   path: "addUniversity",
      //   element: <AddUniversity></AddUniversity>,
      // },
      // {
      //   path: "eventExpo",
      //   element: <EventExpoContent />,
      // },
      // {
      //   path: "eventRegistration",
      //   element: <EventRegistrationContent />,
      // },
      // {
      //   path: "assessmentDay",
      //   element: <AssessmentDayContent />,
      // },
      // {
      //   path: "seminar",
      //   element: <SeminarContent />,
      // },
    ],
  },
  // {
  //   path: "/events/album",
  //   element: <EventAlbumLayout></EventAlbumLayout>,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "",
  //       element: <UkEduExpo2022></UkEduExpo2022>,
  //     },
  //     {
  //       path: "ukEduExpo_2022",
  //       element: <UkEduExpo2022></UkEduExpo2022>,
  //     },
  //   ],
  // },
  {
    path: "/student-dashboard/",
    element: (
      <StudentPrivateRoute>
        <AdminLayOut />
      </StudentPrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <StudentDashboard />,
      },
      {
        path: "profile",
        element: <StudentProfile />,
      },
      {
        path: "searchAndApply",
        element: <SearchAndApply />,
      },
      {
        path: "applications",
        element: <Application />,
      },
      {
        path: "applications/:id",
        element: <ApplicationAndApply />,
      },
      {
        path: "visaApplications",
        element: <VisaApplication />,
      },
      {
        path: "createAppointment",
        element: <CreateAppointment />,
      },
      {
        path: "myAppointments",
        element: <MyAppointments />,
      },
      {
        path: "courseDetails/:id",
        element: <CourseDetails />,
      },
      {
        path: "university/:id",
        element: <UniversityDetails />,
      },
      // {
      //   path: "chat",
      //   element: <Chat></Chat>,
      // },
      // // otherPathName
      // {
      //   path: "offers",
      //   element: <Offers />,
      // },
      // {
      //   path: "notification",
      //   element: <Notification />,
      // },
      // {
      //   path: "communityLink",
      //   element: <CommunityLink />,
      // },
      // {
      //   path: "resource",
      //   element: <Resource />,
      // },

      
    ],
  },
  {
    path: "/counsellor-dashboard/",
    element: (
      <CouncilPrivateRoute>
        <AdminLayOut />
      </CouncilPrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CounsellorDashboard />,
      },
      // // counsellorNormalPathname
      // {
      //   path: "profile",
      //   element: <Profile></Profile>,
      // },
      // {
      //   path: "chat",
      //   element: <Chat></Chat>,
      // },
      {
        path: "appointments",
        element: <CounsellorAppointments />,
      },
      // // assignedStudentPath
      {
        path: "assignedStudent",
        element: <AssignedStudent />,
      },
      {
        path: "contactDetails/:id",
        element: <ContactDetails />,
      },
      {
        path: "contactMessages",
        element: <ContactMessages />,
      },
      // {
      //   path: "contactMessages/:id",
      //   element: <ContactDetails />,
      // },
      {
        path: "studentCourseList",
        element: <StudentCourseList />,
      },
      {
        path: "applications/:id",
        element: <ApplicationAndApply />,
      },
      {
        path: "todaysAssignedStudent",
        element: <TodaysAssignedStudent />,
      },
      // // studentPathName
      // {
      //   path: "addStudent",
      //   element: <AddStudentByCounsellor />,
      // },
      // {
      //   path: "myStudent",
      //   element: <MyStudent />,
      // },
      // {
      //   path: "myReferenceStudent",
      //   element: <MyReferenceStudent />,
      // },
      // // tAndCPath
      // {
      //   path: "termsAndConditions",
      //   element: <TermsAndConditions />,
      // },
      // {
      //   path: "writtenAgreement",
      //   element: <WrittenAgreement />,
      // },

      // // myStatesPath
      // {
      //   path: "progressingVisa",
      //   element: <ProgressingVisa />,
      // },
      // {
      //   path: "successVisa",
      //   element: <SuccessVisa />,
      // },
      // {
      //   path: "rejectedVisa",
      //   element: <RejectedVisa />,
      // },
      // {
      //   path: "waitingVisa",
      //   element: <WaitingVisa />,
      // },
      // // otherPathName
      // {
      //   path: "offers",
      //   element: <Offers />,
      // },
      // {
      //   path: "notification",
      //   element: <Notification />,
      // },
      // {
      //   path: "communityLink",
      //   element: <CommunityLink />,
      // },
      // {
      //   path: "resource",
      //   element: <Resource />,
      // },
      // // paymentPath
      // {
      //   path: "myPayment",
      //   element: <MyPayment />,
      // },
      // {
      //   path: "paymentReceived",
      //   element: <PaymentReceived />,
      // },
      // {
      //   path: "pendingPayment",
      //   element: <PendingPayment />,
      // },
    ],
  },
]);
