import { Dialog } from "@mui/material";
import React, { useState } from "react";
import InputField2 from "../../common/InputField2";
import SelectField2 from "../../common/SelectField2";
import TextField2 from "../../common/TextField2";
import { DeleteOutlineOutlined, UploadFile } from "@mui/icons-material";
import DateField2 from "../../common/DateField2";
import TimePicker2 from "../../common/TimePicker2";
import OpponenetInput from "./OpponenetInput";
import OpponentInput from "./OpponenetInput";
import toast from "react-hot-toast";

const AddLitigationCase = ({ open, setOpen }) => {
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

  const [clientData, setClientData] = useState({
    clientName: "",
    clientPracticeArea: "",
    clientArrivalDate: "",
    clientPosition: "",
    clientDiscription: "",
    clientInternalRefNumber: "",
    clientDocument: [],
  });

  const [opponents, setOpponents] = useState([
    {
      opponentType: "",
      opponentName: "",
      opponentPosition: "",
    },
  ]);

  const [otherData, setOtherData] = useState({
    filedDate: "",
    dueDate: "",
    closedOn: "",
    effort: "",
    refferedBy: "",
    requestedBy: "",
    team: "",
    assignee: "",
    stage: "",
    matterContainer: "",
    billingPreference: "",
  });

  const rateOption = [
    {
      key: 1,
      value: "hourly",
      label: "Hourly",
    },
    {
      key: 2,
      value: "fixed",
      label: "Fixed",
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
    console.log(DateAndTimeData);
    // api call here
    // setOpen(!open);
  };

  const setOpponentData = (index, newData) => {
    const newOpponents = [...opponents];
    newOpponents[index] = { ...newOpponents[index], data: newData };
    setOpponents(newOpponents);
  };

  // opponets function
  const addOpponent = () => {
    if (
      opponents[opponents.length - 1].opponentName === "" ||
      opponents[opponents.length - 1].opponentType === "" ||
      opponents[opponents.length - 1].opponentPosition === ""
    ) {
      toast.error("Please fill the current opponent details");
    } else {
      const newOpponents = {
        opponentType: "",
        opponentName: "",
        opponentPosition: "",
      };
      setOpponents([...opponents, newOpponents]);
    }
  };

  const handleRemoveOpponent = (index) => {
    if (opponents.length === 1)
      return toast.error("You can't remove the last opponent");
    const newOpponents = [...opponents];
    newOpponents.splice(index, 1);
    setOpponents(newOpponents);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        Add Litigation Case
      </h2>
      <form
        className="flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        {/* client details  */}
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <div className="grid grid-cols-1">
            <InputField2
              label="Name"
              id="clientName"
              placeholder=""
              data={clientData}
              setData={setClientData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1">
            <InputField2
              label="Practice Area"
              id="clientPracticeArea"
              placeholder=""
              data={clientData}
              setData={setClientData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1  mt-3">
            <DateField2
              label="Arrival Date"
              id="clientArrivalDate"
              placeholder="Choose a date"
              data={clientData}
              setData={setClientData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1  mt-3">
            <SelectField2
              label="Client Name"
              id="clientName"
              data={clientData}
              setData={setClientData}
              options={clientName}
              required={true}
              placeholder={"-- choose --"}
            />
          </div>
          <div className="grid grid-cols-1  mt-3">
            <InputField2
              label="Cient Position"
              id="clientPosition"
              data={clientData}
              setData={setClientData}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1  mt-3">
            <TextField2
              label="Description"
              id="clientDiscription"
              data={clientData}
              setData={setClientData}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1  mt-3">
            <InputField2
              label="Internal Ref Number"
              id="clientInternalRefNumber"
              data={clientData}
              setData={setClientData}
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
          <h2 className="text-xl md:text-xl font-medium mt-4">Opponents</h2>

          <div>
            {opponents.map((opponent, index) => (
              <div className="mt-5" key={index}>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor={`opponentName-${index}`}
                    className={`text-xl required`}
                  >
                    Opponent Name - {index + 1}
                  </label>
                  {opponents.length > 1 && (
                    <DeleteOutlineOutlined
                      className="hover:text-white hover:bg-red rounded-full p-2 !size-9 cursor-pointer transition-all duration-300 ease-in-out"
                      onClick={() => handleRemoveOpponent(index)}
                    />
                  )}
                </div>
                <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3 mt-3">
                  <div className="grid col-span-1">
                    <select
                      id={`opponentType-${index}`}
                      required
                      value={opponent.opponentType}
                      onChange={(e) => {
                        const updatedData = [...opponents];
                        updatedData[index].opponentType = e.target.value;
                        setOpponents(updatedData);
                      }}
                      className={`p-3 bg-white text-black focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]`}
                    >
                      <option value="">-- choose --</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                    </select>
                  </div>
                  <div className="grid col-span-2 mt-2 md:mt-0">
                    <input
                      id={`opponentName-${index}`}
                      required
                      value={opponent.opponentName}
                      onChange={(e) => {
                        const updatedData = [...opponents];
                        updatedData[index].opponentName = e.target.value;
                        setOpponents(updatedData);
                      }}
                      className="p-3 bg-white text-black focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor={`opponentPosition-${index}`}
                    className={`text-xl required`}
                  >
                    Opponent Position
                  </label>
                  <div className="grid grid-cols-1 gap-4">
                    <input
                      value={opponent.opponentPosition}
                      id={`opponentPosition-${index}`}
                      required
                      onChange={(e) => {
                        const updatedData = [...opponents];
                        updatedData[index].opponentPosition = e.target.value;
                        setOpponents(updatedData);
                      }}
                      className="p-2 md:p-3 bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addOpponent}
              className="outline-none border-none bg-blue text-white py-1 px-3 rounded-md text-xl md:text-[14px] mt-4"
            >
              + Add additional Opponent
            </button>
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
              data={otherData}
              setData={setOtherData}
              required={true}
            />
            <DateField2
              label="Due Date"
              id="dueDate"
              placeholder="Select Date"
              data={otherData}
              setData={setOtherData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <DateField2
              label="Closed On"
              id="closedOn"
              placeholder="Select Date"
              data={otherData}
              setData={setOtherData}
              required={true}
            />
            <InputField2
              label="Estimated Efforts"
              id="effort"
              placeholder={"0"}
              data={otherData}
              setData={setOtherData}
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
              data={otherData}
              setData={setOtherData}
              required={true}
            />
            <InputField2
              label="Requested By"
              id="requestedBy"
              data={otherData}
              setData={setOtherData}
              required={true}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <SelectField2
              label="Assigned Team"
              id="team"
              options={categoryType}
              placeholder={"-- choose --"}
              data={otherData}
              setData={setOtherData}
              required={true}
            />
            <InputField2
              label="Assignee"
              id="assignee"
              data={otherData}
              setData={setOtherData}
              required={true}
            />
          </div>
        </div>

        <hr className="border-1 border-[#b3b3b3] mt-5" />
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <h2 className="text-xl md:text-xl font-medium mt-4">Stage</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <SelectField2
              label="Stage"
              id="stage"
              options={categoryType}
              placeholder={"-- choose --"}
              data={otherData}
              setData={setOtherData}
              required={true}
            />
            <InputField2
              label="Matter Container"
              id="rate"
              data={otherData}
              setData={setOtherData}
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
          <div>
            <button className="outlline-none capitalize border-none bg-blue text-white py-1 px-3 rounded-md text-xl md:text-[14px] mt-4">
              + Add entity rate
            </button>
          </div>
        </div>

        <hr className="border-1 border-[#b3b3b3] mt-5" />
        <div className="p-3 md:px-10 flex gap-2 flex-col">
          <h2 className="text-xl md:text-xl font-medium mt-4">
            Billing Preferences{" "}
          </h2>

          <div className="grid grid-cols-1 mt-3 gap-4">
            <SelectField2
              label=""
              id="billingPreference"
              options={rateOption}
              placeholder={"-- choose --"}
              data={otherData}
              setData={setOtherData}
              // required={true}
            />
          </div>
        </div>
        <hr className="border-1 border-[#b3b3b3] mt-5" />

        <div className="px-1 sm:p-3 md:px-10 flex justify-between flex-row mb-5 flex-wrap items-center">
          <div className="flex justify-between">
            <button
              className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-[15px] md:text-xl mt-4"
              type="submit"
            >
              Save
            </button>
            <button className="outlline-none border-none bg-blue text-white py-2 px-2 sm:px-3 rounded-md text-[15px] md:text-xl mt-4 ml-5">
              Save and Create Another
            </button>
          </div>
          <button
            className="outlline-none bg-white text-black border-2 border-black py-1 px-3 rounded-md text-[15px] md:text-xl mt-4"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddLitigationCase;
