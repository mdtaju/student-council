import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import React from "react";
import Feature from "./Feature";

function FeaturesArea({ features }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] p-2 bg-blue-100 rounded-full grid place-items-center">
          <EventNoteOutlinedIcon />
        </div>
        <span className="text-xl font-semibold text-secondary">Features</span>
      </div>
      <div>
        {features?.map((f, i) => (
          <Feature key={i} feature={f} />
        ))}
      </div>
    </div>
  );
}

export default FeaturesArea;
