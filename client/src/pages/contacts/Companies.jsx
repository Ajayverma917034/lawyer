import { Check, DownloadOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AddContext } from "../../App";

const Companies = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const { addCompany, setAddCompany } = useContext(AddContext);
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
            <h1 className="text-2xl md:text-2xl">Companies</h1>
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
              onClick={() => setAddCompany(true)}
            >
              Add New
            </button>
          </div>

          <div className="flex justify-end mt-9 gap-5">
            <div className="flex">
              <select
                name="searchBy"
                id="searchBy"
                className="border-2 border-gray-light outline-none rounded-md"
              >
                <option value="name">By Name</option>
                <option value="id">By Id</option>
              </select>

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
                <th className="px-4 py-2 font-medium text-left">#ID</th>
                <th className="px-4 py-2 font-medium text-left">Name</th>
                <th className="px-4 py-2 font-medium text-left">Nick Name</th>
                <th className="px-4 py-2 font-medium text-left">Category</th>
                <th className="px-4 py-2 font-medium text-left">
                  Sub Category
                </th>
                <th className="px-4 py-2 font-medium text-left">Reference</th>
                <th className="px-4 py-2 font-medium text-left">Legal Type</th>
                <th className="px-4 py-2 font-medium text-left">Nationality</th>
                <th className="px-4 py-2 font-medium text-left">Lawyer</th>
                {/* Add the new field header */}
                <th className="px-4 py-2 font-medium text-left">View</th>
              </tr>
            </thead>
            <tbody>
              {/* Add your table rows here */}
              <tr className="border-b border-gray-light">
                <td className="px-4 py-2">1</td>
                {/* Wrap the content of the "Name" field with Link */}
                <td className="px-4 py-2">
                  <Link to="/company/1">John Doe</Link>
                </td>
                <td className="px-4 py-2">Engineering</td>
                <td className="px-4 py-2">john.doe@example.com</td>
                <td className="px-4 py-2">123-456-7890</td>
                <td className="px-4 py-2">987-654-3210</td>
                <td className="px-4 py-2">Software Engineer</td>
                <td className="px-4 py-2">ABC Company</td>
                <td className="px-4 py-2">Ref123</td>
                {/* Add corresponding td element for the new field */}
                <td className="px-4 py-2">
                  <Link to={`/contacts/company/${"1"}`}>
                    <button className="text-blue">View</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex gap-6 px-4 py-2 border-b border-gray-light bg-white flex-wrap">
          <div>Page 1 of 1</div>
          <div className="flex gap-4">
            <button className="text-blue">Prev</button>
            <button className="text-blue">Next</button>
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

export default Companies;
