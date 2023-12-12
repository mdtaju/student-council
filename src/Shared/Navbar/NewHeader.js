import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// import { Context } from "../../ContextProvider/ContextProvider";
import Logo from "../../assets/logo/logo.png";
import useAuth from "../../hooks/useAuth";
import useFirebaseLogin from "../../hooks/useFirebaseLogin";
// import GET from "../../API/get";
// import { backendURL } from "../../API/config";

/* SignIn modal import here  */
import Button from '@mui/material/Button';
import { makeStyles, styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/* SignIn Modal functionality  */
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const drawerWidth = 280;

const NewHeader = ({ window, show }) => {


  /* SignIn Modal functionality  */
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  /* Meta Menu icon functionality */
  const [isArrowRotated, setIsArrowRotated] = useState(false);


  // const { user, logoutUser, isLogin } = useContext(Context);
  const { SignOutAccount } = useFirebaseLogin();
  const auth = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const currentURL = location.pathname;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [activeLink, setActiveLink] = useState("/");
  let activeStyle = {
    backgroundColor: "white",
    // backgroundColor: "#ff0000",
    color: "red",
    // color: "#fff",
    // padding: "8px 20px",
    borderRadius: "5px",
    // clipPath: `polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)`,
    width: "100%",
  };

  let loginBtn = {
    backgroundColor: "#00ADE6",
    color: "#fff",
    padding: "8px 20px",
    width: "100%",
  };

  useEffect(() => {
    setActiveLink(currentURL);
  }, [currentURL]);

  const drawer = (
    <Box sx={{ textAlign: "center", color: "black" }}>
      {/* home */}
      <ListItem button>
        <ListItemButton sx={{ textAlign: "center", color: "black" }}>
          <NavLink
            to={"/"}
            exact="true"
            className={"text-center "}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            activeclassname={activeLink}
            onClick={handleDrawerToggle}>
            {"Home"}
          </NavLink>
        </ListItemButton>
      </ListItem>
      <ListItem button>
        <ListItemButton sx={{ textAlign: "center", color: "black" }}>
          <NavLink
            to={"/search_and_apply"}
            exact="true"
            className={"text-center "}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            activeclassname={activeLink}
            onClick={handleDrawerToggle}>
            {"Search And Apply"}
          </NavLink>
        </ListItemButton>
      </ListItem>
      <ListItem button>
        <ListItemButton sx={{ textAlign: "center", color: "black" }}>
          <NavLink
            to={"/contact_us"}
            exact="true"
            className={"text-center "}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            activeclassname={activeLink}
            onClick={handleDrawerToggle}>
            {"Contact Us"}
          </NavLink>
        </ListItemButton>
      </ListItem>

      {/* countries  */}
      {/* <List>
        <ListItemButton onClick={() => setOpenCountries(!openCountries)}>
          <ListItemText className="mx-4" primary="Countries" />
          {openCountries ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCountries} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {countries?.map((country) => (
              <NavLink
                key={country?.path}
                to={`/countries/${country._id}`}
                className={({ isActive }) => (isActive ? `${activeStyle}` : ``)}
                onClick={handleDrawerToggle}
                exact="true">
                <ListItemButton>
                  <ListItemText
                    className="mx-4"
                    primary={`Study in ${country?.countryName}`}
                  />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      </List> */}

      {/* e-counselling  */}
      {/* <ListItem button>
        <ListItemButton sx={{ textAlign: "center", color: "black" }}>
          <NavLink
            to={"/eCounselling"}
            exact="true"
            className={"text-center "}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            activeclassname={activeLink}
            onClick={handleDrawerToggle}>
            {"E-Counselling"}
          </NavLink>
        </ListItemButton>
      </ListItem> */}

      {/* events  */}

      {/* <List>
        <ListItemButton onClick={() => setOpenEvents(!openEvents)}>
          <ListItemText className="mx-4" primary="Events" />
          {openEvents ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openEvents} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {events?.map((event) => (
              <NavLink
                key={event?.path}
                to={`${event?.path}`}
                className={({ isActive }) => (isActive ? `${activeStyle}` : ``)}
                onClick={handleDrawerToggle}
                exact="true">
                <ListItemButton>
                  <ListItemText className="mx-4" primary={` ${event?.event}`} />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      </List> */}

      {/* <List>
        {navItems?.map((route) => (
          <ListItem button key={route?.path}>
            <ListItemButton sx={{ textAlign: "center", color: "black" }}>
              <NavLink
                to={route?.path}
                exact="true"
                className={"text-center "}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                activeclassname={activeLink}
                onClick={handleDrawerToggle}>
                {route?.text}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}

      {/* blog and news  */}
      {/* <List>
        <ListItemButton onClick={() => setOpenBlogs(!openBlogs)}>
          <ListItemText className="mx-4" primary="Blog And News" />
          {openBlogs ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openBlogs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {blogs?.map((blog) => (
              <NavLink
                key={blog?.path}
                to={`${blog?.path}`}
                className={({ isActive }) => (isActive ? `${activeStyle}` : ``)}
                onClick={handleDrawerToggle}
                exact="true">
                <ListItemButton>
                  <ListItemText className="mx-4" primary={` ${blog?.name}`} />
                </ListItemButton>
              </NavLink>
            ))}
          </List>
        </Collapse>
      </List> */}

      {/* dashboard  */}
      {auth?.user === "Admin" && (
        <ListItem button>
          <ListItemButton sx={{ textAlign: "center", color: "black" }}>
            <NavLink
              to={"/dashboard"}
              exact="true"
              className={"text-center "}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              activeclassname={activeLink}
              onClick={handleDrawerToggle}>
              {"Dashboard"}
            </NavLink>
          </ListItemButton>
        </ListItem>
      )}
      {auth?.user === "Student" && (
        <ListItem button>
          <ListItemButton sx={{ textAlign: "center", color: "black" }}>
            <NavLink
              to={"/student-dashboard"}
              exact="true"
              className={"text-center "}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              activeclassname={activeLink}
              onClick={handleDrawerToggle}>
              {"Dashboard"}
            </NavLink>
          </ListItemButton>
        </ListItem>
      )}
      {auth?.user === "Counsellor_Admin" && (
        <ListItem button>
          <ListItemButton sx={{ textAlign: "center", color: "black" }}>
            <NavLink
              to={"/counsellor-dashboard"}
              exact="true"
              className={"text-center "}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              activeclassname={activeLink}
              onClick={handleDrawerToggle}>
              {"Dashboard"}
            </NavLink>
          </ListItemButton>
        </ListItem>
      )}
      {/* {isLogin && user?.role === "counsellor" && (
        <ListItem button>
          <ListItemButton sx={{ textAlign: "center", color: "black" }}>
            <NavLink
              to={"/counsellor-dashboard"}
              exact="true"
              className={"text-center "}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              activeclassname={activeLink}
              onClick={handleDrawerToggle}>
              {"Dashboard"}
            </NavLink>
          </ListItemButton>
        </ListItem>
      )} */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="navbar bg-white">

      {/* SignUp modal start here  */}
      <React.Fragment>
        <BootstrapDialog
          dialogClassName="custom-dialog"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            style={{
              width: '450px',
              fontWeight: 'bolder',
              margin: '10px 0px',
              fontSize: '20px',
              textAlign: 'center',
            }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            WELCOME TO STUDENT COUNCIL
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 20,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button style={{ width: '90%', margin: '8px 10px', padding: '7px 0px', borderRadius: '30px', fontSize: '15px' }} variant="contained" color="error">Free Assessment</Button>
            <Button style={{ width: '90%', margin: '8px 10px', padding: '7px 0px', borderRadius: '30px', fontSize: '15px' }} variant="contained" color="error">Call Back Request</Button>
            <Button style={{ width: '90%', margin: '8px 10px', padding: '7px 0px', borderRadius: '30px', fontSize: '15px' }} variant="contained" color="error">Appointment Booking</Button>
            <Button style={{ width: '90%', margin: '8px 10px', padding: '7px 0px', borderRadius: '30px', fontSize: '15px' }} variant="contained" color="error">Help and support?</Button>
          </DialogContent>
        </BootstrapDialog>
      </React.Fragment>
      {/* Sign Up modal end here */}







      <Box sx={{ display: "flex" }} style={{}} className="shadow-lg">
        <CssBaseline />
        <AppBar
          component="nav"
          style={{
            background: "#FFFFFF",
            width: "100%",
            boxShadow: "none",
            borderBottom: "1px solid rgb(209 213 219 / 1)",
          }}
          className={`${!show
            ? "fixed top-0 duration-100 py-4 scroll-smooth"
            : "lg:mt-[45px] duration-100 shadow-lg py-2 xl:py-4 scroll-smooth"
            }`}>
          <Toolbar className="w-11/12 md:w-full mx-auto lg:w-full xl:w-11/12 lg mx-1:xl:mx-2 xl:mx-auto text-black">
            <div className="flex justify-between items-center lg:hidden w-full">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}>
                <MenuIcon />
              </IconButton>
              <Link to={"/"} className="my-2 ">
                <img src={Logo} alt="logo" className="w-[6rem] " />
              </Link>
            </div>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
              <Link to={"/"}>
                <img
                  src={Logo}
                  alt="logo"
                  className="lg:w-[7rem] xl:w-[10rem]"
                />
              </Link>
            </Typography>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <nav>
                <NavLink
                  to={"/"}
                  className={` xl:font-medium mx-1 xl:mx-2  text-gray-900  hover:text-[#ff0000] navbar`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Home{" "}
                </NavLink>
                <NavLink
                  to={"/search_and_apply"}
                  className={` xl:font-medium mx-1 xl:mx-2  text-gray-900  hover:text-[#ff0000] navbar`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Search And Apply{" "}
                </NavLink>
                <NavLink
                  to={"/contact_us"}
                  className={` xl:font-medium mx-1 xl:mx-2  text-gray-900  hover:text-[#ff0000] navbar`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Contact Us{" "}
                </NavLink>

                {/* <button
                  className={
                    " xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000]"
                  }
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}>
                  Countries{" "}
                  <span>{open ? <ExpandLess /> : <ExpandMore />}</span>
                </button> */}

                {/* menu */}
                {/* <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}>
                  {countries?.map((country) => (
                    <Link to={`/countries/${country._id}`} key={country?._id}>
                      <MenuItem
                        className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] `}
                        onClick={handleClose}>
                        Study in {country?.countryName}
                        {}
                      </MenuItem>
                    </Link>
                  ))}
                </Menu> */}

                {/* menu */}
                {/* <NavLink
                  to={"/eCounselling"}
                  className={
                    " xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000]"
                  }
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  E-Counselling{" "}
                </NavLink> */}

                {/* <button
                  className={
                    " xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] "
                  }
                  id="fade-button"
                  aria-controls={open2 ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={handleEventClick}>
                  Events <span>{open2 ? <ExpandLess /> : <ExpandMore />}</span>
                </button> */}

                {/* menu */}
                {/* <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorE2}
                  open={open2}
                  onClose={handleClose2}
                  TransitionComponent={Fade}>
                  {events?.map((event) => (
                    <Link to={event?.path} key={event._id}>
                      <MenuItem
                        className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] `}
                        onClick={handleClose2}>
                        {event?.event}
                        {}
                      </MenuItem>
                    </Link>
                  ))}
                </Menu> */}
                {/* <NavLink
                  to={"/whyUs"}
                  className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000]`}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Why Us{" "}
                </NavLink> */}
                {/* <NavLink
                                    to={"/blogAndNews"}
                                    className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] `}
                                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    Blog & News{" "}
                                </NavLink> */}

                {/* <button
                  className={
                    " xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] "
                  }
                  id="fade-button"
                  aria-controls={open3 ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? "true" : undefined}
                  onClick={handleBlogsClick}>
                  Blog & News{" "}
                  <span>{open3 ? <ExpandLess /> : <ExpandMore />}</span>
                </button> */}

                {/* menu */}
                {/* <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorE3}
                  open={open3}
                  onClose={handleClose3}
                  TransitionComponent={Fade}>
                  {blogs?.map((blog) => (
                    <Link to={blog?.path} key={blog._id}>
                      <MenuItem
                        className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 w-32 hover:text-[#ff0000] `}
                        onClick={handleClose3}>
                        {blog?.name}
                        {}
                      </MenuItem>
                    </Link>
                  ))}
                </Menu> */}

                {auth?.user === "Admin" && (
                  <NavLink
                    to={"/dashboard"}
                    className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] `}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    Dashboard{" "}
                  </NavLink>
                )}

                {auth?.user === "Counsellor_Admin" && (
                  <NavLink
                    to={"/counsellor-dashboard"}
                    className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] `}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    Dashboard{" "}
                  </NavLink>
                )}

                {auth?.user === "Student" && (
                  <NavLink
                    to={"/student-dashboard"}
                    className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] `}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }>
                    Dashboard{" "}
                  </NavLink>
                )}
                {/* {isLogin && user?.role === "counsellor" && (
                  <NavLink
                    to={"/counsellor-dashboard"}
                    className={` xl:font-medium mx-1 xl:mx-2  text-gray-900 hover:text-[#ff0000] `}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Dashboard{" "}
                  </NavLink>
                )} */}

                {auth?.accessToken ? (
                  <>
                    <Link
                      onClick={SignOutAccount}
                      to="/"
                      className={
                        "text-center mx-1 xl:mx-2 xl:mr-2 px-2 md:px-4 xl:px-[25px] py-[8px] font-semibold text-white bg-secondary  ml-4 xl:ml-10 hover:bg-primary rounded"
                      }>
                      Log Out
                    </Link>
                  </>
                ) : (
                  <>


                    {/* Meta menu start here   */}
                    <div className="group relative inline-block">
                      <NavLink
                        className="block cursor-pointer p-4"
                        onMouseEnter={() => setIsArrowRotated(true)}
                        onMouseLeave={() => setIsArrowRotated(false)}
                      >
                        Academic
                        <span
                          className={`inline-block transition-transform transform ${isArrowRotated ? 'rotate-180' : ''}`}>
                          <KeyboardArrowDownIcon style={{ fontSize: '20px' }} />
                        </span>
                      </NavLink>

                      <div className="hidden w-40 rounded-xl shadow-lg bg-white group-hover:block absolute top-full left-0  text-black p-5 ">
                        <NavLink className={'cursor-pointer'}> <p className=" mb-3 hover:text-red-500">CSE</p> </NavLink>
                        <NavLink className={'cursor-pointer'}> <p className=" mb-3 hover:text-red-500">EEE</p> </NavLink>
                        <NavLink className={'cursor-pointer'}> <p className=" mb-3 hover:text-red-500">LLB</p> </NavLink>
                        <NavLink className={'cursor-pointer'}> <p className=" mb-3 hover:text-red-500">English</p></NavLink>
                      </div>
                    </div>






                    {/* Contact button here  */}
                    <NavLink
                      onClick={handleClickOpen}
                      to={""}

                      className={"text-center mx-1 xl:mx-2 xl:mr-2 px-4  xl:px-[25px] py-[8px] xl:font-semibold text-white rounded-full   ml-4 xl:ml-10 bg-primary "}
                    >
                      Contact
                    </NavLink>


                    <NavLink
                      to={"/login"}
                      className={
                        "text-center mx-1 xl:mx-2 xl:mr-2 px-2  xl:px-[25px] py-[8px] xl:font-semibold text-white bg-secondary  ml-4 xl:ml-10 hover:bg-primary rounded"
                      }>
                      Log In
                    </NavLink>
                    {/* <NavLink
                      onClick={navigateToRegister}
                      className={
                        "text-center mx-1 xl:mx-2 px-2 xl:px-[25px] py-[8px] xl:font-medium text-white bg-primary  hover:bg-secondary rounded"
                      }>
                      Apply Now
                    </NavLink> */}
                  </>
                )}
              </nav>
            </Box>
          </Toolbar>
        </AppBar>

        {/* For Mobile Devices  */}

        <Box component="nav" style={{ color: "black" }}>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              color: "black",
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            style={{ color: "black" }}>
            {drawer}

            {auth?.accessToken ? (
              <>
                <ListItemButton sx={{ textAlign: "center", color: "black" }}>
                  <NavLink
                    to={"/"}
                    exact="true"
                    className={"text-center "}
                    style={loginBtn}
                    activeclassname={activeLink}
                    onClick={() => {
                      handleDrawerToggle();
                    }}>
                    Log Out
                  </NavLink>
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItem button key={"/login"}>
                  <ListItemButton sx={{ textAlign: "center", color: "black" }}>
                    <NavLink
                      to={"/login"}
                      exact="true"
                      className={"text-center "}
                      style={loginBtn}
                      activeclassname={activeLink}
                      onClick={handleDrawerToggle}>
                      Log In
                    </NavLink>
                  </ListItemButton>
                </ListItem>
                {/* <ListItem button key={"/applyNow"}>
                  <ListItemButton sx={{ textAlign: "center", color: "black" }}>
                    <NavLink
                      exact="true"
                      className={"text-center "}
                      style={applyBtn}
                      activeclassname={activeLink}
                      onClick={navigateToRegister}>
                      Apply Now
                    </NavLink>
                  </ListItemButton>
                </ListItem> */}
              </>
            )}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default NewHeader;
