import React, { useState } from "react";
import Input from "../../../Inputs/Input";
import RadioInput from "../../../Inputs/RadioInut";
import TextEditor from "../../../Inputs/TextEditor";
import CustomNote from "./CustomNote";

const ApplicationRequirement = ({ requirements, setRequirements }) => {
  const [appRequirement, setAppRequirement] = useState(false);
  const [applicationType, setApplicationType] = useState("");
  const [requirementType, setRequirementType] = useState("");
  const [title, setTitle] = useState("");
  const [aboutRequirement, setAboutRequirement] = useState("");
  const [documentOption, setDocumentOption] = useState("");
  const [noteOption, setNoteOption] = useState("");
  const [notes, setNotes] = useState([]);

  // index number of selected element for update
  const [updateIndex, setUpdateIndex] = useState("");

  // useEffect(() => {
  //   setApplicationType("");
  //   setRequirementType("");
  //   setDocumentOption("");
  //   setNoteOption("");
  //   setTitle("");
  //   setAboutRequirement("");
  //   setNotes([]);
  // }, [requirements]);

  const handleSaveRequirement = () => {
    const makeRequirement = {
      application_type: applicationType,
      requirement_type: requirementType,
      title,
      about_requirement: aboutRequirement,
      document_option: documentOption,
      note_option: noteOption,
      note_questions: notes,
    };
    // update operation start
    if (updateIndex === 0 || updateIndex > 0) {
      setRequirements((prevReq) => {
        const getReq = prevReq.map((req, i) => {
          if (updateIndex === i) {
            return {
              ...req,
              ...makeRequirement,
            };
          } else {
            return req;
          }
        });
        return getReq;
      });
      setApplicationType("");
      setRequirementType("");
      setTitle("");
      setAboutRequirement("");
      setDocumentOption("");
      setNoteOption("");
      setNotes([]);
      setUpdateIndex("");
      setAppRequirement(false);
      return;
    }
    // update operation end
    setRequirements((prevRe) => [...prevRe, makeRequirement]);
    setApplicationType("");
    setRequirementType("");
    setTitle("");
    setAboutRequirement("");
    setDocumentOption("");
    setNoteOption("");
    setNotes([]);
    setUpdateIndex("");
    setAppRequirement(false);
  };

  const handleCancel = () => {
    setAppRequirement(false);
    setApplicationType("");
    setRequirementType("");
    setTitle("");
    setAboutRequirement("");
    setDocumentOption("");
    setNoteOption("");
    setNotes([]);
    setUpdateIndex("");
  };

  const handleDelete = (index) => {
    setRequirements((prevRe) => {
      return prevRe.filter((re, i) => i !== index);
    });
  };

  // edit handler
  const handleEdit = (req, index) => {
    setUpdateIndex(index);
    // set req to states
    setApplicationType(req?.application_type);
    setRequirementType(req?.requirement_type);
    setTitle(req?.title);
    setAboutRequirement(req?.about_requirement);
    setDocumentOption(req?.document_option);
    setNoteOption(req?.note_option);
    setNotes(req?.note_questions);
    setAppRequirement(true);
  };

  const applicationTypes = [
    { value: "Pre-Payment", label: "Pre-Payment" },
    { value: "Pre-Submission", label: "Pre-Submission" },
    { value: "Post-Submission", label: "Post-Submission" },
    { value: "Admission", label: "Admission" },
    { value: "Pre-Arrival", label: "Pre-Arrival" },
  ];

  const requirementTypes = [
    { value: "Required", label: "Required" },
    { value: "Optional", label: "Optional" },
  ];

  const documentOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const handleApplicationType = (value) => {
    setApplicationType(value);
  };

  const handleRequirementType = (value) => {
    setRequirementType(value);
  };

  const handleDocumentOption = (value) => {
    setDocumentOption(value);
  };

  const handleNoteOption = (value) => {
    setNoteOption(value);
  };

  // note check
  function noteQuestionCheck(obj) {
    const typeOf = typeof obj;
    if (typeOf === "string") {
      return obj;
    }
    return obj.title;
  }

  return (
    <>
      <h1 className="mt-6 mb-4 text-xl font-semibold text-gray-700">
        Application Requirement
      </h1>

      {requirements?.map((req, i) => (
        <div
          key={i}
          className="p-4 border border-green-300 bg-gray-100 rounded-md mb-3">
          <h1 className="text-green-500 text-center mb-3 underline font-bold">
            Requirement: {i + 1}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-3">
            <div>
              <h1 className="text-sm font-medium">Application Type:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {req.application_type}
              </p>
            </div>
            <div>
              <h1 className="text-sm font-medium">Requirement Type:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {req.requirement_type}
              </p>
            </div>
            <div>
              <h1 className="text-sm font-medium">Document Option:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {req.document_option}
              </p>
            </div>
            <div>
              <h1 className="text-sm font-medium">Note Option:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {req.note_option}
              </p>
            </div>
            {req?.note_questions?.map((n, i) => (
              <div key={i}>
                <h1 className="text-sm font-medium">Note Question {i + 1}:</h1>
                <p className="text-normal font-semibold text-gray-700">
                  {noteQuestionCheck(n)}
                </p>
              </div>
            ))}
          </div>
          <h1 className="text-sm font-medium">Title:</h1>
          <h1 className="text-base font-semibold text-gray-700">{req.title}</h1>
          <div className="my-3">
            <h1 className="text-sm font-medium">About Requirement:</h1>
            <div
              className="mt-2 p-3 border border-gray-200 rounded-md"
              dangerouslySetInnerHTML={{
                __html: req.about_requirement,
              }}></div>
          </div>
          {/* delete and edit handler container start */}
          <div className="flex items-center gap-4">
            <div>
              <div
                className="w-fit h-fit px-4 py-1 text-white bg-red-500 hover:bg-red-600 active:scale-95 duration-200 rounded-md cursor-pointer"
                onClick={() => handleDelete(i)}>
                Delete
              </div>
            </div>
            <div>
              <div
                className="w-fit h-fit px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer"
                onClick={() => handleEdit(req, i)}>
                Edit
              </div>
            </div>
          </div>
          {/* delete and edit handler container end */}
        </div>
      ))}

      {appRequirement && (
        <div className="w-full md:grid md:grid-cols-2 space-y-3 md:space-y-0 gap-4 my-4">
          <div className="sm:col-span-2">
            <RadioInput
              title={"Application Type"}
              // isRequired
              // required
              name="applicationType"
              options={applicationTypes}
              selectedValue={applicationType}
              onChange={handleApplicationType}
            />
          </div>
          <RadioInput
            title={"Requirement Type"}
            // is// Required
            // required
            name="requirementType"
            options={requirementTypes}
            selectedValue={requirementType}
            onChange={handleRequirementType}
          />
          <RadioInput
            title={"Document option"}
            // is// Required
            // required
            name="documentOption"
            options={documentOptions}
            selectedValue={documentOption}
            onChange={handleDocumentOption}
          />
          <RadioInput
            title={"Note option"}
            // is// Required
            // required
            name="noteOption"
            options={documentOptions}
            selectedValue={noteOption}
            onChange={handleNoteOption}
          />
          {/* <div>
            <p className="text-xs font-medium">There will be documents</p>
            <Switch
              checked={documentOption}
              // onChange={handleGreChange}
              onClick={() => setDocumentOption((prevValue) => !prevValue)}
              inputProps={{ "aria-label": "controlled A" }}
            />
          </div> */}
          {/* custom note question */}
          {noteOption === "Yes" && (
            <CustomNote notes={notes} setNotes={setNotes} />
          )}
          <div className="col-span-3">
            <Input
              title={"Title"}
              placeholder="Enter title"
              // is// Required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-span-3">
            <TextEditor
              title={"About Requirement"}
              // is// Required
              notes={aboutRequirement}
              setNotes={setAboutRequirement}
            />
          </div>

          <div className="w-fit col-span-3 ml-auto flex items-center gap-4">
            <div
              className="px-4 py-1 text-white bg-gray-500 hover:bg-gray-600 active:scale-95 duration-200 rounded-md cursor-pointer"
              onClick={handleCancel}>
              Cancel
            </div>
            <div
              onClick={handleSaveRequirement}
              className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
              Save
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setAppRequirement(true)}
        className=" px-6 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-full">
        Add Requirement
      </button>
    </>
  );
};

export default ApplicationRequirement;
