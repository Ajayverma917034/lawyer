import React, { useContext } from "react";
import {
  BillingItem,
  CompanyAndPerson,
  DateAndTimeItem,
  DisplayField,
  InputField,
  MatterHeader,
  PeopleItem,
  SearchFieldByTyping,
  SelectField,
} from "../../../components/matter/matter-details/MatterDetailsComponent";
import { GrAdd } from "react-icons/gr";
import { PiDeviceRotate } from "react-icons/pi";
import { AddContext } from "../../../App";
import { practiceAreaOptions } from "../../../constant/optionData";
import { BsQuestionCircle } from "react-icons/bs";
import { ToolTip } from "../../../common/ToolTip";

const billingInfo = [
  {
    id: 1,
    title: "Trust",
    helpingText: "Trust",
    value: 0.0,
  },
  {
    id: 2,
    title: "Paid",
    helpingText: "Paid",
    value: 0.0,
  },
  {
    id: 3,
    title: "Due",
    helpingText: "Due",
    value: 0.0,
  },
  {
    id: 3,
    title: "Billable",
    helpingText: "Billable",
    value: 0.0,
  },
];

const peopleInfo = [
  { id: 1, title: "Assign Team", value: "Legal Tax Link" },
  { id: 2, title: "Assignee", value: "Legal Tax Link" },
  { id: 3, title: "Reffered By", value: "Legal Tax Link" },
  { id: 4, title: "Requested By", value: "Legal Tax Link" },
];

const dateandtimeData = [
  { id: 1, title: "Arriaval Date", value: "12/12/2021" },
  { id: 2, title: "Field On", value: "14/12/2021" },
  { id: 3, title: "Due Date", value: "17/12/2021" },
  { id: 4, title: "Closed On", value: "18/12/2021" },
  { id: 5, title: "Estimated Effort", value: 0 },
  { id: 6, title: "Effective Effort", value: 0 },
];
const GeneralInfo = () => {
  const { addPerson, setAddPerson, addCompany, setAddCompany } =
    useContext(AddContext);
  return (
    <div className="grid grid-cols-1 1374px:grid-cols-3 min-h-screen overflow-y-auto">
      <div className=" col-span-1 lg:col-span-2 border-r border-gray-light ">
        <div>
          <MatterHeader title="General Info" />
          <div className="flex flex-col gap-2 px-10 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
              <InputField label="Name" value="Letter" required="required" />
              <SelectField
                required="required"
                label="Practice Area"
                defaultValue="cirminal"
                options={practiceAreaOptions}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
              <DisplayField label="WorkFlow Status" value="In Progress" />
              <SelectField
                label="WorkFlow Used"
                defaultValue="System WorkFlow(defalult)"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
              <SelectField label="Matter Priority" value="In Progress" />
              <SearchFieldByTyping
                label="Stage"
                options={practiceAreaOptions}
                value=""
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
              <InputField label="Internal Ref Number" value="99963" />
              <SelectField
                label="Matter Container"
                defaultValue="System WorkFlow(defalult)"
              />
            </div>
            <div className="grid grid-cols-1 ">
              <label
                htmlFor="desc"
                className="text-xl text-black flex gap-2 items-center"
              >
                Descritpion{" "}
                <ToolTip title={"helpingText"}>
                  {" "}
                  <BsQuestionCircle />
                </ToolTip>
              </label>
              <textarea
                name="desc"
                id="desc"
                className="border border-gray rounded-md resize-none mt-1"
                rows={8}
              ></textarea>
            </div>

            <div className="grid grid-cols-1 mt-5">
              <label
                htmlFor="important development"
                className="text-xl text-black flex gap-2 items-center font-medium"
              >
                Important Development
                <ToolTip title={"helpingText"}>
                  {" "}
                  <BsQuestionCircle />
                </ToolTip>
                <div className="ml-auto">
                  <button className="flex gap-2 items-center text-base text-blue">
                    <GrAdd size={15} /> Add Timestamp
                  </button>
                </div>
              </label>
              <textarea
                name="important development"
                id="desc"
                className="border border-gray rounded-md resize-none mt-1"
                rows={8}
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <MatterHeader title="External Advisor" />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 flex flex-col">
        {/* billing section  */}
        <div>
          <MatterHeader title="Billing" />
          <div className="flex flex-col px-10 py-5">
            {billingInfo.map((bill) => (
              <BillingItem
                key={bill.id}
                title={bill.title}
                helpingText={bill.helpingText}
                value={bill.value}
              />
            ))}
          </div>
        </div>

        {/* People section  */}

        <div>
          <MatterHeader title="People" />
          <div className="flex flex-col px-10 py-5">
            {peopleInfo.map((people) => (
              <PeopleItem
                key={people.id}
                title={people.title}
                value={people.value}
              />
            ))}
          </div>
        </div>

        {/* Billing Preference section  */}
        <div>
          <MatterHeader title="Billing Preference" Icon={PiDeviceRotate} />
          <div className="flex flex-col px-10 py-5">
            <div className="flex justify-between">
              <p className="text-black text-[18px] flex gap-2 items-center my-1">
                Assign Team
              </p>
              <div>
                <span className="text-black text-[18px]">Hourly Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Date& Times section  */}
        <div>
          <MatterHeader title="Date & Tune" />
          <div className="flex flex-col px-10 py-5">
            {dateandtimeData.map((dateAndTime) => (
              <DateAndTimeItem
                index={dateAndTime.id}
                key={dateAndTime.id}
                title={dateAndTime.title}
                value={dateAndTime.value}
              />
            ))}
          </div>
        </div>
        {/* related company */}
        <div>
          <div className="bg-blue flex items-center text-xl py-3 text-white px-5 justify-between">
            <h2>Related Company</h2>{" "}
            <button
              className="flex gap-2 items-center text-base"
              onClick={() => setAddCompany(!addCompany)}
            >
              <GrAdd size={15} /> Add New
            </button>
          </div>
          <div className="flex flex-col px-10 py-5">
            <CompanyAndPerson title="A & B Company" />
          </div>
        </div>
        {/* related person */}
        <div>
          <div className="bg-blue flex items-center text-xl py-3 text-white px-5 justify-between">
            <h2>Related Person</h2>{" "}
            <button
              className="flex gap-2 items-center text-base"
              onClick={() => setAddPerson(!addPerson)}
            >
              <GrAdd size={15} /> Add New
            </button>
          </div>
          <div className="flex flex-col px-10 py-5">
            <CompanyAndPerson title="Jhon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
