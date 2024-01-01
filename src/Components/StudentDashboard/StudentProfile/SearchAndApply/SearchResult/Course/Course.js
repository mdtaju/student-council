import React, { useEffect, useState } from "react";
// import {FaEarthAsia} from "react-icons/fa";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ListIcon from "@mui/icons-material/List";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PublicIcon from "@mui/icons-material/Public";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import SchoolIcon from "@mui/icons-material/School";
import { Switch } from "@mui/material";
import { FaSchool } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  useAddCourseShortListMutation,
  useDeleteCourseShortListMutation,
} from "../../../../../../features/course/courseApi";
import { addToSortList } from "../../../../../../features/searchAndApply/searchAndApplySlice";
import useAuth from "../../../../../../hooks/useAuth";
import usePath from "../../../../../../hooks/usePath";
import SnackMessage from "../../../../../SnackBarMessage/SnackMessage";

const Course = ({ course }) => {
  const {
    university,
    id,
    query_id,
    course_name,
    intake_months,
    duration,
    currency,
    yearly_tuition_fee,
    scholarship_available,
    scholarship_duration,
    scholarship_amount,
    application_availability,
    application_fee,
    application_offer_fee,
    isSortListed,
  } = course || {};
  const {
    institute_name,
    country_of_institute,
    qs_ranking,
    national_ranking,
    world_ranking,
  } = university || {};
  const auth = useAuth();
  const pathName = usePath();
  const [shortList, setShortList] = useState(false);
  const [addCourseShortList] = useAddCourseShortListMutation();
  const [deleteCourseShortList] = useDeleteCourseShortListMutation();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();

  // get shortlist
  useEffect(() => {
    if (isSortListed) {
      setShortList(true);
      return;
    } else {
      setShortList(false);
    }
  }, [isSortListed, setShortList]);

  // shortlist action dispatch
  const shortListHandler = () => {
    setShortList((prevValue) => !prevValue);
    const makeData = {
      student_id: auth?.id,
      course_id: id,
      course_query_id: query_id,
      created_by: "Student",
      is_eligible: "Pending",
    };

    if (!shortList) {
      addCourseShortList(makeData)
        .unwrap()
        .then((data) => {
          setMessage({
            error: false,
            message: `Course: "${course_name}" Successfully added to list.`,
          });
          setOpen(true);
          setShortList(true);
          dispatch(addToSortList({ ...makeData, isAddShortlist: true }));
        })
        .catch((err) => {
          setMessage({ error: true, message: `Something went wrong` });
          setOpen(true);
        });
      return;
    } else {
      deleteCourseShortList(makeData)
        .unwrap()
        .then((data) => {
          setMessage({
            error: false,
            message: `Course: "${course_name}" Successfully deleted from list.`,
          });
          setOpen(true);
          setShortList(false);
          dispatch(addToSortList({ ...makeData, isAddShortlist: false }));
        })
        .catch((err) => {
          setMessage({ error: true, message: "Something went wrong" });
          setOpen(true);
          setShortList(false);
        });
    }
  };

  // course duration calculate with months
  function courseDuration(str) {
    if (str === "0 - 1 Years") {
      return "12 Months(s)";
    }
    if (str === "1 - 2 Years") {
      return "24 Months(s)";
    }
    if (str === "2 - 3 Years") {
      return "36 Months(s)";
    }
    if (str === "3 - 4 Years") {
      return "48 Months(s)";
    }
    return "48 Months+";
  }
  return (
    <div className="p-4">
      {/* snack message */}
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <Link
        to={
          auth?.accessToken
            ? `/${pathName}/courseDetails/${id}`
            : `/course_details/${id}`
        }
        target="_blank">
        <span className="text-xl font-semibold text-gray-800 hover:text-blue-600">
          {course_name}
        </span>
      </Link>
      <div className="flex flex-col sm:flex-row items-start gap-4 justify-between mt-4">
        {/* course details */}
        <div className="space-y-4">
          {/* university */}
          <div className="flex items-center gap-2">
            <FaSchool className="text-blue-800" />
            <h4 className="text-sm font-semibold text-gray-800">
              University:{" "}
              <Link to={`/university/${query_id}`} target="_blank">
                <span className="text-gray-600 font-normal hover:text-blue-500 hover:underline">
                  {institute_name}
                </span>
              </Link>
            </h4>
          </div>
          {/* country and duration */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12">
            {/* country */}
            <div className="flex items-center gap-2 ml-[-2px]">
              <PublicIcon fontSize="small" className="text-blue-800 text-sm" />
              <h4 className="text-sm font-semibold text-gray-800">
                Country:{" "}
                <span className="text-gray-600 font-normal">
                  {country_of_institute}
                </span>
              </h4>
            </div>
            {/* duration */}
            <div className="flex items-center gap-2 ml-[-2px]">
              <AccessTimeIcon
                fontSize="small"
                className="text-blue-800 text-sm"
              />
              <h4 className="text-sm font-semibold text-gray-800">
                Duration:{" "}
                <span className="text-gray-600 font-normal">
                  {courseDuration(duration)}
                </span>
              </h4>
            </div>
          </div>
          {/* intakes */}
          <div className="flex items-start gap-2 ml-[-2px]">
            <PersonAddAlt1Icon
              fontSize="small"
              className="text-blue-800 text-sm"
            />
            <div className="text-sm font-semibold text-gray-800 flex items-start gap-2">
              <h4>Intakes: </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {intake_months?.split(",")?.map((month, i) => (
                  <span
                    key={i}
                    className="text-gray-600 text-center text-xs font-medium px-2 py-1 bg-gray-200 rounded-full">
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* payment */}
          <div className="flex items-center gap-2 ml-[-2px]">
            <PaymentIcon fontSize="small" className="text-blue-800 text-sm" />
            <h4 className="text-sm font-semibold text-gray-800">
              Yearly Tuition Fees:{" "}
              <span className="text-gray-600 font-normal">
                {currency} {yearly_tuition_fee}
              </span>
            </h4>
          </div>
          {/* application fee */}
          <div className="flex items-center gap-2 ml-[-2px]">
            <RequestPageIcon
              fontSize="small"
              className="text-blue-800 text-sm"
            />
            <h4 className="text-sm font-semibold text-gray-800">
              Application Fees:{" "}
              <span className="text-gray-600 font-normal">
                {currency}{" "}
                {application_offer_fee ? (
                  <>
                    <del>{application_fee}</del> {application_offer_fee}
                  </>
                ) : (
                  <>{application_fee}</>
                )}
              </span>
            </h4>
          </div>

          {/* scholarship */}
          <div className="flex items-center gap-2 ml-[-2px]">
            <SchoolIcon fontSize="small" className="text-blue-800 text-sm" />
            <h4 className="text-sm font-semibold text-gray-800">
              {scholarship_available === "Yes"
                ? `Scholarship Available - ${scholarship_duration} - ${currency} ${scholarship_amount}`
                : `Scholarship Not Available`}
            </h4>
          </div>
        </div>
        {/* shortlist and details view container */}
        <div className="text-center flex flex-col gap-2 items-center">
          {/* application availability */}
          {application_availability === "Open" ? (
            <span className="text-xs font-medium bg-green-600 px-4 py-1 rounded-md text-white">{`Admission Open`}</span>
          ) : (
            <span className="text-xs font-medium bg-red-600 px-4 py-1 rounded-md text-white">{`Admission Close`}</span>
          )}
          {/* details view container */}
          <Link
            to={
              auth?.accessToken
                ? `/${pathName}/courseDetails/${id}`
                : `/course_details/${id}`
            }
            target="_blank">
            <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
              <ListIcon />
              <span>View Details</span>
            </div>
          </Link>

          {/* shortlist container */}
          {auth?.accessToken && application_availability === "Open" && (
            <div className="flex items-center gap-2">
              <h4 className="text-base font-semibold text-gray-600">
                Shortlist
              </h4>
              <Switch
                checked={shortList}
                // onChange={handleGreChange}
                onClick={shortListHandler}
                inputProps={{ "aria-label": "controlled A" }}
              />
            </div>
          )}
        </div>
      </div>
      {/* ranking */}
      <div className="px-4 py-2 bg-gray-200 mt-4 border-b border-gray-400 rounded-sm">
        <h4 className="text-xl font-medium text-gray-800">
          {qs_ranking}{" "}
          <span className="text-sm font-normal text-gray-600">QS Ranking</span>
        </h4>
      </div>
      <div className="px-4 py-2 bg-gray-200 border-b border-gray-400 rounded-sm">
        <h4 className="text-xl font-medium text-gray-800">
          {national_ranking}{" "}
          <span className="text-sm font-normal text-gray-600">
            National Ranking
          </span>
        </h4>
      </div>
      <div className="px-4 py-2 bg-gray-200 border-b border-gray-400 rounded-sm">
        <h4 className="text-xl font-medium text-gray-800">
          {world_ranking}{" "}
          <span className="text-sm font-normal text-gray-600">
            World Ranking
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Course;
