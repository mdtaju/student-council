import React from "react";

const RadioInput = ({
  title,
  isRequired,
  options,
  selectedValue,
  onChange,

  ...rest
}) => {
  return (
    <div>
      <div className="block">
        <span
          className={`${
            isRequired && "after:content-['*'] after:ml-0.5 after:text-red-500"
          } block font-medium text-secondary text-sm`}>
          {title}
        </span>
        <div className="grid grid-cols-2 items-center gap-4 mt-2">
          {options.map((option, i) => (
            <label
              key={i}
              className="flex items-center gap-3 text-lg cursor-pointer">
              <input
                {...rest}
                type="radio"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={(e) => onChange(e.target.value)}
                className="w-[24px] h-[24px]"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioInput;
