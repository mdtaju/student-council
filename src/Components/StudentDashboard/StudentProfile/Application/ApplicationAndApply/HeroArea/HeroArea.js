import React from "react";
import ApplicationInfo from "./ApplicationInfo/ApplicationInfo";
import StudentInfo from "./StudentInfo/StudentInfo";

const HeroArea = ({ applicationData = {} }) => {
  const {
    course,
    university_details,
    personal_info,
    education_info,
    school_attend,
    test_score,
    additional_qualification,
    background_info,
    course_req,
  } = applicationData;
  return (
    <div className="flex flex-col items-start gap-4 md:justify-between md:flex-row p-4">
      <StudentInfo
        university_details={university_details}
        course={course}
        personal_info={personal_info}
        education_info={education_info}
        school_attend={school_attend}
        test_score={test_score}
        additional_qualification={additional_qualification}
        background_info={background_info}
      />
      <ApplicationInfo course_req={course_req} />
    </div>
  );
};

export default HeroArea;
