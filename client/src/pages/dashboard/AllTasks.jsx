import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboard/dashboard.navbar";
import { FileDownloadOutlined } from "@mui/icons-material";
import xlsx from "json-as-xlsx";
import axios from "axios";
import { filterPaginationData } from "../../common/filter-pagination-data";
import LoadMoreDataBtn from "../../common/LoadMoreBtn";
import LoadNextBtn from "../../common/LoadNextBtn";
import LoadPrevBtn from "../../common/LoadPreBtn";
import { formatDate } from "../../common/date-formater";

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
      <div className="px-3 md:px-22 lg:px-28 py-3 bg-white-light min-h-screen">
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
        <div className="px-4 py-8 sm:p-8 rounded-md shadow-md bg-white mt-10 !overflow-x-auto">
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
            <tbody class="text-gray-700 bg-white-light">
              {!tasks ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No data found
                  </td>
                </tr>
              ) : (
                tasks.results.map((task, index) => (
                  <tr key={index}>
                    <td class="px-4 py-2 border-r">{index + 1}</td>
                    <td class="px-4 py-2 border-r">{task.title}</td>
                    <td class="px-4 py-2 border-r">{task.taskType}</td>
                    <td class="px-4 py-2 border-r">
                      {formatDate(task.dueDate)}
                    </td>
                    <td class="px-4 py-2">{task.matterRelation}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-base sm:text-xl font-semibold">
              Show {(tasks?.page - 1) * limit + tasks?.results.length} out of{" "}
              {tasks ? tasks.totalDocs : 0} entries
            </p>
            <div className="flex">
              <LoadPrevBtn
                limit={limit}
                state={tasks}
                fetchDataFun={fetchTask}
              />
              <LoadNextBtn
                limit={limit}
                state={tasks}
                fetchDataFun={fetchTask}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTasks;
