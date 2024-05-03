import React from "react";

const LoadMoreDataBtn = ({ limit, state, fetchDataFun, additionalParam }) => {
  console.log(state);
  if (
    state !== null &&
    state.totalDocs > state.page - 1 * limit + state.results.length
  ) {
    return (
      <button
        onClick={() =>
          fetchDataFun({ ...additionalParam, page: state.page + 1 })
        }
        className="mt-5 text-white bg-[#494747] hover:bg-[#4caf50] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Load More
      </button>
    );
  }
};

export default LoadMoreDataBtn;
