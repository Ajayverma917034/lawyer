import React from "react";

const DateField2 = ({
  label,
  id,
  data,
  setData,
  placeholder,
  required = false,
}) => {
  const handleChange = (e) => {
    setData({ ...data, [id]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className={`text-base md:text-[14px] text-black ${
          required ? "required" : ""
        }`}
      >
        {label}
      </label>
      <input
        className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3] w-full"
        type="date"
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

export default DateField2;
