import { Delete, DeleteOutlineOutlined, Minimize } from "@mui/icons-material";
import React from "react";

const OpponentInput = ({ index, data, setData }) => {
  const handleChange = (field, value) => {
    const newData = { ...data };
    newData[field] = value;
    setData(newData);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <label htmlFor={`opponentName-${index}`} className={`text-xl required`}>
          Opponent Name - {index + 1}
        </label>
        {/* {data.length > 1 && ( */}
        <DeleteOutlineOutlined className="hover:text-red hover:text" />
        {/* )} */}
      </div>
      <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3 mt-3">
        <div className="grid col-span-1">
          <select
            id={`opponentType-${index}`}
            required
            onChange={(e) =>
              handleChange(`opponentType-${index}`, e.target.value)
            }
            className={`p-3 bg-white text-black focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]`}
          >
            <option value="">-- choose --</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>
        <div className="grid col-span-2 mt-2 md:mt-0">
          <input
            id={`opponentName-${index}`}
            required
            onChange={(e) =>
              handleChange(`opponentName-${index}`, e.target.value)
            }
            className="p-3 bg-white text-black focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
          />
        </div>
      </div>
      <div className="mt-3">
        <label
          htmlFor={`opponentPosition-${index}`}
          className={`text-xl required`}
        >
          Opponent Position
        </label>
        <div className="grid grid-cols-1 gap-4">
          <input
            id={`opponentPosition-${index}`}
            required
            onChange={(e) =>
              handleChange(`opponentPosition-${index}`, e.target.value)
            }
            className="p-2 md:p-3 bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
          />
        </div>
      </div>
    </div>
  );
};

export default OpponentInput;
