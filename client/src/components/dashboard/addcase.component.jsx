import { Dialog, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import InputField2 from "../../common/InputField2";
import TextField2 from "../../common/TextField2";
import DateField2 from "../../common/DateField2";
import { UploadFile } from "@mui/icons-material";
import SelectField2 from "../../common/SelectField2";
import axios from "axios";
import toast from "react-hot-toast";
import { practiceAreaOptions } from "../../constant/optionData";
const AddCase = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    name: "",
    practiceArea: "",
    arrivalDate: "",
    clientName: "",
    clientPosition: "",
    description: "",
    refNumber: "",
  });

  const taskType = [
    { key: 1, value: "Seminar", label: "Seminar" },
    { key: 2, value: "Workshop", label: "Workshop" },
  ];

  const assignToData = [
    { key: 1, value: "Ajay Verma", label: "Ajay Verma" },
    { key: 2, value: "Harshit Kaushal", label: "Harshit Kaushal" },
  ];

  const meetingTypeOptions = [
    { key: 1, value: "Physical", label: "Physical" },
    { key: 2, value: "Virtual", label: "Virtual" },
  ];

  const handleSave = async (e) => {
    e.preventDefault();
    let loading = toast.loading("Adding Case...");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER}/create-case`, data, config)
      .then(({ data }) => {
        toast.dismiss(loading);
        toast.success("Case Added Successfully");
      })
      .then((err) => {
        toast.dismiss(loading);
        console.log(err);
      });
    handleClose();
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        Litigation Case
      </h2>
      <form
        className="p-3 md:px-10 flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        <div className="grid grid-cols-1">
          <InputField2
            label="Name"
            id="name"
            placeholder="Enter the name of the case"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label="Practice Area"
            id="practiceArea"
            data={data}
            setData={setData}
            options={practiceAreaOptions}
            required={true}
            placeholder={"-- choose --"}
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
          <InputField2
            label="Client Name"
            id="clientName"
            placeholder="Start typing"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label="Client Position"
            id="clientPosition"
            data={data}
            setData={setData}
            options={taskType}
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
            id="refNumber"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="mt-5">
          <label className="text-xl required">Related Document</label>
          <label
            htmlFor="relatedDocument"
            className="border border-dashed rounded-md flex justify-center items-center min-h-28 flex-col"
          >
            <UploadFile className="text-3xl text-blue" />
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
        <div>
          <button
            className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-2xl mt-4"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddCase;
