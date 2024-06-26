import { Dialog } from "@mui/material";
import React, { useState } from "react";
import DateField2 from "../../common/DateField2";

const AddNewAccount = ({ open, setOpen }) => {
  let [account, setAccount] = useState({
    accountName: "",
    accountNumber: "",
    currency: "",
    billTo: "",
    isVisibleAdvisor: "",
    description: "",
  });
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (e) => {
    e.preventDefault();
    // Proceed with saving data or making API call
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        New Account for "Advertisement Company"
      </h2>
      <form
        className="p-3 md:px-10 flex gap-y-5 flex-col max-md:min-w-[80vw] md:min-w-[30vw] overflow-y-auto"
        onSubmit={handleSave}
      >
        <div className="grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="client"
            className="required col-span-1 flex justify-end text-xl"
          >
            Account Name
          </label>
          <input
            type="text"
            name="accountName"
            value={account.accountName}
            onChange={handleChange}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md"
          />
        </div>
        <div className="grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="accountNumber"
            className="required col-span-1 flex justify-end text-xl"
          >
            Account Number
          </label>
          <input
            type="number"
            name="accountNumber"
            value={account.accountNumber}
            onChange={handleChange}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md"
          />
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="currency"
            className="required col-span-1 flex justify-end text-xll"
          >
            Currency
          </label>

          <select
            type="text"
            name="currency"
            value={account.currency}
            onChange={handleChange}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md"
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-x-3">
          <label
            htmlFor="amount"
            className="required col-span-1 flex justify-end text-xl"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={account.description}
            onChange={handleChange}
            rows={5}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md resize-none"
          ></textarea>
        </div>
        <div className="col-span-2 grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="amount"
            className="required col-span-1 flex justify-end text-xll"
          >
            Bill To
          </label>
          <select
            type="text"
            name="billTo"
            value={account.billTo}
            onChange={handleChange}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md"
          >
            <option value="INR">Harshit</option>
            <option value="USD">Team XYZ</option>
          </select>
        </div>
        <div className="col-span-2 grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="amount"
            className=" col-span-1 flex justify-end text-xll"
          ></label>
          <div>
            <input type="checkbox" />
          </div>
        </div>
      </form>
      <div className="border-t border-gray-light flex items-center justify-end px-5 py-3 gap-x-5">
        <button
          className="btn-light text-black"
          onClick={handleClose}
          // type="submit"
        >
          Cancel
        </button>
        <button
          className="btn-dark"
          // type="submit"
        >
          Save
        </button>
      </div>
    </Dialog>
  );
};

export default AddNewAccount;
