import React, { useEffect, useState } from "react";
import {
  useAddAppointmentMutation,
  useGetAppointmentServiceTypesQuery,
} from "../../../features/appointment/appointmentApi";
import useAuth from "../../../hooks/useAuth";
import DateInput from "../../Inputs/DateInput";
import Input from "../../Inputs/Input";
import SelectInput from "../../Inputs/SelectInput";
import TextEditor from "../../Inputs/TextEditor";
import TimeInput from "../../Inputs/TimeInput";
import SnackMessage from "../../SnackBarMessage/SnackMessage";

const CreateAppointment = () => {
  const auth = useAuth();
  const [addAppointment] = useAddAppointmentMutation();
  const { data } = useGetAppointmentServiceTypesQuery();
  const [serviceType, setServiceType] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);
  const [allServiceTypes, setAllServiceTypes] = useState([""]);
  const [notes, setNotes] = useState("");

  const [snackOpen, setSnackOpen] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    error: false,
  });

  // set service types
  useEffect(() => {
    if (data) {
      const servicesTypes = data.map((element) => element.service_type);
      setAllServiceTypes(["", ...servicesTypes]);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!appointmentTime || !notes) {
      alert("Please fill up all inputs.");
      return;
    }
    const getHours = appointmentTime.$d.getHours();
    const getAm = getHours >= 12 ? "PM" : "AM";

    let getHour;
    let getMinute;

    // hour defining
    if (appointmentTime?.$H < 10) {
      if (appointmentTime?.$H === 0) {
        getHour = "12";
      } else {
        getHour = "0" + appointmentTime?.$H;
      }
    } else {
      getHour = appointmentTime?.$H;
    }

    // minute defining
    if (appointmentTime?.$m < 10) {
      getMinute = "0" + appointmentTime?.$m;
    } else {
      getMinute = appointmentTime?.$m;
    }

    const appointment_time = getHour + ":" + getMinute + " " + getAm;

    const appointmentData = {
      query_id: auth?.id,
      full_name: fullName,
      email,
      phone,
      service_type: serviceType,
      appointment_date: appointmentDate?._d?.toUTCString(),
      appointment_time,
      appointment_note: notes,
    };
    await addAppointment(appointmentData)
      .unwrap()
      .then((d) => {
        setMessage({
          message: "Your Appointment Successfully Submitted.",
          error: false,
        });
        setSnackOpen(true);
        setServiceType("");
        setFullName("");
        setEmail("");
        setPhone("");
        setAppointmentDate(null);
        setAppointmentTime(null);
        setNotes("");
      })
      .catch((e) => {
        setMessage({
          message: "Something went wrong. Please, try again.",
          error: true,
        });
        setSnackOpen(true);
      });
  };

  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-[400px] sm:w-[600px] md:w-[850px]">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-10">
          Create Appointment
        </h1>
        <SnackMessage
          open={snackOpen}
          setOpen={setSnackOpen}
          message={message}
        />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
            <Input
              title="Full Name"
              placeholder="Enter your full name"
              isRequired
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              title="Email"
              placeholder="Enter your email"
              type={"email"}
              isRequired
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              title="Phone"
              placeholder="Enter your phone"
              isRequired
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <SelectInput
              title={"Service Type"}
              isRequired
              optionsArray={allServiceTypes}
              placeholder="Select a service"
              selectState={serviceType}
              setSelectState={setServiceType}
            />
            <DateInput
              title={"Appointment Date"}
              format="DD-MM-YYYY"
              isRequired
              required
              disablePast
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e)}
            />
            <TimeInput
              title={"Appointment Time"}
              isRequired
              value={appointmentTime}
              onChange={(value) => setAppointmentTime(value)}
            />
          </div>
          <TextEditor
            title="Create a note (Max 2000 chars)"
            isRequired
            note={notes}
            setNotes={setNotes}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md active:scale-95 duration-200 mt-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointment;
