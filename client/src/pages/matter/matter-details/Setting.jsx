import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Setting = () => {
  const [currentState, setCurrentState] = useState(0);
  const [openAddUserRate, setOpenAddUserRate] = useState(false);
  const [openMatterRate, setOpenMatterRate] = useState(false);
  const [open, setOpen] = useState(false);
  const [showOverlaySetting, setShowOverlaySetting] = useState(false);
  const handleChangeTab = (index) => {
    console.log(index);
    setCurrentState(index);
  };
  const handleAddUserRate = () => {
    // openAddUserRate(true);
  };
  const handleCloseAddUserRate = () => {
    setOpenAddUserRate(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };
  return (
    <div className="relative">
      <div className="border-b border-gray flex max-sm:flex-col">
        <button
          className={`px-4 py-3 ${
            currentState === 0 ? "bg-blue text-white" : ""
          } text-xl border-r border-gray`}
          onClick={() => handleChangeTab(0)}
        >
          User Rate Per Hour
        </button>
        <button
          className={`px-4 py-3 ${
            currentState === 1 ? "bg-blue text-white" : ""
          } text-xl border-r border-gray`}
          onClick={() => handleChangeTab(1)}
        >
          Matter Rate
        </button>
        <button
          className={`px-4 py-3 ${
            currentState === 2 ? "bg-blue text-white" : ""
          } text-xl border-r border-gray`}
          onClick={() => handleChangeTab(2)}
        >
          Billing Preference
        </button>
      </div>
      {currentState === 0 && (
        <>
          <div className="flex justify-end px-2 md:px-16 py-3">
            <button
              className="btn-dark py-3 text-xl"
              onClick={() => setOpenAddUserRate(true)}
            >
              Add User Rate
            </button>
          </div>
          <div className="min-h-[50vh] overflow-x-auto mt-6 bg-white border-t-2 border-b-2 border-gray-light">
            <table className="table-auto w-full">
              <thead className="border-b border-gray-light">
                <tr>
                  <th className="px-4 py-2 font-normal text-start">
                    Rate Per Hour
                  </th>
                  <th className="px-4 py-2 font-normal text-start">
                    Related Entity
                  </th>
                  <th className="px-4 py-2 font-normal text-start">
                    First Name
                  </th>
                  <th className="px-4 py-2 font-normal text-start">
                    Last Name
                  </th>
                  <th className="px-4 py-2 font-normal text-start">
                    Seniority Level
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
          <Modal
            open={openAddUserRate}
            onClose={() => setOpenAddUserRate(false)}
            aria-labelledby="modal-add-user-rate"
            aria-describedby="modal-add-user-rate-description"
          >
            <Box sx={style} className="max-sm:w-[90%] sm:w-[500px]">
              <div className="border-b border-gray flex justify-between px-5 py-3">
                <h2 className="text-2xl font-semibold">Add User Rate</h2>
                <IoClose
                  size={25}
                  onClick={() => setOpenAddUserRate(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="px-7 py-7 flex flex-col gap-y-5 border-b border-gray">
                <div className="grid grid-cols-6 justify-center gap-5 items-center">
                  <label
                    htmlFor="user"
                    className="required text-xl col-span-2 text-right"
                  >
                    User
                  </label>
                  <input
                    type="text"
                    id="user"
                    className="border border-gray rounded-md py-2 px-2 col-span-4"
                  />
                </div>
                <div className="grid grid-cols-6 justify-center gap-5 items-center">
                  <label
                    htmlFor="user"
                    className="required text-xl  col-span-2 text-right"
                  >
                    Rate per hour
                  </label>
                  <input
                    type="text"
                    id="user"
                    className="border  border-gray rounded-md py-2 px-2 col-span-4"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-5 p-4">
                <button className="btn-dark">Save</button>
                <button className="btn-dark text-black bg-white border border-black">
                  Cancel
                </button>
              </div>
            </Box>
          </Modal>
        </>
      )}
      {currentState === 1 && (
        <>
          <div className="flex justify-end px-2 md:px-16 py-3">
            <button
              className="btn-dark py-3 text-xl"
              onClick={() => setOpenMatterRate(true)}
            >
              Add Matter Rate
            </button>
          </div>
          <div className="min-h-[50vh] overflow-x-auto mt-6 bg-white border-t-2 border-b-2 border-gray-light">
            <table className="table-auto w-full">
              <thead className="border-b border-gray-light">
                <tr>
                  <th className="px-4 py-2 font-normal text-start">
                    Rate Per Hour
                  </th>
                  <th className="px-4 py-2 font-normal text-start">
                    Related Entity
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
          <Modal
            open={openMatterRate}
            onClose={() => setOpenMatterRate(false)}
            aria-labelledby="modal-add-user-rate"
            aria-describedby="modal-add-user-rate-description"
          >
            <Box sx={style} className="max-sm:w-full sm:w-[500px]">
              <div className="border-b border-gray flex justify-between px-5 py-3">
                <h2 className="text-2xl font-semibold">Add User Rate</h2>
                <IoClose
                  size={25}
                  onClick={() => setOpenMatterRate(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="p-7 flex flex-col gap-y-5 border-b border-gray">
                <div className="grid grid-cols-6 justify-center gap-5 items-center">
                  <label
                    htmlFor="entities"
                    className="required text-xl col-span-2 text-right"
                  >
                    Entities
                  </label>
                  <input
                    type="text"
                    id="entities"
                    className="border border-gray rounded-md py-2 px-2 col-span-4"
                    required
                  />
                </div>
                <div className="grid grid-cols-6  justify-center gap-5 items-center">
                  <label
                    htmlFor="rate-per-hour"
                    className="required text-xl  col-span-2 text-right"
                  >
                    Rate per hour
                  </label>
                  <input
                    type="text"
                    id="rate-per-hour"
                    className="border border-gray rounded-md py-2 px-2 col-span-4"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-5 p-4">
                <button className="btn-dark">Save</button>
                <button className="btn-dark text-black bg-white border border-black">
                  Cancel
                </button>
              </div>
            </Box>
          </Modal>
        </>
      )}
      {currentState === 2 && (
        <>
          <div className="flex md:max-w-[35rem] items-center justify-between w-full md:py-10 px-5 py-3 md:px-20">
            <label
              className={`text-black text-xl mt-1 `}
              htmlFor="select-field"
            >
              Billing Method
            </label>
            <select id="select-field" className="custom-select3">
              <option value="hourly rate">Hourly Rate</option>
              <option value="fixed rate">Fixed Rate</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default Setting;
