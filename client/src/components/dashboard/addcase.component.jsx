import { Dialog, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import InputField2 from "../../common/InputField2";
import SelectField from "../../common/SelectField";
import TextField2 from "../../common/TextField2";
import DateField2 from "../../common/DateField2";
import TimePicker2 from "../../common/TimePicker2";
import { UploadFile } from "@mui/icons-material";

const AddCase = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    title: "",
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
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-2xl font-medium text-center mt-4">Ligation Case</h2>
      <div className="p-3 md:px-10 flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[35rem]">
        <div className="grid grid-cols-1">
          <InputField2
            label="Name"
            id="name"
            placeholder="Enter the name of the case"
            data={data}
            setData={setData}
            required={"required"}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <SelectField
            label={"Practice Area"}
            id={"practiceArea"}
            data={data}
            setData={setData}
            options={taskType}
            placeholder={""}
            required={"required"}
          />
        </div>
        {/* <div className="grid grid-cols-1  mt-3">
          <SelectField
            label={"Assign To"}
            id={"assignTo"}
            data={data}
            setData={setData}
            options={assignToData}
            placeholder={""}
            required={"required"}
          />
        </div> */}
        <div className="grid grid-cols-1  mt-3">
          <DateField2
            label="Arrival Date"
            id="arrivalDate"
            placeholder="Choose a date"
            data={data}
            setData={setData}
            required={"required"}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <InputField2
            label="Client Name"
            id="clientName"
            placeholder="start typing"
            data={data}
            setData={setData}
            required={"required"}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <SelectField
            label={"Client Position"}
            id={"clientPosition"}
            data={data}
            setData={setData}
            options={taskType}
            placeholder={""}
            required={"required"}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <TextField2
            label={"Description"}
            id={"description"}
            data={data}
            setData={setData}
            placeholder={""}
            required={"required"}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <InputField2
            label="Internal Ref Number"
            id="refNumber"
            placeholder=""
            data={data}
            setData={setData}
            required={"required"}
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

export default AddCase;
