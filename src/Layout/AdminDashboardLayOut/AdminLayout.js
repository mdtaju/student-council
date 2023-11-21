import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link, Outlet } from "react-router-dom";
import AdminDashboardListItem from "../../Pages/Admin/AdminDashboardListItem/AdminDashboardListItem";
// import { useEffect, useState } from "react";
// import GET from "../../API/get";
// import { backendURL } from "../../API/config";
// import Notification from "../../Pages/Chat/Notification";
import CounsellorDashboardListItems from "../../Pages/Counsellor/CounsellorDashboardListItems";
import StudentDashboardListItem from "../../Pages/Student/StudentDashboardListItem/StudentDashboardListItem";
import Logo from "../../assets/logo/logo.png";
import useAuth from "../../hooks/useAuth";
const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .active-link": {
    // Define your active link styles here
    color: "red",
    backgroundColor: "yellow",
  },
}));

export default function AdminLayOut() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const { user } = useContext(Context);
  const auth = useAuth();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  // const [logo, setLogo] = useState(false);

  // useEffect(() => {
  //   GET("logo", setLogo);
  // }, []);

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        style={{ boxShadow: "none" }}
        className="border-none"
        position="fixed"
        open={open}>
        <Toolbar className="bg-white h-[70px] text-dark inline border-b border-gray-400">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              color: "black",
              ...(open && { display: "none" }),
            }}>
            <KeyboardDoubleArrowRightIcon />
          </IconButton>

          <div className="ml-auto py-1 flex gap-4 items-center">
            <div>
              {/* <h1 className="text-lg">
                Welcome, <strong>Taj</strong>
              </h1> */}
              <p className="text-sm text-end">{`${day} ${month}, ${year}`}</p>
            </div>

            <div className="ml-auto py-1">{/* <Notification /> */}</div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#fff", // #EAF3FF
            color: "black",
          },
        }}
        variant="permanent"
        open={open}>
        <DrawerHeader className="py-2 min-h-[70px] border-none">
          <div className="mr-auto ml-2 py-[6px]">
            <Link to={"/"}>
              <img src={Logo} alt="logo" className="w-full h-14" />
            </Link>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <KeyboardDoubleArrowLeftIcon className="text-black" />
            ) : (
              <KeyboardDoubleArrowLeftIcon className="text-black" />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider className="pt-1" />
        {auth?.user === "Admin" && (
          <AdminDashboardListItem setState={setOpen} open={open} />
        )}
        {auth?.user === "Student" && (
          <StudentDashboardListItem setState={setOpen} open={open} />
        )}
        {auth?.user === "Counsellor_Admin" && (
          <CounsellorDashboardListItems setState={setOpen} open={open} />
        )}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#F0F2F5" }}>
        <DrawerHeader />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
