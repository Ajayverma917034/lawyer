import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";

const CollapseComponent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  // console.log(isOpen);
  return (
    <div className="m-2">
      <div
        className={`flex gap-4 cursor-pointer max-sm:justify-between`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl md:text-[25px] font-medium">{title}</h2>
        <button>
          {isOpen ? (
            <ExpandLess className="!w-8 !h-8" />
          ) : (
            <ExpandMore className="!w-8 !h-8" />
          )}
        </button>
      </div>

      {isOpen && children}
    </div>
  );
};

export default CollapseComponent;
