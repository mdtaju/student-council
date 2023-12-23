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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavModal from "./NavModal";

const drawerWidth = 280;
const NewHeader = ({ window, show }) => {
  /* SignIn Modal functionality  */
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  /* Meta Menu icon functionality */
  const [isEventArrowRotated, setIsEventArrowRotated] = useState(false);
  const [isVisaArrowRotated, setIsVisaArrowRotated] = useState(false);
  const [isBlogOfferArrowRotated, setIsBlogOfferArrowRotated] = useState(false);

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
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="navbar bg-white">
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
          className={`${
            !show
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
              <nav className="">
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
                  Search & Apply{" "}
                </NavLink>

                {/* Event Meta menu route start here   */}
                <div className="group relative inline-block">
                  <NavLink
                    className="block cursor-pointer p-4 xl:font-medium   text-gray-900"
                    onMouseEnter={() => setIsEventArrowRotated(true)}
                    onMouseLeave={() => setIsEventArrowRotated(false)}>
                    Event
                    <span
                      className={`inline-block transition-transform transform ${
                        isEventArrowRotated ? "rotate-180" : ""
                      }`}>
                      <KeyboardArrowDownIcon style={{ fontSize: "20px" }} />
                    </span>
                  </NavLink>

                  <div className="hidden w-52 rounded-xl shadow-lg bg-white group-hover:block absolute top-full left-0  text-black p-5 ">
                    <NavLink to={" "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500 hover:font-bold">
                        Education Expo
                      </p>{" "}
                    </NavLink>
                    <NavLink to={" "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500 hover:font-bold">
                        Assessment Day
                      </p>{" "}
                    </NavLink>
                    <NavLink to={" "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500 hover:font-bold">
                        Event Album
                      </p>{" "}
                    </NavLink>
                  </div>
                </div>

                {/* Visa gallery Meta menu route start here   */}
                <div className="group relative inline-block">
                  <NavLink
                    className="block cursor-pointer p-4  xl:font-medium   text-gray-900"
                    onMouseEnter={() => setIsVisaArrowRotated(true)}
                    onMouseLeave={() => setIsVisaArrowRotated(false)}>
                    Visa Gallery
                    <span
                      className={`inline-block transition-transform transform ${
                        isVisaArrowRotated ? "rotate-180" : ""
                      }`}>
                      <KeyboardArrowDownIcon style={{ fontSize: "20px" }} />
                    </span>
                  </NavLink>

                  <div className="hidden w-52 rounded-xl shadow-lg bg-white group-hover:block absolute top-full left-0  text-black p-5 ">
                    <NavLink to={" "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500  hover:font-bold ">
                        UK
                      </p>{" "}
                    </NavLink>
                    <NavLink to={" "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500  hover:font-bold ">
                        USA
                      </p>{" "}
                    </NavLink>
                    <NavLink to={" "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500  hover:font-bold ">
                        CANADA
                      </p>{" "}
                    </NavLink>
                    <NavLink to={" "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500  hover:font-bold ">
                        AUSTRALIA
                      </p>{" "}
                    </NavLink>
                  </div>
                </div>

                {/* Blog and Offer Meta menu route start here   */}
                <div className="group relative inline-block">
                  <NavLink
                    className="block cursor-pointer p-4  xl:font-medium   text-gray-900"
                    onMouseEnter={() => setIsBlogOfferArrowRotated(true)}
                    onMouseLeave={() => setIsBlogOfferArrowRotated(false)}>
                    Blog & Offer
                    <span
                      className={`inline-block transition-transform transform ${
                        isBlogOfferArrowRotated ? "rotate-180" : ""
                      }`}>
                      <KeyboardArrowDownIcon style={{ fontSize: "20px" }} />
                    </span>
                  </NavLink>

                  <div className="hidden w-52 rounded-xl shadow-lg bg-white group-hover:block absolute top-full left-0  text-black p-5 ">
                    <NavLink to={"/"} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500  hover:font-bold ">
                        Video Blog
                      </p>{" "}
                    </NavLink>
                    <NavLink to={" / "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500  hover:font-bold ">
                        Update Offer
                      </p>{" "}
                    </NavLink>
                    <NavLink to={" / "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500  hover:font-bold ">
                        Blog
                      </p>{" "}
                    </NavLink>
                    <NavLink to={" / "} className={"cursor-pointer"}>
                      {" "}
                      <p className=" mb-3 hover:text-red-500  hover:font-bold ">
                        News
                      </p>{" "}
                    </NavLink>
                  </div>
                </div>

               

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

                    <NavLink
                      to={"/login"}
                      className={
                        "text-center mx-1 xl:mx-2 xl:mr-2 px-2  xl:px-[25px] py-[8px] xl:font-semibold text-white bg-secondary  ml-4 xl:ml-10 hover:bg-primary rounded"
                      }>
                      Log In
                    </NavLink>
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
                 </>
            )}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default NewHeader;
