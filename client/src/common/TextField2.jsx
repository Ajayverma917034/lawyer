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
      <label htmlFor={id} className={`text-xl ${required ? "required" : ""}`}>
        {" "}
        {label}
      </label>
      <textarea
        className="p-3 bg-white text-black focus:outline-none outline-none rounded-md resize-none border-2 border-[#b3b3b3]"
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
