import React from "react";

const Details = ({ title, value }) => {
  return (
    <>
      <p className="text-xl md:text-[18px] text-black font-medium">
        {title} :
        <span className="text-xl md:text-[18px] font-normal ml-2">
          {value ? value : "--"}
        </span>
      </p>
    </>
  );
};
const ExpensesGeneral = () => {
  return (
    <div className="grid grid-cols-1 1374px:grid-cols-3 min-h-screen overflow-y-auto">
      <div className=" col-span-1 lg:col-span-2 border-r border-gray-light p-3">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-[25px] font-semibold border-b border-black">
            General Info
          </h1>

          <div className="flex flex-col gap-y-4 my-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              <Details title="Expense Category" value="Electricity" />
              <Details title="Paid On" value="14-05-2024" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              <Details title="Payment Method" value="Cash" />
              <Details title="Inclusive Tax" value="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              <Details title="Paid Through" value="vijay bank (100000000000)" />
              <Details title="Reference #" value="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              <Details title="Amount:" value="INR 5000.00" />
              <Details title="Supplier" value="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              <Details title="Comments" value="(No Data)" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-2xl md:text-[25px] font-semibold border-b border-black">
            All Notes
          </h1>
          <p className="text-center mt-5">No Notes Available</p>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 flex flex-col pt-2 md:pt-8 px-4 ">
        <div className="flex flex-col p-4 rounded-lg border border-gray-dark gap-y-5">
          <div className="flex justify-between">
            <p className="text-xl md:text-[18px] text-black font-medium">
              Status
            </p>
            <p className="text-xl md:text-[18px] text-green font-medium">
              Approved
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-xl md:text-[18px] text-black font-medium">
              Billing Staus
            </p>
            <p className="text-xl md:text-[18px] text-black font-medium">
              Internal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesGeneral;
