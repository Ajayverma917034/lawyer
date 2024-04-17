import React from "react";
import Navbar from "./components/navbar.compnent";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import AllTasks from "./pages/dashboard/AllTasks";
import AllMeetings from "./pages/dashboard/AllMeetings";
import AllReminders from "./pages/dashboard/AllReminders";
import AllCases from "./pages/dashboard/AllCases";
import AllHearings from "./pages/dashboard/AllHearings";
import Sidebar from "./pages/profile/Sidebar";
import BasicInfo from "./pages/profile/BasicInfo";
import PersonalInfo from "./pages/profile/PersonalInfo";
import Address from "./pages/profile/Address";
import UpdatePassword from "./pages/profile/UpdatePassword";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/tasks" element={<AllTasks />} />
        <Route path="dashboard/meetings" element={<AllMeetings />} />
        <Route path="dashboard/reminders" element={<AllReminders />} />
        <Route path="dashboard/cases" element={<AllCases />} />
        <Route path="dashboard/hearings" element={<AllHearings />} />

        <Route path="profile" element={<Sidebar />}>
          <Route path="basic-information" element={<BasicInfo />} />
          <Route path="personal-information" element={<PersonalInfo />} />
          <Route path="update-password" element={<UpdatePassword />} />
          <Route path="address" element={<Address />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
