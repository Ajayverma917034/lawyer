import React from "react";

const InputField2 = ({ label, id, data, setData, placeholder, required }) => {
  const handleChange = (e) => {
    setData({ ...data, [id]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="id" className={`text-xl ${required}`}>
        {label}
      </label>
      <input
        type="text"
        className="p-3 bg-white text-black focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
        name={id}
        id={id}
        onChange={handleChange}
        value={data.id}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField2;
