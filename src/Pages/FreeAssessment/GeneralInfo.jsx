import React from 'react';
import Input from '../../Components/Inputs/Input';
import DateInput from '../../Components/Inputs/DateInput';
import SelectCountry from '../../Components/Inputs/SelectCountry';
import RadioInput from '../../Components/Inputs/RadioInut';
import { Button, Container, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const GeneralInfo = ({
    passportStatus,
    setPassportStatus,
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    lastName,
    setLastName,
    birthDate,
    setBirthDate,
    placeOfBirth,
    setPlaceOfBirth,
    maritalStatus,
    setMaritalStatus,
    gender,
    setGender,
    address,
    setAddress,
    city,
    setCity,
    country,
    setCountry,
    state,
    setState,
    zipCode,
    setZipCode,
    email,
    setEmail,
    phoneNumbers,
    setPhoneNumbers,
    whatsappNumbers,
    setWhatsappNumbers,
    referenceName,
    setReferenceName,
    referenceAddress,
    setReferenceAddress,
    referenceMobile,
    setReferenceMobile,
}) => {

    const handleMaritalStatus = (value) => {
        setMaritalStatus(value);
    };
    const handleGender = (value) => {
        setGender(value);
    };
    const handlePassport = (value) => {
        setPassportStatus(value);
    };

    const maritalOptions = [
        { value: "Single", label: "Single" },
        { value: "Married", label: "Married" },
    ];

    const genderOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Others", label: "Others" },
        { value: "Not Wish To Disclose", label: "Not Wish To Disclose" },
    ];

    const passportOptions = [
        { value: "Applied For Passport", label: "Applied For Passport" },
        { value: "Does Not Have Passport", label: "Does Not Have Passport" },
        { value: "Has Passport", label: "Has Passport" },
    ];





    /* Phone numbers functionality  */
    const handlePhoneNumberChange = (index, value) => {
        setPhoneNumbers((prevPhoneNumbers) => {
            const newPhoneNumbers = [...prevPhoneNumbers];
            newPhoneNumbers[index] = value;
            return newPhoneNumbers;
        });
    };

    const handleAddPhoneNumber = () => {
        setPhoneNumbers((prevPhoneNumbers) => [...prevPhoneNumbers, '']);
    };

    const handleRemovePhoneNumber = (index) => {
        setPhoneNumbers((prevPhoneNumbers) => {
            const newPhoneNumbers = [...prevPhoneNumbers];
            newPhoneNumbers.splice(index, 1);
            return newPhoneNumbers;
        });
    };


    /* whatsapp  numbers functionality  */
    const handleWhatsappNumberChange = (index, value) => {
        setWhatsappNumbers((prevWhatsappNumbers) => {
            const newWhatsappNumbers = [...prevWhatsappNumbers];
            newWhatsappNumbers[index] = value;
            return newWhatsappNumbers;
        });
    };
    const handleAddWhatsappNumber = () => {
        setWhatsappNumbers((prevWhatsappNumbers) => [...prevWhatsappNumbers, '']);
    };
    const handleRemoveWhatsappNumber = (index) => {
        setWhatsappNumbers((prevWhatsappNumbers) => {
            const newWhatsappNumbers = [...prevWhatsappNumbers];
            newWhatsappNumbers.splice(index, 1);
            return newWhatsappNumbers;
        });
    };




    return (
        <div className='py-40'>
            <Container>
                <div className="shadow-md  w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
                    <h1 className="text-2xl font-bold text-gray-600">General Information</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
                        <Input
                            title={"First Name"}
                            isRequired
                            required
                            placeholder="Enter First Name..."
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Input
                            title={"Middle Name"}
                            placeholder="Enter Middle Name..."
                            type="text"
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                        <Input
                            title={"Last Name"}
                            isRequired
                            required
                            placeholder="Enter Last Name..."
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <DateInput
                            title="Date of Birth"
                            isRequired={true}
                            required
                            format="DD-MM-YYYY"
                            disableFuture={true}
                            value={birthDate}
                            onChange={(value) => setBirthDate(value)}
                        />
                        {/* Place of birth  */}
                        <Input
                            title={"Place of Birth"}
                            isRequired
                            required
                            placeholder="Enter Place Name..."
                            type="text"
                            value={placeOfBirth}
                            onChange={(e) => setPlaceOfBirth(e.target.value)}
                        />
                        <RadioInput
                            title={"Marital Status"}
                            isRequired
                            required
                            name="maritalStatus"
                            options={maritalOptions}
                            selectedValue={maritalStatus}
                            onChange={handleMaritalStatus}
                        />
                    </div>

                    {/* Gender Status */}
                    <div className="w-full my-6">
                        <RadioInput
                            title={"Gender"}
                            isRequired
                            name="gender"
                            required
                            options={genderOptions}
                            selectedValue={gender}
                            onChange={handleGender}
                        />
                    </div>

                    {/* passport status  */}
                    <div className="w-full my-6">
                        <RadioInput
                            title={"Passport Status"}
                            isRequired
                            name="passport"
                            required
                            options={passportOptions}
                            selectedValue={passportStatus}
                            onChange={handlePassport}
                        />
                    </div>



                    {/* Reference Details Start here  */}

                    <h1 className="text-2xl mt-20 font-bold text-gray-600">Reference Details</h1>
                    <p className='pt-3'>If you have any references, please let me know</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 my-6">

                        <Input
                            title={"Name"}
                            placeholder="Enter His/Her Name..."
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

                    </div>
                    {/* Reference Details End Here  */}


                    <h1 className="text-2xl mt-20 font-bold text-gray-600">Address Details</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 my-6">
                        <div className="">
                            <Input
                                title={"Address"}
                                isRequired
                                required
                                placeholder="Enter your address..."
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <Input
                            title={"City/Town"}
                            isRequired
                            required
                            placeholder="Enter your city..."
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <SelectCountry
                            title={"Country"}
                            isRequired
                            countryName={country}
                            setCountryName={setCountry}
                            placeholder="Search your country"
                        />
                        <Input
                            title={"Provence/State"}
                            isRequired
                            required
                            placeholder="Enter state name..."
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <Input
                            title={"Postal/Zip Code"}
                            isRequired
                            required
                            placeholder="Enter code..."
                            type="number"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />

                        <div className="">
                            <Input
                                title={"Email"}
                                isRequired
                                required
                                placeholder="Enter your mail..."
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            {phoneNumbers?.map((phoneNumber, index) => (
                                <div key={index} className="phone-input-container flex w-full  items-center">
                                    <Input
                                        title={"Phone Number"}
                                        isRequired
                                        required
                                        placeholder={`Add Phone Number ${index + 1}`}
                                        value={phoneNumber}
                                        onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                                    />
                                    {index > 0 && (
                                        <IconButton
                                            style={{ marginTop: '14px' }}
                                            onClick={() => handleRemovePhoneNumber(index)}
                                            color="error" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    )}
                                </div>
                            ))}
                            <button
                                className="bg-green-600 mt-3 text-white p-2 shadow-xl rounded-xl text-sm outline-none mr-2" 
                                onClick={handleAddPhoneNumber}
                                variant="contained" color="success" size="small">
                                Add More Number
                            </button>
                        </div>





                        <div>
                            {whatsappNumbers?.map((whatsappNumber, index) => (
                                <div key={index} className="phone-input-container flex w-full  items-center">
                                    <Input
                                        title={"Whatsapp Number"}
                                        isRequired
                                        required
                                        placeholder={`Add Whatsapp Number ${index + 1}`}
                                        value={whatsappNumber}
                                        onChange={(e) => handleWhatsappNumberChange(index, e.target.value)}
                                    />
                                    {index > 0 && (
                                        <IconButton
                                            style={{ marginTop: '14px' }}
                                            onClick={() => handleRemoveWhatsappNumber(index)}
                                            color="error" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    )}
                                </div>
                            ))}
                            <button
                               className="bg-green-600 mt-3 text-white p-2 shadow-xl rounded-xl text-sm outline-none mr-2" 
                                onClick={handleAddWhatsappNumber}
                                variant="contained" color="success" size="small">
                                Add More Number
                            </button>
                        </div>




                    </div>

                </div>
            </Container>
        </div>
    );
};

export default GeneralInfo;