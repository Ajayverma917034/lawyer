import { DownloadOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import AddExpenses from "../../components/expenses/AddExpenses";
import { Link } from "react-router-dom";

const Expenses = () => {
  const [addExpenses, setAddExpenses] = useState(false);

  const columns = [
    {
      field: "paid",
      headerName: "Paid",
      width: 110,
      editable: true,
    },
    {
      field: "id",
      headerName: "Expenses ID",
      width: 150,
      renderCell: (params) => (
        <Link to={`/expense/${params.row.id}/general-info`} underline="none">
          {params.row.id}
        </Link>
      ),
    },
    {
      field: "reference",
      headerName: "Reference",
      width: 150,
      editable: true,
    },
    {
      field: "category",
      headerName: "Expenses Category",
      width: 200,
    },
    {
      field: "amount",
      headerName: "Expenses Amount",
      type: "number",
      width: 110,
    },
    {
      field: "paymentMethod",
      headerName: "Payment Method",
      type: "number",
      width: 110,
    },
    {
      field: "Currency",
      headerName: "currency",
      type: "number",
      width: 150,
    },
    {
      field: "currency",
      headerName: "Currency",
      width: 110,
    },
    {
      field: "paidThrough",
      headerName: "Paid Through",
      width: 110,
    },
    {
      field: "paidAccountNumber",
      headerName: "Paid Through Account Number",
      width: 200,
    },
  ];

  const rows = [
    {
      paid: true,
      id: "EXP001",
      reference: "RefA",
      category: "Office Supplies",
      amount: 150.0,
      paymentMethod: "Credit Card",
      Currency: "USD",
      currency: "USD",
      paidThrough: "Bank Transfer",
      paidAccountNumber: "987654321",
    },
    {
      paid: false,
      id: "EXP002",
      reference: "RefB",
      category: "Travel",
      amount: 500.0,
      paymentMethod: "Debit Card",
      Currency: "USD",
      currency: "USD",
      paidThrough: "Cash",
      paidAccountNumber: "123456789",
    },
    {
      paid: true,
      id: "EXP003",
      reference: "RefC",
      category: "Utilities",
      amount: 200.0,
      paymentMethod: "Credit Card",
      Currency: "USD",
      currency: "USD",
      paidThrough: "Bank Transfer",
      paidAccountNumber: "234567890",
    },
    {
      paid: true,
      id: "EXP004",
      reference: "RefD",
      category: "Marketing",
      amount: 300.0,
      paymentMethod: "PayPal",
      Currency: "USD",
      currency: "USD",
      paidThrough: "Bank Transfer",
      paidAccountNumber: "345678901",
    },
    {
      paid: false,
      id: "EXP005",
      reference: "RefE",
      category: "Maintenance",
      amount: 400.0,
      paymentMethod: "Credit Card",
      Currency: "USD",
      currency: "USD",
      paidThrough: "Bank Transfer",
      paidAccountNumber: "456789012",
    },
  ];

  return (
    <>
      <div className="w-full bg-white-light min-h-screen">
        <div className="px-4 md:px-28 pt-2 items-center">
          <div className="flex gap-2 mt-5">
            <h1 className="text-2xl md:text-2xl lg:text-3xl">Expenses</h1>

            <button
              className="ml-auto btn-dark"
              onClick={() => setAddExpenses(true)}
            >
              Add New
            </button>
          </div>

          <div className="flex justify-between mt-2 gap-5 items-center flex-wrap">
            <p className="md:text-xl text-black font-medium">
              No Items to display
            </p>

            <div className="flex ml-20 gap-x-5 items-center">
              <button className=" capitalize border px-2 py-1 rounded-md ">
                all
              </button>
              <button className="capitalize border px-2 py-1 rounded-md bg-white">
                Awaiting Approved
              </button>
              <button className="capitalize border px-2 py-1 rounded-md bg-white">
                Awaiting Signature
              </button>
            </div>
            <div className="flex">
              <div class="flex items-center border-2 border-gray-light rounded-md overflow-hidden bg-white">
                <input
                  type="text"
                  placeholder="Search..."
                  class="px-4 py-2 w-full outline-none"
                />
                <button class="px-4 text-gray-600 bg-white">
                  <SearchOutlined className="text-blue" />
                </button>
              </div>
              <button className="ml-3 btn-light bg-white-light text-black hover:bg-white hover:text-blue text-xl">
                Export <DownloadOutlined className="text-blue" />
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[50vh] overflow-x-auto mt-6 bg-white border-t-2 border-b-2 border-gray-light">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </div>
      </div>
      <AddExpenses open={addExpenses} setOpen={setAddExpenses} />
    </>
  );
};

export default Expenses;
