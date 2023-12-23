import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import SideLinks from "../../Shared/SideLinks/SideLinks";
import whatsApp from "../../assets/logo/whatsapp.png";
import NewFooter from "../../Shared/Footer/NewFooter";

const MainLayout = () => {
  const location = useLocation();
  const isAssessmentPage = location.pathname.includes("/assessment");


  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <Navbar></Navbar>
      <SideLinks />
      <Outlet></Outlet>
      {
        isAssessmentPage ? null : <NewFooter></NewFooter>
      }

     
      
      <div className=" right-0 bottom-10 fixed z-50">
        <ReactWhatsapp
          number="+8801978881097"
          // message="Thank you so much for consulting us. How may We Help You?"
          className="flex mx-2 items-center bg-blue-400  pl-3 pr-11 py-[5px] rounded-full font-medium text-sm text-white relative hover:scale-105">
          Consult Us
          {/* <IoLogoWhatsapp className='text-white text-3xl ml-2' /> */}
          <img
            src={`${whatsApp}`}
            alt=""
            className="w-9 h-9 absolute right-0 bottom-0.1"
          />
        </ReactWhatsapp>
      </div>
    </div>
  );
};

export default MainLayout;
