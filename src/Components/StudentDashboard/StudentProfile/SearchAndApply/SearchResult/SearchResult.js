import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddCourseShortListMutation,
  useDeleteCourseShortListMutation,
} from "../../../../../features/course/courseApi";
import { addToSortListAll } from "../../../../../features/searchAndApply/searchAndApplySlice";
import useAuth from "../../../../../hooks/useAuth";
import SnackMessage from "../../../../SnackBarMessage/SnackMessage";
import Course from "./Course/Course";
import Header from "./Header/Header";

const SearchResult = () => {
  const auth = useAuth();
  const [coursePage, setCoursePage] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [shortListAll, setShortListAll] = useState(false);
  const [addCourseShortList] = useAddCourseShortListMutation();
  const [deleteCourseShortList] = useDeleteCourseShortListMutation();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.searchAndApply);

  // page count and set first page product
  useEffect(() => {
    if (courses) {
      const getPagesNumber = Math.ceil(courses.length / 2);
      let pages = [];
      for (let i = 1; i <= getPagesNumber; i++) {
        pages.push(i);
      }
      setNumberOfPages(pages);
      const getFirstCoursePage = courses?.slice(0, 2);
      setCoursePage(getFirstCoursePage);
    }
  }, [courses]);

  // handle product page link
  const handlePageLink = (num) => {
    setActivePage(num);
    const sliceStart = (num - 1) * 2;
    const sliceEnd = 2 * num;
    const getCoursePages = courses?.slice(sliceStart, sliceEnd);
    setCoursePage(getCoursePages);
  };

  const handleIncrement = () => {
    const pageWillBe = activePage + 1;
    const sliceStart = (pageWillBe - 1) * 2;
    if (sliceStart > courses?.length) {
      return;
    }
    const sliceEnd = 2 * pageWillBe;
    const getCoursePages = courses?.slice(sliceStart, sliceEnd);
    setCoursePage(getCoursePages);
    setActivePage(activePage + 1);
    const scrollDiv = document.getElementById(
      "topAreaOfSearchAndApplyHeader"
    ).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  };

  const handleDecrement = () => {
    let pageWillBe;
    if (activePage > 1) {
      pageWillBe = activePage - 1;
    } else {
      pageWillBe = 1;
    }
    const sliceStart = (pageWillBe - 1) * 2;
    const sliceEnd = 2 * pageWillBe;
    const getCoursePages = courses?.slice(sliceStart, sliceEnd);
    setCoursePage(getCoursePages);
    setActivePage(pageWillBe);
    const scrollDiv = document.getElementById(
      "topAreaOfSearchAndApplyHeader"
    ).offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  };

  // shortlist action dispatch
  const shortListHandler = () => {
    setShortListAll((prevValue) => !prevValue);
    // const makeData = {
    //   student_id: auth?.id,
    //   course_id: id,
    //   course_query_id: query_id,
    //   created_by: "Student",
    //   is_eligible: "No",
    // };
    if (!shortListAll) {
      courses.map((course, i) => {
        addCourseShortList({
          student_id: auth?.id,
          course_id: course?.id,
          course_query_id: course?.query_id,
          created_by: "Student",
          is_eligible: "No",
        })
          .unwrap()
          .then((data) => {
            setMessage({
              error: false,
              message: `All courses successfully added to list.`,
            });
            setOpen(true);
            setShortListAll(true);
            if (i === 0) {
              dispatch(addToSortListAll(true));
            }
          })
          .catch((err) => {
            setMessage({ error: true, message: `Something went wrong` });
            setOpen(true);
          });
        return course;
      });
      return;
    } else {
      courses.map((course, i) => {
        deleteCourseShortList({
          student_id: auth?.id,
          course_id: course?.id,
          course_query_id: course?.query_id,
          created_by: "Student",
          is_eligible: "No",
        })
          .unwrap()
          .then((data) => {
            setMessage({
              error: false,
              message: `All courses successfully deleted from list.`,
            });
            setOpen(true);
            setShortListAll(false);
            if (i === 0) {
              dispatch(addToSortListAll(false));
            }
          })
          .catch((err) => {
            setMessage({ error: true, message: "Something went wrong" });
            setOpen(true);
            setShortListAll(false);
          });
        return course;
      });
    }
  };

  return (
    <div className="w-full md:w-[780px]">
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <div className="bg-white shadow-md rounded-md">
        <Header
          courseFound={courses.length}
          numberOfPages={numberOfPages?.length}
          activePage={activePage}
          shortListAll={shortListAll}
          setShortListAll={setShortListAll}
          shortListHandler={shortListHandler}
        />
        {coursePage.map((course, i) => (
          <Course key={i} course={course} />
        ))}
      </div>
      {/* footer */}
      <div className="mt-4 w-fit mx-auto common_shadow rounded-full flex items-center gap-4">
        <button
          onClick={handleDecrement}
          className="w-[34px] h-[34px] grid place-items-center rounded-full text-xl font-medium bg-blue-500 text-white">
          {/* <FontAwesomeIcon
                                    icon={faAngleLeft}
                              /> */}
          {"<"}
        </button>
        {numberOfPages?.slice(0, 5)?.map((n) => (
          <span
            onClick={() => handlePageLink(n)}
            className={`text-base grid place-content-center w-[28px] h-[28px]  rounded-full border underline cursor-pointer hover:text-blue-600 ${
              activePage === n
                ? "text-blue-600 border-blue-600 bg-blue-100"
                : "text-gray-600 border-gray-400 bg-gray-200"
            }`}
            key={n}>
            {n}
          </span>
        ))}
        {numberOfPages?.length === 6 && (
          <span
            onClick={() => handlePageLink(6)}
            className={`text-base grid place-content-center w-[28px] h-[28px]  rounded-full border underline cursor-pointer hover:text-blue-600 ${
              activePage === 6
                ? "text-blue-600 border-blue-600 bg-blue-100"
                : "text-gray-600 border-gray-400 bg-gray-200"
            }`}>
            6
          </span>
        )}
        {numberOfPages?.length > 6 && (
          <span className="text-base font-semibold text-gray-800">...</span>
        )}
        {numberOfPages?.length > 6 && (
          <span
            onClick={() => handlePageLink(numberOfPages?.length - 1)}
            className={`text-base grid place-content-center w-[28px] h-[28px]  rounded-full border underline cursor-pointer hover:text-blue-600 ${
              activePage === numberOfPages[numberOfPages?.length - 1]
                ? "text-blue-600 border-blue-600 bg-blue-100"
                : "text-gray-600 border-gray-400 bg-gray-200"
            }`}>
            {numberOfPages[numberOfPages?.length - 1]}
          </span>
        )}
        <button
          onClick={handleIncrement}
          className="w-[34px] h-[34px] grid place-items-center rounded-full bg-blue-500 text-xl font-medium text-white">
          {/* <FontAwesomeIcon
                                    icon={faAngleRight}
                              /> */}
          {">"}
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
