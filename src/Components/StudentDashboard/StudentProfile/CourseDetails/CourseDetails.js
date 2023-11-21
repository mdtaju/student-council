import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../../../features/course/courseApi";
import CourseInfo from "./CourseInfo/CourseInfo";
import UniversityInfo from "./UniversityInfo/UniversityInfo";

const CourseDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleCourseQuery(id);
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
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start min-h-screen w-fit mx-auto">
      <UniversityInfo
        query_id={query_id}
        institute_name={institute_name}
        institute_logo_url={institute_logo_url}
        address_of_institute={address_of_institute}
        city_of_institute={city_of_institute}
        country_of_institute={country_of_institute}
        qs_ranking={qs_ranking}
        national_ranking={national_ranking}
        world_ranking={world_ranking}
        website_url={website_url}
      />
      <CourseInfo
        course={course}
        customTest={custom_test}
        standardizedTest={standardized_test}
      />
    </div>
  );
};

export default CourseDetails;
