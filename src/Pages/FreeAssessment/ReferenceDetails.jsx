import React from 'react';
import SelectInput from '../../Components/Inputs/SelectInput';
import SelectCountry from '../../Components/Inputs/SelectCountry';
import DateInput from '../../Components/Inputs/DateInput';
import Input from '../../Components/Inputs/Input';
import TextArea from '../../Components/Inputs/TextArea';
import { Container } from '@mui/material';

const ReferenceDetails = ({

    referencesHistoryType,
    setReferencesHistoryType,

    referenceName,
    setReferenceName,

    referenceAddress,
    setReferenceAddress,

    referenceMobile,
    setReferenceMobile,

    referenceComment,
    setReferenceComment

}) => {

    const referencesType = [
        "",
        "Facebook",
        "Youtube",
        "Whatsapp",
        "Referral",
        "I did a self directed search",
        "Education Expo",
        "Event",
        "Website",
        "Instagram",
        "Twitter",
        "LinkedIn",
        "Snapchat",
        "Pinterest",
        "Tumbir",
        "Reddit",
        "TikTok",
        "Telegram",
        "WeChat",
        "Flickr",
        "Quora",
        "Medium",
        "Vimeo",
        "Periscope",
        "SnapFish",
        "MeetUp",
        "Others",
    ];




    return (
        <Container>
            <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg ">
                <h1 className="text-2xl font-bold text-gray-600">Reference Details <span></span></h1>
                <p className='pt-3'>If you have any references, please let me know</p>
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 my-6">

                    <SelectInput
                        className="w-full"
                        title={"Select the option "}
                        placeholder="Select "
                        isRequired
                        selectState={referencesHistoryType}
                        setSelectState={setReferencesHistoryType}
                        optionsArray={referencesType}
                    />


                    {(referencesHistoryType === "Referral") && (
                        <>
                            <Input
                                title={"Name"}
                                placeholder="Enter His/Her Name..."
                                isRequired
                                required
                                type="text"
                                value={referenceName}
                                onChange={(e) => setReferenceName(e.target.value)}
                            />

                            <Input
                                title={"Address"}
                                placeholder="Enter His/Her Address..."
                                type="text"
                                value={referenceAddress}
                                onChange={(e) => setReferenceAddress(e.target.value)}
                            />

                            <Input
                                title={"Phone Number"}
                                type="text"
                                placeholder="Add Phone Number"
                                value={referenceMobile}
                                onChange={(e) => setReferenceMobile(e.target.value)}
                            />
                        </>
                    )}



                </div>

                <div>
                    {(referencesHistoryType === "Others") && (
                        <>
                            <TextArea
                                title={"Comment"}
                                placeholder="Enter Your Comment ..."
                                type="text"
                                value={referenceComment}
                                onChange={(e) => setReferenceComment(e.target.value)}
                            />
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default ReferenceDetails;