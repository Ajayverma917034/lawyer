import { DownloadOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
const Clients = () => {
  const columns = [
    {
      field: "id",
      headerName: "Client ID",
      width: 150,
      renderCell: (params) => (
        <Link to={`/client/${params.row.id}/general-info`} underline="none">
          {params.row.id}
        </Link>
      ),
    },
    {
      field: "name",
      headerName: "Client Name",
      width: 110,
      editable: true,
    },
    {
      field: "type",
      headerName: "Client Type",
      width: 150,
      editable: true,
    },
    {
      field: "relatedTo",
      headerName: "Related To",
      width: 200,
    },
  ];

  const rows = [
    {
      id: "C00001",
      name: "Starlight Media",
      type: "Marketing Agency",
      relatedTo: "Social Media Campaign",
    },
    {
      id: "C00002",
      name: "Green Tech Solutions",
      type: "Startup",
      relatedTo: "Project: Renewable Energy",
    },
    {
      id: "C00003",
      name: "Happy Trails Travel",
      type: "Small Business",
      relatedTo: "Customer Relationship Management System",
    },
    {
      id: "C00004",
      name: "Cloud Builders Inc.",
      type: "Enterprise",
      relatedTo: "Data Center Migration",
    },
    {
      id: "C00005",
      name: "Fresher Farmers Market",
      type: "Local Business",
      relatedTo: "Inventory Management Software",
    },
  ];

  return (
    <>
      <div className="w-full bg-white-light min-h-screen">
        <div className="px-4 md:px-28 pt-5 items-center flex justify-between">
          <h1 className="text-2xl md:text-3xl font-medium">Client</h1>
          <div className="flex gap-5">
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
            </div>
            <button className="btn-dark">Add New</button>

            <button className="ml-3 btn-light bg-white-light text-black hover:bg-white hover:text-blue ">
              Export <DownloadOutlined className="text-blue" />
            </button>
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

        <div className="flex gap-6 px-4 py-2 border-b border-gray-light bg-white flex-wrap">
          <div>Page 1 of 1</div>
          <div className="flex gap-4">
            <button className="text-blue">Prev</button>
            <button className="text-blue">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
