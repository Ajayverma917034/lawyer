import React from "react";

const LoadNextBtn = ({ limit, state, fetchDataFun, additionalParam }) => {
  const handleNext = () => {
    fetchDataFun({ ...additionalParam, page: state.page + 1 });
  };

  const isNext =
    state !== null &&
    state.totalDocs > state.page - 1 * limit + state.results.length;
  {
    return (
      <button
        onClick={handleNext}
        disabled={!isNext}
        className="p-2 bg-white-light border border-gray-light rounded-tr-md rounded-br-md disabled:cursor-not-allowed"
      >
        Next
      </button>
    );
  }
};

export default LoadNextBtn;
