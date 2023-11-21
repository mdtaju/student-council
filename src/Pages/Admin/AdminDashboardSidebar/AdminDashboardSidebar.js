import { Box } from "@mui/material";
import React, { useState } from "react";
import AdminDashboardListItem from "../AdminDashboardListItem/AdminDashboardListItem";

const AdminDashboardSidebar = () => {
  const [state, setState] = useState({
    left: false,
  });
  return (
    <div className=" hidden lg:block bg-secondary text-white sticky ">
      <Box>
        <Box
          id="sidebar-scroll"
          className="scroll-smooth overflow-y-scroll h-screen">
          <AdminDashboardListItem setState={setState} />
        </Box>
      </Box>
    </div>
  );
};

export default AdminDashboardSidebar;
