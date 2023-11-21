import React, { memo } from "react";
import RadioInput from "../../../Inputs/RadioInut";
import SelectChip from "../../../Inputs/SelectChip";
import TextArea from "../../../Inputs/TextArea";

const BackgroundInfo = ({
  isRefusedVisa,
  setIsRefusedVisa,
  studyPermitVisa,
  setStudyPermitVisa,
  refusedVisaAns,
  setRefusedVisaAns,
}) => {
  // const [visaInfo, setVisaInfo] = useState("No");
  // const [studyPermitVisa, setStudyPermitVisa] = useState([]);

  const handlerVisaChange = (value) => {
    setIsRefusedVisa(value);
  };

  const visaInfoOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  //   study visa options
  const visaOptions = [
    "I don't have this",
    "USA F1 Visa",
    "Canadian Study Permit or Visitor Visa",
    "UK Student Visa (Tier 4) or Short Term Study Visa",
    "Australia Student Visa",
    "Irish Stamp 2",
  ];

  //   visa options handel change
  const handleChange = (e, v) => {
    if (v?.includes("I don't have this")) {
      return setStudyPermitVisa(["I don't have this"]);
    }
    setStudyPermitVisa(
      // On autofill we get a stringified value.
      typeof v === "string" ? v?.split(",") : v
    );
  };
  return (
    <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-600">
        Background Information
      </h1>
      <div className="my-6">
        <RadioInput
          title={
            "Have you been refused a visa from Canada, the USA, the United Kingdom, New Zealand, Australia or Ireland?"
          }
          isRequired
          options={visaInfoOptions}
          selectedValue={isRefusedVisa}
          onChange={handlerVisaChange}
        />
      </div>
      <SelectChip
        title="Do you have a valid Study Permit / Visa?"
        options={visaOptions}
        stateArr={studyPermitVisa}
        isRequired
        setStateArr={setStudyPermitVisa}
        onChangeHandler={handleChange}
      />
      <div className="my-6">
        <TextArea
          title={`If you answered "Yes" to any of the questions above, please provide more details below:`}
          placeholder={"Provide details..."}
          isRequired={isRefusedVisa === "Yes"}
          required={isRefusedVisa === "Yes"}
          value={refusedVisaAns}
          onChange={(e) => setRefusedVisaAns(e.target.value)}
        />
      </div>
    </div>
  );
};

export default memo(BackgroundInfo);
