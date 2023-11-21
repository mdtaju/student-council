import React from "react";
import { AiOutlineDollarCircle, AiOutlineFileDone } from "react-icons/ai";
import { BiLoader } from "react-icons/bi";
import { FaUser, FaUserClock, FaUserGraduate, FaUsers } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import DashboardTitleBar from "../../../Shared/DashboardTitleBar/DashboardTitleBar";

const CounsellorDashboard = () => {
  const dashboardItems = [
    {
      _id: 1,
      name: "Commission",
      icon: <AiOutlineDollarCircle />,
      value: 1,
      link: ``,
    },
    {
      _id: 2,
      name: "Salary",
      icon: <GiTakeMyMoney />,
      value: 1,
      link: ``,
    },
    {
      _id: 3,
      name: "Today's Assigned Student",
      icon: <FaUser />,
      value: 782,
    },
    {
      _id: 4,
      name: "Total Assigned Student",
      icon: <FaUsers />,
      value: 543,
    },
    {
      _id: 5,
      name: "Your Students",
      icon: <FaUserGraduate />,
      value: 1,
    },
    {
      _id: 6,
      name: "Visa Successful",
      icon: <AiOutlineFileDone />,
      value: 1,
    },
    {
      _id: 7,
      name: "Visa Rejected",
      icon: <MdOutlineCancelPresentation />,
      value: 1,
    },
    {
      _id: 8,
      name: "Visa On-Progress",
      icon: <BiLoader />,
      value: 1,
    },
    {
      _id: 9,
      name: "Total Visited Clients",
      icon: <FaUserClock />,
      value: 1,
    },
  ];

  return (
    <div>
      <DashboardTitleBar
        title={`Dashboard Overview`}
        dashboard={"Dashboard"}
        route={""}
        anotherRoute={""}
        nestedRoute={""}
      />

      {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 xl:w-10/12 mx-auto my-10'>
                {
                    dashboardItems?.map(item =>
                        <Link to={item?.link} key={item?._id} className='p-10 grid grid-cols-3 gap-2 md:gap-5 text-white items-center bg-gradient-to-r from-secondary via-sky-800	 to-secondary rounded-xl shadow-md shadow-gray-400 hover:scale-105 hover:duration-200 cursor-pointer '>
                            <div className='text-5xl lg:text-7xl '>
                                {item?.icon}
                            </div>
                            <div className='col-span-2'>
                                <h1 className=' md:text-lg cursive font-semibold'>{item?.name}</h1>
                                <p className='text-xl md:text-3xl cursive'>{item?.value}</p>
                            </div>
                        
                        </Link>)
                }
            </div> */}
    </div>
  );
};

export default CounsellorDashboard;
