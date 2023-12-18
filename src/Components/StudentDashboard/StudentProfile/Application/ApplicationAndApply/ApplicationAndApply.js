import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroArea from "./HeroArea/HeroArea";
import TopArea from "./TopArea/TopArea";

const ApplicationAndApply = () => {
  const id = useParams();
  const [applicationData, setApplicationData] = useState({});
  console.log(applicationData);
  //   get application data
  useEffect(() => {
    async function getApplicationData() {
      const res = await fetch(
        `https://server-y29-p.applyversity.com/application/${id?.id}`
      );
      const getData = await res.json();
      setApplicationData(getData);
    }
    getApplicationData();
  }, [id]);

  return (
    <div className="w-full min-h-screen p-4 ">
      <div className="bg-white rounded-md shadow-md">
        <TopArea
          courseId={applicationData?.course?.id}
          studentName={`${applicationData?.personal_info?.first_name} ${applicationData?.personal_info?.middle_name} ${applicationData?.personal_info?.last_name}`}
          courseName={applicationData?.course?.course_name}
          universityName={applicationData?.university_details?.institute_name}
          courseShortListId={id}
          universityQueryId={applicationData?.course?.query_id}
          studentId={applicationData?.personal_info?.query_id}
          workflow={applicationData?.workflow}
        />
        <HeroArea applicationData={applicationData} />
      </div>
    </div>
  );
};

export default ApplicationAndApply;
