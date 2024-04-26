import React from "react";

const TimePicker2 = ({
  label,
  id,
  data,
  setData,
  placeholder,
  required = false,
}) => {
  const value = data[id] || "12:00"; // Default to 12:00 PM in 24-hour format

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
      <input
        className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
        type="time"
        id={id}
        name={id}
        onChange={handleChange}
        value={data[id]}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TimePicker2;
