import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SelectChip = ({
  title,
  isRequired,
  options,
  stateArr,
  setStateArr,
  onChangeHandler,
  placeholder = "select",
  ...rest
}) => {
  const handleChange = (event, value) => {
    onChangeHandler(event, value);
  };
  return (
    <div>
      <label className="block">
        <span
          className={`${
            isRequired && "after:content-['*'] after:ml-0.5 after:text-red-500"
          } block font-medium text-secondary text-sm`}>
          {title}
        </span>
        <div className="mt-1">
          <Autocomplete
            multiple
            id="tags-outlined"
            options={options}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} placeholder={placeholder} />
            )}
            sx={{ width: "100%", marginTop: "2px" }}
            size="small"
            value={stateArr}
            onChange={handleChange}
            {...rest}
          />
        </div>
      </label>
    </div>
  );
};

export default SelectChip;
