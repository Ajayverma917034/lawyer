import React, { useState } from "react";
import CollapseComponent, {
  CollapseComponent2,
} from "../../../common/collapse.component";

import { MdPeopleOutline } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { VscCalendar } from "react-icons/vsc";
import { findColor } from "../../../common/get-color";
const Details = () => {
  const [isEditing1, setIsEditing1] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);
  const [isEditing3, setIsEditing3] = useState(false);
  const [formData, setFormData] = useState({
    type: "Consultancy Agreement",
    workflowStatus: "Under Negotiation",
    priority: "Medium",
    value: 2100.0,
    currency: "Rupee",
    country: "India",
    reference: "1131",
    companyName: "CompanyName",
    category: "Category Name",
    description: "Description",
  });
  const [backupFormData, setBackupFormData] = useState({ ...formData });
  const handleEditClick = () => {
    setIsEditing1(true);
    setBackupFormData({ ...formData });
  };

  const handleCancelClick = () => {
    setFormData({ ...backupFormData });
    setIsEditing1(false);
  };

  const handleSaveClick = () => {
    setBackupFormData({ ...formData });
    setIsEditing1(false);
  };
  const handleEditClick2 = () => {
    setIsEditing2(true);
    setBackupFormData({ ...formData });
  };

  const handleCancelClick2 = () => {
    setFormData({ ...backupFormData });
    setIsEditing2(false);
  };

  const handleSaveClick2 = () => {
    setBackupFormData({ ...formData });
    setIsEditing2(false);
  };
  const handleEditClick3 = () => {
    setIsEditing3(true);
    setBackupFormData({ ...formData });
  };

  const handleCancelClick3 = () => {
    setFormData({ ...backupFormData });
    setIsEditing3(false);
  };

  const handleSaveClick3 = () => {
    setBackupFormData({ ...formData });
    setIsEditing3(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="grid grid-cols-1 1374px:grid-cols-3 min-h-screen overflow-y-auto">
      <div className="col-span-1 lg:col-span-2 border-r border-gray-light">
        {/* first section  */}
        <div className="px-5 md:px-10 py-5 md:py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Details</h2>
            <div>
              {isEditing1 ? (
                <div className="flex gap-3">
                  <button
                    className="text-green font-medium text-xl"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="text-blue font-medium text-xl"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="text-blue font-medium text-xl"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
              <div>
                <label htmlFor="input" className="font-semibold text-xl">
                  Type :
                </label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  readOnly={!isEditing1}
                  onChange={handleInputChange}
                  className="ml-3 text-xl focus:outline-none focus:border-none outline-none"
                />
              </div>
              <div>
                <label htmlFor="input" className="font-semibold text-xl">
                  Workflow Status :
                </label>
                <input
                  type="text"
                  name="workflowStatus"
                  value={formData.workflowStatus}
                  readOnly={!isEditing1}
                  onChange={handleInputChange}
                  className="ml-3 text-xl focus:outline-none focus:border-none outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
              <div>
                <label htmlFor="input" className="font-semibold text-xl">
                  Priority :
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  disabled={!isEditing1}
                  onChange={handleInputChange}
                  className={`ml-3 text-xl focus:outline-none focus:border-none outline-none ${findColor(
                    formData.priority
                  )}`}
                >
                  <option value="High" className="text-black">
                    High
                  </option>
                  <option value="Medium" className="text-black">
                    Medium
                  </option>
                  <option value="Low" className="text-black">
                    Low
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="input" className="font-semibold text-xl">
                  Value :
                </label>
                <input
                  type="number"
                  name="value"
                  value={formData.value}
                  readOnly={!isEditing1}
                  onChange={handleInputChange}
                  className="ml-3 text-xl focus:outline-none focus:border-none outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
              <div>
                <label htmlFor="input" className="font-semibold text-xl">
                  Currency :
                </label>
                <input
                  type="text"
                  name="currency"
                  value={formData.currency}
                  readOnly={!isEditing1}
                  onChange={handleInputChange}
                  className="ml-3 text-xl focus:outline-none focus:border-none outline-none"
                />
              </div>
              <div>
                <label htmlFor="input" className="font-semibold text-xl">
                  Country :
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  readOnly={!isEditing1}
                  onChange={handleInputChange}
                  className="ml-3 text-xl focus:outline-none focus:border-none outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
              <div>
                <label htmlFor="input" className="font-semibold text-xl">
                  Reference# :
                </label>
                <input
                  type="number"
                  name="reference"
                  value={formData.reference}
                  readOnly={!isEditing1}
                  onChange={handleInputChange}
                  className="ml-3 text-xl focus:outline-none focus:border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className=" text-gray-light" />
        {/* second section  */}
        <div className="px-5 md:px-10 py-5 md:py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Parties</h2>
            <div>
              {isEditing2 ? (
                <div className="flex gap-3">
                  <button
                    className="text-green font-medium text-xl"
                    onClick={handleSaveClick2}
                  >
                    Save
                  </button>
                  <button
                    className="text-blue font-medium text-xl"
                    onClick={handleCancelClick2}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="text-blue font-medium text-xl"
                  onClick={handleEditClick2}
                >
                  Edit
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 mt-4">
            <div>
              <label htmlFor="input" className="font-semibold text-xl">
                Party :
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                readOnly={!isEditing2}
                onChange={handleInputChange}
                className="ml-3 text-xl focus:outline-none focus:border-none outline-none"
              />
            </div>
            <div>
              <label htmlFor="input" className="font-semibold text-xl">
                Category :
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                readOnly={!isEditing2}
                onChange={handleInputChange}
                className="ml-3 text-xl focus:outline-none focus:border-none outline-none"
              />
            </div>
          </div>
        </div>
        <hr className=" text-gray-light" />
        {/* third section  */}
        <div className="px-5 md:px-10 py-5 md:py-5">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Description</h2>
            <div>
              {isEditing3 ? (
                <div className="flex gap-3">
                  <button
                    className="text-green font-medium text-xl"
                    onClick={handleSaveClick3}
                  >
                    Save
                  </button>
                  <button
                    className="text-blue font-medium text-xl"
                    onClick={handleCancelClick3}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="text-blue font-medium text-xl"
                  onClick={handleEditClick3}
                >
                  Edit
                </button>
              )}
            </div>
          </div>

          <div className="flex w-full gap-y-5 mt-4">
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              className={`w-full resize-none p-2 outline-none ${
                isEditing3 && "outline border rounded-md border-blue"
              }`}
              rows={4}
            ></textarea>
          </div>
        </div>
        <hr className=" text-gray-light" />
        <CollapseComponent2 title={"Notes"}></CollapseComponent2>
        <hr className=" text-gray-light" />
        <CollapseComponent2 title={"History"}></CollapseComponent2>
        <hr className=" text-gray-light" />
      </div>
      <div className="col-span-1 lg:col-span-1 flex flex-col p-4 gap-y-5">
        <div className="flex flex-col border border-gray-light rounded-md">
          <h3 className="p-2 px-3 text-xl font-medium">People</h3>
          <hr className=" text-gray-light" />

          <div className="p-3 py-5 flex flex-col gap-y-2">
            <div className="flex gap-x-1 items-center">
              <MdPeopleOutline size={20} />{" "}
              <p className=" text-gray text-xl">Assigned Team: </p>{" "}
              <span className="text-black text-xl">Legal Team</span>
            </div>
            <div className="flex gap-x-1 items-center">
              <LuUser2 size={20} />{" "}
              <p className=" text-gray text-xl">Created By: </p>{" "}
              <span className="text-black text-xl">System Administratior</span>
            </div>
            <div className="flex gap-x-1 items-center">
              <RiUserSettingsLine size={20} />{" "}
              <p className=" text-gray text-xl">Modified By: </p>{" "}
              <span className="text-black text-xl">System Administratior</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-gray-light rounded-md">
          <h3 className="p-2 px-3 text-xl font-medium">Dates</h3>
          <hr className=" text-gray-light" />

          <div className="p-3 py-5 flex flex-col gap-y-2">
            <div className="flex gap-x-1 items-center">
              <VscCalendar size={20} className="text-blue" />{" "}
              <p className=" text-gray text-xl">Start Date: </p>{" "}
              <span className="text-black text-xl">2024-01-01</span>
            </div>
            <div className="flex gap-x-1 items-center">
              <VscCalendar size={20} className="text-blue" />{" "}
              <p className=" text-gray text-xl">Created On: </p>{" "}
              <span className="text-black text-xl">2024-02-25 05:42:47 </span>
            </div>
            <div className="flex gap-x-1 items-center">
              <VscCalendar size={20} className="text-blue" />{" "}
              <p className=" text-gray text-xl">Modified On: </p>{" "}
              <span className="text-black text-xl">2024-02-25 05:42:47 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

// <div className="py-4 md:py-10 flex flex-col">
//   <div className="flex flex-col px-5 md:px-10">
//     <div className="flex justify-between">
//       <h2>Details</h2>
//       <div>
//         <button className="text-blue font-medium">Edit</button>
//       </div>
//     </div>
//   </div>
// </div>
