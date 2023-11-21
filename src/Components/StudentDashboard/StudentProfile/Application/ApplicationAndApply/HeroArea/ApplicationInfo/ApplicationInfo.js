import React, { useState } from "react";
import ApplicationRequirement from "./ApplicationRequirement/ApplicationRequirement";
import Notes from "./Notes/Notes";
import StudentRecords from "./StudentRecords/StudentRecords";
import Tab from "./Tab/Tab";

const ApplicationInfo = ({ course_req }) => {
  const [activeTab, setActiveTab] = useState("application");
  return (
    <div className="w-full md:flex-1">
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* application info body */}
      {activeTab === "application" && (
        <ApplicationRequirement course_req={course_req} />
      )}
      {activeTab === "records" && <StudentRecords />}
      {activeTab === "notes" && <Notes />}
    </div>
  );
};

export default ApplicationInfo;
