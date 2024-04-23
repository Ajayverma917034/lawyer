import React from "react";

const SelectField = ({
  label,
  id,
  data,
  setData,
  options,
  placeholder,
  required = false,
}) => {
  const handleChange = (e) => {
    setData({ ...data, [id]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={`text-xl ${required ? "required" : ""}`}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        onChange={handleChange}
        value={data[id]}
        placeholder={placeholder}
        className="p-3 bg-white text-black focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
