import React, { useState } from 'react';
import moment from 'moment/moment';
import { FiPlus } from 'react-icons/fi';
import ShowDetails from '../Education/ShowEduDetails';
import { Container } from '@mui/material';
import ImmigrationInput from './ImmigrationInput';
import ShowImmigrationDetails from './ShowImmigrationDetails';

const ImmigrationHistory = ({ attendSchools, setAttendSchools }) => {

    const [inputBoxShow, setInputBoxShow] = useState(true);

    const [emigrationHistoryType, setEmigrationHistoryType] = useState("")
    const [reason, setReason] = useState("")
    const [selectVisaCountry, setSelectVisaCountry] = useState("")
    const [regDate, setRegDate] = useState(null)


    const handleAddImmigration = () => {
        setEmigrationHistoryType("");
        setReason("");
        setSelectVisaCountry("");
        setRegDate(null);
        setInputBoxShow(true);
    };

    const handleExpire = (index) => {
        const getSchool = attendSchools.find((s, i) => i === index);

        setEmigrationHistoryType(getSchool?.immigration_history_type);
        setReason(getSchool?.reason);
        setSelectVisaCountry(getSchool?.select_visa_country);
        setRegDate(moment.utc(getSchool?.registration_date));

        setInputBoxShow(true);
    };


    return (

        <Container>
                <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-5">
                <h1 className="text-2xl font-bold text-gray-600">Immigration History</h1>

                    {inputBoxShow && (
                        <ImmigrationInput
                            emigrationHistoryType={emigrationHistoryType}
                            setEmigrationHistoryType={setEmigrationHistoryType}

                            reason={reason}
                            setReason={setReason}

                            regDate={regDate}
                            setRegDate={setRegDate}

                            selectVisaCountry={selectVisaCountry}
                            setSelectVisaCountry={setSelectVisaCountry}

                            attendSchools={attendSchools}
                            setAttendSchools={setAttendSchools}

                            setBoxShow={setInputBoxShow}
                        />
                    )}
                    <ShowImmigrationDetails
                        attendSchools={attendSchools}
                        setAttendSchools={setAttendSchools}
                        handleExpire={handleExpire}
                    />
                    <div
                        onClick={handleAddImmigration}
                        className="w-fit px-6 py-2 my-5 text-base text-white bg-green-600 rounded-xl  active:scale-95 duration-200 flex items-center gap-2 cursor-pointer">
                        <span>Add Another Immigration History</span> <FiPlus />
                    </div>
                </div>
        </Container>

    );
};

export default ImmigrationHistory;

















// import React from 'react';
// import Input from '../../Components/Inputs/Input';
// import DateInput from '../../Components/Inputs/DateInput';
// import SelectInput from '../../Components/Inputs/SelectInput';
// import SelectCountry from '../../Components/Inputs/SelectCountry';
// import { Container } from '@mui/material';

// const ImmigrationHistory = ({
//     emigrationHistoryType,
//     setEmigrationHistoryType,

//     reason,
//     setReason,

//     regDate,
//     setRegDate,

//     selectVisaCountry,
//     setSelectVisaCountry
// }) => {
//     const visaType = [
//         "",
//         "Yes",
//         "No"
//     ];

//     return (
//         <Container>
//             <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
//                 <h1 className="text-2xl font-bold text-gray-600">Immigration History</h1>
//                 <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 my-6">


//                     <SelectInput
//                         className="w-full"
//                         title={"Have You Experienced Any Previous Visa Rejection?"}
//                         placeholder="Select "
//                         isRequired
//                         selectState={emigrationHistoryType}
//                         setSelectState={setEmigrationHistoryType}
//                         optionsArray={visaType}
//                     />


//                     {(emigrationHistoryType === "Yes") && (
//                         <>
//                             <SelectCountry
//                                 title={"Country Name"}
//                                 isRequired
//                                 countryName={selectVisaCountry}
//                                 setCountryName={setSelectVisaCountry}
//                                 placeholder="Search country"
//                             />

//                             <DateInput
//                                 title="Date of Rejection"
//                                 isRequired={true}
//                                 format="DD-MM-YYYY"
//                                 value={regDate}
//                                 onChange={(value) => setRegDate(value)}
//                                 disableFuture={true}
//                             />

//                             <Input
//                                 title={"State The Reasons for the Rejection"}
//                                 isRequired
//                                 required
//                                 placeholder="Enter Reason"
//                                 type="text"
//                                 value={reason}
//                                 onChange={(e) => setReason(e.target.value)}

//                             />

//                         </>
//                     )}





//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default ImmigrationHistory;