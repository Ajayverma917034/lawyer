import React from "react";

const TimePicker2 = ({ label, id, data, setData, placeholder, required }) => {
  const value = data[id] || "12:00"; // Default to 12:00 PM in 24-hour format

  const handleChange = (e) => {
    setData({ ...data, [id]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={`text-xl ${required}`}>
        {label}
      </label>
      <input
        className="p-3 bg-white text-black focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
        type="time"
        id={id}
        name={id}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TimePicker2;
