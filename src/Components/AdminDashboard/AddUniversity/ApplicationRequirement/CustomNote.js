import React, { useState } from "react";
import Input from "../../../Inputs/Input";

const CustomNote = ({ notes, setNotes }) => {
  const [showNote, setShowNote] = useState(false);
  const [question, setQuestion] = useState("");

  const handleSave = () => {
    if (question) {
      setNotes((prevNotes) => [...prevNotes, question]);
    }
    setQuestion("");
  };

  const handleCancel = () => {
    setQuestion("");
    setShowNote(false);
  };

  const handleDelete = (index) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((n, i) => i !== index);
    });
  };

  // note check
  function noteQuestionCheck(obj) {
    const typeOf = typeof obj;
    if (typeOf === "string") {
      return obj;
    }
    return obj.title;
  }

  return (
    <div className="md:col-span-3 space-y-3">
      {notes.map((n, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-4 p-2 border border-gray-300 rounded-md">
          <p>{noteQuestionCheck(n)}</p>
          <div
            className="px-4 py-1 text-white bg-red-500 hover:bg-red-600 active:scale-95 duration-200 rounded-md cursor-pointer"
            onClick={() => handleDelete(i)}>
            Delete
          </div>
        </div>
      ))}
      {showNote && (
        <>
          <Input
            title={"Question"}
            placeholder={"Enter a input question"}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <div className="w-fit col-span-3 ml-auto flex items-center gap-4">
            <div
              className="px-4 py-1 text-white bg-gray-500 hover:bg-gray-600 active:scale-95 duration-200 rounded-md cursor-pointer"
              onClick={handleCancel}>
              Cancel
            </div>
            <div
              onClick={handleSave}
              className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-md cursor-pointer">
              Save
            </div>
          </div>
        </>
      )}
      <button
        onClick={() => setShowNote(true)}
        className="px-6 mt-4 py-1 w-fit text-white bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 rounded-full">
        Add Note Qus.
      </button>
    </div>
  );
};

export default CustomNote;
