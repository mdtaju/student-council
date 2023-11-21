import React, { useState } from "react";
import Input from "../../Components/Inputs/Input";
import TextArea from "../../Components/Inputs/TextArea";
import SnackMessage from "../../Components/SnackBarMessage/SnackMessage";
import PageHeader from "../../Shared/PageHeader/PageHeader";
import Banner from "../../assets/howWorks/howworks.jpg";
import { useAddContactMessageMutation } from "../../features/student/studentApi";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [addContactMessage] = useAddContactMessageMutation();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    message: "",
    error: false,
  });

  const handleSubmit = (e) => {
    addContactMessage({
      name,
      email,
      phone,
      subject,
      message: userMessage,
    })
      .unwrap()
      .then((d) => {
        setMessage({
          message: "Your message successfully submitted.",
          error: false,
        });
        setOpen(true);
      })
      .catch((e) => {
        setMessage({
          message: "Something went wrong. Please, try again.",
          error: true,
        });
        setOpen(true);
      });
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setUserMessage("");
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        bgText={"Contact with us"}
        subText={`Submit your message and we will reply you in 24 hours.`}></PageHeader>
      {/* snack message */}
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <div className="py-[50px] px-0 sm:px-6">
        <div className="max-w-[1400px] h-full mx-auto p-4 sm:p-6 bg-gray-100 rounded-xl grid md:grid-cols-2 gap-4 justify-between items-center">
          <div>
            <h1 className="text-left md:text-3xl text-2xl font-semibold text-secondary xl:absolute xxl:static lg:left-[27.5%] xxl:left-[37.5%] xl:top-[20%]">
              Send Your Message Us
            </h1>
            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-4 mt-6">
              <Input
                title={"Full Name"}
                placeholder={"Enter your name"}
                isRequired
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ background: "white" }}
              />
              <Input
                title={"Email"}
                placeholder={"Enter your email"}
                isRequired
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ background: "white" }}
              />
              <Input
                title={"Phone"}
                placeholder={"Enter your phone"}
                isRequired
                required
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ background: "white" }}
              />
              <Input
                title={"Subject"}
                placeholder={"Enter a subject"}
                isRequired
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{ background: "white" }}
              />
              <div className="col-span-2">
                <TextArea
                  title={"Message"}
                  placeholder={"Write your message"}
                  style={{ background: "white" }}
                  isRequired
                  required
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="col-span-2 w-full py-2 bg-secondary text-white rounded-xl">
                Submit
              </button>
            </form>
          </div>
          <div className="w-full h-[300px]">
            <img
              src={Banner}
              alt="banner"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
