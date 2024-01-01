import React from 'react';
import Input from '../../Components/Inputs/Input';
import DateInput from '../../Components/Inputs/DateInput';
import { Container} from '@mui/material';
import MultipleSelect from '../../Components/Inputs/MultipleSelect';

const ApplicationDetails = ({
  applyCountry,
  setApplyCountry,
  applyDate,
  setApplyDate,
  applyCourse,
  setApplyCourse


}) => {
  return (
      <div className='shadow-md  w-full p-4 sm:p-6 bg-white rounded-lg mt-10'>
        <h1 className="text-2xl py-3 font-bold text-gray-600">Application Details <span className='text-sm font-normal'>(Note: Arrange Your Selected Countries from Your First Choice To The Last Chosen One.)</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 my-6">

          <MultipleSelect
            title={"Country You Want To Apply "}
            // isRequired
            countryName={applyCountry}
            setCountryName={setApplyCountry}
            placeholder="Search country"
          />
          <DateInput
            title="Which Intake Do You Want to Apply"
            isRequired={true}
            required
            format="DD-MM-YYYY"
            value={applyDate}
            onChange={(e) => setApplyDate(e)}
          />
          <Input
            title={"Which Course Do You Want To Apply "}
            placeholder="Enter Course"
            type="text"
            value={applyCourse}
            onChange={(e) => setApplyCourse(e.target.value)}
          />
        </div>
      </div>
  );
};

export default ApplicationDetails;







