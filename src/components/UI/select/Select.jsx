import React from "react";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="input__control"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="default">
        {defaultValue}
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
