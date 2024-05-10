import {
  AddCircle,
  ArrowCircleRightOutlined,
  GavelOutlined,
  NotificationsActiveOutlined,
  TaskOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../components/dashboard/dashboard.navbar";
import hearingIcon from "../../assets/icos/lawbook.png";
import scheduleIcon from "../../assets/icos/Schedule.png";
import caseIcon from "../../assets/icos/Law.png";
import notificationIcon from "../../assets/icos/Notification.png";
import taskIcon from "../../assets/icos/Task.png";
import { Link, useNavigate } from "react-router-dom";
import AddTask from "../../components/dashboard/addtask.components";
import AddSchedule from "../../components/dashboard/addschedule.component";
import AddReminder from "../../components/dashboard/addreminder.component";
import AddCase from "../../components/dashboard/addcase.component";
import AddHearing from "../../components/dashboard/addhearing.component";
import axios from "axios";
import { filterPaginationData } from "../../common/filter-pagination-data";
import { formatDate } from "../../common/date-formater";
import LoadPrevBtn from "../../common/LoadPreBtn";
import LoadNextBtn from "../../common/LoadNextBtn";
import { taskData } from "../../constant/data";
import { DoughnutChart } from "../../charts/Doughnut";
import { TaskCard } from "../../components/dashboard/dashboard.components";

const Dashboard = () => {
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [addSchedule, setAddSchedule] = useState(false);
  const [addReminder, setAddReminder] = useState(false);
  const [addHearing, setAddHearing] = useState(false);
  const [addCase, setAddCase] = useState(false);
  const navigate = useNavigate();
  const [hearings, setHearing] = useState(null);
  const [limit, setLimit] = useState(1);

  const doughnutDataFortask = {
    labels: ["Completed Tasks", "Upcoming Tasks"],
    datasets: [
      {
        label: "No of Tasks",
        data: [2, 3],
        backgroundColor: ["#0965fb", "#c04545"],
        // borderColor: ["#FF6384", "#36A2EB"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutDataForMeeting = {
    labels: ["Completed Meeting", "Upcoming Meeting"],
    datasets: [
      {
        label: "No of meeting",
        data: [5, 3],
        backgroundColor: ["#0965fb", "#c04545"],
        borderWidth: 0,
      },
    ],
  };
  const handleAddTask = () => {
    setAddTaskOpen(!addTaskOpen);
  };

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
        setHearing(formatData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchHearings({ page: 1 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DashboardNavbar />
      <div className="px-3 md:px-22 lg:px-28 py-3 bg-white-light min-h-screen">
        <h1 className=" text-2xl md:text-3xl mt-5 md:mt-3">
          Welcome Ajay Verma
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          <div className="flex flex-col p-4 bg-white shadow-md rounded-md min-w-[18rem] h-[23rem]">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-medium font-poppins">Task</h3>
                <div className="flex gap-2">
                  <button
                    className="bg-blue text-white p-1 rounded-sm shadow-sm"
                    onClick={handleAddTask}
                  >
                    Add New <AddCircle />
                  </button>
                </div>
              </div>
              <hr className="bg-gray-500 mt-2 h-[1px]" />
              {taskData.length ? (
                <div className="flex flex-col justify-center items-center overflow-y-auto">
                  {taskData.slice(0, 3).map((item, index) => (
                    <TaskCard item={item} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center h-full">
                  <img
                    src={taskIcon}
                    alt="Meeting"
                    className="w-[6rem] h-[6rem]"
                  />
                  <p className="font-medium text-gray-dark text-xl">Task</p>
                  <span className="mt-1">There is no task for today</span>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <button
                className="font-md font-medium text-sm"
                onClick={() => navigate("/tasks")}
              >
                See All Task{" "}
                <ArrowCircleRightOutlined className="text-sm text-blue" />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white shadow-md rounded-md min-w-[18rem] h-[23rem]">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-medium font-poppins">Meeting</h3>
              <div className="flex gap-2">
                <button
                  className="bg-blue text-white p-1 rounded-sm shadow-sm"
                  onClick={() => setAddSchedule(!addSchedule)}
                >
                  Schedule One <AddCircle />
                </button>
              </div>
            </div>
            <hr className="bg-gray-500 mt-2 h-[1px]" />

            <div className="flex flex-col justify-center items-center h-full">
              {/* <TaskOutlined className="text-blue !text-[6rem]"/> */}
              <img src={scheduleIcon} alt="Meeting" className="w-16 h-16" />
              <p className="font-medium text-gray-dark text-xl">Metting</p>
              <span className="mt-1">There is no meeting for today</span>
            </div>
            <div className="flex justify-end">
              <button
                className="font-md font-medium text-sm"
                onClick={() => navigate("/dashboard/meetings")}
              >
                See All Meetings{" "}
                <ArrowCircleRightOutlined className="text-sm text-blue" />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white shadow-md rounded-md min-w-[18rem] h-[23rem]">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-medium font-poppins">Reminders</h3>
              <div className="flex gap-2">
                <button
                  className="bg-blue text-white p-1 rounded-sm shadow-sm"
                  onClick={() => setAddReminder(!addReminder)}
                >
                  Reminder <AddCircle />
                </button>
              </div>
            </div>
            <hr className="bg-gray-500 mt-2 h-[1px]" />

            <div className="flex flex-col justify-center items-center h-full">
              <img
                src={notificationIcon}
                alt="Meeting"
                className="w-[6rem] h-[6rem]"
              />
              <p className="font-medium text-gray-dark text-xl">Reminder</p>
              <span className="mt-1">There is no reminder for today</span>
            </div>
            <div className="flex justify-end">
              <button
                className="font-md font-medium text-sm"
                onClick={() => navigate("/dashboard/reminders")}
              >
                See All Reminders{" "}
                <ArrowCircleRightOutlined className="text-sm text-blue" />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white shadow-md rounded-md min-w-[18rem] h-[23rem]">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-medium font-poppins">Case</h3>
              <div className="flex gap-2">
                <button
                  className="bg-blue text-white p-1 rounded-sm shadow-sm"
                  onClick={() => setAddCase(true)}
                >
                  Create New <AddCircle />
                </button>
              </div>
            </div>
            <hr className="bg-gray-500 mt-2 h-[1px]" />

            <div className="flex flex-col justify-center items-center h-full">
              <img src={caseIcon} alt="Meeting" className="w-[6rem] h-[6rem]" />
              <p className="font-medium text-gray-dark text-xl">Case</p>
              <span className="mt-1">There is no case for today</span>
            </div>
            <div className="flex justify-end">
              <button
                className="font-md font-medium text-sm"
                onClick={() => navigate("/dashboard/cases")}
              >
                See All cases{" "}
                <ArrowCircleRightOutlined className="text-sm text-blue" />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white shadow-md rounded-md min-w-[18rem] h-[23rem]">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-medium font-poppins">Hearing</h3>
              <div className="flex gap-2">
                <button
                  className="bg-blue text-white p-1 rounded-sm shadow-sm"
                  onClick={() => setAddHearing(!addHearing)}
                >
                  Add Hearing <AddCircle />
                </button>
              </div>
            </div>
            <hr className="bg-gray-500 mt-2 h-[1px]" />

            <div className="flex flex-col justify-center items-center h-full">
              <img
                src={hearingIcon}
                alt="Meeting"
                className="w-[6rem] h-[6rem]"
              />
              <p className="font-medium text-gray-dark text-xl">Hearing</p>
              <span className="mt-1">There is no task for today</span>
            </div>
            <div className="flex justify-end">
              <button
                className="font-md font-medium text-sm"
                onClick={() => navigate("/dashboard/hearings")}
              >
                See All Hearings{" "}
                <ArrowCircleRightOutlined className="text-sm text-blue" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 py-8 sm:p-8 rounded-md shadow-md bg-white mt-10 overflow-x-auto">
          <h3 className="font-medium text-2xl mb-2">My Hearings</h3>
          <table className="table-auto w-full">
            <thead class="bg-blue text-white">
              <tr>
                <th class="px-4 py-2 border-r text-start">ID</th>
                <th class="px-4 py-2 border-r text-start">Name</th>
                <th class="px-4 py-2 border-r text-start">Type</th>
                <th class="px-4 py-2 border-r text-start">Hearing Date</th>
                <th class="px-4 py-2 border-r text-start">Hearing Time</th>
                <th class="px-4 py-2 border-r text-start">Assignee'(s)</th>
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
                    <td class="px-4 py-2 border-r text-start">{index + 1}</td>
                    <td class="px-4 py-2 border-r text-start">
                      {hearing.name}
                    </td>
                    <td class="px-4 py-2 border-r text-start">
                      {hearing.hearingType}
                    </td>
                    <td class="px-4 py-2 border-r text-start">
                      {formatDate(hearing.hearingDate)}
                    </td>
                    <td class="px-4 py-2 border-r text-start">
                      {hearing.hearingTime}
                    </td>

                    <td class="px-4 py-2 border-r text-start">
                      {hearing.assignee}
                    </td>
                    <td class="px-4 py-2">{hearing.timeSpent}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-base sm:text-xl font-semibold">
              Show {(hearings?.page - 1) * limit + hearings?.results.length} out
              of {hearings ? hearings.totalDocs : 0} entries
            </p>
            <div className="flex">
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
        <div className="px-4 py-8 sm:p-8 rounded-md shadow-md bg-white mt-10 overflow-x-auto">
          <h3 className="font-medium text-2xl mb-2">My Tasks</h3>
          <table className="table-auto w-full">
            <thead class="bg-blue text-white">
              <tr>
                <th class="px-4 py-2 font-normal text-start">ID</th>
                <th class="px-4 py-2 font-normal text-start">Title</th>
                <th class="px-4 py-2 font-normal text-start">Type</th>
                <th class="px-4 py-2 font-normal text-start">Last Date</th>
                <th class="px-4 py-2 font-normal text-start">Matter Name</th>
                <th class="px-4 py-2 font-normal text-start">View</th>
              </tr>
            </thead>
            <tbody class="text-gray-700 bg-white-light">
              {!taskData ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No data found
                  </td>
                </tr>
              ) : (
                taskData?.map((item, index) => (
                  <tr key={index}>
                    <td class="px-4 py-2 border-r text-start">{index + 1}</td>
                    <td class="px-4 py-2 border-r text-start min-w-[5rem]">
                      {item.Title}
                    </td>
                    <td class="px-4 py-2 border-r text-start">{item.Type}</td>
                    <td class="px-4 py-2 border-r text-start">
                      {formatDate(item.LastDate)}
                    </td>
                    <td class="px-4 py-2 border-r text-start">
                      {item.MatterName}
                    </td>
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
          <div className="flex justify-between mt-3 items-center">
            <p className="text-base sm:text-xl font-semibold">
              Show 10 out of 10 entries
            </p>
            <div className="flex">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center mt-24 mb-4">
          <div className="flex justify-center items-center">
            <div className="w-full sm:w-2/3 bg-white pt-5 pb-10 px-10 rounded-lg shadow-medium-shadow">
              <DoughnutChart data={doughnutDataFortask} title="Task" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full sm:w-2/3 bg-white pt-5 pb-10 px-10 rounded-lg shadow-medium-shadow">
              <DoughnutChart data={doughnutDataForMeeting} title="Meeting" />
            </div>
          </div>
        </div>
      </div>
      <AddTask open={addTaskOpen} setOpen={setAddTaskOpen} />
      <AddSchedule open={addSchedule} setOpen={setAddSchedule} />
      <AddReminder open={addReminder} setOpen={setAddReminder} />
      <AddCase open={addCase} setOpen={setAddCase} />
      <AddHearing open={addHearing} setOpen={setAddHearing} />
    </>
  );
};

export default Dashboard;
