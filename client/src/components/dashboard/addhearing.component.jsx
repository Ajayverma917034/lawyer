import React, { useState } from "react";
import { Dialog } from "@mui/material";
import InputField2 from "../../common/InputField2";
import DateField2 from "../../common/DateField2";
import TimePicker2 from "../../common/TimePicker2";
import SelectField2 from "../../common/SelectField2";
import toast from "react-hot-toast";
import axios from "axios";

const AddHearing = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };

  const [data, setData] = useState({
    name: "",
    hearingType: "",
    hearingDate: "",
    hearingTime: "",
    assignee: "",
    timeSpent: "",
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

  const assigneeData = [
    { key: 1, value: "Ajay Verma", label: "Ajay Verma" },
    { key: 2, value: "Harshit Kaushal", label: "Harshit Kaushal" },
  ];
  const handleSave = (e) => {
    e.preventDefault();
    // Proceed with saving data or making API call
    if (
      !data.name ||
      !data.hearingType ||
      !data.hearingDate ||
      !data.hearingTime ||
      !data.assignee ||
      !data.timeSpent
    ) {
      toast.error("All fields are required");
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER}/create-hearing`, data, config)
      .then(({ data }) => {
        toast.success("Hearing Added Successfully");
      })
      .then((err) => {
        console.log(err);
      });
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} disableScrollLock={true}>
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        Add Hearing
      </h2>
      <form
        className="p-3 md:px-10 flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
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
            label="Hearing Type"
            id="hearingType"
            placeholder=""
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1 md:gap-10 md:grid-cols-2 mt-3">
          <div className="grid col-span-1">
            <DateField2
              label="Hearing Date"
              id="hearingDate"
              placeholder=""
              data={data}
              setData={setData}
              required={true}
            />
          </div>
          <TimePicker2
            label="Time"
            id="hearingTime"
            placeholder=""
            data={data}
            setData={setData}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label="Assignee(s)"
            id="assignee"
            options={assigneeData}
            placeholder="--- choose ---"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <InputField2
            label="Time Spent"
            id="timeSpent"
            data={data}
            setData={setData}
            placeholder=""
            required={true}
          />
        </div>

        <div>
          <button
            type="submit"
            className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-2xl mt-4"
          >
            Save
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddHearing;
