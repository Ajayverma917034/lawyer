import { Dialog, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import InputField from "./input.field";

const AddTask = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    title: "",
  });
  return (
    <Dialog onClose={handleClose} open={open} className="p-5">
      <DialogTitle>Create a Task for today</DialogTitle>
      <div className="p-3 flex gap-2">
        <InputField
            label="Title of the Task"
            id="title"
            placeholder="Enter the Title of the Task"
            data={data}
            setData={setData}
        />
        <InputField
            label="Title of the Task"
            id="title"
            placeholder="Enter the Title of the Task"
            data={data}
            setData={setData}
        />

      </div>
    </Dialog>
  );
};

export default AddTask;
