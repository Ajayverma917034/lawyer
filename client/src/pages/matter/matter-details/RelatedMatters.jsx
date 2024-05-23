import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
const RelatedMatters = () => {
  const [menuDetials, setMenuDetails] = useState(false);
  return (
    <div className="w-full bg-white">
      <div className="px-4 py-5 items-center">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Related Matter
            </h1>
            <div className="flex">
              <div class="flex items-center border-2 border-gray-light rounded-md overflow-hidden bg-white">
                <input
                  type="text"
                  placeholder="Search Task..."
                  class="px-4 py-2 w-full outline-none"
                />
                <button class="px-4 text-gray-600 bg-white">
                  <IoSearchOutline className="text-blue" />
                </button>
              </div>
            </div>
            <button className="btn-dark">Add Relation</button>
          </div>
          <div className="relative">
            <div className="flex gap-2 sm:gap-5">
              <button className="btn-white border-gray">Save</button>
              <button className="btn-white border-gray">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] overflow-x-auto bg-white border-t-2 border-b-2 border-gray-light">
        <table className="table-auto w-full">
          <thead className="border-b border-gray-light">
            <tr>
              <th class="px-4 py-2 font-normal text-start">Matter ID</th>
              <th class="px-4 py-2 font-normal text-start">Comment </th>
              <th class="px-4 py-2 font-normal text-start">Companies</th>
              <th class="px-4 py-2 font-normal text-start">Reffered By</th>
              <th class="px-4 py-2 font-normal text-start">Assignee</th>
              <th class="px-4 py-2 font-normal text-start">Practice Area</th>
              <th class="px-4 py-2 font-normal text-start">Matter Priority</th>
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

export default RelatedMatters;
