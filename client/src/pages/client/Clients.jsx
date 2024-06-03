import { Check, DownloadOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AddContext } from "../../App";

const Clients = () => {
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
        <div className="px-4 md:px-28 pt-5 items-center flex justify-between">
          <h1 className="text-2xl md:text-3xl font-medium">Client</h1>
          <div className="flex gap-5">
            <div className="flex">
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
            <button className="btn-dark">Add New</button>

            <button className="ml-3 btn-light bg-white-light text-black hover:bg-white hover:text-blue ">
              Export <DownloadOutlined className="text-blue" />
            </button>
          </div>
        </div>

        <div className="min-h-[50vh] overflow-x-auto mt-6 bg-white border-t-2 border-b-2 border-gray-light">
          <table className="" style={{ width: "100%" }}>
            <thead className="border-b border-gray-light">
              <tr className="">
                <th className="px-4 py-2 font-medium text-[18px]">
                  Client Name
                </th>
                <th className="px-4 py-2 font-medium text-[18px]">
                  Client Type
                </th>
                <th className="px-4 py-2 font-medium text-[18px]">
                  Related To
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Add your table rows here */}
              <tr className="border border-gray-light">
                <td className="px-4 py-2 text-center">
                  <Link to="/client/1/general-info"> John Doe</Link>
                </td>
                <td className="px-4 py-2 text-center">Engineering</td>
                {/* Wrap the content of the "Name" field with Link */}
                <td className="px-4 py-2 text-center">Team 1</td>
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
        </div>
      </div>
    </>
  );
};

export default Clients;
