import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SelectInput = ({
  title,
  isRequired,
  optionsArray,
  placeholder = "select",
  selectState,
  setSelectState,
  ...rest
}) => {
  return (
    <div className="w-full max-w-[260px]">
      <label className="block">
        <span
          className={`${
            isRequired && "after:content-['*'] after:ml-0.5 after:text-red-500"
          } block font-medium text-secondary text-sm`}>
          {title}
        </span>
        <Autocomplete
          // disablePortal
          id="combo-box-demo"
          options={optionsArray}
          sx={{ width: "100%", marginTop: "2px" }}
          size="small"
          // value={selectState}
          // onChange={(event, newValue) => {
          //   setSelectState(newValue);
          // }}
          value={selectState}
          onChange={(event, newInputValue) => {
            setSelectState(newInputValue);
          }}
          // defaultValue={selectState}
          {...rest}
          renderInput={(params) => (
            <TextField
              required={isRequired}
              placeholder={placeholder}
              {...params}
            />
          )}
          isOptionEqualToValue={(option, value) => option === value}
        />

        {/* <Select
          {...rest}
          sx={{
            width: "100%",
            marginTop: "2px",
            "&::placeholder": { textOverflow: "ellipsis" },
          }}
          size="small">
          <MenuItem sx={{ display: "none" }} value={placeholder} disabled>
            {placeholder}
          </MenuItem>
          {optionsArray?.map((opt, i) => (
            <MenuItem key={i} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select> */}

        {/* <select
          {...rest}
          className="mt-1 px-3 py-2 border shadow-sm focus:outline-none border-gray-400 bg-transparent placeholder-gray-400  block w-full rounded-md sm:text-sm focus:border-blue-500"
          name="cars"
          id="cars">
          <option className="text-sm text-gray-300" selected disabled value="">
            Select a level
          </option>
          {optionsArray?.map((opt, i) => (
            <option key={i} className="text-gray-600 font-medium" value={opt}>
              {opt}
            </option>
          ))}
        </select> */}
      </label>
    </div>
  );
};

export default SelectInput;
