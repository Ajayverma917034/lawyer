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
import Documents from "./pages/documents/Documents";
import About from "./pages/about/About";
import DocumentDetails from "./pages/documents/DocumentDetail";
import CreateDocument from "./pages/documents/CreateDocuments";
import GstCalculator from "./pages/tools/gst-calculator/GstCalculator";
import IncomeTaxCalculator from "./pages/tools/IncomeTaxCalculator/IncomeTaxCalculator";
import TaskDetials from "./components/dashboard/details-pages/TaskDetials";
import PersonDetails from "./components/contacts/person.details.component";
import CompanyDetials from "./components/contacts/company.details.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />

        {/* dashboard routes  */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/meetings" element={<AllMeetings />} />
        <Route path="dashboard/reminders" element={<AllReminders />} />
        <Route path="dashboard/cases" element={<AllCases />} />
        <Route path="dashboard/hearings" element={<AllHearings />} />

        {/* profile routes  */}
        <Route path="profile" element={<Sidebar />}>
          <Route path="basic-information" element={<BasicInfo />} />
          <Route path="personal-information" element={<PersonalInfo />} />
          <Route path="update-password" element={<UpdatePassword />} />
          <Route path="address" element={<Address />} />
        </Route>
        {/* contacts routes  */}
        <Route path="contacts/person" element={<Persons />} />
        <Route path="contacts/person/:id" element={<PersonDetails />} />
        <Route path="contacts/companies" element={<Companies />} />
        <Route path="contacts/company/:id" element={<CompanyDetials />} />

        {/* matter routes  */}
        <Route path="matter/corporate" element={<Corporate />} />
        <Route path="matter/litigation-case" element={<LitigationCase />} />
        <Route
          path="matter/intellectual-property"
          element={<IntellectualProperty />}
        />

        {/* contract routes  */}
        <Route
          path="contracts/all-contracts"
          element={<ContractAndDocument />}
        />
        <Route path="contracts/document" element={<ContractAndDocument />} />

        {/* task routes  */}
        <Route path="tasks" element={<AllTasks />} />
        <Route path="tasks/:id" element={<TaskDetials />} />

        {/* document routes  */}
        <Route path="documents" element={<Documents />} />
        <Route path="documents/:id" element={<DocumentDetails />} />
        <Route
          path="documents/modal-creation/:id"
          element={<CreateDocument />}
        />

        {/* tools routes  */}
        <Route path="gst-calculator" element={<GstCalculator />} />
        <Route path="income-tax-calculator" element={<IncomeTaxCalculator />} />

        {/* report routes  */}
        <Route index element={<Report />} />

        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<About />} />
      </Route>
    </Routes>
  );
};
export default App;
