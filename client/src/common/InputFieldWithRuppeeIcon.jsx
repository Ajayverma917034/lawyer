import React, { useState } from "react";

const InputFiedWithRupeeIcon = ({
  label,
  id,
  data,
  setData,
  placeholder,
  required = false,
  type = "text",
  maxLimit = 15,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  console.log(type);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // setIsFocused(false);
    // const newValue = formatNumber(data[id]);
    // setData({ ...data, [id]: newValue });
  };

  const formatNumber = (value) => {
    if (!isNaN(value) && value !== "") {
      const numberValue = parseFloat(value);
      if (numberValue >= 10000000) {
        return `${(numberValue / 10000000).toFixed(2)}cr`;
      } else if (numberValue >= 100000) {
        return `${(numberValue / 100000).toFixed(2)}lac`;
      } else {
        return value.toFixed(2);
      }
    }
    return value;
  };

  const handleChange = (e) => {
    setData({ ...data, [id]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className={`text-base md:text-[14px] text-black font-normal ${
          required ? "required" : ""
        }`}
      >
        {label}
      </label>
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          ₹
        </span>
        <input
          className="p-2 md:p-3 !pl-6 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3] w-full"
          name={id}
          id={id}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={data[id]}
          placeholder={placeholder}
          required={required}
          type="number"
          maxLength={maxLimit}
        />
      </div>
    </div>
  );
};

export default InputFiedWithRupeeIcon;
