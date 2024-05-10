import React, { useState } from "react";
import { Dialog } from "@mui/material";
import InputField2 from "../../common/InputField2";
import DateField2 from "../../common/DateField2";
import TimePicker2 from "../../common/TimePicker2";
import SelectField2 from "../../common/SelectField2";
import toast from "react-hot-toast";
import axios from "axios";
import TextField2 from "../../common/TextField2";

const AddReminder = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };

  const [data, setData] = useState({
    title: "",
    reminderDate: "",
    reminderTime: "",
    repeat: "",
    recipients: "",
    summary: "",
  });

  const options = [
    { key: 1, value: "Seminar", label: "Seminar" },
    { key: 2, value: "Workshop", label: "Workshop" },
  ];

  const repeadMode = [
    { key: 1, value: "Daily", label: "Daily" },
    { key: 2, value: "Weekly", label: "Weekly" },
    { key: 3, value: "Monthly", label: "Monthly" },
  ];

  const handleSave = (e) => {
    e.preventDefault();

    // Proceed with saving data or making API call
    if (
      !data.title ||
      !data.reminderDate ||
      !data.reminderTime ||
      !data.repeat ||
      !data.recipients ||
      !data.summary
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // api call here
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    let loading = toast.loading("Adding Reminder...");
    axios
      .post(`${import.meta.env.VITE_SERVER}/create-reminder`, data, config)
      .then(({ data }) => {
        toast.dismiss(loading);
        // console.log(data);
        toast.success("Reminder Added Successfully");
      })
      .then((err) => {
        toast.dismiss(loading);
        console.log(err);
      });

    console.log("Data saved:", data);

    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      disableScrollLock={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        Reminder
      </h2>
      <form
        className="p-3 md:px-10 flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        <div className="grid grid-cols-1">
          <InputField2
            label="Reminder Title"
            id="title"
            placeholder="Enter the Title of the Meeting"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1 md:gap-10 md:grid-cols-3 mt-3">
          <div className="grid col-span-2">
            <DateField2
              label="Reminder On"
              id="reminderDate"
              placeholder="Select Date"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <TimePicker2
            label="Time"
            id="reminderTime"
            placeholder="12:00 PM"
            data={data}
            setData={setData}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1 mt-3">
          <SelectField2
            label="Repeat"
            id="repeat"
            data={data}
            setData={setData}
            options={repeadMode}
            placeholder="-- choose --"
            required={true}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label="Recipients"
            id="recipients"
            data={data}
            setData={setData}
            options={options}
            placeholder="-- choose --"
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <TextField2
            label="Summary"
            id="summary"
            data={data}
            setData={setData}
            placeholder="Write something about the reminder..."
            required={true}
          />
        </div>

        <div>
          <button
            type="submit"
            className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-xl md:text-2xl mt-4"
          >
            Save
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddReminder;
