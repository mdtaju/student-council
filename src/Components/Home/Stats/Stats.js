import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Stats = () => {
  const [stats, setStats] = useState({
    countries: 10,
    universities: 200,
    studentsCounselled: 20000,
    studentsEnrolled: 4000,
  });

  //   useEffect(() => {
  //     fetch(`${backendURL}/stats`)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         if (result?.status === "success") {
  //           setStats(result?.data[0]);
  //         }
  //       });
  //   }, []);
  return (
    <div className="py-10 w-11/12 lg:w-10/12 mx-auto pb-20 text-gray-800">
      <h1 className="text-4xl font-semibold text-center py-10">
        Student Council In A Glance
      </h1>
      <p className="text-gray-600 text-center">
        we are one of the leading educational consultants have been working
        since the last 14 years helping international students to full fill
        their dream of study abroad
      </p>
      <div className="grid md:grid-cols-4 gap-10 mt-3 sm:mt-4 md:mt-6">
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary">
                {isVisible ? (
                  <CountUp end={stats?.countries} duration={3} />
                ) : null}
                +
              </h1>
              <h3 className="text-lg mt-3 ">Countries</h3>
            </div>
          )}
        </ReactVisibilitySensor>
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary">
                {isVisible ? (
                  <CountUp end={stats?.universities} duration={3} />
                ) : null}
                +
              </h1>
              <h3 className="text-lg mt-3 ">Universities</h3>
            </div>
          )}
        </ReactVisibilitySensor>
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary">
                {isVisible ? (
                  <CountUp end={stats?.studentsCounselled} duration={3} />
                ) : null}
                +
              </h1>
              <h3 className="text-lg mt-3 ">Student Counselled</h3>
            </div>
          )}
        </ReactVisibilitySensor>
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary">
                {isVisible ? (
                  <CountUp end={stats?.studentsEnrolled} duration={3} />
                ) : null}
                +
              </h1>
              <h3 className="text-lg mt-3 ">Students Enrolled</h3>
            </div>
          )}
        </ReactVisibilitySensor>
      </div>
    </div>
  );
};

export default Stats;
