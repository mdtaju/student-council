import { Avatar } from "@mui/material";
import React from "react";

const TopArea = ({ children }) => {
  return (
    <div id="StudentProfileTopArea" className="flex items-start gap-6 mb-10">
      <Avatar alt="Remy Sharp" src="" sx={{ width: 62, height: 62 }} />
      {children}
    </div>
  );
};

export default TopArea;
