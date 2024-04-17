import React, { useEffect } from "react";
import DashboardNavbar from "../../components/dashboard/dashboard.navbar";
import { FileDownloadOutlined } from "@mui/icons-material";
import xlsx from "json-as-xlsx";

const AllCases = () => {
  const data = [
    {
      sheet: "Sheet 1",
      columns: [
        { label: "Id", value: "id" }, // Top level data
        { label: "Title", value: "title", format: '# "years"' }, // Custom format
        { label: "Type", value: "type" }, // Run functions
        { label: "Last Date", value: "lastDate" }, // Nested data
        { label: "Matter Name", value: "matterName" }, // Nested data
      ],
      content: [
        {
          id: 1,
          title: "Estate Planning Seminar",
          type: "Seminar",
          lastDate: "2024-05-20",
          matterName: "Estate Law",
        },
        {
          id: 2,
          title: "Contract Law Basics",
          type: "Workshop",
          lastDate: "2024-06-15",
          matterName: "Commercial Law",
        },
        {
          id: 3,
          title: "Intellectual Property Rights",
          type: "Course",
          lastDate: "2024-07-10",
          matterName: "IP Law",
        },
      ],
    },
  ];
  let settings = {
    fileName: "MySpreadsheet",
  };

  const exportToExcel = () => {
    xlsx(data, settings);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DashboardNavbar />
      <div className="px-3 md:px-22 lg:px-28 py-3 bg-wihite-light min-h-screen">
        <div>
          <div className="flex justify-between items-center">
            <h1 className=" text-2xl md:text-3xl mt-5 md:mt-3">Tasks</h1>
            <div className="flex gap-2">
              <button
                className="bg-blue text-white p-1 px-2 rounded-sm shadow-sm"
                onClick={exportToExcel}
              >
                Export <FileDownloadOutlined />
              </button>
            </div>
          </div>
          <div className="px-4 py-8 sm:p-8 rounded-md shadow-md bg-white mt-10 overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="bg-blue text-white">
                <tr>
                  <th class="px-4 py-2 border-r">ID</th>
                  <th class="px-4 py-2 border-r">Title</th>
                  <th class="px-4 py-2 border-r">Type</th>
                  <th class="px-4 py-2 border-r">Last Date</th>
                  <th class="px-4 py-2">Matter Name</th>
                </tr>
              </thead>
              <tbody class="text-gray-700 bg-wihite-light">
                <tr>
                  <td class="px-4 py-2 border-r">1</td>
                  <td class="px-4 py-2 border-r">Estate Planning Seminar</td>
                  <td class="px-4 py-2 border-r">Seminar</td>
                  <td class="px-4 py-2 border-r">2024-05-20</td>
                  <td class="px-4 py-2">Estate Law</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border-r">2</td>
                  <td class="px-4 py-2 border-r">Contract Law Basics</td>
                  <td class="px-4 py-2 border-r">Workshop</td>
                  <td class="px-4 py-2 border-r">2024-06-15</td>
                  <td class="px-4 py-2">Commercial Law</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border-r">3</td>
                  <td class="px-4 py-2 border-r">
                    Intellectual Property Rights
                  </td>
                  <td class="px-4 py-2 border-r">Course</td>
                  <td class="px-4 py-2 border-r">2024-07-10</td>
                  <td class="px-4 py-2">IP Law</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between mt-3 items-center">
              <p className="text-base sm:text-xl font-semibold">
                Show 0 out of 0 entries
              </p>
              <div className="flex">
                <button className="p-2 bg-wihite-light border border-gray-light rounded-tl-md rounded-bl-md">
                  Previous
                </button>
                <button className="p-2 bg-wihite-light border border-gray-light rounded-tr-md rounded-br-md">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCases;
