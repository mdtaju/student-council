import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import WarningIcon from "@mui/icons-material/Warning";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddApplicationRequirementStatusMutation } from "../../../../../../../../../../features/application/applicationApi";
import useAuth from "../../../../../../../../../../hooks/useAuth";

function RequirementStatus({
  reqId,
  queryId,
  courseId,
  applicationType,
  reqStatus,
  setReqStatus,
}) {
  const [currStatus, setCurrStatus] = useState(reqStatus || "Missing");
  const [addApplicationRequirementStatus] =
    useAddApplicationRequirementStatusMutation();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const auth = useAuth();

  const handleChange = (e) => {
    setIsLoading(true);
    let prevStatus = currStatus;

    setCurrStatus(e.target.value);
    setReqStatus(e.target.value);

    addApplicationRequirementStatus({
      course_shortlist_id: id,
      university_query_id: queryId,
      course_id: courseId,
      req_id: reqId,
      updated_by: auth?.id,
      req_type: applicationType,
      status: e.target.value,
    })
      .unwrap()
      .then((d) => {
        setIsLoading(false);
      })
      .catch((e) => {
        setCurrStatus(prevStatus);
        setReqStatus(prevStatus);
        setIsLoading(false);
      });
  };

  return (
    <div>
      {/* status view */}
      {isLoading ? (
        <div className="text-center">
          <CircularProgress size={"22px"} />
        </div>
      ) : (
        <>
          {currStatus === "Missing" && (
            <div className="flex flex-col items-center text-xs font-bold gap-1 text-orange-500">
              <WarningIcon />
              <span>Missing</span>
            </div>
          )}
          {currStatus === "Reviewing" && (
            <div className="flex flex-col items-center text-xs font-bold gap-1 text-blue-500">
              <HourglassEmptyIcon />
              <span>Reviewing</span>
            </div>
          )}
          {currStatus === "Not-Approved" && (
            <div className="flex flex-col items-center text-xs font-bold gap-1 text-red-500">
              <CloseIcon />
              <span>Not-Approved</span>
            </div>
          )}
          {currStatus === "Completed" && (
            <div className="flex flex-col items-center text-xs font-bold gap-1 text-green-500">
              <DoneIcon />
              <span>Completed</span>
            </div>
          )}
        </>
      )}
      {/* action of status */}
      {auth?.user !== "Student" && (
        <select
          disabled={isLoading}
          name=""
          id=""
          value={currStatus}
          onChange={handleChange}
          className="outline-none border border-gray-400 text-gray-700 rounded-lg text-xs font-semibold">
          <option value="Missing">Missing</option>
          <option value="Reviewing">Reviewing</option>
          <option value="Not-Approved">Not-Approved</option>
          <option value="Completed">Completed</option>
        </select>
      )}
    </div>
  );
}

export default RequirementStatus;
