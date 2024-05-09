import { Dialog } from "@mui/material";
import React, { useState } from "react";
import InputField2 from "../../common/InputField2";
import SelectField2 from "../../common/SelectField2";
import TextField2 from "../../common/TextField2";
import { UploadFile } from "@mui/icons-material";
import DateField2 from "../../common/DateField2";

const AddIntellectualProperty = ({ open, setOpen }) => {
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

  const opponentType = [
    {
      key: 1,
      value: "person",
      label: "Person",
    },
    {
      key: 2,
      value: "Company",
      label: "Company",
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
        Add New Intellectual Property
      </h2>
      <form
        className="flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <div className="mt-5">
            <label className="text-xl required"> Logo</label>
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

          <div className="grid grid-cols-1 mt-3">
            <SelectField2
              label="Intellectual Property Rights"
              id="clientName"
              data={data}
              setData={setData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>

          <div className="grid grid-cols-1 mt-3">
            <SelectField2
              label="IP Class"
              id="clientName"
              data={data}
              setData={setData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>

          <div className="grid grid-cols-1 mt-3">
            <SelectField2
              label="IP Subcategory"
              id="clientName"
              data={data}
              setData={setData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>

          <div className="grid grid-cols-1 mt-3">
            <SelectField2
              label="IP Name"
              id="clientName"
              data={data}
              setData={setData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>

          <div className="grid grid-cols-1  mt-3">
            <InputField2
              label="Subject"
              id="clientPosition"
              data={data}
              setData={setData}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1  mt-3">
            <TextField2
              label="IP Description"
              id="description"
              data={data}
              setData={setData}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3 mt-3">
            <div className="grid col-span-1">
              <SelectField2
                label="Client/Owner"
                id="opponentType"
                placeholder="-- choose --"
                options={opponentType}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1 md:col-span-2 max-md:mt-3">
              <InputField2
                label="Client/Owner Name"
                id="opponentName"
                data={data}
                setData={setData}
                required={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3 mt-3">
            <div className="grid col-span-1">
              <SelectField2
                label="Applicants Type"
                id="opponentType"
                placeholder="-- choose --"
                options={opponentType}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1 md:col-span-2 max-md:mt-3">
              <InputField2
                label="Applicant Name"
                id="opponentName"
                data={data}
                setData={setData}
                required={true}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3 mt-3">
            <div className="grid col-span-1">
              <SelectField2
                label="Agent Type"
                id="opponentType"
                placeholder="-- choose --"
                options={opponentType}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1 md:col-span-2 max-md:mt-3">
              <InputField2
                label="Agent Name"
                id="opponentName"
                data={data}
                setData={setData}
                required={true}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <InputField2
              label="Country"
              id="country"
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="City"
              id="city"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1  mt-3">
            <SelectField2
              label="Assign Team"
              id="clientName"
              data={data}
              setData={setData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>
          <div className="grid grid-cols-1  mt-3">
            <SelectField2
              label="Assignee"
              id="clientName"
              data={data}
              setData={setData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <DateField2
              label="Filed On"
              id="arrivalDate"
              placeholder="Choose a date"
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Filing Number"
              id="clientPosition"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <DateField2
              label="Registration Date"
              id="arrivalDate"
              placeholder="Choose a date"
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Registration Ref"
              id="clientPosition"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1  mt-3">
            <SelectField2
              label="Matter Container"
              id="clientName"
              data={data}
              setData={setData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>
        </div>

        <hr className="border-1 border-[#b3b3b3] mt-5" />

        <div className="p-3 md:px-10 flex justify-between items-center flex-row mb-5">
          <div>
            <button
              className="outlline-none bg-blue border-2 border-blue text-white py-1 px-3 rounded-md text-xl md:text-xl mt-4"
              type="submit"
            >
              Save
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

export default AddIntellectualProperty;
