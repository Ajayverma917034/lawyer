import { Check, DownloadOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import AddPerson from "../../components/contacts/addPerson.component";
import AddCorporate from "../../components/matter/AddCorporate";
import { AddContext } from "../../App";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    assignee: "Alice Smith",
    clientName: "ABC Ltd.",
    name: "John Doe",
    practiceArea: "Corporate Law",
    workflowStatus: "Pending",
    importantDevelopment: "Reviewed initial contract",
    company: "XYZ Corp",
    dueDate: "2024-06-15",
  },
  {
    id: 2,
    assignee: "Bob Johnson",
    clientName: "DEF Corp.",
    name: "Jane Roe",
    practiceArea: "Intellectual Property",
    workflowStatus: "In Progress",
    importantDevelopment: "Patent filing submitted",
    company: "123 Inc.",
    dueDate: "2024-06-20",
  },
  {
    id: 3,
    assignee: "Charlie Brown",
    clientName: "GHI Ltd.",
    name: "Jim Beam",
    practiceArea: "Family Law",
    workflowStatus: "Completed",
    importantDevelopment: "Mediation successful",
    company: "456 LLC",
    dueDate: "2024-05-30",
  },
  {
    id: 4,
    assignee: "David Clark",
    clientName: "JKL Inc.",
    name: "Mary Major",
    practiceArea: "Criminal Law",
    workflowStatus: "On Hold",
    importantDevelopment: "Awaiting trial date",
    company: "789 Co.",
    dueDate: "2024-07-01",
  },
];

const Corporate = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const { addMatter, setAddMatter } = useContext(AddContext);

  const toggleCheckbox1 = () => {
    setIsChecked1(!isChecked1);
  };
  const toggleCheckbox2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <>
      <div className="w-full bg-white-light min-h-screen">
        <div className="px-4 md:px-28 pt-2 items-center">
          <div className="flex gap-2 mt-5">
            <h1 className="text-2xl md:text-2xl">Corporate</h1>
            <select
              name="filter"
              id="filter"
              className="ml- min-w-32 md:min-w-48 outline-none rounded-md px-3 text-base shadow-sm border border-gray-light focus:outline-none "
            >
              <option value="all" defaultValue={"all"}>
                All
              </option>
            </select>

            <button
              className="ml-auto btn-light"
              onClick={() => setAddMatter(!addMatter)}
            >
              Add New
            </button>
          </div>

          <div className="flex justify-end mt-9 gap-5">
            <div className="flex">
              {/* <select
                name="searchBy"
                id="searchBy"
                className="border-2 border-gray-light outline-none rounded-md"
              >
                <option value="name">By Name</option>
                <option value="id">By Id</option>
              </select> */}

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
                <th className="px-4 py-2 font-medium text-left">Id</th>
                <th className="px-4 py-2 font-medium text-left">Assignee</th>
                <th className="px-4 py-2 font-medium text-left">Client Name</th>
                <th className="px-4 py-2 font-medium text-left">Name</th>
                <th className="px-4 py-2 font-medium text-left">
                  Practice Area
                </th>
                <th className="px-4 py-2 font-medium text-left">
                  Workflow Status
                </th>
                <th className="px-4 py-2 font-medium text-left">
                  Important Development
                </th>
                <th className="px-4 py-2 font-medium text-left">Company</th>
                <th className="px-4 py-2 font-medium text-left">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-2">
                    <Link to={`/matter-details/${row.id}/general-details`}>
                      {row.id}
                    </Link>{" "}
                  </td>
                  <td className="px-4 py-2">{row.assignee}</td>
                  <td className="px-4 py-2">{row.clientName}</td>
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.practiceArea}</td>
                  <td className="px-4 py-2">{row.workflowStatus}</td>
                  <td className="px-4 py-2">{row.importantDevelopment}</td>
                  <td className="px-4 py-2">{row.company}</td>
                  <td className="px-4 py-2">{row.dueDate}</td>
                </tr>
              ))}
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
          <div className="ml-auto flex gap-5">
            <label
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleCheckbox1}
            >
              <span className="w-5 h-5 border border-gray-light rounded-sm flex justify-center items-center bg-white">
                {isChecked1 && <Check />}
              </span>
              <span className="text-base font-medium">Public</span>
            </label>
            <label
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleCheckbox2}
            >
              <span className="w-5 h-5 border border-gray-light rounded-sm flex justify-center items-center">
                {isChecked2 && <Check />}
              </span>
              <span className="text-base font-medium">Private</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Corporate;
