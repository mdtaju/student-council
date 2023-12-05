import { Apps, PeopleAltTwoTone } from "@mui/icons-material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { adminNormalPathname } from "../../../Utilities/AdminDashboardlistItemPath";

const AdminDashboardListItem = ({ setState, handleDrawerToggle, open }) => {
  const commonBtnStyle = `rounded flex justify-start items-center shadow ease-in duration-300 my-2 hover:duration-500 hover:text-secondary hover:scale-105   hover:bg-[#D3E3FD] `;

  const activeBtn = `bg-[#AAC9FF] text-black font-semibold`;

  const normalBtn = ` `;

  return (
    <div className="">
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

      {adminNormalPathname?.map((normalPath) => (
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
                <PersonIcon className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Message" && (
              <ListItemIcon>
                <InsertCommentIcon className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Students List" && (
              <ListItemIcon>
                <PeopleAltTwoTone className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Make User" && (
              <ListItemIcon>
                <PeopleAltTwoTone className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Add University" && (
              <ListItemIcon>
                <PeopleAltTwoTone className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "All University" && (
              <ListItemIcon>
                <PeopleAltTwoTone className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Appointments" && (
              <ListItemIcon>
                <PeopleAltTwoTone className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Add Visa" && (
              <ListItemIcon>
                <PeopleAltTwoTone className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "All Visa" && (
              <ListItemIcon>
                <PeopleAltTwoTone className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "All Students" && (
              <ListItemIcon>
                <PeopleAltTwoTone className="text-" />
              </ListItemIcon>
            )}
            {normalPath?.name === "Administration List" && (
              <ListItemIcon>
                <PeopleAltIcon className="text-" />
              </ListItemIcon>
            )}

            <ListItemText primary={`${normalPath?.name}`} />
          </ListItemButton>
        </NavLink>
      ))}

      {/* Contact  */}

      {/* <ListItemButton onClick={() => setOpenContact(!openContact)}>
        <ListItemIcon>
          <ImportContactsIcon className="text- hover:text-secondary" />
        </ListItemIcon>

        <ListItemText primary="Contacts" />
        {openContact ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openContact} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {contactsPathname.map((contactPath) => (
              <NavLink
                key={contactPath?.path}
                to={`${contactPath?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}>
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`${contactPath?.name}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* Contact Lead  */}

      {/* <ListItemButton onClick={() => setOpenContactLead(!openContactLead)}>
        <ListItemIcon>
          <ContactMailIcon className="text- hover:text-secondary" />
        </ListItemIcon>

        <ListItemText primary="Contact Lead" />
        {openContactLead ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openContactLead} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {contactLeadsPathname?.map((leadPath) => (
              <NavLink
                key={leadPath?.path}
                to={`${leadPath?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}>
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`${leadPath?.name}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* visiting student  */}
      {/* <ListItemButton
        onClick={() => setOpenVisitingStudent(!openVisitingStudent)}>
        <ListItemIcon>
          <ContactEmergencyIcon className="text- hover:text-secondary" />
        </ListItemIcon>

        <ListItemText primary="Visiting Student" />
        {openVisitingStudent ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openVisitingStudent} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {visitingStudentPathname?.map((visitPath) => (
              <NavLink
                key={visitPath?.path}
                to={`${visitPath?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}>
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`${visitPath?.name}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* Events Section */}
      {/* <ListItemButton onClick={() => setOpenEvents(!openEvents)}>
        <ListItemIcon>
          <EventAvailableIcon className="text-" />
        </ListItemIcon>

        <ListItemText primary="Events" />
        {openEvents ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openEvents} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {eventsPathName.map((event) => (
              <NavLink
                key={event?.path}
                to={`${event?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}>
                <ListItemButton>
                  <ListItemText className="mx-4" primary={`${event?.name}`} />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* Blog And News */}
      {/* <ListItemButton onClick={() => setOpenBlogAndNews(!openBlogAndNews)}>
        <ListItemIcon>
          <NewspaperIcon className="" />
        </ListItemIcon>

        <ListItemText primary="Blog And News" />
        {openBlogAndNews ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openBlogAndNews} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {blogAndNewsPathname.map((blogAndNews) => (
              <NavLink
                key={blogAndNews?.path}
                to={`${blogAndNews?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}>
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`${blogAndNews?.name}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* Country and University */}
      {/* <ListItemButton
        onClick={() => setOpenCountryAndUniversity(!openCountryAndUniversity)}>
        <ListItemIcon>
          <PublicIcon className="text-" />
        </ListItemIcon>

        <ListItemText primary="Country And University" />
        {openCountryAndUniversity ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openCountryAndUniversity} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {countryListPathname.map((country) => (
              <NavLink
                key={country?.path}
                to={`${country?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}>
                <ListItemButton>
                  <ListItemText className="mx-4" primary={`${country?.name}`} />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}

      {/* system setting  */}
      {/* <ListItemButton onClick={() => setOpenSystemSetting(!openSystemSetting)}>
        <ListItemIcon>
          <SettingsIcon className="text-" />
        </ListItemIcon>

        <ListItemText primary="System Setting" />
        {openSystemSetting ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <Collapse in={openSystemSetting} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {adminSystemSetting.map((system) => (
              <NavLink
                key={system?.path}
                to={`${system?.path}`}
                className={({ isActive }) =>
                  `${commonBtnStyle}` +
                  (isActive ? `${activeBtn}` : `${normalBtn}`)
                }
                onClick={handleDrawerToggle}>
                <ListItemButton>
                  <ListItemText className="mx-4" primary={`${system?.name}`} />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )} */}
    </div>
  );
};

export default AdminDashboardListItem;
