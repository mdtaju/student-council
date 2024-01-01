import { Container } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../Components/Inputs/Input";
import TextArea from "../../Components/Inputs/TextArea";
import SnackMessage from "../../Components/SnackBarMessage/SnackMessage";
import {
  useAddFormAnsMutation,
  useGetSingleFormQuery,
} from "../../features/student/studentApi";

function looksLikeMail(str) {
  var lastAtPos = str.lastIndexOf("@");
  var lastDotPos = str.lastIndexOf(".");
  return (
    lastAtPos < lastDotPos &&
    lastAtPos > 0 &&
    str.indexOf("@@") == -1 &&
    lastDotPos > 2 &&
    str.length - lastDotPos > 2
  );
}

const PublicForm = () => {
  const params = useParams();
  const { data } = useGetSingleFormQuery(params.id);
  const [addFormAns] = useAddFormAnsMutation();
  const [email, setEmail] = useState("");
  const allData = [...(data?.questions || [])];
  const [inputValues, setInputValues] = useState(
    Array(allData.length).fill("")
  );
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });
  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = () => {
    const isEmailValid = looksLikeMail(email);

    setLoading(true);
    if (!email) {
      return alert("You must enter an email address.");
    }
    const ifNoAns = allData.find((element, i) => !inputValues[i]);

    if (ifNoAns) {
      return alert("You must answer all questions.");
    }

    if (!isEmailValid) {
      return alert("Please, enter a valid email address.");
    }
    const formData = allData.map((ques, index) => ({
      query_id: ques?.form_query_id,
      id: ques?.id,
      answer: inputValues[index],
    }));
    const makeData = {
      data: formData,
      email,
    };
    addFormAns(makeData)
      .unwrap()
      .then((d) => {
        if (d?.status === 401) {
          setMessage({
            error: true,
            message: d.message,
          });
          setLoading(false);
          setOpen(true);
          return;
        }
        setMessage({
          error: false,
          message: d.message,
        });
        setEmail("");
        setInputValues(Array(allData.length).fill(""));
        setLoading(false);
        setOpen(true);
        return;
      })
      .catch((e) => {
        setMessage({
          error: true,
          message: "Something went wrong. Please, try again.",
        });
        setLoading(false);
        setOpen(true);
        return;
      });
  };

  return (
    <div className="py-32">
      <div className="mx-auto">
        <SnackMessage open={open} setOpen={setOpen} message={message} />
        <Container>
          <div className="flex justify-center items-center">
            <div className="card bg-white p-10 rounded-xl shadow-xl w-3/4">
              <h1 className="text-xl font-bold text-center ">
                {data?.form?.title}
              </h1>
              <h1 className=" font-bold text-justify	mt-5 ">
                {data?.form?.description}
              </h1>
              {/* email */}
              <div className="mt-4">
                <Input
                  title={"Email"}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  isRequired
                />
              </div>
              {allData &&
                allData?.map((ques, index) => (
                  <div key={index}>
                    <h1 className="mb-1 mt-6 font-medium text-base  ">
                      Question {index + 1} : {ques.question}
                    </h1>
                    <TextArea
                      value={inputValues[index]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      placeholder="Enter Your Answer"
                    />
                  </div>
                ))}

              <div className="text-center ">
                <button
                  className="mt-10 w-52 bg-red-600 hover:bg-blue-950 text-white p-3 rounded-xl"
                  onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PublicForm;
