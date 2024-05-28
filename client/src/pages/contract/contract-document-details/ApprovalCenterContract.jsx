import React from "react";

const ApprovalCenterContract = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-2 h-full">
      <p className="text-xl">
        You don't have anything added to your approval center
      </p>
      <button className="btn-dark p-2 px-3">Add Approval</button>
    </div>
  );
};

export default ApprovalCenterContract;
