import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { GiCornerFlag } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import { Camera, CameraAlt, Menu } from "@mui/icons-material";
import { SlExclamation } from "react-icons/sl";
import { LuClipboardEdit } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineAttachment } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { RiFileList3Line } from "react-icons/ri";
import { PiClockCountdown, PiFilesDuotone } from "react-icons/pi";
import { HiPencil } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ContractAndDocumentHeader = () => {
  let page = location.pathname.split("/")[3];
  let [pageState, setPageState] = useState(page.replace("-", " "));
  let [showSideNav, setShowSideNav] = useState(false);
  const [showBtns, setShowBtns] = useState(false);

  const imageHandler = async (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    // fileReader.onload = () => {
    //  if(fileReader.readyState === 2){
    //      const avatar = fileReader.result
    //      updateAvatar(avatar)
    //  }
    // }
    // fileReader.readAsDataURL(e.target.files[0])
  };

  let activeTabLine = useRef();
  let sideBarIconTab = useRef();
  let pageStateTap = useRef();

  const chagnePageState = (e) => {
    let { offsetWidth, offsetLeft } = e.target;
    activeTabLine.current.style.width = offsetWidth + "px";
    activeTabLine.current.style.left = offsetLeft + "px";

    if (e.target == sideBarIconTab.current) {
      setShowSideNav(true);
    } else {
      setShowSideNav(false);
    }
  };
  useEffect(() => {
    setShowSideNav(false);
    pageStateTap.current.click();
  }, [pageState]);
  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 bg-white-light justify-between py-5 flex items-center sticky top-[66px] z-[50]">
        <h1 className="text-2xl">CT01: Contract Name</h1>
        <div className="flex items-center gap-2">
          <div className="flex  gap-4 border-r-2 border-gray pr-4">
            <button className="btn-white">Cancelled</button>
            <button className="btn-white">ExecUted</button>
            <button className="btn-white">Filling & drafting</button>
            <button className="btn-white">More</button>
            {/* <label class="switch">
              <input type="checkbox"/>
              <span class="slider round"></span>
            </label> */}
          </div>
          <div className=" bg-white rounded-full p-2 text-blue">
            <HiPencil className="size-6" />
          </div>
          <div className=" bg-white rounded-full p-2 text-blue">
            <HiDotsVertical className="size-6" />
          </div>
        </div>
      </div>
      <section className="relative flex py-0 m-0 max-md:flex-col bg-white">
        <div className="sticky top-[130px] z-[50]">
          <div className="relative md:hidden bg-white py-1 border-b border-grey flex flex-nowrap overflow-x-auto ">
            <button
              ref={sideBarIconTab}
              className="p-5 capitalize "
              onClick={chagnePageState}
            >
              <Menu />
            </button>
            <button
              ref={pageStateTap}
              className="p-5 capitalize "
              onClick={chagnePageState}
            >
              {pageState}
            </button>

            <hr
              ref={activeTabLine}
              className="absolute bottom-0 duration-500 "
            />
          </div>

          <div
            className={
              "min-w-[300px] !h-[calc(100vh-200px)] max-md:pb-4 md:min-h-[calc(100vh-143px)] bg-white md:bg-white md:h-cover md:sticky top-[130px] overflow-y-auto md:pr-0 z-[49] md:border-gray-light md:border-r absolute max-md:top-[64px] px-7  max-md:px-16 max-md:-ml-7 duration-500 " +
              (!showSideNav
                ? "max-md:opacity-0 max-md:pointer-events-none"
                : "opacity-100 pointer-events-auto")
            }
          >
            <NavLink
              to={"/contract-details/10/details"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <TbListDetails size={25} />
              Details
            </NavLink>

            <NavLink
              to={"/contract-details/1/attachments"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <MdOutlineAttachment size={25} />
              Attachments
            </NavLink>

            <NavLink
              to={"/contract-details/1/approvral-center"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <IoIosCheckmarkCircleOutline size={25} />
              Approval Center
            </NavLink>

            <NavLink
              to={"/contract-details/1/milestones"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <GiCornerFlag size={25} />
              Milestone
            </NavLink>

            <NavLink
              to={"/contract-details/10/tasks"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <LuClipboardEdit size={25} /> Task
            </NavLink>

            <NavLink
              to={"/contract-details/10/email"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <GoMail size={25} />
              Email
            </NavLink>

            <NavLink
              to={"/contract-details/1/time-entries"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <PiClockCountdown size={25} />
              Time Entries
            </NavLink>

            <NavLink
              to={"/contract-details/1/expenses"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <RiFileList3Line size={25} />
              Expenses
            </NavLink>

            <NavLink
              to={"/contract-details/10/reminders"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <BsBell size={25} />
              Reminder
            </NavLink>

            <NavLink
              to={"/contract-details/1/related-matters"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <AiOutlineFileText size={25} />
              Matter
            </NavLink>
            <NavLink
              to={"/contract-details/1/related-contract-documents"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <PiFilesDuotone size={25} />
              Contract and Documents
            </NavLink>
            <NavLink
              to={"/contract-details/1/setting"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <IoSettingsOutline size={25} />
              Setting
            </NavLink>
          </div>
        </div>
        <div className=" w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default ContractAndDocumentHeader;
