import JoditEditor from "jodit-react";
import React, { useRef } from "react";

const Notes = ({ title, isRequired, notes, setNotes }) => {
  const editor = useRef(null);

  return (
    <div>
      <h1 className="text-sm text-gray-800 font-medium">
        {title} {isRequired && <span className="text-red-600">*</span>}
      </h1>
      <JoditEditor
        ref={editor}
        value={notes}
        tabIndex={1} // tabIndex of textarea
        onChange={(newContent) => setNotes(newContent)} // preferred to use only this option to update the
        height="400px"
        style={{ height: "400px" }}
      />
    </div>
  );
};

export default Notes;
