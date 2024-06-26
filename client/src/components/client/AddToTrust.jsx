import { Dialog } from "@mui/material";
import React, { useState } from "react";
import DateField2 from "../../common/DateField2";

const AddToTrust = ({ open, setOpen }) => {
  let [client, setClient] = useState({
    client: "",
    amount: "",
    currency: "",
    depositTo: "",
    trustDeposit: "",
    depositOn: "",
    paymentMethod: "",
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
    setClient({ ...client, [e.target.name]: e.target.value });
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-[18px] md:text-2xl font-medium mt-4 text-center border-b border-gray-light pb-3">
        Add Trust Fund
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
            Client
          </label>
          <input
            type="text"
            name="client"
            value={client.client}
            onChange={handleChange}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md"
          />
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="amount"
            className="required col-span-1 flex justify-end text-xll"
          >
            Amount
          </label>
          <div className="col-span-2 grid grid-cols-3 gap-x-3 items-center">
            <input
              type="number"
              name="amount"
              value={client.amount}
              onChange={handleChange}
              className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md"
            />
            <select
              type="text"
              name="currency"
              value={client.currency}
              onChange={handleChange}
              className="col-span-1 focus:outline-none border border-gray py-2 px-2 rounded-md"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="amount"
            className="required col-span-1 flex justify-end text-xll"
          >
            Deposit To
          </label>
          <select
            type="text"
            name="currency"
            value={client.currency}
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
            className="col-span-1 flex justify-end text-xll"
          >
            Trust Deposited
          </label>
          <p className="text-black text-xl">
            {" "}
            {!client.trustDeposit ? "0" : client.trustDeposit} INR
          </p>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="amount"
            className="required col-span-1 flex justify-end text-xll"
          >
            Deposit On
          </label>
          <input
            type="date"
            name="depositOn"
            value={client.depositOn}
            onChange={handleChange}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md"
          />
        </div>
        <div className="col-span-2 grid grid-cols-3 gap-x-3 items-center">
          <label
            htmlFor="amount"
            className="required col-span-1 flex justify-end text-xll"
          >
            Payment Method
          </label>
          <select
            type="text"
            name="currency"
            value={client.currency}
            onChange={handleChange}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md"
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
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
            rows={5}
            className="col-span-2 focus:outline-none border border-gray py-2 px-2 rounded-md resize-none"
          ></textarea>
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

export default AddToTrust;
