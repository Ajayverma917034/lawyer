import { Shortcut } from "@mui/icons-material";
import React from "react";
import CollapseComponent from "./CollapseComponent";

const TaskDetials = () => {
  return (
    <>
      <div className="px-3 md:px-22 lg:px-28 flex flex-col py-10 bg-white-light min-h-screen">
        <div className="flex justify-between mb-3">
          <h1 className="text-2xl md:text-3xl font-semibold">ID: Task Name</h1>
          <div>
            <button className="btn-dark flex items-center gap-2 text-xl">
              Edit <Shortcut />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-4 rounded-md bg-white">
          <div className="col-span-2 md:p-6">
            <CollapseComponent title="Task Details">
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 ml-5">
                <div className="flex flex-col gap-y-4">
                  <p className="text-[18px] text-gray-text">
                    Type:{" "}
                    <span className="text-black text-[16px]">Accounting</span>
                  </p>
                  <p className="text-[18px] text-gray-text">
                    Title:{" "}
                    <span className="text-black text-[16px]">TaskName</span>
                  </p>
                  <p className="text-[18px] text-gray-text">
                    Priority:{" "}
                    <span className="text-black text-[16px]">Critical</span>
                  </p>
                  <p className="text-[18px] text-gray-text">
                    Related Matter:{" "}
                    <span className=" cursor-pointer text-[16px] text-blue">
                      Matter Name{" "}
                    </span>
                  </p>
                  <p className="text-[18px] text-gray-text">
                    Related Contract/Document:{" "}
                    <span className="text-black text-[16px]">None</span>
                  </p>
                </div>

                <div className="flex flex-col gap-y-5">
                  <p className="text-[18px] text-gray-text">
                    Workflow Status:{" "}
                    <span className="text-black text-[16px]">Open</span>
                  </p>
                  <p className="text-[18px] text-gray-text">
                    Location:{" "}
                    <span className="text-black text-[16px]"> None</span>
                  </p>
                </div>
              </div>
            </CollapseComponent>

            <hr className="mt-5 text-gray-light" />

            <CollapseComponent title="Description">
              <div className="mt-2 ml-3">
                <p className="text text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </CollapseComponent>
            <hr className="mt-5 text-gray-light" />

            <CollapseComponent title="Attachments">
              <div className="mt-2 ml-3">
                <span className="text-blue cursor-pointer">
                  Attachment1.pdf
                </span>
              </div>
            </CollapseComponent>
          </div>

          <div className="bg-white border-t mt-4 md:mt-0 md:border-t-0 md:border-l border-gray-light md:p-4">
            <CollapseComponent title="People">
              <div className="flex flex-col gap-y-4 ml-3 mt-3">
                <p className="text-[18px] text-gray-text">
                  Assigned to:{" "}
                  <span className="text-black text-[16px]">Mr. Aman</span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Requested By:{" "}
                  <span className="text-black text-[16px]"> Mr. Aman</span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Created By:{" "}
                  <span className="text-black text-[16px]">Mr. Ajay</span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Shared with:{" "}
                  <span className="text-black text-[16px]">Public </span>
                </p>
              </div>
            </CollapseComponent>

            <hr className="mt-5 text-gray-light" />
            <CollapseComponent title="Dates">
              <div className="flex flex-col gap-y-4 ml-3 mt-3">
                <p className="text-[18px] text-gray-text">
                  Due Date:{" "}
                  <span className="text-black text-[16px]"> 01-01-2023</span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Created On:{" "}
                  <span className="text-black text-[16px]"> 01-01-2023</span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Modified On:{" "}
                  <span className="text-black text-[16px]">01-01-2023</span>
                </p>
              </div>
            </CollapseComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetials;
