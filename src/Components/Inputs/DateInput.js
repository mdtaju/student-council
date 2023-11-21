import { DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import moment from "moment/moment";
import React from "react";

const DateInput = ({ title, isRequired, error, ...rest }) => {
  return (
    <div className="w-full">
      <div>
        <label className="block">
          <span
            className={`${
              isRequired &&
              "after:content-['*'] after:ml-0.5 after:text-red-500"
            } block font-medium text-secondary text-sm mb-1`}>
            {title}
          </span>
          <LocalizationProvider className="w-full" dateAdapter={AdapterMoment}>
            <DatePicker
              {...rest}
              className="w-full rounded-md"
              slotProps={{
                textField: {
                  size: "small",
                  required: isRequired,
                  error: error,
                },
              }}
              // renderInput={(params) => (
              //   <TextField
              //     size="small"
              //     required={isRequired}
              //     {...params}
              //     helperText={null}
              //   />
              // )}
            />
          </LocalizationProvider>
        </label>
      </div>
    </div>
  );
};

export default DateInput;
