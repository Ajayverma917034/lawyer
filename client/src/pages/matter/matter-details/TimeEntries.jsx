import React from "react";
import { MatterHeader } from "../../../components/matter/matter-details/MatterDetailsComponent";
import { IoSearch } from "react-icons/io5";

const TimeEntries = () => {
  return (
    <>
      <div className="items-center">
        <div className="flex justify-between py-2  px-2 border-b border-gray-light">
          <h1 className="text-[18px] md:text-3xl font-semibold">
            Time Entries
          </h1>
          <div className="flex gap-5">
            <button className="btn-white border-gray">Time Entries</button>
            <button className="btn-white border-gray">Start Timer</button>
            <button className="btn-white border-gray">Export to Excel</button>
          </div>
        </div>
      </div>
      <div className="min-h-[20rem] grid grid-cols-1 1374px:grid-cols-3 overflow-y-auto">
        <div className=" col-span-1 lg:col-span-2 border-r border-gray-light">
          <div className="w-full overflow-x-auto bg-white border-t-0 border-b-1 border-gray-light">
            <table className="table-auto w-full">
              <thead className="border-b border-gray-light">
                <tr>
                  <th class="px-4 py-2 font-normal text-start">Paid On</th>
                  <th class="px-4 py-2 font-normal text-start">Expense ID </th>
                  <th class="px-4 py-2 font-normal text-start">Reference</th>
                  <th class="px-4 py-2 font-normal text-start">
                    Expense Category
                  </th>
                  <th class="px-4 py-2 font-normal text-start">
                    Expense Amount
                  </th>
                  <th class="px-4 py-2 font-normal text-start">Paid Through</th>
                  <th class="px-4 py-2 font-normal text-start">
                    Billing Status
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-1 flex flex-col">
          <div>
            <MatterHeader title="Filter" />
            <div className="flex flex-col px-10 py-5">
              <div className="flex items-center justify-between w-[80%] py-2">
                <label
                  className={`text-black text-xl mt-1`}
                  htmlFor="select-field"
                >
                  User
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="text"
                    placeholder="Username"
                    className="border-b ml-6 border-[#7f7f7f] text-black text-xl w-[200px] pl-2 focus:outline-none outline-none"
                  />
                  <IoSearch
                    size={18}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-[80%] py-2">
                <label
                  className={`text-black text-xl mt-1`}
                  htmlFor="select-field"
                >
                  From
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="date"
                    placeholder="Username"
                    className="border-b ml-6 border-[#7f7f7f] text-black text-xl w-[200px] pl-2 focus:outline-none outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-[80%] py-2">
                <label
                  className={`text-black text-xl mt-1`}
                  htmlFor="select-field"
                >
                  To
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="date"
                    placeholder="Username"
                    className="border-b ml-6 border-[#7f7f7f] text-black text-xl w-[200px] pl-2 focus:outline-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <MatterHeader title="Balance" />
            <div className="flex flex-col px-10 py-5">
              <div className="flex items-center w-full py-2">
                <label
                  className={`text-black text-xl mt-1`}
                  htmlFor="select-field"
                >
                  User
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="text"
                    placeholder="Username"
                    className="border-b ml-6 border-[#7f7f7f] text-black text-xl w-[200px] pl-2 focus:outline-none outline-none"
                  />
                  <IoSearch
                    size={18}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
              <div className="flex items-center w-full py-2">
                <label
                  className={`text-black text-xl mt-1`}
                  htmlFor="select-field"
                >
                  From
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="date"
                    placeholder="Username"
                    className="border-b ml-6 border-[#7f7f7f] text-black text-xl w-[200px] pl-2 focus:outline-none outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center w-full py-2">
                <label
                  className={`text-black text-xl mt-1`}
                  htmlFor="select-field"
                >
                  To
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="date"
                    placeholder="Username"
                    className="border-b ml-6 border-[#7f7f7f] text-black text-xl w-[200px] pl-2 focus:outline-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeEntries;
