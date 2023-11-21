import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

function TopLogoArea({ logoUrl, universityName, country, city, address }) {
  return (
    <div className="flex items-start md:items-center gap-4">
      {/* logo container */}
      <div className="w-[88px] h-[88px]">
        <img
          src={logoUrl}
          alt={universityName}
          className="w-full h-full object-contain object-center"
        />
      </div>
      {/* university name and address container */}
      <div className="space-y-3">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-secondary">
          {universityName}
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <p>{`${city}, ${country} |`}</p>
          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker />
            <p>{`${address}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopLogoArea;
