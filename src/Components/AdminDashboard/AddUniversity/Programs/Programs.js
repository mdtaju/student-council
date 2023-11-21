import { Cancel } from "@mui/icons-material";
import moment from "moment/moment";
import React, { useState } from "react";
import DateInput from "../../../Inputs/DateInput";
import Input from "../../../Inputs/Input";

const Programs = ({ programs, setPrograms }) => {
  const [addPrograms, setAddPrograms] = useState(false);

  const [title, setTitle] = useState("");
  const [intakeDate, setIntakeDate] = useState(null);
  const [deadline, setDeadline] = useState(null);
  const [grassTuition, setGrassTuition] = useState("");
  const [applicationFee, setApplicationFee] = useState("");
  const [commission, setCommission] = useState("");

  //   handle add or save program
  const handleAddProgram = () => {
    const program = {
      title,
      intake_date: intakeDate,
      deadline,
      grass_tuition: grassTuition,
      application_fee: applicationFee,
      commission,
    };
    setPrograms((prevPrograms) => [...prevPrograms, program]);

    //     input reset
    setTitle("");
    setIntakeDate(null);
    setDeadline(null);
    setGrassTuition("");
    setApplicationFee("");
    setCommission("");
  };

  // handle cancel to add program
  const handleCancel = () => {
    setAddPrograms(false);
    setTitle("");
    setIntakeDate(null);
    setDeadline(null);
    setGrassTuition("");
    setApplicationFee("");
    setCommission("");
  };

  //   program delete handler
  const handleDeleteProgram = (index) => {
    setPrograms((prevProg) => {
      return prevProg.filter((p, i) => i !== index);
    });
  };

  return (
    <>
      <h1 className="mt-6 text-xl font-semibold text-gray-700">Programs</h1>
      {programs?.map((p, i) => (
        <div key={i} className="my-4 pb-4 border-b border-gray-300">
          <div className="flex gap-4 items-start justify-between">
            <h1 className="text-lg font-medium text-gray-700">{p.title}</h1>
            {/* delete handler */}
            <div
              onClick={() => handleDeleteProgram(i)}
              className="w-[32px] h-[32px] bg-red-300 hover:bg-red-500 active:scale-95 duration-200 text-white rounded-full grid place-items-center cursor-pointer">
              <Cancel />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 mt-4">
            <div className="">
              <h3 className="text-sm font-medium text-gray-700">
                Earliest Intake Date
              </h3>
              <p className="text-lg font-normal text-gray-700">
                {moment(p.intake_date._d).format("LL")}
              </p>
            </div>
            <div className="">
              <h3 className="text-sm font-medium text-gray-700">Deadline</h3>
              <p className="text-lg font-normal text-gray-700">
                {moment(p.deadline._d).format("LL")}
              </p>
            </div>
            <div className="">
              <h3 className="text-sm font-medium text-gray-700">
                Grass Tuition
              </h3>
              <p className="text-lg font-normal text-gray-700">
                {p.grass_tuition}
              </p>
            </div>
            <div className="">
              <h3 className="text-sm font-medium text-gray-700">
                Application Fee
              </h3>
              <p className="text-lg font-normal text-gray-700">
                {p.application_fee}
              </p>
            </div>
            <div className="">
              <h3 className="text-sm font-medium text-gray-700">Commission</h3>
              <p className="text-lg font-normal text-gray-700">
                {p.commission}
              </p>
            </div>
          </div>
        </div>
      ))}
      {addPrograms && (
        <div className="grid grid-cols-3 gap-4 my-4">
          <Input
            title={"Title"}
            // is// required
            placeholder="Add a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DateInput
            title={"Earliest Intake Date"}
            // is// required
            // required
            format="DD-MM-YYYY"
            value={intakeDate}
            onChange={(e) => setIntakeDate(e)}
          />
          <DateInput
            title={"Deadline"}
            // is// required
            // required
            format="DD-MM-YYYY"
            value={deadline}
            onChange={(e) => setDeadline(e)}
          />
          <Input
            title={"Grass Tuition"}
            type="number"
            // is// required
            placeholder="Enter amount"
            value={grassTuition}
            onChange={(e) => setGrassTuition(e.target.value)}
          />
          <Input
            title={"Application Fee"}
            type="number"
            // is// required
            placeholder="Enter amount"
            value={applicationFee}
            onChange={(e) => setApplicationFee(e.target.value)}
          />
          <Input
            title={"Commission"}
            type="number"
            // is// required
            placeholder="Enter amount"
            value={commission}
            onChange={(e) => setCommission(e.target.value)}
          />
          {/* action buttons container start */}
          <div className="w-fit col-span-3 ml-auto flex items-center gap-4">
            <div
              className="px-4 py-1 text-white bg-gray-500 hover:bg-gray-600 active:scale-95 duration-200 rounded-md cursor-pointer"
              onClick={handleCancel}>
              Cancel
            </div>
            <div
              onClick={handleAddProgram}
              className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
              Save
            </div>
          </div>
          {/* action buttons container end */}
        </div>
      )}
      <button
        onClick={() => setAddPrograms(true)}
        className="px-6 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-full">
        Add Program
      </button>
    </>
  );
};

export default Programs;
