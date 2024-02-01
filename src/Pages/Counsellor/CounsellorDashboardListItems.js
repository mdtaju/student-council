import { Apps, Person } from "@mui/icons-material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { counsellorNormalPathname } from "../../Utilities/CounsellorDashboardListItemPath";

const CounsellorDashboardListItems = ({
  setState,
  handleDrawerToggle,
  open,
}) => {
  const commonBtnStyle = `rounded flex justify-start items-center shadow ease-in duration-300 my-2 hover:duration-500 hover:text-secondary hover:scale-105   hover:bg-[#D3E3FD] `;

  const activeBtn = `bg-[#AAC9FF] text-black font-semibold`;

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

      {counsellorNormalPathname?.map((normalPath) => (
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
            {normalPath?.name === "Appointments" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Assigned Appointments" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Active Appointments" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Contact Messages" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Student Course List" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "All Assessment" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}

            <ListItemText primary={`${normalPath?.name}`} />
          </ListItemButton>
        </NavLink>
      ))}

      {/* Contact  */}

      {/* <ListItemButton onClick={() => setOpenAssigned(!openAssigned)}>
        <ListItemIcon>
          <ImportContactsIcon className="text- hover:text-secondary" />
        </ListItemIcon>

        <ListItemText primary="Assigned Student" />
        {openAssigned ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openAssigned} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {assignedStudentPath.map((studentPath) => (
              <NavLink
                key={studentPath?.path}
                to={`${studentPath?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}
              >
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`${studentPath?.name}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* Student  */}

      {/* <ListItemButton onClick={() => setOpenStudent(!openStudent)}>
        <ListItemIcon>
          <Diversity3Icon className="text- hover:text-secondary" />
        </ListItemIcon>

        <ListItemText primary="My Students" />
        {openStudent ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openStudent} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {studentPathName?.map((studentPath) => (
              <NavLink
                key={studentPath?.path}
                to={`${studentPath?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}
              >
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`${studentPath?.name}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* My states  */}

      {/* <ListItemButton onClick={() => setOpenMyState(!openMyState)}>
        <ListItemIcon>
          <ShowChartIcon className="text- hover:text-secondary" />
        </ListItemIcon>

        <ListItemText primary="My Stats" />
        {openMyState ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openMyState} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {myStatesPath?.map((statsPath) => (
              <NavLink
                key={statsPath?.path}
                to={`${statsPath?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}
              >
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`${statsPath?.name}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* {otherPathName?.map((otherPath) => (
        <NavLink
          key={otherPath?.path}
          to={`${otherPath?.path}`}
          className={({ isActive }) =>
            `${commonBtnStyle}` + (isActive ? `${activeBtn}` : `${normalBtn}`)
          }
          onClick={handleDrawerToggle}
        >
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

      {/* tAndC  */}

      {/* <ListItemButton onClick={() => setOpenTAndC(!openTAndC)}>
        <ListItemIcon>
          <GavelIcon className="text- hover:text-secondary" />
        </ListItemIcon>

        <ListItemText primary="Terms and Conditions" />
        {openTAndC ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openTAndC} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {tAndCPath?.map((tAndCPath) => (
              <NavLink
                key={tAndCPath?.path}
                to={`${tAndCPath?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}
              >
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`${tAndCPath?.name}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* payment  */}

      {/* <ListItemButton onClick={() => setOpenPayment(!openPayment)}>
        <ListItemIcon>
          <AccountBalanceIcon className="text- hover:text-secondary" />
        </ListItemIcon>

        <ListItemText primary="Payments" />
        {openPayment ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openPayment} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {paymentPath?.map((path) => (
              <NavLink
                key={path?.path}
                to={`${path?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}
              >
                <ListItemButton>
                  <ListItemText className="mx-4" primary={`${path?.name}`} />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}
    </div>
  );
};

export default CounsellorDashboardListItems;
