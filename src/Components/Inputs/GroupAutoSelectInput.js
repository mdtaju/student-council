import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const GroupAutoSelectInput = ({
  title,
  isRequired,
  optionsArray,
  state,
  setState,
  placeholder = "Select",
  ...rest
}) => {
  const getEmptyValue = optionsArray.find((item) => item.firstLetter === "");

  if (!(getEmptyValue?.firstLetter === "")) {
    optionsArray.unshift({ firstLetter: "", title: "" });
  }

  let getValue;
  getValue = optionsArray.find((item) => item.title === state);
  if (!getValue || !(getValue?.firstLetter !== "")) {
    getValue = { firstLetter: "", title: "" };
  }

  return (
    <div>
      <label className="block">
        <span
          className={`${
            isRequired && "after:content-['*'] after:ml-0.5 after:text-red-500"
          } block font-medium text-secondary text-sm`}>
          {title}
        </span>
      </label>
      <Autocomplete
        id="grouped-demo"
        options={optionsArray.sort((a, b) =>
          b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        autoHighlight
        sx={{ marginTop: "2px" }}
        fullWidth
        size="small"
        value={getValue}
        onChange={(event, newInputValue) => {
          setState(newInputValue?.title);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        renderInput={(params) => (
          <TextField
            placeholder={placeholder}
            required={isRequired}
            {...rest}
            {...params}
          />
        )}
      />
    </div>
  );
};

export default GroupAutoSelectInput;
