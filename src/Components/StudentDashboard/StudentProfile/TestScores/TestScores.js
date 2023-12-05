import React, { memo } from "react";
import DateInput from "../../../Inputs/DateInput";
import Input from "../../../Inputs/Input";
import SelectInput from "../../../Inputs/SelectInput";

const TestScores = ({
  engExamType,
  setEngExamType,
  engExamDate,
  setEngExamDate,
  engListening,
  setEngListening,
  engReading,
  setEngReading,
  engWriting,
  setEngWriting,
  engSpecking,
  setEngSpecking,
  engOverall,
  setEngOverall,
}) => {
  const examType = [
    "",
    "I don't have this",
    "I will provide this later",
    "Without English Proficiency",
    "TOEFL",
    "IELTS",
    "Duolingo English Test",
    "PTE",
  ];
  return (
    <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-600">Test Scores</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 my-6">
        <SelectInput
          title={"English Exam Type"}
          placeholder="Select exam type"
          isRequired
          selectState={engExamType}
          setSelectState={setEngExamType}
          optionsArray={examType}
        />
        {(engExamType === "TOEFL" ||
          engExamType === "IELTS" ||
          engExamType === "Duolingo English Test" ||
          engExamType === "PTE") && (
          <DateInput
            title="Date of Exam"
            isRequired={true}
            format="DD-MM-YYYY"
            value={engExamDate}
            onChange={(value) => setEngExamDate(value)}
            disableFuture={true}
          />
        )}
        {(engExamType === "TOEFL" ||
          engExamType === "IELTS" ||
          engExamType === "PTE") && (
          <>
            <Input
              title={"Listening"}
              isRequired
              required
              placeholder="L:"
              type="number"
              value={engListening}
              onChange={(e) => setEngListening(e.target.value)}
              max={10}
              min={0}
            />
            <Input
              title={"Reading"}
              isRequired
              required
              placeholder="R:"
              type="number"
              value={engReading}
              onChange={(e) => setEngReading(e.target.value)}
              max={10}
              min={0}
            />
            <Input
              title={"Writing"}
              isRequired
              required
              placeholder="W:"
              type="number"
              value={engWriting}
              onChange={(e) => setEngWriting(e.target.value)}
              max={10}
              min={0}
            />
            <Input
              title={"Specking"}
              isRequired
              required
              placeholder="S:"
              type="number"
              value={engSpecking}
              onChange={(e) => setEngSpecking(e.target.value)}
              max={10}
              min={0}
            />
          </>
        )}
        {(engExamType === "Duolingo English Test" || engExamType === "PTE") && (
          <Input
            title={"Overall"}
            isRequired
            required
            placeholder="Overall Score"
            type="number"
            value={engOverall}
            onChange={(e) => setEngOverall(e.target.value)}
            max={10}
            min={0}
          />
        )}
      </div>
    </div>
  );
};

export default memo(TestScores);
