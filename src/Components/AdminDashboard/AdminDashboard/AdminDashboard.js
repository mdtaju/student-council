import React, { useEffect, useState } from "react";
import { AiFillLayout } from "react-icons/ai";
import { FaUser, FaUserCheck, FaUsers } from "react-icons/fa";
import {
  MdContactMail,
  MdContactPhone,
  MdContacts,
  MdEventAvailable,
} from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import DashboardTitleBar from "../../../Shared/DashboardTitleBar/DashboardTitleBar";
// import GET from '../../../API/get';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [visitingStudent, setVisitingStudent] = useState([]);
  const [contactsToday, setContactsToday] = useState([]);
  const [visitingStudentToday, setVisitingStudentToday] = useState([]);
  const [expoEvents, setExpoEvents] = useState([]);
  const [expoLeads, setExpoLeads] = useState([]);
  const [eventRegisters, setEventRegisters] = useState([]);
  const [assessmentDay, setAssessmentDay] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // GET('contact', setContacts)
    // GET('visitingStudent', setVisitingStudent)
    // GET('contact/day/today', setContactsToday)
    // GET('visitingStudent/day/today', setVisitingStudentToday)
    // GET('contact/reference/assessmentDay', setAssessmentDay)
    // GET('contact/reference/expo', setExpoEvents)
    // GET('contact/reference/eventRegister', setEventRegisters)
    // GET('contact/reference/eventExpo', setExpoLeads)
    // GET('user', setUsers)
  }, []);

  const students = users?.filter((user) => user?.role === "student");
  const administration = users?.filter((user) => user?.role !== "student");

  const dashboardItems = [
    {
      _id: 1,
      name: "Today's Lead",
      icon: <MdContactMail />,
      value: contactsToday?.length,
      link: `todaysContactRequest`,
    },
    {
      _id: 2,
      name: "Total Lead",
      icon: <MdContacts />,
      value: contacts?.length,
      link: `contactRequest`,
    },
    {
      _id: 3,
      name: "Today's Calling Client's",
      icon: <MdContactPhone />,
      value: 782,
    },
    {
      _id: 4,
      name: "Total Calling Client's",
      icon: <RiContactsBookFill />,
      value: 543,
    },
    {
      _id: 5,
      name: "Today's Visited Client's",
      icon: <FaUser />,
      value: visitingStudentToday?.length,
    },
    {
      _id: 6,
      name: "Total Visited Client's",
      icon: <FaUsers />,
      value: visitingStudent?.length,
    },
    {
      _id: 7,
      name: "Lead From Event Expo",
      icon: <AiFillLayout />,
      value: expoEvents?.length,
    },
    {
      _id: 8,
      name: "Lead From Event Registration",
      icon: <MdEventAvailable />,
      value: eventRegisters?.length,
    },
    {
      _id: 9,
      name: "Lead From Seminars",
      icon: <AiFillLayout />,
      value: expoLeads?.length,
    },
    {
      _id: 10,
      name: "Lead From Assessment Day",
      icon: <AiFillLayout />,
      value: assessmentDay?.length,
    },
    {
      _id: 11,
      name: "Confirmed Student",
      icon: <FaUserCheck />,
      value: students?.length,
    },
    {
      _id: 12,
      name: "Administration Members",
      icon: <FaUserCheck />,
      value: administration?.length,
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 xl:w-10/12 mx-auto my-10">
        {/* {dashboardItems?.map((item) => (
          <Link
            to={item?.link}
            key={item?._id}
            className="p-10 grid grid-cols-3 gap-2 md:gap-5 text-white items-center bg-gradient-to-r from-secondary via-sky-800	 to-secondary rounded-xl shadow-md shadow-gray-400 hover:scale-105 hover:duration-200 cursor-pointer ">
            <div className="text-5xl lg:text-7xl ">{item?.icon}</div>
            <div className="col-span-2">
              <h1 className=" md:text-lg cursive font-semibold">
                {item?.name}
              </h1>
              <p className="text-xl md:text-3xl cursive">{item?.value}</p>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default AdminDashboard;
