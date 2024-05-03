import React from "react";

const LoadPrevBtn = ({ limit, state, fetchDataFun, additionalParam }) => {
  const handlePrev = () => {
    const prevPage = state.page - 1;
    fetchDataFun({ ...additionalParam, page: prevPage });
  };

  const hasPrevData = state !== null && state.page > 1;

  return (
    <button
      onClick={handlePrev}
      disabled={!hasPrevData}
      className={`p-2 bg-white-light border border-gray-light rounded-tl-md rounded-bl-md ${
        !hasPrevData ? "cursor-not-allowed" : ""
      }`}
    >
      Prev
    </button>
  );
};

export default LoadPrevBtn;
