import React, { useState } from "react";
import { Dialog } from "@mui/material";
import InputField2 from "../../common/InputField2";
import SelectField from "../../common/SelectField";
import TextField2 from "../../common/TextField2";
import DateField2 from "../../common/DateField2";
import TimePicker2 from "../../common/TimePicker2";
import { UploadFile } from "@mui/icons-material";
import toast from "react-hot-toast";
import SelectField2 from "../../common/SelectField2";
import axios from "axios";

const AddTask = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    title: "",
    taskType: "",
    assignTo: "",
    dueDate: "",
    description: "",
    matterRelation: "",
    relatedDocument: "",
  });

  const [selectedDocument, setSelectedDocument] = useState([]);

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

  const handleSave = (e) => {
    e.preventDefault();

    // Proceed with saving data or making API call

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER}/create-task`, data, config)
      .then(({ data }) => {
        // console.log(data);
        toast.success("Task Added Successfully");
      })
      .then((err) => {
        console.log(err);
      });
    // console.log("Data saved:", data);

    // api call here
    setOpen(!open);
  };

  const handleRelatedDocument = (e) => {
    // Get the files from the event object
    const files = Array.from(e.target.files);
    // Update the state to include all selected files
    setSelectedDocument(files);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        Add New Task
      </h2>
      <form
        className="p-3 md:px-10 flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        <div className="grid grid-cols-1">
          <InputField2
            label="Task Title"
            id="title"
            placeholder="Enter the Title of the Task"
            data={data}
            setData={setData}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label={"Task Type"}
            id={"taskType"}
            data={data}
            setData={setData}
            options={taskType}
            placeholder={"-- choose --"}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label={"Assign To"}
            id={"assignTo"}
            data={data}
            setData={setData}
            options={assignToData}
            placeholder={"-- choose --"}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <DateField2
            label="Due Date"
            id="dueDate"
            placeholder="Select Date"
            data={data}
            setData={setData}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <TextField2
            label={"Description"}
            id={"description"}
            data={data}
            setData={setData}
            placeholder={""}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label={"Matter/Contract relate with"}
            id={"matterRelation"}
            data={data}
            setData={setData}
            options={assignToData}
            placeholder={"-- choose --"}
            required={true}
          />
        </div>
        <div className="mt-5">
          <div>
            <label className="text-xl required">Related Document</label>
          </div>
          <label htmlFor="relatedDocument">
            <div className="border border-dashed rounded-md flex justify-center items-center min-h-24 flex-col">
              <UploadFile className="text-3xl !size-12 text-blue" />
              <p className="text-base">Upload Documents</p>
            </div>
          </label>
          <input
            type="file"
            name="relatedDocument"
            id="relatedDocument"
            className="hidden"
            accept="image/png, image/jpg, image/jpeg, image/webp"
            onChange={handleRelatedDocument}
            multiple // Allows multiple files to be selected
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

export default AddTask;
