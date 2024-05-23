import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
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
import { PiClockCountdown } from "react-icons/pi";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const MatterHeader2 = () => {
  let page = location.pathname.split("/")[1];
  let [pageState, setPageState] = useState(page.replace("-", " "));
  let [showSideNav, setShowSideNav] = useState(false);

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
        <h1 className="text-2xl">M0000001: Matter Name</h1>

        <div className="flex gap-x-4 lg:gap-x-7 hidden">
          <button className="btn-white">Cancel</button>
          <button className="btn-white">Abort</button>
          <button className="btn-white">Pending</button>
          <button className="btn-white">In Process</button>
          <button className="btn-white bg-blue text-white font-semibold">
            Save
          </button>
        </div>
      </div>
      <section className="elative flex py-0 m-0 max-md:flex-col bg-white">
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
              "min-w-[300px] !h-[calc(100vh-200px)] max-md:pb-4 md:min-h-[calc(100vh-131px)] bg-white md:bg-white md:h-cover md:sticky top-[130px] overflow-y-auto md:pr-0  z-[49] md:border-gray-light md:border-r absolute max-md:top-[64px] px-7  max-md:px-16 max-md:-ml-7 duration-500 " +
              (!showSideNav
                ? "max-md:opacity-0 max-md:pointer-events-none"
                : "opacity-100 pointer-events-auto")
            }
          >
            <NavLink
              to={"/matter-details/10/general-details"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <SlExclamation size={25} />
              General Info
            </NavLink>

            <NavLink
              to={"/matter-details/10/task"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <LuClipboardEdit size={25} /> Task
            </NavLink>

            <NavLink
              to={"/matter-details/10/reminders"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <BsBell size={25} />
              Reminder
            </NavLink>

            <NavLink
              to={"/matter-details/10/email"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <GoMail size={25} />
              Email
            </NavLink>
            <NavLink
              to={"/matter-details/10/invoices"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <LiaMoneyCheckAltSolid size={25} />
              Bills
            </NavLink>

            <NavLink
              to={"/matter-details/1/attachment"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <MdOutlineAttachment size={25} />
              Attachments
            </NavLink>

            <NavLink
              to={"/matter-details/1/expenses"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <RiFileList3Line size={25} />
              Expenses
            </NavLink>

            <NavLink
              to={"/matter-details/1/time-entries"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <PiClockCountdown size={25} />
              Time Entries
            </NavLink>
            <NavLink
              to={"/matter-details/1/related-matters"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <AiOutlineFileText size={25} />
              Related Matter
            </NavLink>
            <NavLink
              to={"/matter-details/1/related-contract-documents"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              <AiOutlineFileText size={25} />
              Contract and Document
            </NavLink>
            <NavLink
              to={"/matter-details/1/setting"}
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

export default MatterHeader2;
