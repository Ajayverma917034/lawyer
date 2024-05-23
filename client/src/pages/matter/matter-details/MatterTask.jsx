import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
const MatterTask = () => {
  return (
    <div className="w-full bg-white">
      <div className="px-4 pt-2 items-center">
        <h1 className="text-2xl md:text-3xl font-semibold">Tasks</h1>

        <div className="flex justify-between mt-3 md:mt-9 gap-5">
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
          <div>
            <button className="btn-dark bg-white text-red flex items-center">
              <IoMdAdd size={15} /> Add New Task
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-[50vh] overflow-x-auto mt-6 bg-white border-t-2 border-b-2 border-gray-light">
        <table className="table-auto w-full">
          <thead className="border-b border-gray-light">
            <tr>
              <th class="px-4 py-2 font-normal text-start">ID</th>
              <th class="px-4 py-2 font-normal text-start">Title</th>
              <th class="px-4 py-2 font-normal text-start">Type</th>
              <th class="px-4 py-2 font-normal text-start">Work Flow</th>
              <th class="px-4 py-2 font-normal text-start">Description</th>
              <th class="px-4 py-2 font-normal text-start">Priority</th>
              <th class="px-4 py-2 font-normal text-start">Location</th>
              <th class="px-4 py-2 font-normal text-start">Assign to</th>
              <th class="px-4 py-2 font-normal text-start">Effort</th>
            </tr>
          </thead>
          <tbody>
            {/* {!tasks ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No data found
                </td>
              </tr>
            ) : (
              tasks.results.map((task, index) => (
                <tr key={index}>
                  <td class="px-4 py-2">{index + 1}</td>
                  <td class="px-4 py-2">{task.title}</td>
                  <td class="px-4 py-2">{task.taskType}</td>
                  <td class="px-4 py-2">{formatDate(task.dueDate)}</td>
                  <td class="px-4 py-2">{task.matterRelation}</td>
                  <td className="px-4 py-2 text-blue">
                    <Link to={`/tasks/${"1"}`}>
                      <button>View</button>
                    </Link>
                  </td>
                </tr>
              ))
            )} */}
          </tbody>
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

export default MatterTask;
