import React from 'react';
import Input from '../../Components/Inputs/Input';
import DateInput from '../../Components/Inputs/DateInput';
import SelectInput from '../../Components/Inputs/SelectInput';
import SelectCountry from '../../Components/Inputs/SelectCountry';

const ImmigrationHistory = ({
    emigrationHistoryType,
    setEmigrationHistoryType,
   
    reason,
    setReason,

    regDate,
    setRegDate,
    
    selectVisaCountry,
    setSelectVisaCountry
}) => {
    const visaType = [
        "",
        "Yes",
        "No"
    ];

    return (
        <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
            <h1 className="text-2xl font-bold text-gray-600">Immigration History</h1>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 my-6">


                <SelectInput
                className="w-full"
                    title={"Previous Visa Registration?"}
                    placeholder="Select "
                    isRequired
                    selectState={emigrationHistoryType}
                    setSelectState={setEmigrationHistoryType}
                    optionsArray={visaType}
                />


                {(emigrationHistoryType  === "Yes") && (
                    <>
                      <SelectCountry
                    title={"Country You Want To Apply"}
                    isRequired
                    countryName={selectVisaCountry}
                    setCountryName={setSelectVisaCountry}
                    placeholder="Search country"
                />

                        <DateInput
                            title="Date of Rejection"
                            isRequired={true}
                            format="DD-MM-YYYY"
                            value={regDate}
                            onChange={(value) => setRegDate(value)}
                            disableFuture={true}
                        />

                        <Input
                            title={"Reason of Rejection"}
                            isRequired
                            required
                            placeholder="Enter Reason"
                            type="text"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            
                        />

                    </>
                )}





            </div>
        </div>
    );
};

export default ImmigrationHistory;