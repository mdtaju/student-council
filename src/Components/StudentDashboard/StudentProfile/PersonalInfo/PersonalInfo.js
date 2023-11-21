import React, { memo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineFileText } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import formatBytes from "../../../../Utilities/GetFileSize";
import DateInput from "../../../Inputs/DateInput";
import Input from "../../../Inputs/Input";
import RadioInput from "../../../Inputs/RadioInut";
import SelectCountry from "../../../Inputs/SelectCountry";

const PersonalInfo = ({
  passport,
  setPassport,
  firstName,
  setFirstName,
  middleName,
  setMiddleName,
  lastName,
  setLastName,
  birthDate,
  setBirthDate,
  firstLanguage,
  setFirstLanguage,
  citizenship,
  setCitizenship,
  passportNum,
  setPassportNum,
  passportExpDate,
  setPassportExpDate,
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
  phone,
  setPhone,
  // from server
  passportFiles,
  setPassportFiles,
  personalInfo,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setPassport((prevState) => [...prevState, ...acceptedFiles]);
    },
    [setPassport]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "application/pdf": [".pdf"],
    },
  });

  const handleRemoveFile = (index) => {
    setPassport((prevFiles) => {
      const getFiles = prevFiles?.filter((file, i) => i !== index);
      return getFiles;
    });
  };

  const handleServerFileRemove = (index) => {
    setPassportFiles((prevFiles) => {
      const getFiles = prevFiles?.filter((file, i) => i !== index);
      return getFiles;
    });
  };

  const handleMaritalStatus = (value) => {
    setMaritalStatus(value);
  };
  const handleGender = (value) => {
    setGender(value);
  };

  const maritalOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
  ];

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  return (
    <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-600">Personal Information</h1>
      <h4 className="text-lg font-normal text-gray-400 my-3">
        (As indicated on your passport)
      </h4>
      {passportFiles.length > 0 && (
        <>
          <p className="text-sm">Uploaded files</p>
          {/* contain files */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2 mb-6 p-4 border border-gray-300 rounded-lg">
            {/* file */}
            {passportFiles?.map((file, i) => (
              <div key={i} className="flex items-start gap-4 w-fit">
                <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
                  <AiOutlineFileText className="text-2xl text-blue-400" />
                </div>
                <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
                  <h4 className="truncate">{file?.file_name}</h4>
                  <h4 className="text-xs">
                    {formatBytes(+file?.file_size)} .{" "}
                    {file?.file_extension?.toUpperCase()}
                  </h4>
                </div>
                <div
                  onClick={() => handleServerFileRemove(i)}
                  className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
                  <MdOutlineCancel className="text-lg text-red-500" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <p className="text-base text-gray-400">
        Upload passport (Accepted Files: png, jpg, jpeg, pdf)
      </p>
      {/* start contain files and upload button */}
      <div className="w-full mt-3 mb-6 p-6 border-2 border-dashed border-gray-300 rounded-lg">
        {/* contain files */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-4 border-b border-gray-300">
          {/* file */}
          {passport?.map((file, i) => (
            <div key={i} className="flex items-start gap-4 w-fit">
              <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
                <AiOutlineFileText className="text-2xl text-blue-400" />
              </div>
              <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
                <h4 className="truncate">{file?.name}</h4>
                <h4 className="text-xs">
                  {formatBytes(file?.size)} .{" "}
                  {file?.type?.split("/")?.pop()?.toUpperCase()}
                </h4>
              </div>
              <div
                onClick={() => handleRemoveFile(i)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
                <MdOutlineCancel className="text-lg text-red-500" />
              </div>
            </div>
          ))}
        </div>

        {/* upload button */}
        <div
          {...getRootProps()}
          className="px-6 py-2 border border-gray-300 text-gray-400 rounded-md grid place-items-center w-fit mx-auto mt-4 cursor-pointer active:scale-95 duration-200">
          <input {...getInputProps()} />
          <div className="w-fit flex items-center gap-1">
            <BsPlus className="text-3xl" />
            <span>Add File</span>
          </div>
        </div>
      </div>
      {/* end contain files and upload button */}

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
        <Input
          title={"First Language"}
          isRequired
          required
          placeholder="Enter Last Name..."
          type="text"
          value={firstLanguage}
          onChange={(e) => setFirstLanguage(e.target.value)}
        />
        <SelectCountry
          title={"Country of Citizenship"}
          isRequired
          countryName={citizenship}
          setCountryName={setCitizenship}
          placeholder="Search a country"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6">
        <Input
          title={"Password Number"}
          isRequired
          required
          placeholder="Enter Password Number..."
          type="number"
          value={passportNum}
          onChange={(e) => setPassportNum(e.target.value)}
        />
        <DateInput
          title="Passport Expiry Date"
          isRequired={true}
          value={passportExpDate}
          onChange={(newValue) => {
            setPassportExpDate(newValue);
          }}
          format="DD-MM-YYYY"
          required
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
      <h1 className="text-lg font-bold text-gray-600">Address Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
        <div className="col-span-2">
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
        <Input
          title={"Email"}
          isRequired
          required
          placeholder="Enter your mail..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title={"Phone Number"}
          isRequired
          required
          placeholder="017********"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </div>
  );
};

export default memo(PersonalInfo);
