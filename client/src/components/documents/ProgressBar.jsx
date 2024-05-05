import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-[300px] relative">
      <div className="w-full h-[30px] rounded-full bg-white mb-5">
        <div
          className="h-full rounded-full bg-[#2ecc71]"
          style={{ transition: "width 0.3s ease-out", width: `${progress}%` }}
        ></div>
      </div>
      {/* label */}
      <div
        className="mt-1 text-xl font-bold text-blue absolute top-0 left-0"
        style={{
          marginLeft: `calc(${progress}% - 0rem)`, // Adjust label position dynamically
          transition: "margin-left 0.3s ease-out",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
