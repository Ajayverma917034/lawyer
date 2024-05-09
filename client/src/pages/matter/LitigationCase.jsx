import { Check, DownloadOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import AddLitigationCase from "../../components/matter/AddLitigationCase.jsx";

const LitigationCase = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [addPerson, setAddPerson] = useState(false);

  const toggleCheckbox1 = () => {
    setIsChecked1(!isChecked1);
  };
  const toggleCheckbox2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <>
      <div className="w-full bg-white-light min-h-screen">
        <div className="px-2 md:px-28 pt-2 items-center">
          <div className="flex gap-2 mt-5 flex-wrap">
            <h1 className="text-[18px] md:text-2xl">Litigation Case</h1>
            <select
              name="filter"
              id="filter"
              className="min-w-28 md:min-w-48 outline-none rounded-md px-2 md:px-3 text-base shadow-sm border border-gray-light focus:outline-none "
            >
              <option value="all" defaultValue={"all"}>
                All
              </option>
            </select>

            <button
              className="ml-auto btn-light"
              onClick={() => setAddPerson(!addPerson)}
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
                <th className="px-4 py-2 font-medium text-left">Name</th>
                <th className="px-4 py-2 font-medium text-left">
                  Practice Area
                </th>
                <th className="px-4 py-2 font-medium text-left">Stage</th>
                <th className="px-4 py-2 font-medium text-left">Assignee</th>
                <th className="px-4 py-2 font-medium text-left">Opponents</th>
                <th className="px-4 py-2 font-medium text-left">
                  Workflow Status
                </th>
                <th className="px-4 py-2 font-medium text-left">Client Name</th>
                <th className="px-4 py-2 font-medium text-left">
                  Client Position
                </th>
                <th className="px-4 py-2 font-medium text-left">
                  Assigned Team
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr className="border-b border-gray-light">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">Engineering</td>
                <td className="px-4 py-2">john.doe@example.com</td>
                <td className="px-4 py-2">123-456-7890</td>
                <td className="px-4 py-2">987-654-3210</td>
                <td className="px-4 py-2">Software Engineer</td>
                <td className="px-4 py-2">ABC Company</td>
                <td className="px-4 py-2">Ref123</td>
                <td className="px-4 py-2">Sub Category</td>
              </tr> */}
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

      <AddLitigationCase open={addPerson} setOpen={setAddPerson} />
    </>
  );
};

export default LitigationCase;
