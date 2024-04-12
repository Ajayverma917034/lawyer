import React from "react";

const InputField = ({ label, id, data, setData, placeholder }) => {
  const handleChange = (e) => {
    setData({ ...data, [id]: e.target.value });
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="id">{label}</label>
      <input
        type="text"
        className="input-box"
        name={id}
        id={id}
        onChange={handleChange}
        value={data.id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
