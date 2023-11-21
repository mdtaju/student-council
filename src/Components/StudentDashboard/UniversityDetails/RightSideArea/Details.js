import React from "react";

function Details({
  founded,
  instituteId,
  instituteType,
  worldRank,
  nationalRank,
  website,
}) {
  return (
    <div>
      <h1 className="text-lg font-medium text-gray-600">Institute Details</h1>
      <div className="p-4 mt-3 border border-gray-300 bg-white rounded-md space-y-3">
        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-sm whitespace-nowrap">Founded</span>
          <span className="truncate">{founded}</span>
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-sm whitespace-nowrap">Institute ID</span>
          <span className="truncate">{instituteId}</span>
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-sm whitespace-nowrap">Institute Type</span>
          <span className="truncate">{instituteType}</span>
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-sm whitespace-nowrap">World Rank</span>
          <span className="truncate">{worldRank}</span>
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-sm whitespace-nowrap">National Rank</span>
          <span className="truncate">{nationalRank}</span>
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-sm whitespace-nowrap">Institute Website</span>
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="truncate text-blue-400 hover:underline">
            {website}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;
