import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import RemoveIcon from "@mui/icons-material/Remove";
import WarningIcon from "@mui/icons-material/Warning";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../../../../../hooks/useAuth";
import PrePaymentApplication from "./PrePaymentApplication/PrePaymentApplication";

const ApplicationRequirement = ({ course_req = [] }) => {
  const auth = useAuth();
  const [prePaymentOpen, setPrePaymentOpen] = useState(true);
  const [postSubmission, setPostSubmission] = useState(true);
  const [preSubmission, setPreSubmission] = useState(true);
  const [admission, setAdmission] = useState(true);
  const [preArrival, setPreArrival] = useState(true);
  // req states
  const [prePayReq, setPrePayReq] = useState([]);
  const [postSubReq, setPostSubReq] = useState([]);
  const [preSubReq, setPreSubReq] = useState([]);
  const [admissionReq, setAdmissionReq] = useState([]);
  const [preAriReq, setPreAriReq] = useState([]);

  // req header count states
  const [prePaymentStatus, setPrePaymentStatus] = useState({
    missing: 0,
    reviewing: 0,
    rejected: 0,
    completed: 0,
  });

  const [postSubmissionStatus, setPostSubmissionStatus] = useState({
    missing: 0,
    reviewing: 0,
    rejected: 0,
    completed: 0,
  });

  const [preSubmissionStatus, setPreSubmissionStatus] = useState({
    missing: 0,
    reviewing: 0,
    rejected: 0,
    completed: 0,
  });

  const [admissionStatus, setAdmissionStatus] = useState({
    missing: 0,
    reviewing: 0,
    rejected: 0,
    completed: 0,
  });

  const [preArrivalStatus, setPreArrivalStatus] = useState({
    missing: 0,
    reviewing: 0,
    rejected: 0,
    completed: 0,
  });

  // total requirement status count function
  function totalReqStatusCount(requirementArray) {
    const getMissing = requirementArray.reduce(
      (totalCount, req) => {
        if (req?.req_status?.status) {
          switch (req?.req_status?.status) {
            case "Missing":
              const totalMissing = totalCount?.missing + 1;
              return {
                ...totalCount,
                missing: totalMissing,
              };
            case "Reviewing":
              const totalReviewing = totalCount?.reviewing + 1;
              return {
                ...totalCount,
                reviewing: totalReviewing,
              };
            case "Rejected":
              const totalRejected = totalCount?.rejected + 1;
              return {
                ...totalCount,
                rejected: totalRejected,
              };
            case "Completed":
              const totalCompleted = totalCount?.completed + 1;
              return {
                ...totalCount,
                completed: totalCompleted,
              };
            default:
              return totalCount;
          }
        } else {
          return {
            missing: totalCount?.missing + 1,
            reviewing: 0,
            rejected: 0,
            completed: 0,
          };
        }
      },
      {
        missing: 0,
        reviewing: 0,
        rejected: 0,
        completed: 0,
      }
    );
    return getMissing;
  }

  // requirement filter
  useEffect(() => {
    if (course_req?.length) {
      const getCourseByAccessType = course_req?.filter((course) => {
        if (auth?.user === "Student") {
          if (course?.access_type === "Public") {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      });

      const getPrePay = getCourseByAccessType.filter(
        (cR) => cR?.application_type === "Pre-Payment"
      );

      const getAllPrePayReqStatus = totalReqStatusCount(getPrePay);
      setPrePaymentStatus(getAllPrePayReqStatus);

      const getAdmission = getCourseByAccessType.filter(
        (cR) => cR?.application_type === "Admission"
      );

      const getAllAdmissionReqStatus = totalReqStatusCount(getAdmission);
      setAdmissionStatus(getAllAdmissionReqStatus);

      const getPostSub = getCourseByAccessType.filter(
        (cR) => cR?.application_type === "Post-Submission"
      );

      const getAllPostSubReqStatus = totalReqStatusCount(getPostSub);
      setPostSubmissionStatus(getAllPostSubReqStatus);

      const getPreSub = getCourseByAccessType.filter(
        (cR) => cR?.application_type === "Admission"
      );

      const getAllPreSubReqStatus = totalReqStatusCount(getPreSub);
      setPreSubmissionStatus(getAllPreSubReqStatus);

      const getPreAri = getCourseByAccessType.filter(
        (cR) => cR?.application_type === "Pre-Arrival"
      );

      const getAllPreAriReqStatus = totalReqStatusCount(getPreAri);
      setPreArrivalStatus(getAllPreAriReqStatus);

      setPrePayReq(getPrePay);
      setAdmissionReq(getAdmission);
      setPostSubReq(getPostSub);
      setPreSubReq(getPreSub);
      setPreAriReq(getPreAri);
    }
  }, [course_req]);

  return (
    <div className="w-full h-auto py-4 space-y-2">
      {/* pre-payment start */}
      <div className="w-full h-auto">
        {/* header start */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-md">
          {/* title area */}
          <div className="space-y-2">
            <h4 className="text-sm text-gray-800">Pre-Payment</h4>
            <p className="text-xs text-gray-600">
              Last requirement completed on Aug. 07, 2023
            </p>
          </div>
          {/* status and minimize btn area start */}
          <div className="flex items-center gap-2">
            {/* warning */}
            <div className="p-2 bg-orange-200 text-orange-500 rounded-sm text-xs flex items-end gap-1">
              <WarningIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{prePaymentStatus.missing}</span>
            </div>
            {/* pending */}
            <div className="p-2 bg-blue-200 text-blue-500 rounded-sm text-xs flex items-end gap-1">
              <HourglassEmptyIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{prePaymentStatus.reviewing}</span>
            </div>
            {/* not approved */}
            <div className="p-2 bg-red-200 text-red-500 rounded-sm text-xs flex items-end gap-1">
              <CloseIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{prePaymentStatus.rejected}</span>
            </div>
            {/* approved */}
            <div className="p-2 bg-green-200 text-green-500 rounded-sm text-xs flex items-end gap-1">
              <DoneIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{prePaymentStatus.completed}</span>
            </div>
            {/* minimize button */}
            <button
              onClick={() => setPrePaymentOpen((prevState) => !prevState)}
              className="p-1 border-gray-200 rounded-md">
              {prePaymentOpen ? <RemoveIcon /> : <AddIcon />}
            </button>
          </div>
          {/* status and minimize btn area end */}
        </div>
        {/* header end */}
        {/* body start */}
        {prePaymentOpen && (
          <>
            {prePayReq.map((req, i) => (
              <PrePaymentApplication key={i} req={req} />
            ))}
          </>
        )}
        {/* body end */}
      </div>
      {/* pre-payment end */}

      {/* pre-submission start */}
      <div className="w-full h-auto">
        {/* header start */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-md">
          {/* title area */}
          <div className="space-y-2">
            <h4 className="text-sm text-gray-800">Pre-Submission</h4>
            <p className="text-xs text-gray-600">
              Last requirement completed on Aug. 07, 2023
            </p>
          </div>
          {/* status and minimize btn area start */}
          <div className="flex items-center gap-2">
            {/* warning */}
            <div className="p-2 bg-orange-200 text-orange-500 rounded-sm text-xs flex items-end gap-1">
              <WarningIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{preSubmissionStatus?.missing}</span>
            </div>
            {/* pending */}
            <div className="p-2 bg-blue-200 text-blue-500 rounded-sm text-xs flex items-end gap-1">
              <HourglassEmptyIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{preSubmissionStatus?.reviewing}</span>
            </div>
            {/* not approved */}
            <div className="p-2 bg-red-200 text-red-500 rounded-sm text-xs flex items-end gap-1">
              <CloseIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{preSubmissionStatus.rejected}</span>
            </div>
            {/* approved */}
            <div className="p-2 bg-green-200 text-green-500 rounded-sm text-xs flex items-end gap-1">
              <DoneIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{preSubmissionStatus.completed}</span>
            </div>
            {/* minimize button */}
            <button
              onClick={() => setPreSubmission((prevState) => !prevState)}
              className="p-1 border-gray-200 rounded-md">
              {preSubmission ? <RemoveIcon /> : <AddIcon />}
            </button>
          </div>
          {/* status and minimize btn area end */}
        </div>
        {/* header end */}
        {/* body start */}
        {preSubmission && (
          <>
            {preSubReq.map((req, i) => (
              <PrePaymentApplication req={req} key={i} />
            ))}
          </>
        )}
        {/* body end */}
      </div>
      {/* pre-submission end */}

      {/* post-submission start */}
      <div className="w-full h-auto">
        {/* header start */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-md">
          {/* title area */}
          <div className="space-y-2">
            <h4 className="text-sm text-gray-800">Post-Submission</h4>
            <p className="text-xs text-gray-600">
              Last requirement completed on Aug. 07, 2023
            </p>
          </div>
          {/* status and minimize btn area start */}
          <div className="flex items-center gap-2">
            {/* warning */}
            <div className="p-2 bg-orange-200 text-orange-500 rounded-sm text-xs flex items-end gap-1">
              <WarningIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{postSubmissionStatus.missing}</span>
            </div>
            {/* pending */}
            <div className="p-2 bg-blue-200 text-blue-500 rounded-sm text-xs flex items-end gap-1">
              <HourglassEmptyIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{postSubmissionStatus.reviewing}</span>
            </div>
            {/* not approved */}
            <div className="p-2 bg-red-200 text-red-500 rounded-sm text-xs flex items-end gap-1">
              <CloseIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{postSubmissionStatus.rejected}</span>
            </div>
            {/* approved */}
            <div className="p-2 bg-green-200 text-green-500 rounded-sm text-xs flex items-end gap-1">
              <DoneIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{postSubmissionStatus.completed}</span>
            </div>
            {/* minimize button */}
            <button
              onClick={() => setPostSubmission((prevState) => !prevState)}
              className="p-1 border-gray-200 rounded-md">
              {postSubmission ? <RemoveIcon /> : <AddIcon />}
            </button>
          </div>
          {/* status and minimize btn area end */}
        </div>
        {/* header end */}
        {/* body start */}
        {postSubmission && (
          <>
            {postSubReq.map((req, i) => (
              <PrePaymentApplication req={req} key={i} />
            ))}
          </>
        )}
        {/* body end */}
      </div>
      {/* post-submission end */}

      {/* admission start */}
      <div className="w-full h-auto">
        {/* header start */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-md">
          {/* title area */}
          <div className="space-y-2">
            <h4 className="text-sm text-gray-800">Admission</h4>
            <p className="text-xs text-gray-600">
              Last requirement completed on Aug. 07, 2023
            </p>
          </div>
          {/* status and minimize btn area start */}
          <div className="flex items-center gap-2">
            {/* warning */}
            <div className="p-2 bg-orange-200 text-orange-500 rounded-sm text-xs flex items-end gap-1">
              <WarningIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{admissionStatus.missing}</span>
            </div>
            {/* pending */}
            <div className="p-2 bg-blue-200 text-blue-500 rounded-sm text-xs flex items-end gap-1">
              <HourglassEmptyIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{admissionStatus.reviewing}</span>
            </div>
            {/* not approved */}
            <div className="p-2 bg-red-200 text-red-500 rounded-sm text-xs flex items-end gap-1">
              <CloseIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{admissionStatus.rejected}</span>
            </div>
            {/* approved */}
            <div className="p-2 bg-green-200 text-green-500 rounded-sm text-xs flex items-end gap-1">
              <DoneIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{admissionStatus.completed}</span>
            </div>
            {/* minimize button */}
            <button
              onClick={() => setAdmission((prevState) => !prevState)}
              className="p-1 border-gray-200 rounded-md">
              {admission ? <RemoveIcon /> : <AddIcon />}
            </button>
          </div>
          {/* status and minimize btn area end */}
        </div>
        {/* header end */}
        {/* body start */}
        {admission && (
          <>
            {admissionReq.map((req, i) => (
              <PrePaymentApplication key={i} req={req} />
            ))}
          </>
        )}
        {/* body end */}
      </div>
      {/* admission end */}

      {/* pre-arrival start */}
      <div className="w-full h-auto">
        {/* header start */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-md">
          {/* title area */}
          <div className="space-y-2">
            <h4 className="text-sm text-gray-800">Pre-Arrival</h4>
            <p className="text-xs text-gray-600">
              Last requirement completed on Aug. 07, 2023
            </p>
          </div>
          {/* status and minimize btn area start */}
          <div className="flex items-center gap-2">
            {/* warning */}
            <div className="p-2 bg-orange-200 text-orange-500 rounded-sm text-xs flex items-end gap-1">
              <WarningIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{preArrivalStatus.missing}</span>
            </div>
            {/* pending */}
            <div className="p-2 bg-blue-200 text-blue-500 rounded-sm text-xs flex items-end gap-1">
              <HourglassEmptyIcon
                sx={{ width: 16, height: 16, marginBottom: "2px" }}
              />{" "}
              <span className="text-sm">{preArrivalStatus.reviewing}</span>
            </div>
            {/* not approved */}
            <div className="p-2 bg-red-200 text-red-500 rounded-sm text-xs flex items-end gap-1">
              <CloseIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{preArrivalStatus.rejected}</span>
            </div>
            {/* approved */}
            <div className="p-2 bg-green-200 text-green-500 rounded-sm text-xs flex items-end gap-1">
              <DoneIcon sx={{ width: 16, height: 16, marginBottom: "2px" }} />{" "}
              <span className="text-sm">{preArrivalStatus.completed}</span>
            </div>
            {/* minimize button */}
            <button
              onClick={() => setPreArrival((prevState) => !prevState)}
              className="p-1 border-gray-200 rounded-md">
              {preArrival ? <RemoveIcon /> : <AddIcon />}
            </button>
          </div>
          {/* status and minimize btn area end */}
        </div>
        {/* header end */}
        {/* body start */}
        {preArrival && (
          <>
            {preAriReq.map((req, i) => (
              <PrePaymentApplication req={req} key={i} />
            ))}
          </>
        )}
        {/* body end */}
      </div>
      {/* pre-arrival end */}
    </div>
  );
};

export default ApplicationRequirement;
