import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import React from "react";

const TimeInput = ({ title, isRequired, ...rest }) => {
  return (
    <div className="w-full">
      <label className="block">
        <span
          className={`${
            isRequired && "after:content-['*'] after:ml-0.5 after:text-red-500"
          } block font-medium text-secondary text-sm mb-1`}>
          {title}
        </span>
      </label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker
          {...rest}
          // defaultValue={moment()} // "2022-04-17T15:30"
          className="w-full"
          slotProps={{
            textField: {
              size: "small",
              required: isRequired,
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default TimeInput;
