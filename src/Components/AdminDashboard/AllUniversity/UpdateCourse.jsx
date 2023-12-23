import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleCourseQuery } from '../../../features/course/courseApi';
import SnackMessage from '../../SnackBarMessage/SnackMessage';
import AddCourse from "../AddUniversity/AddCourse/AddCourse";

function UpdateCourse() {
      const { id } = useParams();
      const { data } = useGetSingleCourseQuery(id);
      const [courses, setCourses] = useState([]);
      const {
            query_id,
            institute_name,
            institute_logo_url,
            address_of_institute,
            city_of_institute,
            country_of_institute,
            qs_ranking,
            national_ranking,
            world_ranking,
            website_url,
            course,
            custom_test,
            standardized_test,
      } = data || {};
      console.log(courses)
      const [open, setOpen] = useState(false);
      const [message, setMessage] = useState({
            error: false,
            message: "",
      });

      useEffect(() => {
            if (data) {
                  setCourses([data?.course])
            }
      }, [data])
      return (
            <div className="w-full min-h-screen grid place-items-center">
                  <SnackMessage open={open} setOpen={setOpen} message={message} />
                  <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-[400px] sm:w-[600px] md:w-[960px]">
                        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-10">
                              Update Course
                        </h1>
                        <div className='mt-4'>
                              <AddCourse courses={courses} setCourses={setCourses} />
                        </div>
                  </div>
            </div>
      )
}

export default UpdateCourse