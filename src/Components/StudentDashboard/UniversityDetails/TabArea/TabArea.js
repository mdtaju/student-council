import React from "react";

function TabArea({ tabState, setTabState }) {
  return (
    <div className="flex items-start gap-4 mt-6 sm:mt-[100px] text-sm sm:text-base">
      <div
        onClick={() => setTabState("Overview")}
        className="min-w-[80px] sm:min-w-[100px] flex flex-col items-center gap-2 cursor-pointer">
        <span
          className={`font-semibold ${
            tabState === "Overview" ? "text-secondary" : ""
          }`}>
          Overview
        </span>
        <div
          className={`h-[3px] w-full ${
            tabState === "Overview" ? "bg-secondary" : ""
          }`}></div>
      </div>

      <div
        onClick={() => setTabState("Features")}
        className="min-w-[80px] sm:min-w-[100px] flex flex-col items-center gap-2 cursor-pointer">
        <span
          className={`font-semibold ${
            tabState === "Features" ? "text-secondary" : ""
          }`}>
          Features
        </span>
        <div
          className={`h-[3px] w-full ${
            tabState === "Features" ? "bg-secondary" : ""
          }`}></div>
      </div>

      <div
        onClick={() => setTabState("Location")}
        className="min-w-[80px] sm:min-w-[100px] flex flex-col items-center gap-2 cursor-pointer">
        <span
          className={`font-semibold ${
            tabState === "Location" ? "text-secondary" : ""
          }`}>
          Location
        </span>
        <div
          className={`h-[3px] w-full ${
            tabState === "Location" ? "bg-secondary" : ""
          }`}></div>
      </div>
    </div>
  );
}

export default TabArea;
