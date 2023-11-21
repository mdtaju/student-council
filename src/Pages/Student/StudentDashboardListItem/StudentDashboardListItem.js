import { Apps, Person } from "@mui/icons-material";
// import AddLinkIcon from "@mui/icons-material/AddLink";
// import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import RedeemIcon from "@mui/icons-material/Redeem";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  // otherStudentPathName,
  studentNormalPathname,
} from "../../../Utilities/StudentDashboardListIemPath";

const StudentDashboardListItem = ({ setState, handleDrawerToggle, open }) => {
  const commonBtnStyle = `flex justify-start items-center shadow ease-in duration-300 hover:duration-100 hover:text-secondary hover:bg-gray-200`; // bg-[#D3E3FD]

  const activeBtn = `bg-gray-200 text-black font-semibold`;

  const normalBtn = ` `;

  return (
    <div>
      <NavLink
        to=""
        className={({ isActive }) =>
          `${commonBtnStyle}` + (isActive ? `${activeBtn}` : `${normalBtn}`)
        }>
        <ListItemButton>
          <ListItemIcon>
            <Apps className="text-[#5b65d9ef]" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </NavLink>

      {studentNormalPathname?.map((normalPath) => (
        <NavLink
          key={normalPath?.path}
          to={`${normalPath?.path}`}
          className={({ isActive }) =>
            `${commonBtnStyle}` + (isActive ? `${activeBtn}` : `${normalBtn}`)
          }
          onClick={handleDrawerToggle}>
          <ListItemButton>
            {normalPath?.name === "Profile" && (
              <ListItemIcon>
                <Person className="text-" />
              </ListItemIcon>
            )}
            {/* {normalPath?.name === "Message" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )} */}
            {normalPath?.name === "Create Appointment" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "My Appointments" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}

            <ListItemText primary={`${normalPath?.name}`} />
          </ListItemButton>
        </NavLink>
      ))}

      {/* {otherStudentPathName?.map((otherPath) => (
        <NavLink
          key={otherPath?.path}
          to={`${otherPath?.path}`}
          className={({ isActive }) =>
            `${commonBtnStyle}` + (isActive ? `${activeBtn}` : `${normalBtn}`)
          }
          onClick={handleDrawerToggle}>
          <ListItemButton>
            {otherPath?.name === "Offers and Promotion" && (
              <ListItemIcon>
                <RedeemIcon className="text-" />
              </ListItemIcon>
            )}
            {otherPath?.name === "Notification" && (
              <ListItemIcon>
                <NotificationsIcon className="text-" />
              </ListItemIcon>
            )}
            {otherPath?.name === "Your Community Link" && (
              <ListItemIcon>
                <AddLinkIcon className="text-" />
              </ListItemIcon>
            )}
            {otherPath?.name === "Learning Resources" && (
              <ListItemIcon>
                <CastForEducationIcon className="text-" />
              </ListItemIcon>
            )}

            <ListItemText primary={`${otherPath?.name}`} />
          </ListItemButton>
        </NavLink>
      ))} */}
    </div>
  );
};

export default StudentDashboardListItem;
