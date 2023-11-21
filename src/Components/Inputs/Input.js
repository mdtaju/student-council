import { TextField } from "@mui/material";
import React from "react";

const Input = ({ title, isRequired, ...rest }) => {
  return (
    <div>
      <label className="block">
        <span
          className={`${
            isRequired && "after:content-['*'] after:ml-0.5 after:text-red-500"
          } block font-medium text-secondary text-sm`}>
          {title}
        </span>
        <TextField
          {...rest}
          // id="outlined-basic"
          // label="Outlined"
          variant="outlined"
          size="small"
          sx={{ width: "100%", marginTop: "2px" }}
        />
        {/* <input
          {...rest}
          className="mt-1 px-3 py-2 border shadow-sm focus:outline-none border-gray-400 bg-transparent placeholder-gray-400  block w-full rounded-md sm:text-sm focus:border-blue-500"
        /> */}
      </label>
    </div>
  );
};

export default Input;
