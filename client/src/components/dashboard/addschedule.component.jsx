import React, { useState } from "react";
import { Dialog } from "@mui/material";
import InputField2 from "../../common/InputField2";
import TextField2 from "../../common/TextField2";
import DateField2 from "../../common/DateField2";
import TimePicker2 from "../../common/TimePicker2";
import SelectField2 from "../../common/SelectField2";
import toast from "react-hot-toast";
import axios from "axios";

const AddSchedule = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    title: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    relatedMatter: [],
    description: "",
    location: "",
    meetingType: "",
  });

  const options = [
    { key: 1, value: "Seminar", label: "Seminar" },
    { key: 2, value: "Workshop", label: "Workshop" },
  ];

  const meetingTypeOptions = [
    { key: 1, value: "online", label: "Online" },
    { key: 2, value: "offline", label: "Offline" },
    { key: 3, value: "oncall", label: "Oncall" },
  ];

  const handleSave = (e) => {
    e.preventDefault();

    // Validate fields
    if (
      data.title === "" ||
      data.startDate === "" ||
      data.startTime === "" ||
      data.endDate === "" ||
      data.endTime === "" ||
      // data.relatedMatter === "" ||
      data.description === "" ||
      data.meetingType === "" ||
      data.meetingType === "offline"
        ? data.location === ""
        : false
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // Proceed with saving data or making API call
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    let loading = toast.loading("Adding Meeting...");
    axios
      .post(`${import.meta.env.VITE_SERVER}/create-meeting`, data, config)
      .then(({ data }) => {
        // console.log(data);
        toast.dismiss(loading);
        toast.success("Meeting Scheduled Successfully");
      })
      .then((err) => {
        toast.dismiss(loading);
        console.log(err);
      });

    console.log("Data saved:", data);

    // api call here
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
        Schedule New Meeting
      </h2>

      <form
        className="p-3 md:px-10 flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        <div className="grid grid-cols-1">
          <InputField2
            label="Title"
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
              label="From"
              id="startDate"
              placeholder="Select Date"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <TimePicker2
            label="Time"
            id="startTime"
            placeholder="12:00 PM"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1 md:gap-10 md:grid-cols-3 mt-3">
          <div className="grid col-span-2">
            <DateField2
              label="To"
              id="endDate"
              placeholder="Select Date"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <TimePicker2
            label="Time"
            id="endTime"
            placeholder="12:00 PM"
            data={data}
            setData={setData}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label={"Related Matter"}
            id={"relatedMatter"}
            data={data}
            setData={setData}
            options={options}
            placeholder={"-- choose --"}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <TextField2
            label={"Description"}
            id={"description"}
            data={data}
            setData={setData}
            placeholder={"Write something about the meeting..."}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1">
          <SelectField2
            label={"Meeting Type"}
            id={"meetingType"}
            data={data}
            setData={setData}
            options={meetingTypeOptions}
            placeholder={"-- choose --"}
            required={true}
          />
        </div>
        {data.meetingType === "offline" && (
          <div className="grid grid-cols-1">
            <InputField2
              label="Location"
              id="location"
              placeholder="Enter the location of the meeting"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
        )}
        <div>
          <button className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-xl md:text-2xl mt-4">
            Save
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddSchedule;
