import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAddApplicationRequirementTimelineMutation } from "../../../../../../features/application/applicationApi";
import useAuth from "../../../../../../hooks/useAuth";

const Stepper = ({
  courseId,
  courseShortListId,
  universityQueryId,
  studentId,
  workflow,
}) => {
  const [addApplicationRequirementTimeline] =
    useAddApplicationRequirementTimelineMutation();
  const [status, setStatus] = useState("Reviewing");
  const [statusStepNo, setStatusStepNo] = useState(1);
  const auth = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (workflow) {
      setStatusStepNo(workflow?.status_number);
    }
  }, [workflow]);

  let statusStepForServer = statusStepNo;

  // change handler
  const handleChange = (e) => {
    setStatus(e.target.value);
    setLoading(true);

    if (e.target.value === "Complete") {
      if (statusStepForServer <= 6) {
        statusStepForServer = statusStepForServer + 1;
      } else {
        statusStepForServer = 7;
      }
    } else if (e.target.value === "Not-Complete") {
      if (statusStepForServer > 1) {
        statusStepForServer = statusStepForServer - 1;
      } else {
        statusStepForServer = 1;
      }
    }

    addApplicationRequirementTimeline({
      course_shortlist_id: courseShortListId?.id,
      university_query_id: universityQueryId,
      course_id: courseId,
      status_number: statusStepForServer,
      student_id: studentId,
      last_updated_by: auth?.id,
    })
      .unwrap()
      .then((d) => {
        if (e.target.value === "Complete") {
          setStatusStepNo((prevCount) => {
            if (prevCount <= 6) {
              return prevCount + 1;
            } else {
              return 7;
            }
          });
          if (statusStepNo >= 6) {
            setStatus("Complete");
          }
          setStatus("Reviewing");
        } else if (e.target.value === "Not-Complete") {
          setStatusStepNo((prevCount) => {
            if (prevCount > 1) {
              return prevCount - 1;
            } else {
              return 1;
            }
          });
          setStatus("Reviewing");
        }
        setLoading(false);
      })
      .catch((e) => {
        setStatus("Reviewing");
        setLoading(false);
      });
  };

  return (
    <div className="w-[300px] sm:w-[600px] md:w-[1200px] overflow-hidden">
      <div className="w-full flex items-start gap-6 overflow-x-scroll p-4">
        {/* Pay Application Fee */}
        <div className="flex flex-col items-center gap-2 min-w-[250px]">
          <div
            className={`w-[22px] h-[22px] rounded-full ${
              statusStepNo > 1 ? "bg-green-600" : "bg-blue-600"
            } grid place-items-center`}>
            {statusStepNo > 1 ? (
              <DoneIcon sx={{ width: "18px", height: "18px", fill: "white" }} />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ width: "18px", height: "18px", fill: "white" }}
              />
            )}
          </div>
          <h1>Pay Application Fee</h1>
          {auth?.user !== "Student" && (
            <>
              {statusStepNo === 1 && (
                <>
                  {loading ? (
                    <CircularProgress size={"22px"} />
                  ) : (
                    <select
                      name=""
                      id=""
                      value={status}
                      onChange={handleChange}
                      className="outline-none border border-gray-400 text-gray-700 rounded-lg text-xs font-semibold">
                      <option value="Reviewing">Reviewing</option>
                      <option value="Complete">Complete</option>
                      <option value="Not-Complete">Not-Complete</option>
                    </select>
                  )}
                </>
              )}
            </>
          )}
        </div>
        {/* Prepare Application */}
        <div className="relative flex flex-col items-center gap-2 min-w-[250px]">
          <div
            className={`w-[22px] h-[22px] rounded-full ${
              statusStepNo > 2 ? "bg-green-600" : "border border-gray-400"
            } ${
              statusStepNo === 2 ? "bg-blue-600 border-none" : ""
            } grid place-items-center`}>
            {statusStepNo > 2 ? (
              <DoneIcon sx={{ width: "18px", height: "18px", fill: "white" }} />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ width: "18px", height: "18px", fill: "white" }}
              />
            )}
          </div>
          <h1>Prepare Application</h1>
          {auth?.user !== "Student" && (
            <>
              {statusStepNo === 2 && (
                <>
                  {loading ? (
                    <CircularProgress size={"22px"} />
                  ) : (
                    <select
                      name=""
                      id=""
                      value={status}
                      onChange={handleChange}
                      className="outline-none border border-gray-400 text-gray-700 rounded-lg text-xs font-semibold">
                      <option value="Reviewing">Reviewing</option>
                      <option value="Complete">Complete</option>
                      <option value="Not-Complete">Not-Complete</option>
                    </select>
                  )}
                </>
              )}
            </>
          )}
          <div
            className={`w-[244px] h-[4px] ${
              statusStepNo >= 2 ? "bg-green-600" : "bg-gray-400"
            } absolute top-[8px] right-[56%]`}></div>
        </div>
        {/* Submission */}
        <div className="relative flex flex-col items-center gap-2 min-w-[250px]">
          <div
            className={`w-[22px] h-[22px] rounded-full ${
              statusStepNo > 3 ? "bg-green-600" : "border border-gray-400"
            } ${
              statusStepNo === 3 ? "bg-blue-600 border-none" : ""
            } grid place-items-center`}>
            {statusStepNo > 3 ? (
              <DoneIcon sx={{ width: "18px", height: "18px", fill: "white" }} />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ width: "18px", height: "18px", fill: "white" }}
              />
            )}
          </div>
          <h1>Submission</h1>
          {auth?.user !== "Student" && (
            <>
              {statusStepNo === 3 && (
                <>
                  {loading ? (
                    <CircularProgress size={"22px"} />
                  ) : (
                    <select
                      name=""
                      id=""
                      value={status}
                      onChange={handleChange}
                      className="outline-none border border-gray-400 text-gray-700 rounded-lg text-xs font-semibold">
                      <option value="Reviewing">Reviewing</option>
                      <option value="Complete">Complete</option>
                      <option value="Not-Complete">Not-Complete</option>
                    </select>
                  )}
                </>
              )}
            </>
          )}
          <div
            className={`w-[244px] h-[4px] ${
              statusStepNo >= 3 ? "bg-green-600" : "bg-gray-400"
            } absolute top-[8px] right-[56%]`}></div>
        </div>
        {/* Decision */}
        <div className="relative flex flex-col items-center gap-2 min-w-[250px]">
          <div
            className={`w-[22px] h-[22px] rounded-full ${
              statusStepNo > 4 ? "bg-green-600" : "border border-gray-400"
            } ${
              statusStepNo === 4 ? "bg-blue-600 border-none" : ""
            } grid place-items-center`}>
            {statusStepNo > 4 ? (
              <DoneIcon sx={{ width: "18px", height: "18px", fill: "white" }} />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ width: "18px", height: "18px", fill: "white" }}
              />
            )}
          </div>
          <h1>Decision</h1>
          {auth?.user !== "Student" && (
            <>
              {statusStepNo === 4 && (
                <>
                  {loading ? (
                    <CircularProgress size={"22px"} />
                  ) : (
                    <select
                      name=""
                      id=""
                      value={status}
                      onChange={handleChange}
                      className="outline-none border border-gray-400 text-gray-700 rounded-lg text-xs font-semibold">
                      <option value="Reviewing">Reviewing</option>
                      <option value="Complete">Complete</option>
                      <option value="Not-Complete">Not-Complete</option>
                    </select>
                  )}
                </>
              )}
            </>
          )}
          <div
            className={`w-[244px] h-[4px] ${
              statusStepNo >= 4 ? "bg-green-600" : "bg-gray-400"
            } absolute top-[8px] right-[56%]`}></div>
        </div>
        {/* Post-Decision Requirement */}
        <div className="relative flex flex-col items-center gap-2 min-w-[250px]">
          <div
            className={`w-[22px] h-[22px] rounded-full ${
              statusStepNo > 5 ? "bg-green-600" : "border border-gray-400"
            } ${
              statusStepNo === 5 ? "bg-blue-600 border-none" : ""
            } grid place-items-center`}>
            {statusStepNo > 5 ? (
              <DoneIcon sx={{ width: "18px", height: "18px", fill: "white" }} />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ width: "18px", height: "18px", fill: "white" }}
              />
            )}
          </div>
          <h1>Post-Decision Requirement</h1>
          {auth?.user !== "Student" && (
            <>
              {statusStepNo === 5 && (
                <>
                  {loading ? (
                    <CircularProgress size={"22px"} />
                  ) : (
                    <select
                      name=""
                      id=""
                      value={status}
                      onChange={handleChange}
                      className="outline-none border border-gray-400 text-gray-700 rounded-lg text-xs font-semibold">
                      <option value="Reviewing">Reviewing</option>
                      <option value="Complete">Complete</option>
                      <option value="Not-Complete">Not-Complete</option>
                    </select>
                  )}
                </>
              )}
            </>
          )}
          <div
            className={`w-[244px] h-[4px] ${
              statusStepNo >= 5 ? "bg-green-600" : "bg-gray-400"
            } absolute top-[8px] right-[56%]`}></div>
        </div>
        {/* Enrollment Confirmed */}
        <div className="relative flex flex-col items-center gap-2 min-w-[250px]">
          <div
            className={`w-[22px] h-[22px] rounded-full ${
              statusStepNo > 6 ? "bg-green-600" : "border border-gray-400"
            } ${
              statusStepNo === 6 ? "bg-blue-600 border-none" : ""
            } grid place-items-center`}>
            {statusStepNo > 6 ? (
              <DoneIcon sx={{ width: "18px", height: "18px", fill: "white" }} />
            ) : (
              <KeyboardArrowRightIcon
                sx={{ width: "18px", height: "18px", fill: "white" }}
              />
            )}
          </div>
          <h1>Enrollment Confirmed</h1>
          {auth?.user !== "Student" && (
            <>
              {statusStepNo >= 6 && (
                <>
                  {loading ? (
                    <CircularProgress size={"22px"} />
                  ) : (
                    <select
                      name=""
                      id=""
                      value={status}
                      onChange={handleChange}
                      className="outline-none border border-gray-400 text-gray-700 rounded-lg text-xs font-semibold">
                      <option value="Reviewing">Reviewing</option>
                      <option value="Complete">Complete</option>
                      <option value="Not-Complete">Not-Complete</option>
                    </select>
                  )}
                </>
              )}
            </>
          )}
          <div
            className={`w-[244px] h-[4px] ${
              statusStepNo >= 6 ? "bg-green-600" : "bg-gray-400"
            } absolute top-[8px] right-[56%]`}></div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;

// tajumd512ctg@gmail.com - student
// tajumdctg@gmail.com - admin
// tajumd@gmail.com - Counsellor_Admin 1
// hello@gmail.com - Counsellor_Admin 1
// hi@gmail.com - Counsellor_Admin 1
