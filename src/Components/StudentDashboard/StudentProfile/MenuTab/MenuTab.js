import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuTab = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === "/student-dashboard/profile") {
      setActiveTab("profile");
    }
    if (location?.pathname === "/student-dashboard/searchAndApply") {
      setActiveTab("search");
    }
    if (location?.pathname === "/student-dashboard/applications") {
      setActiveTab("applications");
    }
    if (location?.pathname === "/student-dashboard/visaApplications") {
      setActiveTab("visaApplications");
    }
  }, [location]);
  return (
    <div className="w-full flex items-center gap-6 border-b border-gray-400 mb-10 px-6">
      <Link to={"/student-dashboard/profile"}>
        <div
          className={`p-2 border-b-4 cursor-pointer ${
            activeTab === "profile"
              ? "border-blue-500 text-blue-500"
              : "border-transparent"
          }`}>
          <span>Profile</span>
        </div>
      </Link>
      <Link to={"/student-dashboard/searchAndApply"}>
        <div
          className={`p-2 border-b-4 cursor-pointer ${
            activeTab === "search"
              ? "border-blue-500 text-blue-500"
              : "border-transparent"
          }`}>
          <span>Search and Apply</span>
        </div>
      </Link>
      <Link to={"/student-dashboard/applications"}>
        <div
          className={`p-2 border-b-4 cursor-pointer ${
            activeTab === "applications"
              ? "border-blue-500 text-blue-500"
              : "border-transparent"
          }`}>
          <span>Applications</span>
        </div>
      </Link>
      <Link to={"/student-dashboard/visaApplications"}>
        <div
          className={`p-2 border-b-4 cursor-pointer ${
            activeTab === "visaApplications"
              ? "border-blue-500 text-blue-500"
              : "border-transparent"
          }`}>
          <span>Visa Applications</span>
        </div>
      </Link>
    </div>
  );
};

export default MenuTab;
