import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import AddTask from "../components/addtask.components";

const Dashboard = () => {
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  return (
    <div className="px-3 md:px-22 lg:px-32 py-3">
      <h1 className="text-3xl mt-3">Welcome Ajay Verma</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        <div className="flex flex-col p-4 border border-gray-500 rounded-md min-w-[20rem]">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-medium">Today's Task</h3>
            <div className="flex gap-2">
              <button
                className="flex gap-1 justify-center items-center bg-[#205081] py-1 px-2 rounded-md text-white"
                onClick={() => setAddTaskOpen(true)}
              >
                Add <Add />
              </button>
              <p className="text-xl font-medium bg-[#205081] px-2 rounded-full text-white">
                5
              </p>
            </div>
          </div>
          <hr className="bg-gray-500 mt-2 h-[1px]" />
          {[1, 1, 1, 1, 1].map((item, index) => (
            <div className="flex mt-2 text-xl cursor-pointer hover:bg-[#dfe6e9] p-2 bg-opacity-10">
              <span className="text-xl">{index + 1}.</span>
              <p className="text-xl">Title of the Task</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col p-4 border border-gray-500 rounded-md min-w-[20rem]">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-medium">Meetings</h3>
            <div className="flex gap-2">
              <button
                className="flex gap-1 justify-center items-center bg-[#205081] py-1 px-2 rounded-md text-white"
                onClick={() => setAddTaskOpen(true)}
              >
                Add <Add />
              </button>
              <p className="text-xl font-medium bg-[#205081] px-2 rounded-full text-white">
                5
              </p>
            </div>
          </div>
          <hr className="bg-gray-500 mt-2 h-[1px]" />
          {[1, 1, 1, 1, 1].map((item, index) => (
            <div className="flex mt-2 text-xl cursor-pointer hover:bg-[#dfe6e9] p-2 bg-opacity-10">
              <span className="text-xl">{index + 1}.</span>
              <p className="text-xl">Title of the Meetings</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col p-4 border border-gray-500 rounded-md min-w-[20rem]">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-medium">Reminders for today</h3>
            <div className="flex gap-2">
              <button
                className="flex gap-1 justify-center items-center bg-[#205081] py-1 px-2 rounded-md text-white"
                onClick={() => setAddTaskOpen(true)}
              >
                Add <Add />
              </button>
              <p className="text-xl font-medium bg-[#205081] px-2 rounded-full text-white">
                5
              </p>
            </div>
          </div>
          <hr className="bg-gray-500 mt-2 h-[1px]" />
          {[1, 1, 1, 1, 1].map((item, index) => (
            <div className="flex mt-2 text-xl cursor-pointer hover:bg-[#dfe6e9] p-2 bg-opacity-10">
              <span className="text-xl">{index + 1}.</span>
              <p className="text-xl">Title of the Task</p>
            </div>
          ))}
        </div>
       

        <AddTask open={addTaskOpen} setOpen={setAddTaskOpen} />
      </div>
    </div>
  );
};

export default Dashboard;
