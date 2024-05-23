import React from "react";
import {
  BillingItem,
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
const subTotalData = [
  {
    id: 1,
    title: "Services",
    value: "0.0 INR",
  },
  {
    id: 2,
    title: "Expenses",
    value: "0.0 INR",
  },
  {
    id: 3,
    title: "Time Entries",
    value: "0.0 INR",
  },
  {
    id: 4,
    title: "Bill terms",
    value: "0.0 INR",
  },
];
const Invoices = () => {
  const [menuDetials, setMenuDetails] = React.useState(false);
  return (
    <>
      <div className="items-center">
        <div className="flex justify-between items-center py-3 px-2 border-b border-gray-light">
          <h1 className="text-2xl md:text-3xl font-semibold">Invoices</h1>

          <div className="flex gap-2 sm:gap-5">
            <button className="btn-white border-gray">Export to Excel</button>
          </div>
        </div>
      </div>
      <div className="min-h-[20rem] grid grid-cols-1 1374px:grid-cols-3 overflow-y-auto">
        <div className=" col-span-1 lg:col-span-2 border-r border-gray-light">
          <div className="min-h-[30rem] w-full overflow-x-auto bg-white border-t-0 border-b-1 border-gray-light">
            <table className="table-auto w-full">
              <thead className="border-b border-gray-light">
                <tr>
                  <th class="px-4 py-2 font-normal text-start">Invoice Date</th>
                  <th class="px-4 py-2 font-normal text-start">Invoice# </th>
                  <th class="px-4 py-2 font-normal text-start">Prefix Type</th>
                  <th class="px-4 py-2 font-normal text-start">
                    Client Account
                  </th>
                  <th class="px-4 py-2 font-normal text-start">
                    Client Account Number
                  </th>
                  <th class="px-4 py-2 font-normal text-start">Total</th>
                  <th class="px-4 py-2 font-normal text-start">Paid</th>
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
            <MatterHeader title="Billing Preferences" />
            <div className="flex flex-col px-10 py-5">
              <div className="flex justify-between">
                <p className="text-black text-[18px] flex gap-2 items-center my-1">
                  Billing Method
                </p>
                <div>
                  <span className="text-black text-[18px]">Hourly Rate</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <MatterHeader title="Sub Total" />
            <div className="flex flex-col px-10 py-5">
              {subTotalData.map((bill) => (
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

export default Invoices;
