import React, { useEffect, useState } from 'react';
import { useDeleteAssessmentAssignMutation } from '../../../../features/student/studentApi';
import SnackMessage from '../../../SnackBarMessage/SnackMessage';

function ProfileView({ data = {} }) {
      const [deleteAssessmentAssign, { isLoading }] = useDeleteAssessmentAssignMutation();
      const { assigns, generalInfo, contactDetails, referenceDetails, educationHistory, englishProficiency, specialTestScore, applicationDetails, immigrationHistory, jobDetails, comment, profileImage } = data;

      const { address, city, country, state, zip_code, address_type, phoneNumbers, emails, whatsappNumbers } = contactDetails || {};
      const [open, setOpen] = useState(false);
      const [allAssignList, setAllAssignList] = useState([]);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });

      // get assigns list 
      useEffect(() => {
            if (assigns?.length > 0) {
                  setAllAssignList(assigns)
            }
      }, [assigns])

      // unassign handler 
      const handleUnassign = (id) => {
            deleteAssessmentAssign(id).unwrap().then(() => {
                  setAllAssignList((prevAssign) => {
                        return prevAssign.filter((item) => item.id !== id);
                  })
                  setMessage({
                        error: false,
                        message: "Form successfully deleted"
                  });
                  setOpen(true);
            }).catch(() => {
                  setMessage({
                        error: true,
                        message: "Something went wrong. Please, try again."
                  });
                  setOpen(true);
            })
      }
      return (
            <div className='mt-4 w-full bg-white rounded-md shadow-sm p-4'>
                  <SnackMessage open={open} setOpen={setOpen} message={message} />
                  {/* profile image and assign info container */}
                  <div className='flex flex-col items-start sm:flex-row gap-4 
                  '>
                        {/* Profile Image */}
                        <div>
                              <h1 className='text-lg mt-6 font-medium text-gray-800'>Profile Image</h1>
                              <div className='my-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                                    <img className='object-contain object-center  h-[300px] w-[300px]' src={profileImage?.file_url} alt="" />
                              </div>
                              {/* commission status */}
                              {
                                    allAssignList[0]?.commission &&
                                    <span className=' text-sm font-medium'>{`Commissions of this lead for the counselors: BDT ${allAssignList[0]?.commission}`}</span>
                              }
                        </div>
                        {/* assign information */}
                        <div>
                              <h1 className='text-lg font-medium text-gray-800'>This lead assigned to</h1>
                              <ul className='mt-3 p-2 w-full sm:w-[300px] list-inside list-none space-y-3 border border-gray-200 rounded-sm'>
                                    {
                                          allAssignList?.map((item, i) => (
                                                <li key={i} className="flex flex-wrap items-center gap-2">
                                                      <span>{`${i + 1}. ${item.assign_to}`}</span>
                                                      <button
                                                            disabled={isLoading}
                                                            onClick={() => handleUnassign(item.id)}
                                                            className="text-xs font-medium bg-red-500 hover:bg-red-600 py-1 px-3 rounded-md text-white">
                                                            {isLoading ? "loading..." : "Unassign"}
                                                      </button>
                                                </li>
                                          ))
                                    }
                              </ul>
                        </div>
                  </div>

                  {/* general info */}
                  <h1 className='text-lg mt-6 font-medium text-gray-800'>General Information</h1>
                  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                        {/* name */}
                        <span>Name</span>
                        <span>{`${generalInfo?.first_name} ${generalInfo?.middle_name} ${generalInfo?.last_name}`}</span>
                        {/* birth */}
                        <span>Date of Birth</span>
                        <span>{generalInfo?.date_of_birth}</span>
                        {/* place of birth */}
                        <span>Place of Birth</span>
                        <span>{generalInfo?.place_of_birth}</span>
                        {/* marital status */}
                        <span>Marital Status</span>
                        <span>{generalInfo?.marital_status}</span>
                        {/* gender */}
                        <span>Gender</span>
                        <span>{generalInfo?.gender}</span>
                        {/* passport status */}
                        <span>Passport Status</span>
                        <span>{generalInfo?.passport_status}</span>
                  </div>

                  <div>
                        {/* Contact Details */}
                        <h1 className='text-lg mt-6  font-medium text-gray-800'>Contact Details</h1>
                        <div className='mb-2 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                              {/* Address */}
                              <span>Address</span>
                              <span>{address}</span>
                              {/* City */}
                              <span>City</span>
                              <span>{city}</span>
                              {/* Country */}
                              <span>Country</span>
                              <span>{country}</span>
                              {/* State */}
                              <span>State</span>
                              <span>{state}</span>
                              {/* Zip Code */}
                              <span>Zip Code</span>
                              <span>{zip_code}</span>
                              {/* Address Type */}
                              <span>Address Type</span>
                              <span>{address_type}</span>

                        </div>

                        {/* Phone Numbers */}
                        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                              <h1 className=' text-sm font-medium text-gray-800 ' >Phone Numbers:  </h1>
                              <span className=' grid grid-cols-1 gap-2 w-96  text-sm font-medium text-gray-800'>
                                    {phoneNumbers && phoneNumbers.map((phoneNumber, index) => (
                                          <div key={index}>
                                                <span>Phone Number {index + 1} : </span>
                                                <span className=''>{phoneNumber.phone_number}</span>
                                          </div>
                                    ))}
                              </span>
                        </div>

                        {/* Emails */}
                        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                              <h1 className=' text-sm font-medium text-gray-800 ' >Emails:  </h1>

                              <div className=' grid grid-cols-1  gap-2 w-full  text-sm font-medium text-gray-800'>
                                    {emails && emails.map((email, index) => (
                                          <span key={index}>
                                                <span>Email {index + 1} : </span>
                                                <span>{email.email}</span>
                                          </span>
                                    ))}
                              </div>
                        </div>

                        {/* WhatsApp Numbers */}
                        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                              <h1 className=' text-sm font-medium text-gray-800 ' >Whatsapp Numbers:  </h1>
                              <div className=' grid grid-cols-1 gap-2 w-96 text-sm font-medium text-gray-800'>
                                    {whatsappNumbers && whatsappNumbers.map((whatsappNumber, index) => (
                                          <div key={index}>
                                                <span>WhatsApp Number {index + 1} : </span>
                                                <span>{whatsappNumber.whatsapp_number}</span>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>

                  {/* Reference Details */}
                  <h1 className='text-lg mt-6 font-medium text-gray-800'>Reference Information</h1>
                  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                        {/* Assessment Type */}
                        <span>Assessment Type</span>
                        <span>{referenceDetails?.assessment_type}</span>
                        {/* Reference Name */}
                        <span>Reference Name</span>
                        <span>{referenceDetails?.refer_name}</span>
                        {/* Reference Phone */}
                        <span>Reference Phone</span>
                        <span>{referenceDetails?.refer_phone}</span>
                        {/* Reference Address */}
                        <span>Reference Address</span>
                        <span>{referenceDetails?.refer_address}</span>
                        {/* Comment */}
                        <span>Comment</span>
                        <span>{referenceDetails?.comment}</span>
                  </div>

                  {/* Education History */}
                  {educationHistory && educationHistory.map((edu, index) => (
                        <div key={index}>
                              <h1 className='text-lg mt-6 font-medium text-gray-800'>Education Information {index + 1}</h1>
                              <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                                    {/* Level of Education */}
                                    <span>Level of Education</span>
                                    <span>{edu?.level_of_education}</span>
                                    {/* Name of Institute */}
                                    <span>Name of Institute</span>
                                    <span>{edu?.name_of_institute}</span>
                                    {/* Passing Year */}
                                    <span>Passing Year</span>
                                    <span>{edu?.passing_year}</span>
                                    {/* Degree Name */}
                                    <span>Degree Name</span>
                                    <span>{edu?.degree_name}</span>
                                    {/* Grade */}
                                    <span>Grade</span>
                                    <span>{edu?.grade}</span>
                              </div>
                        </div>
                  ))}

                  {/* English Proficiency */}
                  <h1 className='text-lg mt-6  font-medium text-gray-800'>English Proficiency Information</h1>
                  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                        {/* English Exam Type */}
                        <span>English Exam Type</span>
                        <span>{englishProficiency?.english_exam_type}</span>
                        {/* Date of Exam */}
                        <span>Date of Exam</span>
                        <span>{englishProficiency?.date_of_exam}</span>
                        {/* Listening */}
                        <span>Listening</span>
                        <span>{englishProficiency?.listening}</span>
                        {/* Reading */}
                        <span>Reading</span>
                        <span>{englishProficiency?.reading}</span>
                        {/* Writing */}
                        <span>Writing</span>
                        <span>{englishProficiency?.writing}</span>
                        {/* Speaking */}
                        <span>Speaking</span>
                        <span>{englishProficiency?.speaking}</span>
                        {/* Overall */}
                        <span>Overall</span>
                        <span>{englishProficiency?.overall}</span>
                        {/* Other Test Name */}
                        <span>Other Test Name</span>
                        <span>{englishProficiency?.other_test_name}</span>
                        {/* Other Test Score */}
                        <span>Other Test Score</span>
                        <span>{englishProficiency?.other_test_score}</span>
                        {/* Other Test Details */}
                        <span>Other Test Details</span>
                        <span>{englishProficiency?.other_test_details}</span>
                  </div>

                  {/* Special Test Score */}
                  <h1 className='text-lg font-medium mt-6 text-gray-800'>Special Test Score Information</h1>
                  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                        {/* Special Exam Type */}
                        <span>Special Exam Type</span>
                        <span>{specialTestScore?.special_exam_type}</span>
                        {/* Special Exam Name */}
                        <span>Special Exam Name</span>
                        <span>{specialTestScore?.special_exam_name}</span>
                        {/* Special Exam Score */}
                        <span>Special Exam Score</span>
                        <span>{specialTestScore?.special_exam_score}</span>
                        {/* Other Details */}
                        <span>Other Details</span>
                        <span>{specialTestScore?.other_details}</span>

                  </div>

                  {/* Application Details */}
                  <h1 className='text-lg mt-6 font-medium text-gray-800'>Application Details Information</h1>
                  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                        {/* Country for Apply */}
                        <span>Country for Apply</span>
                        <span>{applicationDetails?.country_for_apply}</span>
                        {/* Intake Date */}
                        <span>Intake Date</span>
                        <span>{applicationDetails?.intake_date}</span>
                        {/* Course Name for Apply */}
                        <span>Course Name for Apply</span>
                        <span>{applicationDetails?.course_name_for_apply}</span>
                  </div>

                  {/* Immigration History */}
                  {immigrationHistory && immigrationHistory.map((immigration, index) => (
                        <div key={index}>
                              <h1 className='text-lg mt-6 font-medium text-gray-800'>Immigration History {index + 1}</h1>
                              <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                                    {/* Immigration History Type */}
                                    <span>Immigration History Type</span>
                                    <span>{immigration?.immigration_history_type}</span>
                                    {/* Country Name */}
                                    <span>Country Name</span>
                                    <span>{immigration?.country_name}</span>
                                    {/* Date of Rejection */}
                                    <span>Date of Rejection</span>
                                    <span>{immigration?.date_of_rejection}</span>
                                    {/* Rejection Reason */}
                                    <span>Rejection Reason</span>
                                    <span>{immigration?.rejection_reason}</span>
                              </div>
                        </div>
                  ))}

                  {/* Job Details */}
                  {jobDetails && jobDetails.map((job, index) => (
                        <div key={index}>
                              <h1 className='text-lg mt-6 font-medium text-gray-800'>Job Details {index + 1}</h1>
                              <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                                    {/* Company Name */}
                                    <span>Company Name</span>
                                    <span>{job?.company_name}</span>
                                    {/* Position */}
                                    <span>Position</span>
                                    <span>{job?.position}</span>
                                    {/* Joining Date */}
                                    <span>Joining Date</span>
                                    <span>{job?.joining_date}</span>
                                    {/* Ending Date */}
                                    <span>Ending Date</span>
                                    <span>{job?.ending_date}</span>
                                    {/* Company Location */}
                                    <span>Company Location</span>
                                    <span>{job?.company_location}</span>
                              </div>
                        </div>
                  ))}

                  {/* Comment */}
                  <h1 className='text-lg mt-6 font-medium text-gray-800'>Student Comment</h1>
                  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-[500px] text-sm font-medium text-gray-800'>
                        {/* Comment */}
                        <span>Comment</span>
                        <span>{comment?.comment}</span>
                  </div>
            </div>
      )
}

export default ProfileView