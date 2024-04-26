import React from "react";

const companyData = [
  {
    title: "Company Shares By Date",
    link: "[Link to Company Shares By Date]",
    id: "shares-by-date",
  },
  {
    title: "Company Shares By Shareholder",
    link: "[Link to Company Shares By Shareholder]",
    id: "shares-by-shareholder",
  },
  {
    title: "Company Shareholder Votes",
    link: "[Link to Company Shareholder Votes]",
    id: "shareholder-votes",
  },
  {
    title: "Company Shareholders Tree View",
    link: "[Link to Company Shareholders Tree View]",
    id: "shareholder-tree-view",
  },
  {
    title: "Shareholders Finder",
    link: "[Link to Shareholders Finder]",
    id: "shareholder-finder",
  },
  {
    title: "Board Member Finder",
    link: "[Link to Board Member Finder]",
    id: "board-member-finder",
  },
  {
    title: "Companies per Licenses & Waivers expiry dates",
    link: "[Link to Companies per Licenses & Waivers expiry dates]",
    id: "companies-licenses-waivers",
  },
  {
    title: "Companies Assets",
    link: "[Link to Companies Assets]",
    id: "companies-assets",
  },
  {
    title: "Company Related Objects",
    link: "[Link to Company Related Objects]",
    id: "company-related-objects",
  },
];

var matterData = [
  {
    title: "Conflict Check",
    link: "[Link to Conflict Check]",
    id: "conflict-check",
  },
  {
    title: "Matter Value Tiers",
    link: "[Link to Matter Value Tiers]",
    id: "matter-value-tiers",
  },
  {
    title: "Matter Values per Client Report",
    link: "[Link to Matter Values per Client Report]",
    id: "matter-values-per-client-report",
  },
  {
    title: "Matters Attachment Report",
    link: "[Link to Matters Attachment Report]",
    id: "matters-attachment-report",
  },
  {
    title: "Other Reports",
    link: "[Link to Other Reports]",
    id: "other-reports",
  },
];

var hearingData = [
  {
    title: "Hearing Roll Session",
    link: "[Link to Hearing Roll Session]",
    id: "hearing-roll-session",
  },
  {
    title: "Hearing Roll Session per Court / Circuit",
    link: "[Link to Hearing Roll Session per Court / Circuit]",
    id: "hearing-roll-session-per-court-circuit",
  },
  {
    title: "Hearings Pending Updates",
    link: "[Link to Hearings Pending Updates]",
    id: "hearings-pending-updates",
  },
];
var personData = [
  {
    title: "Persons Per Group Of Companies",
    link: "[Link to Hearing Roll Session]",
    id: "hearing-roll-session",
  },
];
var contractData = [
  {
    title: "SLA: Met vs. Breached",
    link: "[Link to SLA: Met vs. Breached]",
    id: "sla-met-vs-breached",
  },
  {
    title: "SLA Report",
    link: "[Link to SLA Report]",
    id: "sla-report",
  },
];

const Report = () => {
  return (
    <div className="px-3 md:px-22 lg:px-28 py-3 bg-white-light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="bg-white flex flex-col shadow-md rounded-md">
          <h2 className="bg-blue py-2 px-5 text-xl text-white font-medium rounded-tr-md rounded-tl-md">
            Company
          </h2>
          <ul className="px-5 my-4">
            {companyData.map((data, index) => (
              <li key={index} className="cursor-pointer hover:text-blue">
                {data.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white flex flex-col shadow-md rounded-md">
          <h2 className="bg-blue py-2 px-5 text-xl text-white font-medium rounded-tr-md rounded-tl-md">
            Persons
          </h2>
          <ul className="px-5 my-4">
            {personData.map((data, index) => (
              <li key={index} className="cursor-pointer hover:text-blue">
                {data.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white flex flex-col shadow-md rounded-md">
          <h2 className="bg-blue py-2 px-5 text-xl text-white font-medium rounded-tr-md rounded-tl-md">
            Matters
          </h2>
          <ul className="px-5 my-4">
            {matterData.map((data, index) => (
              <li key={index} className="cursor-pointer hover:text-blue">
                {data.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white flex flex-col shadow-md rounded-md">
          <h2 className="bg-blue py-2 px-5 text-xl text-white font-medium rounded-tr-md rounded-tl-md">
            Hearings
          </h2>
          <ul className="px-5 my-4">
            {hearingData.map((data, index) => (
              <li key={index} className="cursor-pointer hover:text-blue">
                {data.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white flex flex-col shadow-md rounded-md">
          <h2 className="bg-blue py-2 px-5 text-xl text-white font-medium rounded-tr-md rounded-tl-md">
            Contract/Document
          </h2>
          <ul className="px-5 my-4">
            {contractData.map((data, index) => (
              <li key={index} className="cursor-pointer hover:text-blue">
                {data.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Report;
