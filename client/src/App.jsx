import React, { createContext, useState } from "react";
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
import AddTask from "./components/dashboard/addtask.components";
import AddSchedule from "./components/dashboard/addschedule.component";
import AddReminder from "./components/dashboard/addreminder.component";
import AddCase from "./components/dashboard/addcase.component";
import AddHearing from "./components/dashboard/addhearing.component";
import AddCorporate from "./components/matter/AddCorporate";
import AddLitigationCase from "./components/matter/AddLitigationCase";
import AddIntellectualProperty from "./components/matter/AddIntellectualProperty";
import AddCompany from "./components/contacts/addCompany.component";
import AddPerson from "./components/contacts/addPerson.component";
import MatterHeader from "./pages/matter/matter-details/MatterHeader";
import GeneralInfo from "./pages/matter/matter-details/GeneralInfo";
import MatterTask from "./pages/matter/matter-details/MatterTask";
import Reminders from "./pages/matter/matter-details/Reminders";
import Attachment from "./pages/matter/matter-details/Attachment";
import Expenses from "./pages/matter/matter-details/Expenses";
import TimeEntries from "./pages/matter/matter-details/TimeEntries";
import Invoices from "./pages/matter/matter-details/Invoices";
import RelatedMatters from "./pages/matter/matter-details/RelatedMatters";
import RelatedContractAndDocument from "./pages/matter/matter-details/RelatedContractsAndDocuments";
import MatterHeader2 from "./pages/matter/matter-details/MatterHeader2";
import Email from "./pages/matter/matter-details/Email";
import Setting from "./pages/matter/matter-details/Setting";
import LitigationHeader from "./pages/matter/litigation-details/LitigationHeader";
import GeneralInfoLitigation from "./pages/matter/litigation-details/GeneralInfoLitigation";
import AttachmentsLitigation from "./pages/matter/litigation-details/AttachmentsLitigation";
import ExpensesLitigation from "./pages/matter/litigation-details/ExpensesLitigation";
import TimeEntriesLitigation from "./pages/matter/litigation-details/TimeEntriesLitigation";
import RelatedMattersLitigation from "./pages/matter/litigation-details/RelatedMattersLitigation";
import RelatedContractAndDocumentLitigation from "./pages/matter/litigation-details/RelatedContractAndDocumentLitigation";
import SettingLitigation from "./pages/matter/litigation-details/SettingLitigation";
import StageActivityLitigation from "./pages/matter/litigation-details/StageActivityLitigation";
import ContractAndDocuments from "./pages/contract/ContractAndDocument";
import Details from "./pages/contract/contract-document-details/Details";
import ContractAndDocumentHeader from "./pages/contract/contract-document-details/ContractAndDocumentHeader";

export const AddContext = createContext({});
const App = () => {
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [addSchedule, setAddSchedule] = useState(false);
  const [addReminder, setAddReminder] = useState(false);
  const [addHearing, setAddHearing] = useState(false);
  const [addMatter, setAddMatter] = useState(false);
  const [addLitigationCase, setAddLitigationCase] = useState(false);
  const [addIPOpen, setAddIPOpen] = useState(false);
  const [addPerson, setAddPerson] = useState(false);
  const [addCompany, setAddCompany] = useState(false);

  const [addCase, setAddCase] = useState(false);

  return (
    <AddContext.Provider
      value={{
        addTaskOpen,
        setAddTaskOpen,
        addSchedule,
        setAddSchedule,
        addReminder,
        setAddReminder,
        addHearing,
        setAddHearing,
        addCase,
        setAddCase,
        addMatter,
        setAddMatter,
        addLitigationCase,
        setAddLitigationCase,
        addIPOpen,
        setAddIPOpen,
        addPerson,
        setAddPerson,
        addCompany,
        setAddCompany,
      }}
    >
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
          <Route path="matter-details/:id" element={<MatterHeader2 />}>
            <Route path="general-details" element={<GeneralInfo />} />
            <Route path="task" element={<MatterTask />} />
            <Route path="reminders" element={<Reminders />} />
            <Route path="email" element={<Email />} />
            <Route path="attachment" element={<Attachment />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="time-entries" element={<TimeEntries />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="related-matters" element={<RelatedMatters />} />
            <Route path="setting" element={<Setting />} />
            <Route
              path="related-contract-documents"
              element={<RelatedContractAndDocument />}
            />
          </Route>
          <Route
            path="litigation-case-details/:id"
            element={<LitigationHeader />}
          >
            <Route path="general-details" element={<GeneralInfoLitigation />} />
            <Route
              path="stages-activity"
              element={<StageActivityLitigation />}
            />
            <Route path="reminders" element={<Reminders />} />
            <Route path="email" element={<Email />} />
            <Route path="attachment" element={<AttachmentsLitigation />} />
            <Route path="expenses" element={<ExpensesLitigation />} />
            <Route path="time-entries" element={<TimeEntriesLitigation />} />
            <Route path="invoices" element={<Invoices />} />
            <Route
              path="related-matters"
              element={<RelatedMattersLitigation />}
            />
            <Route path="setting" element={<SettingLitigation />} />
            <Route
              path="related-contract-documents"
              element={<RelatedContractAndDocumentLitigation />}
            />
          </Route>

          {/* create contract and document */}
          <Route
            path="contract-details/:id"
            element={<ContractAndDocumentHeader />}
          >
            <Route path="details" element={<Details />} />
            <Route path="attachments" element={<StageActivityLitigation />} />
            <Route path="reminders" element={<Reminders />} />
            <Route path="email" element={<Email />} />
            <Route path="attachment" element={<AttachmentsLitigation />} />
            <Route path="expenses" element={<ExpensesLitigation />} />
            <Route path="time-entries" element={<TimeEntriesLitigation />} />
            <Route path="invoices" element={<Invoices />} />
            <Route
              path="related-matters"
              element={<RelatedMattersLitigation />}
            />
            <Route path="setting" element={<SettingLitigation />} />
            <Route
              path="related-contract-documents"
              element={<RelatedContractAndDocumentLitigation />}
            />
          </Route>

          {/* contract routes  */}
          <Route
            path="contracts/all-contracts"
            element={<ContractAndDocument />}
          />
          <Route path="contracts/document" element={<ContractAndDocument />} />
          <Route path="contracts&document" element={<ContractAndDocuments />} />

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
          <Route
            path="income-tax-calculator"
            element={<IncomeTaxCalculator />}
          />

          {/* report routes  */}
          <Route index element={<Report />} />

          <Route path="about-us" element={<About />} />
          <Route path="contact" element={<About />} />
        </Route>
      </Routes>

      <AddTask open={addTaskOpen} setOpen={setAddTaskOpen} />
      <AddSchedule open={addSchedule} setOpen={setAddSchedule} />
      <AddReminder open={addReminder} setOpen={setAddReminder} />
      <AddCase open={addCase} setOpen={setAddCase} />
      <AddHearing open={addHearing} setOpen={setAddHearing} />
      <AddCorporate open={addMatter} setOpen={setAddMatter} />
      <AddLitigationCase
        open={addLitigationCase}
        setOpen={setAddLitigationCase}
      />
      <AddIntellectualProperty open={addIPOpen} setOpen={setAddIPOpen} />
      <AddCompany open={addCompany} setOpen={setAddCompany} />
      <AddPerson open={addPerson} setOpen={setAddPerson} />
    </AddContext.Provider>
  );
};
export default App;
