import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboard/dashboard.navbar";
import { FileDownloadOutlined } from "@mui/icons-material";
import xlsx from "json-as-xlsx";
import axios from "axios";
import { filterPaginationData } from "../../common/filter-pagination-data";
import { formatDate } from "../../common/date-formater";
import LoadPrevBtn from "../../common/LoadPreBtn";
import LoadNextBtn from "../../common/LoadNextBtn";
import { Link } from "react-router-dom";

const AllHearings = () => {
  const [hearings, setHearings] = useState(null);
  const [limit, setLimit] = useState(1);

  const fetchHearings = ({ page = 1 }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(
        `${import.meta.env.VITE_SERVER}/get-hearings`,
        { page, limit },
        config
      )
      .then(async ({ data }) => {
        let formatData = await filterPaginationData({
          state: hearings,
          data: data.hearings,
          page,
          countRoute: "/all-hearing-count",
        });
        setHearings(formatData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchHearings({ page: 1 });
  }, []);

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
      <div className="px-3 md:px-22 lg:px-28 py-3 bg-white-light min-h-screen">
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
                  <th class="px-4 py-2 border-r">Name</th>
                  <th class="px-4 py-2 border-r">Type</th>
                  <th class="px-4 py-2 border-r">Hearing Date</th>
                  <th class="px-4 py-2 border-r">Hearing Time</th>
                  <th class="px-4 py-2 border-r">Assignee'(s)</th>
                  <th class="px-4 py-2">Time Spent</th>
                </tr>
              </thead>
              <tbody class="text-gray-700 bg-white-light">
                {!hearings ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No data found
                    </td>
                  </tr>
                ) : (
                  hearings.results?.map((hearing, index) => (
                    <tr key={index}>
                      <th class="px-4 py-2 border-r">
                        <Link to={`/hearing-details/T000003`}>{index + 1}</Link>
                      </th>
                      <th class="px-4 py-2 border-r">
                        <Link to={`/hearing-details/T000003`}>
                          {hearing.name}
                        </Link>
                      </th>
                      <td class="px-4 py-2 border-r">{hearing.hearingType}</td>
                      <td class="px-4 py-2 border-r">
                        {formatDate(hearing.hearingDate)}
                      </td>
                      <td class="px-4 py-2 border-r">{hearing.hearingTime}</td>

                      <td class="px-4 py-2 border-r">{hearing.assignee}</td>
                      <td class="px-4 py-2">{hearing.timeSpent}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-3 items-center">
              <p className="text-base sm:text-xl font-semibold">
                Show {(hearings?.page - 1) * limit + hearings?.results.length}{" "}
                out of {hearings ? hearings.totalDocs : 0} entries
              </p>
              <div className="flex">
                <LoadPrevBtn
                  limit={limit}
                  state={hearings}
                  fetchDataFun={fetchHearings}
                />
                <LoadNextBtn
                  limit={limit}
                  state={hearings}
                  fetchDataFun={fetchHearings}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllHearings;
