import React from "react";
import Header from "./Header";
import Stepper from "./Stepper";

const TopArea = ({
  courseId,
  studentName,
  courseName,
  universityName,
  courseShortListId,
  universityQueryId,
  studentId,
  workflow,
}) => {
  return (
    <div>
      <Header
        studentName={studentName}
        courseName={courseName}
        universityName={universityName}
      />
      <Stepper
        courseId={courseId}
        courseShortListId={courseShortListId}
        universityQueryId={universityQueryId}
        studentId={studentId}
        workflow={workflow}
      />
    </div>
  );
};

export default TopArea;
