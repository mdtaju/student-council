import React from "react";
import useAuth from "../../../../hooks/useAuth";
import MenuTab from "../MenuTab/MenuTab";
import TopArea from "../TopArea.js/TopArea";

const StudentProfile = ({ children }) => {
  // auth
  const auth = useAuth();
  // api request state

  return (
    <div
      // onClick={() => handleClick({ vertical: "top", horizontal: "right" })}
      className="w-full min-h-screen">
      <div className="w-full min-h-full">
        <TopArea>
          <div>
            <h1 className="text-2xl text-gray-800 font-bold">
              {/* {student_form_data?.personal_info?.first_name
                ? student_form_data?.personal_info?.first_name +
                  " " +
                  student_form_data?.personal_info?.middle_name +
                  " " +
                  student_form_data?.personal_info?.last_name
                : "No Name Yet"} */}
            </h1>
            <div className="flex items-center gap-3">
              <p>
                {/* {student_form_data?.personal_info?.query_id &&
                  student_form_data?.personal_info?.query_id} */}
              </p>
            </div>
          </div>
        </TopArea>
        <MenuTab />
        {children}
      </div>
    </div>
  );
};

export default StudentProfile;
