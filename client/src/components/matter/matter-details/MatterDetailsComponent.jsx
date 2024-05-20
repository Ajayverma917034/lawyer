import { BsQuestionCircle } from "react-icons/bs";
import { ToolTip } from "../../../common/ToolTip";
import { VscCalendar } from "react-icons/vsc";
import { LuEye } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
export const MatterHeader = ({ title, Icon = null }) => {
  return (
    <div className="bg-blue flex items-center text-xl py-3 text-white px-5 justify-between">
      <h2>{title}</h2> {Icon && <Icon size={25} />}
    </div>
  );
};

export const BillingItem = ({ title, helpingText, value }) => {
  return (
    <div className="flex justify-between">
      <p className="text-black text-[18px] flex gap-2 items-center py-1">
        {title}{" "}
        <ToolTip title={helpingText}>
          {" "}
          <BsQuestionCircle />
        </ToolTip>
      </p>
      <span className="text-xl text-black">{value} INR</span>
    </div>
  );
};

export const PeopleItem = ({ title, helpingText, value }) => {
  return (
    <div className="flex justify-between">
      <p className="text-black text-[18px] flex gap-2 items-center my-1">
        {title}
      </p>
      <div>
        <span className="text-xl text-black border-b border-gray pb-0 mb-0">
          {value}
        </span>
      </div>
    </div>
  );
};
export const DateAndTimeItem = ({ title, index, value }) => {
  return (
    <div className="flex justify-between">
      <p className="text-black text-[18px] flex gap-2 items-center my-1">
        {title}
      </p>
      <div>
        <span
          className={`text-xl text-black ${
            index <= 4 ? "border-b" : ""
          } border-gray pb-0 mb-0 flex gap-3`}
        >
          {value} {index <= 4 && <VscCalendar size={22} color="gray-dark" />}
        </span>
      </div>
    </div>
  );
};
export const CompanyAndPerson = ({ title }) => {
  return (
    <div className="flex justify-between">
      <p className="text-black text-[18px] flex gap-2 items-center my-1">
        {title}
      </p>
      <div className="flex gap-x-3">
        <LuEye size={25} className="text-blue cursor-pointer" />
        <GoPencil size={25} className="text-blue cursor-pointer" />
        <RiDeleteBin5Line size={25} className="text-red cursor-pointer" />
      </div>
    </div>
  );
};

export const SelectField = ({
  label,
  options,
  value,
  onchange,
  name,
  defaultValue = "",
  required = "",
}) => {
  return (
    <div className="flex items-center justify-between w-full py-2">
      <label
        className={`text-black text-xl mt-1 ${required}`}
        htmlFor="select-field"
      >
        {label}
      </label>
      <select
        id="select-field"
        className="custom-select2"
        value={defaultValue}
        defaultValue={defaultValue}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};
export const InputField = ({ label, value, name, required = "" }) => {
  return (
    <div className="flex items-center justify-between w-full py-2">
      <label
        className={`text-black text-xl mt-1 ${required}`}
        htmlFor="select-field"
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        className="border-b border-[#7f7f7f] text-black text-xl w-[200px] pl-2 focus:outline-none"
      />
    </div>
  );
};
export const DisplayField = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between w-full py-2">
      <label
        className="text-black text-xl required mt-1"
        htmlFor="select-field"
      >
        {label}
      </label>
      <div className="w-[200px]">
        <p className="font-semibold text-[18px] text-blue">{value}</p>
      </div>
    </div>
  );
};

export const SearchFieldByTyping = ({
  label,
  value,
  onchange,
  name,
  options,
}) => {
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(e.target.value);

    const filtered = options
      .filter(
        (option) => option.label && option.label.toLowerCase().includes(value)
      )
      .slice(0, 4); // Limit to 4 options
    setFilteredOptions(filtered);
  };

  const handleClick = () => {
    setShowOptions(true);
    setFilteredOptions(options.slice(0, 4)); // Show first 4 options initially
  };

  const handleOptionClick = (option) => {
    setInput(option.label);
    setShowOptions(false);
  };

  return (
    <div className="flex items-center justify-between w-full py-2">
      <label className="text-black text-xl mt-1" htmlFor="select-field">
        {label}
      </label>
      <div className="w-[200px]">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          defaultValue="None"
          onClick={handleClick}
          placeholder="Write something..."
          className="w-full p-2 border border-gray-300 rounded"
        />
        {showOptions && (
          <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
            {filteredOptions.map((option) => (
              <li
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
