import React, { useState } from 'react';
import moment from 'moment/moment';
import ShowDetails from './ShowEduDetails';
import { FiPlus } from 'react-icons/fi';
import JobInput from './JobInput';
import ShowJobDetails from './ShowJobDetails';
import { Container } from '@mui/material';

const JobDetails = ({ attendSchools, setAttendSchools }) => {


  const [inputBoxShow, setInputBoxShow] = useState(false);

  const [companyName, setCompanyName] = useState(""); // required
  const [companyPosition, setCompanyPosition] = useState(""); // required
  const [joinDate, setJoinDate] = useState(null); // required
  const [endDate, setEndDate] = useState(null); // required
  const [companyLocation, setCompanyLocation] = useState(""); // required




  const handleAddSchools = () => {
    setCompanyName("");
    setCompanyPosition("");
    setCompanyLocation("");
    setJoinDate(null);
    setEndDate(null);
    setInputBoxShow(true);
  };

  const handleExpire = (index) => {
    const getSchool = attendSchools?.find((s, i) => i === index);

    setCompanyName(getSchool?.company_name);
    setCompanyPosition(getSchool?.company_position);
    setCompanyLocation(getSchool?.company_location);
    setJoinDate(moment.utc(getSchool?.join_date));
    setEndDate(moment.utc(getSchool?.end_date));
    setInputBoxShow(true);
  };

  return (
    <Container>
      <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-5">
        <h1 className="text-2xl font-bold text-gray-600">Job Details (If Have) </h1>

        {inputBoxShow && (
          <JobInput
            companyName={companyName}
            setCompanyName={setCompanyName}

            companyPosition={companyPosition}
            setCompanyPosition={setCompanyPosition}

            joinDate={joinDate}
            setJoinDate={setJoinDate}

            endDate={endDate}
            setEndDate={setEndDate}

            companyLocation={companyLocation}
            setCompanyLocation={setCompanyLocation}

            attendSchools={attendSchools}
            setAttendSchools={setAttendSchools}


            setBoxShow={setInputBoxShow}
          />
        )}
        <ShowJobDetails
          attendSchools={attendSchools}
          setAttendSchools={setAttendSchools}
          handleExpire={handleExpire}
        />
        <div
          onClick={handleAddSchools}
          className="w-fit px-6 py-2 my-5 text-base text-white bg-green-600 rounded-xl  active:scale-95 duration-200 flex items-center gap-2 cursor-pointer">
          <span>Add Another Job Details</span> <FiPlus />
        </div>
      </div>
    </Container>

  );
};

export default JobDetails;