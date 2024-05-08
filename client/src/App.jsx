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

        <Route path="dashboard" element={<Dashboard />} />

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
          <Route path="person/:id" element={<PersonDetails />} />
          <Route path="companies" element={<Companies />} />
          <Route path="company/:id" element={<CompanyDetials />} />
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
          <Route index element={<ContractAndDocument />} />
          <Route path="contract" element={<ContractAndDocument />} />
          <Route path="document" element={<ContractAndDocument />} />
        </Route>
        <Route path="tasks" element={<DashboardNavbar />}>
          <Route index element={<AllTasks />} />
          <Route path=":id" element={<TaskDetials />} />
        </Route>

        <Route path="documents" element={<Documents />} />
        <Route path="documents/:id" element={<DocumentDetails />} />
        <Route
          path="documents/modal-creation/:id"
          element={<CreateDocument />}
        />

        <Route path="gst-calculator" element={<GstCalculator />} />
        <Route path="income-tax-calculator" element={<IncomeTaxCalculator />} />
        <Route path="report" element={<DashboardNavbar />}>
          <Route index element={<Report />} />
        </Route>

        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<About />} />
      </Route>
    </Routes>
  );
};
export default App;
