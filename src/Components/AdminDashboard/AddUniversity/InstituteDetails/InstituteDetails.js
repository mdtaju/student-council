import { Avatar } from "@mui/material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineFileText } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import formatBytes from "../../../../Utilities/GetFileSize";
import Input from "../../../Inputs/Input";
import SelectCountry from "../../../Inputs/SelectCountry";
import SelectInput from "../../../Inputs/SelectInput";
import TextArea from "../../../Inputs/TextArea";
import TextEditor from "../../../Inputs/TextEditor";

const InstituteDetails = ({
  instituteName,
  setInstituteName,
  countryOfInstitute,
  setCountryOfInstitute,
  cityOfInstitute,
  setCityOfInstitute,
  addressOfInstitute,
  setAddressOfInstitute,
  foundedYear,
  setFoundedYear,
  instituteId,
  setInstituteId,
  providerId,
  setProviderId,
  typeOfInstitute,
  setTypeOfInstitute,
  constOfLiving,
  setCostOfLiving,
  websiteUrl,
  setWebsiteUrl,
  qsRanging,
  setQsRanking,
  nationalRanking,
  setNationalRanking,
  worldRanking,
  setWorldRanking,
  youtubeLink,
  setYoutubeLink,
  institutePartnership,
  setInstitutePartnership,
  deliveryMethod,
  setDeliveryMethod,
  setInstituteLogo,
  uploadedLogo,
  instituteImages,
  setInstituteImages,
  instituteDocuments,
  setInstituteDocuments,
  aboutDocuments,
  setAboutDocuments,
  aboutInstitute,
  setAboutInstitute,
  commission,
  setCommission,
  mapLocation,
  setMapLocation,
  livingCostDuration,
  setLivingCostDuration,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        setInstituteImages((prevImages) => [...prevImages, file]);
      });
    },
    [setInstituteImages]
  );

  const onDocumentsDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        setInstituteDocuments((prevDoc) => [...prevDoc, file]);
      });
    },
    [setInstituteDocuments]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const {
    getRootProps: getDocumentsRootProps,
    getInputProps: getDocumentsInputProps,
  } = useDropzone({ onDrop: onDocumentsDrop });

  const partnershipOptions = ["", "B2B University", "Direct University"];

  const costOfLivingDuration = ["", "Weekly", "Monthly", "Yearly"];

  const deliveryMethods = ["", "In Class", "Online"];

  // remove local files handlers
  const handleRemoveLocalImgFile = (index) => {
    setInstituteImages((prevImages) => {
      return prevImages.filter((img, i) => i !== index);
    });
  };

  const handleRemoveLocalDocFile = (index) => {
    setInstituteDocuments((prevDocs) => {
      return prevDocs.filter((doc, i) => i !== index);
    });
  };

  return (
    <>
      <h1 className="text-xl font-semibold text-gray-700">Institute Details</h1>
      <div className="w-full space-y-3 md:space-y-0 md:grid md:grid-cols-3 gap-4 my-4">
        <Input
          title={"Institute Name"}
          // isRequired
          // required
          placeholder="Enter institute name"
          value={instituteName}
          onChange={(e) => setInstituteName(e.target.value)}
        />
        <SelectCountry
          title={"Country of Institute"}
          // isRequired
          // required
          placeholder="Select institute country"
          countryName={countryOfInstitute}
          setCountryName={setCountryOfInstitute}
          // value={countryOfInstitute}
          // onChange={(e) => setCountryOfInstitute(e.target.value)}
        />
        <Input
          type="text"
          title={"City of Institute"}
          // isRequired
          // required
          placeholder="Enter city name"
          value={cityOfInstitute}
          onChange={(e) => setCityOfInstitute(e.target.value)}
        />
        <Input
          type="text"
          title={"Address of Institute"}
          // isRequired
          // required
          placeholder="Enter address"
          value={addressOfInstitute}
          onChange={(e) => setAddressOfInstitute(e.target.value)}
        />
        <Input
          type="text"
          title={"Map Location"}
          // isRequired
          // required
          placeholder="Enter latitude and longitude"
          value={mapLocation}
          onChange={(e) => setMapLocation(e.target.value)}
        />

        <Input
          type="text"
          title={"Founded Year"}
          // isRequired
          // required
          placeholder="Enter year"
          value={foundedYear}
          onChange={(e) => setFoundedYear(e.target.value)}
        />
        <Input
          type="text"
          title={"Institute ID"}
          // isRequired
          // required
          placeholder="Enter ID"
          value={instituteId}
          onChange={(e) => setInstituteId(e.target.value)}
        />
        <Input
          type="text"
          title={"Provider ID"}
          // isRequired
          // required
          placeholder="Enter ID"
          value={providerId}
          onChange={(e) => setProviderId(e.target.value)}
        />
        <Input
          type="text"
          title={"Type of Institute"}
          // isRequired
          // required
          placeholder="Enter a type"
          value={typeOfInstitute}
          onChange={(e) => setTypeOfInstitute(e.target.value)}
        />
        <Input
          type="text"
          title={"Cost of Living"}
          // isRequired
          // required
          placeholder="Enter cost"
          value={constOfLiving}
          onChange={(e) => setCostOfLiving(e.target.value)}
        />
        <SelectInput
          title={"Cost Duration"}
          optionsArray={costOfLivingDuration}
          // isRequired
          selectState={livingCostDuration}
          setSelectState={setLivingCostDuration}
        />
        <Input
          type="url"
          title={"Website URL"}
          // isRequired
          // required
          placeholder="Enter URL"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
        <Input
          type="number"
          title={"QS Ranking"}
          // isRequired
          // required
          placeholder="Enter Ranking Number"
          value={qsRanging}
          onChange={(e) => setQsRanking(e.target.value)}
        />
        <Input
          type="number"
          title={"National Ranking"}
          // isRequired
          // required
          placeholder="Enter Ranking Number"
          value={nationalRanking}
          onChange={(e) => setNationalRanking(e.target.value)}
        />
        <Input
          type="number"
          title={"World Ranking"}
          // isRequired
          // required
          placeholder="Enter Ranking Number"
          value={worldRanking}
          onChange={(e) => setWorldRanking(e.target.value)}
        />
        <Input
          type="url"
          title={"Youtube Link"}
          // isRequired
          // required
          placeholder="Enter URL"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
        />
        <SelectInput
          title={"Institute Partnership"}
          optionsArray={partnershipOptions}
          // isRequired
          selectState={institutePartnership}
          setSelectState={setInstitutePartnership}
        />
        {institutePartnership === "B2B University" && (
          <Input
            title={"Commission"}
            type="text"
            // is// required
            placeholder="Enter amount"
            value={commission}
            onChange={(e) => setCommission(e.target.value)}
          />
        )}
        <SelectInput
          title={"Delivery Method"}
          optionsArray={deliveryMethods}
          // isRequired
          selectState={deliveryMethod}
          setSelectState={setDeliveryMethod}
        />
        <Input
          type="file"
          title={"Institute Logo"}
          // isRequired
          // required
          inputProps={{ accept: "image/*", multiple: false }}
          placeholder="Enter Ranking Number"
          // value={instituteLogo}
          onChange={(e) => setInstituteLogo([e.target.files[0]])}
        />
        {uploadedLogo && (
          <div className="space-y-1">
            <h1 className="text-sm font-medium text-gray-800">Uploaded Logo</h1>
            <Avatar
              src={uploadedLogo}
              sx={{ width: 42, height: 42 }}
              alt="logo"
            />
          </div>
        )}
        {/* institute images upload container start */}
        <div className="col-span-3">
          <h1 className="text-sm font-medium text-gray-800">
            Upload Institute Images
          </h1>

          <div className="w-full h-auto my-1 border border-dashed border-gray-400 bg-gray-100 rounded-md">
            {/* image visualization */}
            <div className="w-full min-h-[40%] border-b border-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-4">
              {instituteImages?.map((file, i) => (
                <div key={i} className="flex items-start gap-4 w-fit">
                  <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
                    <AiOutlineFileText className="text-2xl text-blue-400" />
                  </div>
                  <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
                    <h4 className="truncate">
                      {file?.name ? file?.name : file?.file_name}
                    </h4>
                    <h4 className="text-xs">
                      {formatBytes(file?.size ? file?.size : file?.file_size)} .{" "}
                      {file?.type
                        ? file?.type?.split("/")?.pop()?.toUpperCase()
                        : file?.file_name?.split(".")?.pop()?.toUpperCase()}
                    </h4>
                  </div>
                  {/* remove handler */}
                  <div
                    onClick={() => handleRemoveLocalImgFile(i)}
                    className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
                    <MdOutlineCancel className="text-lg text-red-500" />
                  </div>
                  {/* remove handler */}
                </div>
              ))}
            </div>
            <div
              {...getRootProps()}
              className="w-full h-[120px] p-4 grid place-items-center cursor-pointer">
              <input {...getInputProps()} />
              <h1 className="text-gray-800">
                click or drag and drop to select images
              </h1>
            </div>
          </div>
        </div>
        {/* institute images upload container end */}

        {/* institute documents upload container start */}
        <div className="col-span-3">
          <h1 className="text-sm font-medium text-gray-800">
            Required Institute Documents
          </h1>

          <div className="w-full min-h-[220px] h-auto mt-1 border border-dashed border-gray-400 bg-gray-100 rounded-md">
            {/* image visualization */}
            <div className="w-full min-h-[40%] border-b border-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-4">
              {instituteDocuments?.map((file, i) => (
                <div key={i} className="flex items-start gap-4 w-fit">
                  <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
                    <AiOutlineFileText className="text-2xl text-blue-400" />
                  </div>
                  <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px]">
                    <h4 className="truncate">
                      {file?.name ? file?.name : file?.file_name}
                    </h4>
                    <h4 className="text-xs">
                      {formatBytes(file?.size ? file?.size : file?.file_size)} .{" "}
                      {file?.type
                        ? file?.type?.split("/")?.pop()?.toUpperCase()
                        : file?.file_name?.split(".")?.pop()?.toUpperCase()}
                    </h4>
                  </div>
                  {/* remove handler start */}
                  <div
                    onClick={() => handleRemoveLocalDocFile(i)}
                    className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
                    <MdOutlineCancel className="text-lg text-red-500" />
                  </div>
                  {/* remove handler end */}
                </div>
              ))}
            </div>
            <div
              {...getDocumentsRootProps()}
              className="w-full h-[120px] p-4 grid place-items-center cursor-pointer">
              <input {...getDocumentsInputProps()} />
              <h1 className="text-gray-800">
                click or drag and drop to select images
              </h1>
            </div>
          </div>
        </div>
        {/* institute documents upload container end */}
        <div className="col-span-3">
          <TextArea
            title={"About Documents"}
            placeholder="Write about documents"
            // isRequired
            // required
            value={aboutDocuments}
            v={aboutDocuments}
            onChange={(e) => setAboutDocuments(e.target.value)}
          />
        </div>

        {/* <input type="file" name="" accept="im" id="" /> */}
        <div className="col-span-3">
          <TextEditor
            title={"About Institute"}
            // isRequired
            notes={aboutInstitute}
            setNotes={setAboutInstitute}
          />
        </div>
      </div>
    </>
  );
};

export default InstituteDetails;
