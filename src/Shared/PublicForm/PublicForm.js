import { Container } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleFormQuery } from "../../features/student/studentApi";
import TextArea from "../../Components/Inputs/TextArea";

const PublicForm = () => {
  const params = useParams();
  const { data } = useGetSingleFormQuery(params.id);
  console.log(data)
  const allData = [...(data?.questions || [])].reverse();
  const [inputValues, setInputValues] = useState(Array(allData.length).fill(""));

  console.log(allData)
  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = () => {
    const formData = allData.map((ques, index) => ({
      question: ques?.question,
      answer: inputValues[index],
    }));
    console.log(formData);
  };

  return (
    <div className="py-32">
      <div className="mx-auto">
        <Container>
          <div className="flex justify-center items-center">

            <div className="card bg-white p-10 rounded-xl shadow-xl w-3/4">
              <h1 className="text-xl font-bold text-center ">{data?.form?.title}</h1>
              <h1 className=" font-bold text-justify	mt-5 ">{data?.form?.description}</h1>
              {allData && allData?.map((ques, index) => (
                <div key={index}>
                  <h1 className="mb-3 mt-6 font-bold ">Question {index + 1} : {ques.question}</h1>
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
                  onClick={handleSubmit}
                >
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