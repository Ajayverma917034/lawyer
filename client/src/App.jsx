import React from "react";
import "./App.css";
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
import Persons from "./pages/contacts/Persons";
import DashboardNavbar from "./components/dashboard/dashboard.navbar";
import Companies from "./pages/contacts/Companies";
import Corporate from "./pages/matter/Corporate";
import LitigationCase from "./pages/matter/LitigationCase";
import IntellectualProperty from "./pages/matter/IntellectualProperty";
import ContractAndDocument from "./pages/contract/ContractAndDocument";
import Report from "./pages/report/Report";
import ContractDetails from "./pages/contract/ContractDetail";
import CreateContract from "./pages/contract/CreateContract";
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

        <Route path="contacts" element={<DashboardNavbar />}>
          <Route path="person" element={<Persons />} />
          <Route path="companies" element={<Companies />} />
        </Route>
        <Route path="matter" element={<DashboardNavbar />}>
          <Route path="corporate" element={<Corporate />} />
          <Route path="litigation-case" element={<LitigationCase />} />
          <Route
            path="intellectual-property"
            element={<IntellectualProperty />}
          />
        </Route>

        <Route path="contracts" element={<DashboardNavbar />}>
          <Route path="contract" element={<ContractAndDocument />} />
          <Route path="document" element={<ContractAndDocument />} />
          <Route path="remote-work-aggrement" element={<ContractDetails />} />
          <Route path="modal-creation/:id" element={<CreateContract />} />
        </Route>

        <Route path="report" element={<DashboardNavbar />}>
          <Route index element={<Report />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
