import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardTitleBar from "../../../Shared/DashboardTitleBar/DashboardTitleBar";
// import ContactDetailsModal from "./ContactDetailsModal";
// import Conversation from "./Conversation";
import { useGetSingleAppointmentQuery } from "../../../features/appointment/appointmentApi";
import {
  useAddAppointmentPriorityStatusMutation,
  useAddAppointmentReplyMessageMutation,
} from "../../../features/course/courseApi";
import SelectInput from "../../Inputs/SelectInput";
import TextArea from "../../Inputs/TextArea";
import SnackMessage from "../../SnackBarMessage/SnackMessage";

const ContactDetails = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });
  const [appointment, setAppointment] = useState({});
  const { data, refetch } = useGetSingleAppointmentQuery(id);
  const [addAppointmentReplyMessage] = useAddAppointmentReplyMessageMutation();
  const [addAppointmentPriorityStatus] =
    useAddAppointmentPriorityStatusMutation();
  const [priorityStatus, setPriorityStatus] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const {
    full_name,
    email,
    phone,
    service_type,
    appointment_date,
    appointment_time,
    appointment_note,
  } = appointment;

  const monthMap = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const status = ["", "In-Progress", "Important", "Non-important", "Rejected"];

  useEffect(() => {
    if (data) {
      setPriorityStatus(data?.priority_status);
      setReplyMessage(data?.appointment_reply);
      setAppointment(data);
    }
  }, [data]);

  function handleReplyMessage() {
    const makeData = {
      id: appointment.id,
      appointment_reply: replyMessage,
    };
    addAppointmentReplyMessage(makeData)
      .unwrap()
      .then((d) => {
        refetch(id);
        setMessage({ error: false, message: `Message Successfully send` });
        setOpen(true);
      })
      .catch((err) => {
        setMessage({
          error: true,
          message: `Something went wrong. Please try again.`,
        });
        setOpen(true);
      });
  }

  function handlePriorityStatus() {
    const makeData = {
      id: appointment.id,
      priority_status: priorityStatus,
    };
    addAppointmentPriorityStatus(makeData)
      .unwrap()
      .then((d) => {
        refetch(id);
        setMessage({
          error: false,
          message: `Priority status successfully updated`,
        });
        setOpen(true);
      })
      .catch((err) => {
        setMessage({
          error: true,
          message: `Something went wrong. Please try again.`,
        });
        setOpen(true);
      });
  }

  return (
    <div>
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <DashboardTitleBar
        title={"Appointment Details"}
        dashboard={`Dashboard`}
        dashboardTo={``}
        route={`Contact`}
        nestedRoute={`Appointment Details`}
        anotherRoute={``}
      />
      {appointment && (
        <div className="bg-slate-100 my-4 border-2 shadow-lg ">
          <div className="my-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-lg ">
              <div className="py-2 px-4 bg-white rounded">
                <h1>Full Name : {full_name}</h1>
              </div>
              <div className="py-2 px-4 bg-white rounded">
                <h1>Email : {email}</h1>
              </div>
              <div className="py-2 px-4 bg-white rounded">
                <h1>Phone : {phone}</h1>
              </div>
              <div className="py-2 px-4 bg-white rounded">
                <h1>Appointment Date : {appointment_date}</h1>
              </div>
              <div className="py-2 px-4 bg-white rounded">
                <h1>Appointment Time : {appointment_time}</h1>
              </div>

              <div className="py-2 px-4 bg-white rounded">
                <h1>Service Type : {service_type}</h1>
              </div>
            </div>

            <div className="my-5 bg-slate-100 p-5">
              <div className="mb-2 py-2 px-4 bg-white rounded">
                <h1>Message:</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: appointment_note }}></div>
              </div>
              <div className="mt-5">
                <SelectInput
                  title={"Priority status"}
                  placeholder="Select Priority"
                  selectState={priorityStatus}
                  setSelectState={setPriorityStatus}
                  optionsArray={status}
                />
                <button
                  onClick={handlePriorityStatus}
                  className="bg-secondary hover:bg-primary duration-300 md:px-7 lg:px-7 px-3 py-2 text-white font-medium rounded-full mt-2">
                  Set Priority Status
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <ContactDetailsModal
        setOpen={setOpen}
        open={open}
        data={contact}
        setData={setContact}
        id={id}
      /> */}

      <div className="my-10">
        <h1 className="text-3xl font-semibold text-center my-5">
          Write a reply
        </h1>
        <hr className="h-4" />
        <TextArea
          title={"Reply Message"}
          placeholder="Write a reply ..."
          v={replyMessage}
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
        />
        <button
          onClick={handleReplyMessage}
          className="bg-secondary hover:bg-primary duration-300 md:px-7 lg:px-7 px-3 py-2 text-white font-medium rounded-full mt-2">
          Submit
        </button>
        {/* <Conversation id={contact?._id} /> */}
      </div>
    </div>
  );
};

export default ContactDetails;
