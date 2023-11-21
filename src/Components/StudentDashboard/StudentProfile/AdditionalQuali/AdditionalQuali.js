import { Switch } from "@mui/material";
import React, { memo } from "react";
import DateInput from "../../../Inputs/DateInput";
import Input from "../../../Inputs/Input";

const AdditionalQuali = ({
  isGREExam,
  setIsGREExam,
  greExamDate,
  setGREExamDate,
  greVerbalScore,
  setGREVerbalScore,
  greVerbalRank,
  setGREVerbalRank,
  greQuantitativeScore,
  setGREQuantitativeScore,
  greQuantitativeRank,
  setGREQuantitativeRank,
  greWritingScore,
  setGREWritingScore,
  greWritingRank,
  setGREWritingRank,
  isGMATExam,
  setIsGMATExam,
  GMATExamDate,
  setGMATExamDate,
  GMATVerbalScore,
  setGMATVerbalScore,
  GMATVerbalRank,
  setGMATVerbalRank,
  GMATQuantitativeScore,
  setGMATQuantitativeScore,
  GMATQuantitativeRank,
  setGMATQuantitativeRank,
  GMATWritingScore,
  setGMATWritingScore,
  GMATWritingRank,
  setGMATWritingRank,
  GMATTotalScore,
  setGMATTotalScore,
  GMATTotalRank,
  setGMATTotalRank,
}) => {
  // const handleGreChange = (event) => {
  //   // setIsGREExam(event.target.checked);
  //   setIsGREExam((prevS) => !prevS);
  // };

  // const handleGmatChange = (event) => {
  //   // setIsGMATExam(event.target.checked);
  //   setIsGMATExam((prevS) => !prevS);
  // };
  return (
    <div className="shadow-md w-full p-4 sm:p-6 bg-white rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-600">
        Additional Qualifications
      </h1>
      <div>
        <div className="mt-6">
          <p className="text-xs font-medium">I have GRE exam scores</p>
          <Switch
            checked={isGREExam}
            // onChange={handleGreChange}
            onClick={() => setIsGREExam((prevValue) => !prevValue)}
            inputProps={{ "aria-label": "controlled A" }}
          />
        </div>
        {/* gre exam inputs */}
        {isGREExam && (
          <div>
            <div className="w-full flex flex-col md:flex-row items-start gap-4">
              <div className="w-[170px]">
                <DateInput
                  title="GRE Exam Date"
                  isRequired
                  format="DD-MM-YYYY"
                  value={greExamDate}
                  onChange={(value) => setGREExamDate(value)}
                  disableFuture
                />
              </div>
              <div className="flex items-start">
                <div className="w-[120px]">
                  <Input
                    title={"Verbal"}
                    //     isRequired
                    //     required
                    placeholder="Score"
                    type="number"
                    min={0}
                    value={greVerbalScore}
                    onChange={(e) => setGREVerbalScore(e.target.value)}
                  />
                  <Input
                    title={""}
                    //     isRequired
                    //     required
                    placeholder="Rank %"
                    type="number"
                    min={0}
                    value={greVerbalRank}
                    onChange={(e) => setGREVerbalRank(e.target.value)}
                  />
                </div>
                <div className="w-[120px]">
                  <Input
                    title={"Quantitative"}
                    //     isRequired
                    //     required
                    placeholder="Score"
                    type="number"
                    min={0}
                    value={greQuantitativeScore}
                    onChange={(e) => setGREQuantitativeScore(e.target.value)}
                  />
                  <Input
                    title={""}
                    //     isRequired
                    //     required
                    placeholder="Rank %"
                    type="number"
                    min={0}
                    value={greQuantitativeRank}
                    onChange={(e) => setGREQuantitativeRank(e.target.value)}
                  />
                </div>
                <div className="w-[120px]">
                  <Input
                    title={"Writing"}
                    //     isRequired
                    //     required
                    placeholder="Score"
                    type="number"
                    min={0}
                    value={greWritingScore}
                    onChange={(e) => setGREWritingScore(e.target.value)}
                  />
                  <Input
                    title={""}
                    //     isRequired
                    //     required
                    placeholder="Rank %"
                    type="number"
                    min={0}
                    value={greWritingRank}
                    onChange={(e) => setGREWritingRank(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-6">
          <p className="text-xs font-medium">I have GMAT exam scores</p>
          <Switch
            checked={isGMATExam}
            // onChange={handleGmatChange}
            onClick={() => setIsGMATExam((prevValue) => !prevValue)}
            inputProps={{ "aria-label": "controlled B" }}
          />
        </div>
        {/* gmat exam inputs */}
        {isGMATExam && (
          <div>
            <div className="w-full flex flex-col md:flex-row items-start gap-4">
              <div className="w-[170px]">
                <DateInput
                  title="GMAT Exam Date"
                  isRequired
                  format="DD-MM-YYYY"
                  value={GMATExamDate}
                  onChange={(value) => setGMATExamDate(value)}
                  disableFuture
                />
              </div>
              <div className="flex items-start">
                <div className="w-[120px]">
                  <Input
                    title={"Verbal"}
                    //     isRequired
                    //     required
                    placeholder="Score"
                    type="number"
                    min={0}
                    value={GMATVerbalScore}
                    onChange={(e) => setGMATVerbalScore(e.target.value)}
                  />
                  <Input
                    title={""}
                    //     isRequired
                    //     required
                    placeholder="Rank %"
                    type="number"
                    min={0}
                    value={GMATVerbalRank}
                    onChange={(e) => setGMATVerbalRank(e.target.value)}
                  />
                </div>
                <div className="w-[120px]">
                  <Input
                    title={"Quantitative"}
                    //     isRequired
                    //     required
                    placeholder="Score"
                    type="number"
                    min={0}
                    value={GMATQuantitativeScore}
                    onChange={(e) => setGMATQuantitativeScore(e.target.value)}
                  />
                  <Input
                    title={""}
                    //     isRequired
                    //     required
                    placeholder="Rank %"
                    type="number"
                    min={0}
                    value={GMATQuantitativeRank}
                    onChange={(e) => setGMATQuantitativeRank(e.target.value)}
                  />
                </div>
                <div className="w-[120px]">
                  <Input
                    title={"Writing"}
                    //     isRequired
                    //     required
                    placeholder="Score"
                    type="number"
                    min={0}
                    value={GMATWritingScore}
                    onChange={(e) => setGMATWritingScore(e.target.value)}
                  />
                  <Input
                    title={""}
                    //     isRequired
                    //     required
                    placeholder="Rank %"
                    type="number"
                    min={0}
                    value={GMATWritingRank}
                    onChange={(e) => setGMATWritingRank(e.target.value)}
                  />
                </div>
                <div className="w-[120px]">
                  <Input
                    title={"Total"}
                    //     isRequired
                    //     required
                    placeholder="Score"
                    type="number"
                    min={0}
                    value={GMATTotalScore}
                    onChange={(e) => setGMATTotalScore(e.target.value)}
                  />
                  <Input
                    title={""}
                    //     isRequired
                    //     required
                    placeholder="Rank %"
                    type="number"
                    min={0}
                    value={GMATTotalRank}
                    onChange={(e) => setGMATTotalRank(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(AdditionalQuali);
