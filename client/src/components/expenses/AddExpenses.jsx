import { Dialog } from "@mui/material";
import React, { useState } from "react";
import InputField2 from "../../common/InputField2";
import SelectField2 from "../../common/SelectField2";
import { IoIosCloudUpload } from "react-icons/io";
import { CollapseComponent2 } from "../../common/collapse.component";
import { IoMdAdd } from "react-icons/io";
import TextField2 from "../../common/TextField2";
import { expensesCategoryData } from "../../constant/expenses.data";
import DateField2 from "../../common/DateField2";

const AddExpenses = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };
  const [data, setData] = useState({
    category: "",
    method: "",
    paidThrough: "",
    amount: "",
    paidOn: "05-03-2024",
    inclusiveTax: "",
    reference: "",
    supplier: "",
    comment: "",
    relatedMatter: "",
    relatedContract: "",
    expensesType: "",
    billingStatus: "",
    client: "",
    clientAccount: "",
  });

  const handleSave = (e) => {
    e.preventDefault();

    console.log(data);
    // api call here
    setOpen(!open);
  };

  const paymentMethodData = [
    { id: 1, value: "Cash", label: "Cash" },
    { id: 2, value: "Cheque", label: "Cheque" },
    { id: 3, value: "Credit Card", label: "Credit Card" },
  ];

  const paidThroughAccountData = [
    { id: 1, value: "Bank Account 1", label: "Bank Account 1" },
    { id: 2, value: "Bank Account 2", label: "Bank Account 2" },
    { id: 3, value: "Credit Card 1", label: "Credit Card 1" },
    { id: 4, value: "Credit Card 2", label: "Credit Card 2" },
    { id: 5, value: "PayPal Account", label: "PayPal Account" },
    { id: 6, value: "Cash", label: "Cash" },
    { id: 7, value: "Other Account 1", label: "Other Account 1" },
    { id: 8, value: "Other Account 2", label: "Other Account 2" },
  ];

  const handleRelatedDocument = (e) => {
    // Get the files from the event object
    const files = Array.from(e.target.files);
    // Update the state to include all selected files
    setSelectedDocument(files);
  };
  const formatNumber = (num) => {
    return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleSaveAndReset = (e) => {};

  const handleChangeAmount = (event) => {
    const formattedValue = formatNumber(event.target.value);
    setData({ ...data, amount: formattedValue });
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        Add New Expenses
      </h2>
      <form
        className="flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[39vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        <CollapseComponent2 title={"Expenses Info"}>
          <div className="flex gap-y-5 flex-col">
            <div className="grid grid-cols-1 mt-3">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <label
                    htmlFor={"expensesCategory"}
                    className={`text-base md:text-[14px] text-black ${"required"}`}
                  >
                    Expenses Category
                  </label>
                  <span className="text-blue text-base cursor-pointer select-none">
                    Add Category
                  </span>
                </div>
                <select
                  id={"category"}
                  name="category"
                  onChange={(e) =>
                    setData({ ...data, ["category"]: e.target.value })
                  }
                  value={data["category"]}
                  className="custom-select p-2 md:p-3 max-md:text-base bg-white text-gray-dark  focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                  required={true}
                >
                  <option value="">{"Select an option"}</option>
                  {expensesCategoryData.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <SelectField2
                label="Payment Method"
                id="method"
                placeholder="Select an option"
                options={paymentMethodData}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1">
              <SelectField2
                label="Paid Through"
                id="paidThrough"
                placeholder="Select an option"
                options={paidThroughAccountData}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="id"
                  className={`text-base md:text-[14px] text-black font-normal required`}
                >
                  Amount
                </label>
                <input
                  type="text"
                  className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                  name="amount"
                  id="amount"
                  onChange={handleChangeAmount}
                  value={data.amount}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <DateField2
                label="Paid On"
                id="paidOn"
                placeholder=""
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1">
              <SelectField2
                label="Inclusive Tax"
                id="inclusiveTax"
                placeholder="Select an option"
                options={paymentMethodData}
                data={data}
                setData={setData}
                required={false}
              />
            </div>
            <div className="grid grid-cols-1">
              <InputField2
                label="Reference #"
                id="reference"
                data={data}
                setData={setData}
              />
            </div>
            <div className="grid grid-cols-1 mt-3">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <label
                    htmlFor={"supplier"}
                    className={`text-base md:text-[14px] text-black `}
                  >
                    Supplier
                  </label>
                  <span className="text-blue text-base cursor-pointer select-none flex">
                    <IoMdAdd size={20} /> Add Supplier
                  </span>
                </div>
                <select
                  id={"supplier"}
                  name="supplier"
                  onChange={(e) =>
                    setData({ ...data, ["supplier"]: e.target.value })
                  }
                  value={data["supplier"]}
                  className="custom-select p-2 md:p-3 max-md:text-base bg-white text-gray-dark  focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                >
                  <option value="">{"Select an option"}</option>
                  {[0, 1, 2].map((option, index) => (
                    <option key={index} value={option}></option>
                  ))}
                </select>
              </div>
            </div>

            <TextField2
              label={"Comment"}
              id={"comment"}
              data={data}
              setData={setData}
            />

            <div className="mt-5">
              <div>
                <label className="text-xl">Attachment File</label>
              </div>
              <label htmlFor="relatedDocument">
                <div className="border border-dashed rounded-md flex justify-center items-center min-h-32 flex-col">
                  <IoIosCloudUpload className="text-3xl !size-12 text-blue" />
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
          </div>
        </CollapseComponent2>
        <CollapseComponent2 title={"Expenses Allocation"}>
          <div className="flex gap-y-5 flex-col">
            <div className="grid grid-cols-1">
              <SelectField2
                label="Related Matter"
                id="relatedMatter"
                placeholder="Select an option"
                options={paymentMethodData}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1">
              <SelectField2
                label="Related Contract/Document"
                id="relatedContract"
                placeholder="Select an option"
                options={paymentMethodData}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1">
              <SelectField2
                label="Expenses Type"
                id="expensesType"
                placeholder="Select an option"
                options={paymentMethodData}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1">
              <SelectField2
                label="Billing Status"
                id="billingStatus"
                placeholder="Select an option"
                options={paymentMethodData}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1">
              <SelectField2
                label="Client"
                id="client"
                placeholder="Select an option"
                options={paymentMethodData}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
            <div className="grid grid-cols-1">
              <SelectField2
                label="Client Account"
                id="clientAccount"
                placeholder="Select an option"
                options={paymentMethodData}
                data={data}
                setData={setData}
                required={true}
              />
            </div>
          </div>
        </CollapseComponent2>

        <div className="p-2 w-full px-4 md:px-10 flex justify-between mb-10">
          <button className="btn-dark text-xl" type="submit">
            Save
          </button>
          <button
            className="btn-dark text-xl"
            type="button"
            onClick={handleSaveAndReset}
          >
            Save And Create Another
          </button>
          <button
            className="btn-light text-xl font-medium text-black border border-black"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddExpenses;
