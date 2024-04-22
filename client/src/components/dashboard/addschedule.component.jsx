import { Dialog, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import InputField2 from "../../common/InputField2";
import SelectField from "../../common/SelectField";
import TextField2 from "../../common/TextField2";
import DateField2 from "../../common/DateField2";
import TimePicker2 from "../../common/TimePicker2";

const AddSchedule = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    title: "",
  });

  const options = [
    { key: 1, value: "Seminar", label: "Seminar" },
    { key: 2, value: "Workshop", label: "Workshop" },
  ];

  const meetingTypeOptions = [
    { key: 1, value: "Physical", label: "Physical" },
    { key: 2, value: "Virtual", label: "Virtual" },
  ];
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-2xl font-medium text-center mt-4">
        Schedule New Meeting
      </h2>
      <div className="p-3 md:px-10 flex gap-2 flex-col max-md:min-w-[80vw]">
        <div className="grid grid-cols-1">
          <InputField2
            label="Title"
            id="title"
            placeholder="Enter the Title of the Meeting"
            data={data}
            setData={setData}
            required={"required"}
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
              required={"required"}
            />
          </div>
          <TimePicker2
            label="Time"
            id="startTime"
            placeholder="12:00 PM"
            data={data}
            setData={setData}
          />
        </div>
        <div className="grid grid-cols-1 md:gap-10 md:grid-cols-3 mt-3">
          <div className="grid col-span-2">
            <TimePicker2
              label="To"
              id="endDate"
              placeholder="Select Date"
              data={data}
              setData={setData}
              required={"required"}
            />
          </div>
          <TimePicker2
            label="Time"
            id="endTime"
            placeholder="12:00 PM"
            data={data}
            setData={setData}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <SelectField
            label={"Related Matter"}
            id={"relatedMater"}
            data={data}
            setData={setData}
            options={options}
            placeholder={""}
            required={"required"}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <TextField2
            label={"Related Matter"}
            id={"relatedMater"}
            data={data}
            setData={setData}
            placeholder={""}
            required={"required"}
          />
        </div>

        <div className="grid grid-cols-1">
          <InputField2
            label="Location"
            id="location"
            placeholder="Enter the location of the meeting"
            data={data}
            setData={setData}
            required={"required"}
          />
        </div>
        <div className="grid grid-cols-1">
          <SelectField
            label={"Meeting Type"}
            id={"meetingType"}
            data={data}
            setData={setData}
            options={meetingTypeOptions}
            placeholder={""}
            required={"required"}
          />
        </div>
        <div>
          <button className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-2xl mt-4">
            Save
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddSchedule;
