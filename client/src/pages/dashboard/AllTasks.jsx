import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboard/dashboard.navbar";
import {
  DownloadOutlined,
  FileDownloadOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import xlsx from "json-as-xlsx";
import axios from "axios";
import { filterPaginationData } from "../../common/filter-pagination-data";
import LoadMoreDataBtn from "../../common/LoadMoreBtn";
import LoadNextBtn from "../../common/LoadNextBtn";
import LoadPrevBtn from "../../common/LoadPreBtn";
import { formatDate } from "../../common/date-formater";
import { Link } from "react-router-dom";

const AllTasks = () => {
  const [tasks, setTasks] = useState(null);
  const [limit, setLimit] = useState(1);
  const fetchTask = ({ page = 1 }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER}/get-tasks`, { page, limit }, config)
      .then(async ({ data }) => {
        let formateData = await filterPaginationData({
          state: tasks,
          data: data.tasks,
          page,
          countRoute: "/all-task-count",
        });
        console.log(formateData);
        setTasks(formateData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function formatDate(date) {
  //   if (!date) return "";
  //   const d = new Date(date);
  //   let month = "" + (d.getMonth() + 1),
  //     day = "" + d.getDate(),
  //     year = d.getFullYear();

  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;

  //   return [year, month, day].join("-");
  // }

  useEffect(() => {
    fetchTask({ page: 1 });
  }, []);
  const downloadData = [
    {
      sheet: "Sheet 1",
      columns: [
        { label: "Id", value: (row, index) => index + 1 }, // Top level data
        { label: "Title", value: "title" }, // Custom format
        { label: "Type", value: "taskType" }, // Run functions
        { label: "Last Date", value: (row) => formatDate(row.dueDate) }, // Nested data
        { label: "Matter Relation", value: "matterRelation" }, // Nested data
        { label: "Description", value: "description" }, // Nested data
      ],
      content: tasks?.results || [],
    },
  ];
  let settings = {
    fileName: "MySpreadsheet",
  };

  const exportToExcel = () => {
    console.log(downloadData);
    xlsx(downloadData, settings);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log((tasks?.page - 1) * limit + tasks?.results.length);
  return (
    <>
      <div className="w-full bg-white-light min-h-screen">
        <div className="px-4 md:px-28 pt-2 items-center">
          <div className="flex gap-2 mt-5 flex-wrap">
            <h1 className="text-[18px] md:text-2xl font-semibold">My Task</h1>
            <select
              name="filter"
              id="filter"
              className="min-w-28 md:min-w-48 outline-none rounded-md px-2 md:px-3 text-base shadow-sm border border-gray-light focus:outline-none "
            >
              <option value="all" defaultValue={"all"}>
                All
              </option>
            </select>
          </div>

          <div className="flex justify-end mt-9 gap-5">
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

            <button className="ml-3 btn-light bg-white-light text-black hover:bg-white hover:text-blue ">
              Export <DownloadOutlined className="text-blue" />
            </button>
          </div>
        </div>

        <div className="min-h-[50vh] overflow-x-auto mt-6 bg-white border-t-2 border-b-2 border-gray-light">
          <table className="table-auto w-full">
            <thead className="border-b border-gray-light">
              <tr>
                <th class="px-4 py-2 font-normal text-start">ID</th>
                <th class="px-4 py-2 font-normal text-start">Title</th>
                <th class="px-4 py-2 font-normal text-start">Type</th>
                <th class="px-4 py-2 font-normal text-start">Last Date</th>
                <th class="px-4 py-2 font-normal text-start">Matter Name</th>
                <th class="px-4 py-2 font-normal text-start">View</th>
              </tr>
            </thead>
            <tbody>
              {!tasks ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No data found
                  </td>
                </tr>
              ) : (
                tasks.results.map((task, index) => (
                  <tr key={index}>
                    <td class="px-4 py-2">{index + 1}</td>
                    <td class="px-4 py-2">{task.title}</td>
                    <td class="px-4 py-2">{task.taskType}</td>
                    <td class="px-4 py-2">{formatDate(task.dueDate)}</td>
                    <td class="px-4 py-2">{task.matterRelation}</td>
                    <td className="px-4 py-2 text-blue">
                      <Link to={`/tasks/${"1"}`}>
                        <button>View</button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex gap-6 px-4 py-2 border-b border-gray-light bg-white flex-wrap">
          <div className="flex gap-5 max-sm:w-full max-sm:justify-between">
            <div>Page 1 of 1</div>
            <div className="flex gap-4">
              <button className="text-blue">Prev</button>
              <button className="text-blue">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTasks;
