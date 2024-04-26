import React from "react";
const TextField2 = ({
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
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`text-base md:text-[14px] text-black ${
          required ? "required" : ""
        }`}
      >
        {label}
      </label>
      <textarea
        className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md resize-none border-2 border-[#b3b3b3]"
        id={id}
        name={id}
        onChange={handleChange}
        value={data[id]}
        placeholder={placeholder}
        rows={5}
        required={required}
      />
    </div>
  );
};

export default TextField2;
