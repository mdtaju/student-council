import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleFormQuery } from "../../features/student/studentApi";

const PublicForm = () => {
  const params = useParams();
  const { data } = useGetSingleFormQuery(params.id);
  console.log(data);
  return (
    <div className="py-40">
      <div className="mx-auto ">
        <Container className="bg-red-500" fixed>
          <h1 className="text-4xl font-bold ">
            {" "}
            Hello public !!!!{params?.id}
          </h1>
        </Container>
      </div>
    </div>
  );
};

export default PublicForm;
