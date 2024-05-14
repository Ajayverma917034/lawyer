import { Fragment, useContext } from "react";
import { AddContext } from "../App";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NavigateLink = ({ title, handleCloseSubMenu, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <li
        onClick={() => {
          handleCloseSubMenu(6);
          navigate(navigateTo);
        }}
        className="px-4 py-1 text-[16px] font-medium cursor-pointer hover:bg-gray-200 text-blue hover:bg-blue hover:text-white"
      >
        {title}
      </li>
      <hr className="border-1 border-[#b3b3b3] last:border-0" />
    </Fragment>
  );
};

const OpenLink = ({ title, handleCloseSubMenu, fun, funStatus }) => {
  return (
    <Fragment>
      <li
        onClick={() => {
          fun(!funStatus);
          handleCloseSubMenu(6);
        }}
        className="px-4 py-1 text-[16px] font-medium cursor-pointer hover:bg-gray-200 text-blue hover:bg-blue hover:text-white"
      >
        {title}
      </li>
      <hr className="border-1 border-[#b3b3b3] last:border-0" />
    </Fragment>
  );
};

const CreateBtn = ({ handleCloseSubMenu, showSubMenus, handleShowSubMenu }) => {
  const {
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
  } = useContext(AddContext);
  return (
    <div className="relative flex items-center ">
      <li className="flex items-center text-[15px] max-1374px:text-[15px] max-1374px:py-2 ">
        <button
          className="flex items-center bg-green p-1 pl-2 rounded-md hover:opacity-95"
          onClick={() => handleShowSubMenu(6, true)}
        >
          Create <IoMdAdd size={14} className="ml-1" />{" "}
        </button>
      </li>
      {showSubMenus[6].value && (
        <div className="absolute max-1374px:top-12 top-10 z-[110] right-0 min-w-[15rem] bg-white rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
          <ul className="py-2 flex flex-col">
            <OpenLink
              title={"Company"}
              fun={setAddCompany}
              funStatus={addCompany}
              handleCloseSubMenu={handleCloseSubMenu}
            />
            <OpenLink
              title={"Person"}
              fun={setAddPerson}
              funStatus={addPerson}
              handleCloseSubMenu={handleCloseSubMenu}
            />
            <OpenLink
              title={"Corporate Matter"}
              fun={setAddMatter}
              funStatus={addMatter}
              handleCloseSubMenu={handleCloseSubMenu}
            />
            <OpenLink
              title={"Litigation Case"}
              fun={setAddLitigationCase}
              funStatus={addLitigationCase}
              handleCloseSubMenu={handleCloseSubMenu}
            />

            <OpenLink
              title={"Hearing"}
              fun={setAddHearing}
              funStatus={addHearing}
              handleCloseSubMenu={handleCloseSubMenu}
            />
            <OpenLink
              title={"Intellectual Property"}
              fun={setAddIPOpen}
              funStatus={addIPOpen}
              handleCloseSubMenu={handleCloseSubMenu}
            />
            <OpenLink
              title={"Task"}
              fun={setAddTaskOpen}
              funStatus={addTaskOpen}
              handleCloseSubMenu={handleCloseSubMenu}
            />
            <OpenLink
              title={"Meeting"}
              fun={setAddSchedule}
              funStatus={addSchedule}
              handleCloseSubMenu={handleCloseSubMenu}
            />
            <OpenLink
              title={"Reminder"}
              fun={setAddReminder}
              funStatus={addReminder}
              handleCloseSubMenu={handleCloseSubMenu}
            />
            <NavigateLink
              title="Income Tax Calculator"
              handleCloseSubMenu={handleCloseSubMenu}
              navigateTo={"/income-tax-calculator"}
            />
            <NavigateLink
              title="GST Calculator"
              handleCloseSubMenu={handleCloseSubMenu}
              navigateTo={"/gst-calculator"}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateBtn;
