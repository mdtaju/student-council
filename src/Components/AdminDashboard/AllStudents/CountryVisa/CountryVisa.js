import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useAddVisaStatusUpdateMutation } from "../../../../features/student/studentApi";
import SubmittedFiles from "./SubmittedFiles";

function CountryVisa({
  country,
  applications,
  studentId,
  approvalStatus = "",
}) {
  const [addVisaStatusUpdate] = useAddVisaStatusUpdateMutation();
  const [status, setStatus] = useState(approvalStatus);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoading(true);
    const makeData = {
      country,
      student_id: studentId,
      status: e.target.value,
    };
    addVisaStatusUpdate(makeData)
      .unwrap()
      .then((d) => {
        setStatus(e.target.value);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };
  return (
    <li className="p-2 border border-secondary rounded-md space-y-3">
      <div className="">
        <h4 className="text-lg font-medium">{`Country Name: ${country}`}</h4>
        <div>
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
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            )}
          </>
        </div>
      </div>
      <div className="">
        <div className=" space-y-4">
          {/* document visualization */}
          {applications.map((app, i) => (
            <div
              key={i}
              className="w-full min-h-[40%] border border-gray-300 p-1 rounded-md">
              <h1>{`Title: ${app.title}`}</h1>
              <p>{`Description: ${app.description}`}</p>
              {/* student uploaded files */}
              {app.submittedFiles.length ? (
                <div className="border border-gray-300 p-4 rounded-sm">
                  <h4>Student Uploaded Files</h4>
                  <div className="w-full min-h-[40%] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {app.submittedFiles?.map((file, i) => (
                      <SubmittedFiles key={i} file={file} />
                    ))}
                  </div>
                </div>
              ) : (
                <button className="primary_btn">Not Applied</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

export default CountryVisa;
