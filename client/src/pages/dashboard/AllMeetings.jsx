import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboard/dashboard.navbar";
import xlsx from "json-as-xlsx";
import axios from "axios";
import { filterPaginationData } from "../../common/filter-pagination-data";
import { formatDate } from "../../common/date-formater";
import LoadPrevBtn from "../../common/LoadPreBtn";
import LoadNextBtn from "../../common/LoadNextBtn";

const AllMeetings = () => {
  const [meetings, setMeetings] = useState(null);
  const [limit, setLimit] = useState(1);

  const fetchMeetings = ({ page = 1 }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(
        `${import.meta.env.VITE_SERVER}/get-meetings`,
        { page, limit },
        config
      )
      .then(async ({ data }) => {
        let formatData = await filterPaginationData({
          state: meetings,
          data: data.meetings,
          page,
          countRoute: "/all-meeting-count",
        });
        setMeetings(formatData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
  useEffect(() => {
    fetchMeetings({ page: 1 });
  }, []);
  return (
    <>
      <DashboardNavbar />
      <div className="px-3 md:px-22 lg:px-28 py-3 bg-white-light min-h-screen">
        <div>
          <div className="flex justify-between items-center">
            <h1 className=" text-2xl md:text-3xl mt-5 md:mt-3">Meetings</h1>
            {/* <div className="flex gap-2">
              <button
                className="bg-blue text-white p-1 px-2 rounded-sm shadow-sm"
                onClick={exportToExcel}
              >
                Export <FileDownloadOutlined />
              </button>
            </div> */}
          </div>
          <div className="px-4 py-8 sm:p-8 rounded-md shadow-md bg-white mt-10 overflow-x-auto">
            <table class="table-auto w-full">
              <thead class="bg-blue text-white">
                <tr>
                  <th class="px-4 py-2 border-r">ID</th>
                  <th class="px-4 py-2 border-r">Title</th>
                  <th class="px-4 py-2 border-r">From Date</th>
                  <th class="px-4 py-2 border-r">From Time</th>
                  <th class="px-4 py-2 border-r">To Date</th>
                  <th class="px-4 py-2 border-r">To Time</th>
                  <th class="px-4 py-2 border-r">Description</th>
                  <th class="px-4 py-2 border-r">Location</th>
                  <th class="px-4 py-2">Meeting Type</th>
                </tr>
              </thead>
              <tbody class="text-gray-700 bg-white-light">
                {!meetings ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No data found
                    </td>
                  </tr>
                ) : (
                  meetings.results?.map((meeting, index) => (
                    <tr key={index}>
                      <td class="px-4 py-2 border-r">{index + 1}</td>
                      <td class="px-4 py-2 border-r">{meeting.title}</td>
                      <td class="px-4 py-2 border-r">
                        {formatDate(meeting.startDate)}
                      </td>
                      <td class="px-4 py-2 border-r">{meeting.startTime}</td>
                      <td class="px-4 py-2 border-r">
                        {formatDate(meeting.endDate)}
                      </td>
                      <td class="px-4 py-2 border-r">{meeting.endTime}</td>
                      <td class="px-4 py-2 border-r">{meeting.description}</td>
                      <td class="px-4 py-2 border-r">{meeting.location}</td>
                      <td class="px-4 py-2">{meeting.meetingType}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-3 items-center">
              <p className="text-base sm:text-xl font-semibold">
                Show {(meetings?.page - 1) * limit + meetings?.results.length}{" "}
                out of {meetings ? meetings.totalDocs : 0} entries
              </p>
              <div className="flex">
                <LoadPrevBtn
                  limit={limit}
                  state={meetings}
                  fetchDataFun={fetchMeetings}
                />
                <LoadNextBtn
                  limit={limit}
                  state={meetings}
                  fetchDataFun={fetchMeetings}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMeetings;
