import React from "react";
import {
  MatterHeader,
  TimeEntriesItem,
} from "../../../components/matter/matter-details/MatterDetailsComponent";
import { IoSearch } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

const data = [
  {
    id: 1,
    title: "Time Efforts",
    value: "0h",
  },
  {
    id: 2,
    title: "Billable",
    value: "0h",
  },
  {
    id: 3,
    title: "Non Billable",
    value: "0h",
  },
  {
    id: 3,
    title: "Total",
    value: "Rs.100",
  },
];
const TimeEntriesLitigation = () => {
  const [menuDetials, setMenuDetails] = React.useState(false);
  return (
    <>
      <div className="items-center">
        <div className="flex justify-between items-center py-2  px-2 border-b border-gray-light">
          <h1 className="text-2xl md:text-3xl font-semibold">Time Entries</h1>
          <div className="flex gap-2 sm:gap-5 max-sm:hidden">
            <button className="btn-white max-sm:px-1 max-sm:py-1 border-gray">
              Time Entries
            </button>
            <button className="btn-white border-gray">Start Timer</button>
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
                  Time Entries
                </button>
                <button className="btn-white border-gray">Start Timer</button>
                <button className="btn-white border-gray">
                  Export to Excel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[20rem] grid grid-cols-1 1374px:grid-cols-3 overflow-y-auto">
        <div className=" col-span-1 lg:col-span-2 border-r border-gray-light">
          <div className="min-h-[30rem] w-full overflow-x-auto bg-white border-t-0 border-b-1 border-gray-light">
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
              {data.map((bill) => (
                <TimeEntriesItem
                  key={bill.id}
                  title={bill.title}
                  value={bill.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeEntriesLitigation;
