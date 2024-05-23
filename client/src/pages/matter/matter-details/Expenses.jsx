import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
const Expenses = () => {
  const [menuDetials, setMenuDetails] = useState(false);
  return (
    <div className="w-full bg-white">
      <div className="px-4 pt-2 items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Related Expenses
          </h1>
          <div className="flex gap-2 sm:gap-5 max-sm:hidden">
            <button className="btn-white max-sm:px-1 max-sm:py-1 border-gray">
              Add Expenses
            </button>
            <button className="btn-white border-gray">Bulk Expenses</button>
            <button className="btn-white border-gray">Export to Excel</button>
          </div>

          <div className="relative sm:hidden">
            <HiDotsVertical
              size={22}
              className="cursor-pointer hidden max-sm:flex"
              onClick={() => setMenuDetails(!menuDetials)}
            />
            {menuDetials && (
              <div className="flex gap-2 sm:gap-5 max-sm:absolute max-sm:flex-col max-sm:bg-white shadow-medium-shadow max-sm:right-0 max-sm:p-3 max-sm:rounded-md">
                <button className="btn-white max-sm:px-1 max-sm:py-1 border-gray">
                  Add Expenses
                </button>
                <button className="btn-white border-gray">Bulk Expenses</button>
                <button className="btn-white border-gray">
                  Export to Excel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] overflow-x-auto mt-6 bg-white border-t-2 border-b-2 border-gray-light">
        <table className="table-auto w-full">
          <thead className="border-b border-gray-light">
            <tr>
              <th class="px-4 py-2 font-normal text-start">Paid On</th>
              <th class="px-4 py-2 font-normal text-start">Expense ID </th>
              <th class="px-4 py-2 font-normal text-start">Reference</th>
              <th class="px-4 py-2 font-normal text-start">Expense Category</th>
              <th class="px-4 py-2 font-normal text-start">Expense Amount</th>
              <th class="px-4 py-2 font-normal text-start">Paid Through</th>
              <th class="px-4 py-2 font-normal text-start">Billing Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <div className="flex gap-6 px-4 py-2 border-b border-gray-light bg-white flex-wrap">
        <div className="flex gap-5 max-sm:w-full max-sm:justify-between">
          <div>Page 1 of 1</div>
          <div className="flex gap-4">
            <button className="text-blue">Prev</button>
            <button className="text-blue">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
