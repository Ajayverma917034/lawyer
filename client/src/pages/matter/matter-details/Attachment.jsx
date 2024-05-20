import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Attachment = () => {
  return (
    <div className="w-full bg-white">
      <div className="px-4 pt-2 items-center">
        <div className="flex justify-between">
          <h1 className="text-[18px] md:text-3xl font-semibold">Attachment</h1>
          <div className="flex gap-10">
            <button className="btn-white bg-blue text-white font-semibold flex items-center py-1">
              <IoMdAdd size={20} /> New
            </button>
            <button className="btn-white bg-blue text-white font-semibold flex items-center py-1">
              Upload
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-9 gap-5 w-full">
          <h1 className="text-[18px] md:text-3xl font-semibold">Matter Id</h1>
          <div className="flex">
            <div class="flex items-center border-2 border-gray-light rounded-md overflow-hidden bg-white">
              <input
                type="text"
                placeholder="Search..."
                class="px-4 py-2 w-full outline-none"
              />
              <button class="px-4 text-gray-600 bg-white">
                <IoSearchOutline className="text-blue" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] overflow-x-auto mt-6 bg-white border-t-2 border-b-2 border-gray-light">
        <table className="table-auto w-full">
          <thead className="border-b border-gray-light">
            <tr>
              <th class="px-4 py-2 font-normal text-start">Name</th>
              <th class="px-4 py-2 font-normal text-start">Type </th>
              <th class="px-4 py-2 font-normal text-start">Status</th>
              <th class="px-4 py-2 font-normal text-start">Keywords</th>
              <th class="px-4 py-2 font-normal text-start">File Size</th>
              <th class="px-4 py-2 font-normal text-start">Added On</th>
              <th class="px-4 py-2 font-normal text-start">Added By</th>
              <th class="px-4 py-2 font-normal text-start">Modify By</th>
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

export default Attachment;
