import { Dialog } from "@mui/material";
import React, { useState } from "react";
import InputField2 from "../../common/InputField2";
import SelectField2 from "../../common/SelectField2";
import TextField2 from "../../common/TextField2";
import { UploadFile } from "@mui/icons-material";
import DateField2 from "../../common/DateField2";
import TimePicker2 from "../../common/TimePicker2";

const AddCorporate = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };

  const categoryType = [
    {
      key: 1,
      value: "person",
      label: "Person",
    },
    {
      key: 2,
      value: "employ",
      label: "Employ",
    },
  ];
  const [data, setData] = useState({
    name: "",
    nickName: "",
    category: "",
    website: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    subCategory: "",
    companyLegalType: "",
    companyGroup: "",
    nationality: "",
    reference: "",
    document: [],
  });

  const companyCategory = [
    {
      key: 1,
      value: "private",
      label: "Private",
    },
    {
      key: 2,
      value: "public",
      label: "Public",
    },
  ];

  const clientName = [
    {
      key: 1,
      value: "client1",
      label: "Client 1",
    },
    {
      key: 2,
      value: "client2",
      label: "Client 2",
    },
    {
      key: 3,
      value: "client3",
      label: "Client 3",
    },
  ];

  const handleSave = (e) => {
    e.preventDefault();

    console.log(data);
    // api call here
    setOpen(!open);
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        Add Corporate Matter
      </h2>
      <form
        className="flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <div className="grid grid-cols-1">
            <InputField2
              label="Name"
              id="name"
              placeholder=""
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1">
            <InputField2
              label="Practice Area"
              id="practiceArea"
              placeholder=""
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1  mt-3">
            <DateField2
              label="Arrival Date"
              id="arrivalDate"
              placeholder="Choose a date"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1  mt-3">
            <SelectField2
              label="Client Name"
              id="clientName"
              data={data}
              setData={setData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>

          <div className="grid grid-cols-1  mt-3">
            <TextField2
              label="Description"
              id="description"
              data={data}
              setData={setData}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1  mt-3">
            <InputField2
              label="Internal Ref Number"
              id="referenceNumber"
              data={data}
              setData={setData}
              required={true}
            />
          </div>

          <div className="mt-5">
            <label className="text-xl required"> Documents</label>
            <label
              htmlFor="relatedDocument"
              className="border border-dashed rounded-md flex justify-center items-center min-h-24 flex-col py-10"
            >
              <UploadFile className="text-xl !w-16 !h-16 text-blue" />
              <p className="text-base">Upload Documents</p>
            </label>
            <input
              type="file"
              name="relatedDocument"
              id="relatedDocument"
              className="hidden"
              accept="image/png, image/jpg, image/jpeg, image/webp"
            />
          </div>
        </div>

        <hr className="border-1 border-[#b3b3b3] mt-5" />
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <h2 className="text-xl md:text-xl font-medium mt-4">Date & Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <DateField2
              label="Filed On"
              id="filedDate"
              placeholder="Select Date"
              data={data}
              setData={setData}
              required={true}
            />
            <DateField2
              label="Due Date"
              id="dueDate"
              placeholder="Select Date"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <DateField2
              label="Closed On"
              id="closedOn"
              placeholder="Select Date"
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Estimated Efforts"
              id="effort"
              placeholder={"0"}
              data={data}
              setData={setData}
              required={true}
            />
          </div>
        </div>

        <hr className="border-1 border-[#b3b3b3] mt-5" />
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <h2 className="text-xl md:text-xl font-medium mt-4">People </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <InputField2
              label="Reffered By"
              id="refferedBy"
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Requested By"
              id="requestedBy"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <SelectField2
              label="Assigned Team"
              id="team"
              options={categoryType}
              placeholder={"-- choose --"}
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Assignee"
              id="assignee"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
        </div>

        <hr className="border-1 border-[#b3b3b3] mt-5" />
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <h2 className="text-xl md:text-xl font-medium mt-4">Stage </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <SelectField2
              label="Stage"
              id="state"
              options={categoryType}
              placeholder={"-- choose --"}
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Matter Container"
              id="matterContainer"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
        </div>

        <hr className="border-1 border-[#b3b3b3] mt-5" />
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <h2 className="text-xl md:text-xl font-medium mt-4">Matter Rate </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <SelectField2
              label="Entity Name"
              id="entityName"
              options={categoryType}
              placeholder={"-- choose --"}
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Rate"
              id="rate"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
        </div>

        <hr className="border-1 border-[#b3b3b3] mt-5" />
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <h2 className="text-xl md:text-xl font-medium mt-4">
            Billing Preferences{" "}
          </h2>

          <div className="grid grid-cols-1 mt-3 gap-4">
            <SelectField2
              label="Hourly Rate"
              id="hourlyRate"
              options={categoryType}
              placeholder={"-- choose --"}
              data={data}
              setData={setData}
              required={true}
            />
          </div>
        </div>
        <hr className="border-1 border-[#b3b3b3] mt-5" />

        <div className="p-3 md:px-10 flex justify-between flex-row mb-5">
          <div>
            <button
              className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-xl md:text-xl mt-4"
              type="submit"
            >
              Save
            </button>
            <button className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-xl md:text-xl mt-4 ml-5">
              Save and Create Another
            </button>
          </div>
          <button
            className="outlline-none bg-white text-black border-2 border-black py-1 px-3 rounded-md text-xl md:text-xl mt-4"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddCorporate;
