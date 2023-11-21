import React from "react";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import facebook from "../../assets/logo/facebook.png";
import gmail from "../../assets/logo/gmail.png";
import whatsApp from "../../assets/logo/whatsapplogo.png";

const TopBar = () => {
  return (
    // bg-[#ff0000]
    <div className="bg-[#5ebc57]  hidden lg:block w-full text-sm">
      <div className="flex justify-between items-center gap-x-2 xl:w-11/12 xl:mx-auto mx-2 text-white  h-[60px]">
        <div className="flex  ">
          <div className="flex items-center justify-center ">
            <FaMobileAlt className=" text-white" />
            <p className=" text-sm xl:text-md font-thin text-white mx-1">
              {" "}
              +8801978-881097
            </p>
          </div>
          <div className="flex items-center justify-center  ml-3 lg:ml-6">
            <FiMail className="] text-white" />
            <p className=" ml-1 text-sm xl:text-md text-white font-thin mx-1">
              ceostudentcouncil@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center  ml-3 lg:ml-6">
            <FaMapMarkerAlt className=" text-white" />
            <p className=" lg:ml-1 text-sm xl:text-md font-thin text-white mx-1">
              {" "}
              Shah Niketon (5th Floor), GEC Circle, Chittagong
            </p>
          </div>
        </div>
        {/* <div className='flex justify-end items-center   text-white bg-[#A1B724] xl:text-md font-medium gap-x-2'> */}

        <div className=" flex items-center justify-center gap-x-2">
          {/* <Link className='bg-white '><FaTwitterSquare className='text-3xl font-semibold text-[#1D9BF0]' /></Link>
                        <Link><FaWhatsappSquare className='text-3xl font-semibold' /></Link>
                        <Link><FaFacebookSquare className='text-3xl font-semibold' /></Link> */}
          <Link>
            <img src={`${facebook}`} alt="" className="w-9 h-9" />
          </Link>
          <Link>
            <img src={`${whatsApp}`} alt="" className="w-10 h-10" />
          </Link>
          <Link>
            <img src={`${gmail}`} alt="" className="w-9 h-9" />
          </Link>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default TopBar;
