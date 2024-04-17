import React from "react";

const DateField = ({ label, id, data, setData, placeholder }) => {
  const handleChange = (e) => {
    setData({ ...data, [id]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}  className='text-xl'>{label}</label>
      <input
      className='p-3 bg-white text-black focus:outline-none outline-none rounded-md'
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

export default DateField;
