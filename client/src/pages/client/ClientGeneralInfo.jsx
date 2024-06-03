import React from "react";
import AddToTrust from "../../components/client/AddToTrust";
import AddNewAccount from "../../components/client/AddNewAccount";

const ClientGeneralInfo = () => {
  const [addToTrust, setAddToTrust] = React.useState(false);
  const [addNewAccount, setAddNewAccount] = React.useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-3 py-3 border-b border-gray">
        <div className="flex gap-x-5">
          <button className="btn-light text-xl font-medium">
            Related Expenses
          </button>
          <button className="btn-light text-xl font-medium">
            Related Invoices
          </button>
          <button className="btn-light text-xl font-medium">
            Related Bills
          </button>
        </div>
        <div className="flex gap-x-5">
          <button
            className="btn-dark"
            onClick={() => setAddToTrust(!addToTrust)}
          >
            Add To Trust
          </button>
          <button
            className="btn-dark"
            onClick={() => setAddNewAccount(!addNewAccount)}
          >
            Add New Account
          </button>
        </div>
      </div>

      <table className="table-auto w-full">
        <thead className="border-b border-gray-light">
          <tr>
            <th class="px-4 py-2 font-normal text-start">Name</th>
            <th class="px-4 py-2 font-normal text-start">Currency </th>
            <th class="px-4 py-2 font-normal text-start">Debit</th>
            <th class="px-4 py-2 font-normal text-start">Credit</th>
            <th class="px-4 py-2 font-normal text-start">Balance</th>
            <th class="px-4 py-2 font-normal text-start">Description</th>
          </tr>
        </thead>
      </table>
      <AddToTrust open={addToTrust} setOpen={setAddToTrust} />
      <AddNewAccount open={addNewAccount} setOpen={setAddNewAccount} />
    </div>
  );
};

export default ClientGeneralInfo;
