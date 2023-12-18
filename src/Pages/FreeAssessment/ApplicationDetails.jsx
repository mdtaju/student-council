import React from 'react';
import Input from '../../Components/Inputs/Input';
import SelectCountry from '../../Components/Inputs/SelectCountry';
import DateInput from '../../Components/Inputs/DateInput';

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
            <h1 className="text-2xl py-3 font-bold text-gray-600">Application Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 my-6">
                <SelectCountry
                    title={"Country You Want To Apply"}
                    isRequired
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