import React from "react";

const DateField2 = ({ label, id, data, setData, placeholder, required }) => {
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
        type="date"
        id={id}
        name={id}
        onChange={handleChange}
        value={data[id]}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DateField2;
