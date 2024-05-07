import React from "react";

const SelectField2 = ({
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
      <label
        htmlFor={id}
        className={`text-base md:text-[14px] text-black ${
          required ? "required" : ""
        }`}
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        onChange={handleChange}
        value={data[id]}
        className="custom-select p-2 md:p-3 max-md:text-base bg-white text-gray-dark  focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField2;
