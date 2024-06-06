import { Check, DownloadOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import AddPerson from "../../components/contacts/addPerson.component";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const Invoices = () => {
  const columns = [
    { field: "id", headerName: "Invoice ID", width: 150 },
    {
      field: "clientAccount",
      headerName: "Client't Account",
      width: 170,
      editable: true,
    },
    {
      field: "ClientAccountNumber",
      headerName: "Client's Account Number",
      width: 200,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 110,
    },
    {
      field: "paid",
      headerName: "Paid",
      type: "number",
      width: 110,
    },
    {
      field: "balanceDue",
      headerName: "Balance Due",
      type: "number",
      width: 150,
    },
    {
      field: "currency",
      headerName: "Currency",
      width: 110,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
    },
    {
      field: "invoiceDate",
      headerName: "Invoice Date",
      width: 110,
    },
  ];

  const rows = [
    {
      id: "INV001",
      clientAccount: "ClientA",
      ClientAccountNumber: "123456",
      total: 500.0,
      paid: 300.0,
      balanceDue: 200.0,
      currency: "USD",
      status: "Partial",
      invoiceDate: "2024-01-15",
    },
    {
      id: "INV002",
      clientAccount: "ClientB",
      ClientAccountNumber: "654321",
      total: 1000.0,
      paid: 1000.0,
      balanceDue: 0.0,
      currency: "USD",
      status: "Paid",
      invoiceDate: "2024-02-01",
    },
    {
      id: "INV003",
      clientAccount: "ClientC",
      ClientAccountNumber: "789123",
      total: 750.0,
      paid: 0.0,
      balanceDue: 750.0,
      currency: "USD",
      status: "Unpaid",
      invoiceDate: "2024-03-10",
    },
    {
      id: "INV004",
      clientAccount: "ClientD",
      ClientAccountNumber: "321987",
      total: 1200.0,
      paid: 600.0,
      balanceDue: 600.0,
      currency: "USD",
      status: "Partial",
      invoiceDate: "2024-04-05",
    },
    {
      id: "INV005",
      clientAccount: "ClientE",
      ClientAccountNumber: "456789",
      total: 300.0,
      paid: 300.0,
      balanceDue: 0.0,
      currency: "USD",
      status: "Paid",
      invoiceDate: "2024-05-20",
    },
    {
      id: "INV006",
      clientAccount: "ClientE",
      ClientAccountNumber: "456789",
      total: 300.0,
      paid: 300.0,
      balanceDue: 0.0,
      currency: "USD",
      status: "Paid",
      invoiceDate: "2024-05-20",
    },
  ];

  return (
    <>
      <div className="w-full bg-white-light min-h-screen">
        <div className="px-4 md:px-28 pt-2 items-center">
          <div className="flex gap-2 mt-5">
            <h1 className="text-2xl md:text-2xl lg:text-3xl">Invoices</h1>

            <button className="ml-auto btn-dark">Add New</button>
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
    </>
  );
};

export default Invoices;
