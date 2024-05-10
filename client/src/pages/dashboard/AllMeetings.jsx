import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboard/dashboard.navbar";
import xlsx from "json-as-xlsx";
import axios from "axios";
import { filterPaginationData } from "../../common/filter-pagination-data";
import { formatDate } from "../../common/date-formater";
import LoadPrevBtn from "../../common/LoadPreBtn";
import LoadNextBtn from "../../common/LoadNextBtn";

import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

export const scheduleData = [
  {
    Id: 1,
    Subject: "Explosion of Betelgeuse Star",
    Location: "Space Center USA",
    StartTime: "2021-01-10T04:00:00.000Z",
    EndTime: "2021-01-10T05:30:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Thule Air Crash Report",
    Location: "Newyork City",
    StartTime: "2021-01-11T06:30:00.000Z",
    EndTime: "2021-01-11T08:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 3,
    Subject: "Blue Moon Eclipse",
    Location: "Space Center USA",
    StartTime: "2021-01-12T04:00:00.000Z",
    EndTime: "2021-01-12T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Meteor Showers in 2021",
    Location: "Space Center USA",
    StartTime: "2021-01-13T07:30:00.000Z",
    EndTime: "2021-01-13T09:00:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Milky Way as Melting pot",
    Location: "Space Center USA",
    StartTime: "2021-01-14T06:30:00.000Z",
    EndTime: "2021-01-14T08:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 6,
    Subject: "Mysteries of Bermuda Triangle",
    Location: "Bermuda",
    StartTime: "2021-01-14T04:00:00.000Z",
    EndTime: "2021-01-14T05:30:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 7,
    Subject: "Glaciers and Snowflakes",
    Location: "Himalayas",
    StartTime: "2021-01-15T05:30:00.000Z",
    EndTime: "2021-01-15T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 8,
    Subject: "Life on Mars",
    Location: "Space Center USA",
    StartTime: "2021-01-16T03:30:00.000Z",
    EndTime: "2021-01-16T04:30:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 9,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-18T05:30:00.000Z",
    EndTime: "2021-01-18T07:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 10,
    Subject: "Wildlife Galleries",
    Location: "Africa",
    StartTime: "2021-01-20T05:30:00.000Z",
    EndTime: "2021-01-20T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 11,
    Subject: "Best Photography 2021",
    Location: "London",
    StartTime: "2021-01-21T04:00:00.000Z",
    EndTime: "2021-01-21T05:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 12,
    Subject: "Smarter Puppies",
    Location: "Sweden",
    StartTime: "2021-01-08T04:30:00.000Z",
    EndTime: "2021-01-08T06:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 13,
    Subject: "Myths of Andromeda Galaxy",
    Location: "Space Center USA",
    StartTime: "2021-01-06T05:00:00.000Z",
    EndTime: "2021-01-06T07:00:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 14,
    Subject: "Aliens vs Humans",
    Location: "Research Center of USA",
    StartTime: "2021-01-05T04:30:00.000Z",
    EndTime: "2021-01-05T06:00:00.000Z",
    CategoryColor: "#357cd2",
  },
  {
    Id: 15,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-19T04:00:00.000Z",
    EndTime: "2021-01-19T05:30:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 16,
    Subject: "Sky Gazers",
    Location: "Alaska",
    StartTime: "2021-01-22T05:30:00.000Z",
    EndTime: "2021-01-22T07:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 17,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-11T00:00:00.000Z",
    EndTime: "2021-01-11T02:00:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 18,
    Subject: "Space Galaxies and Planets",
    Location: "Space Center USA",
    StartTime: "2021-01-11T11:30:00.000Z",
    EndTime: "2021-01-11T13:00:00.000Z",
    CategoryColor: "#f57f17",
  },
  {
    Id: 19,
    Subject: "Lifecycle of Bumblebee",
    Location: "San Fransisco",
    StartTime: "2021-01-14T00:30:00.000Z",
    EndTime: "2021-01-14T02:00:00.000Z",
    CategoryColor: "#7fa900",
  },
  {
    Id: 20,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-14T10:30:00.000Z",
    EndTime: "2021-01-14T12:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 21,
    Subject: "Alien Civilization",
    Location: "Space Center USA",
    StartTime: "2021-01-10T08:30:00.000Z",
    EndTime: "2021-01-10T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 22,
    Subject: "The Cycle of Seasons",
    Location: "Research Center of USA",
    StartTime: "2021-01-12T09:00:00.000Z",
    EndTime: "2021-01-12T10:30:00.000Z",
    CategoryColor: "#00bdae",
  },
  {
    Id: 23,
    Subject: "Sky Gazers",
    Location: "Greenland",
    StartTime: "2021-01-15T09:00:00.000Z",
    EndTime: "2021-01-15T10:30:00.000Z",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 24,
    Subject: "Facts of Humming Birds",
    Location: "California",
    StartTime: "2021-01-16T07:00:00.000Z",
    EndTime: "2021-01-16T09:00:00.000Z",
    CategoryColor: "#7fa900",
  },
];

// import { scheduleData } from "../data/dummy";
// import { Header } from "../components";

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
        {/* <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <ScheduleComponent
            height="650px"
            eventSettings={{ dataSource: scheduleData }}
            selectedDate={new Date(2021, 0, 10)}
          >
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                Resize,
                DragAndDrop,
              ]}
            />
          </ScheduleComponent>
        </div> */}
      </div>
    </>
  );
};

export default AllMeetings;
