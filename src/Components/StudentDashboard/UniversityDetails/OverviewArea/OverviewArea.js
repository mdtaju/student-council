import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import React from "react";

function OverviewArea({ about }) {
  return (
    <div className="">
      <div className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] p-2 bg-blue-100 rounded-full grid place-items-center">
          <AccountBalanceOutlinedIcon />
        </div>
        <span className="text-xl font-semibold text-secondary">About</span>
      </div>
      {/* description */}
      <div
        className="border border-gray-300 rounded-md bg-white p-4 sm:p-5 mt-4"
        dangerouslySetInnerHTML={{ __html: about }}></div>
    </div>
  );
}

export default OverviewArea;
