import React from "react";
import CourseDetails from "../../Components/StudentDashboard/StudentProfile/CourseDetails/CourseDetails";

function CourseDetailsPublic() {
  return (
    <div className="min-h-screen py-[100px] px-0 sm:px-6">
      <div className="max-w-[1400px] mx-auto p-4 sm:p-6 bg-gray-100 rounded-xl">
        <CourseDetails />
      </div>
    </div>
  );
}

export default CourseDetailsPublic;
