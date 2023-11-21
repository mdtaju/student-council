import ForumIcon from "@mui/icons-material/Forum";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import React from "react";
const Tab = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div
          onClick={() => setActiveTab("application")}
          className={`px-3 py-1 text-sm text-gray-700  rounded-t-md whitespace-nowrap cursor-pointer transition-all duration-200 ${
            activeTab === "application"
              ? "bg-white font-semibold"
              : "bg-gray-200 font-medium"
          }`}>
          <TextSnippetIcon className="text-xs" />{" "}
          <span>Application Requirements</span>
        </div>
        <div
          onClick={() => setActiveTab("records")}
          className={`px-3 py-1 text-sm text-gray-700  rounded-t-md whitespace-nowrap cursor-pointer transition-all duration-200 ${
            activeTab === "records"
              ? "bg-white font-semibold"
              : "bg-gray-200 font-medium"
          }`}>
          <ListAltIcon /> <span>Student Records</span>
        </div>
        <div
          onClick={() => setActiveTab("notes")}
          className={`px-3 py-1 text-sm text-gray-700  rounded-t-md whitespace-nowrap cursor-pointer transition-all duration-200 ${
            activeTab === "notes"
              ? "bg-white font-semibold"
              : "bg-gray-200 font-medium"
          }`}>
          <ForumIcon /> <span>Notes</span>
        </div>
      </div>
    </div>
  );
};

export default Tab;
