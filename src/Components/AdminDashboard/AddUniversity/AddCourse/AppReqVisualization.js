import React from "react";

const AppReqVisualization = ({ requirements }) => {
  // note check
  function noteQuestionCheck(obj) {
    const typeOf = typeof obj;
    if (typeOf === "string") {
      return obj;
    }
    return obj.title;
  }

  return (
    <>
      {requirements?.map((req, i) => (
        <div key={i} className="p-2 border border-green-300 rounded-md">
          <h1 className="text-green-500 text-center mb-3 underline font-bold">
            Course Requirement: {i + 1}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-3">
            <div>
              <h1 className="text-sm font-medium">Application Type:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {req.application_type}
              </p>
            </div>
            <div>
              <h1 className="text-sm font-medium">Requirement Type:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {req.requirement_type}
              </p>
            </div>
            <div>
              <h1 className="text-sm font-medium">Document Option:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {req.document_option}
              </p>
            </div>
            <div>
              <h1 className="text-sm font-medium">Note Option:</h1>
              <p className="text-normal font-semibold text-gray-700">
                {req.note_option}
              </p>
            </div>
            {req?.note_questions?.map((n, i) => (
              <div key={i}>
                <h1 className="text-sm font-medium">Note Question {i + 1}:</h1>
                <p className="text-normal font-semibold text-gray-700">
                  {noteQuestionCheck(n)}
                </p>
              </div>
            ))}
          </div>
          <h1 className="text-sm font-medium">Title:</h1>
          <h1 className="text-base font-semibold text-gray-700">{req.title}</h1>
          <div className="my-3">
            <h1 className="text-sm font-medium">About Requirement:</h1>
            <div
              className="mt-2 p-3 border border-gray-200 rounded-md"
              dangerouslySetInnerHTML={{
                __html: req.about_requirement,
              }}></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppReqVisualization;
