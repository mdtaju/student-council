import React from "react";

function AvgTime() {
  return (
    <div>
      <h1 className="text-lg font-medium text-gray-600">
        Average Time to Receive Letter of Acceptance
      </h1>
      <div className="p-4 mt-3 border border-gray-300 bg-white rounded-md space-y-3">
        <div className="w-full flex items-center justify-between">
          <span className="text-sm">AVG Time</span>
          <span>23</span>
        </div>
      </div>
    </div>
  );
}

export default AvgTime;
