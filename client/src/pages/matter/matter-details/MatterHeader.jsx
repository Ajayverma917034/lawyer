import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";
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
const SidebarLink = ({ to, fun, Icon, title }) => {
  return (
    <Link
      to={to}
      onClick={() => fun(e.target.innerText)}
      className="flex items-center gap-3 text-[18px] text-black mt-7"
    >
      <Icon size={25} /> {title}
    </Link>
  );
};
const MatterHeader = () => {
  let page = location.pathname.split("/")[1];
  let [pageState, setPageState] = useState(page.replace("-", " "));
  let [showSideNav, setShowSideNav] = useState(false);
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
        <div className="flex gap-x-4 lg:gap-x-7">
          <button className="btn-white">Cancel</button>
          <button className="btn-white">Abort</button>
          <button className="btn-white">Pending</button>
          <button className="btn-white">In Process</button>
          <button className="btn-white bg-blue text-white font-semibold">
            Save
          </button>
        </div>
      </div>
      <section className="relative flex py-0 m-0 max-md:flex-col bg-white">
        <div className="sticky top-[154px] z-[50]">
          <div className="relative md:hidden bg-white py-1 border-b border-grey flex flex-nowrap overflow-x-auto ">
            <button
              ref={sideBarIconTab}
              className="p-5 capitalize "
              onClick={chagnePageState}
            >
              <IoMdMenu size={20} style={{ pointerEvents: "none" }} />
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
              "min-w-[300px] !h-[calc(100vh-230px)] md:min-h-[calc(100vh-147px)] bg-white md:bg-white md:h-cover md:sticky top-[143px] overflow-y-auto md:pr-0  z-[49] md:border-gray-light md:border-r absolute max-md:top-[64px] px-7  max-md:px-16 max-md:-ml-7 duration-500 " +
              (!showSideNav
                ? "max-md:opacity-0 max-md:pointer-events-none"
                : "opacity-100 pointer-events-auto")
            }
          >
            <SidebarLink
              Icon={SlExclamation}
              to={"/matter-details/10/general-details"}
              fun={setPageState}
              title="General Info"
            />
            <SidebarLink
              Icon={LuClipboardEdit}
              to={"/matter-details/10/task"}
              fun={setPageState}
              title="Task"
            />
            <SidebarLink
              Icon={BsBell}
              to={"/matter-details/10/reminders"}
              fun={setPageState}
              title="Reminder"
            />
            <SidebarLink
              Icon={GoMail}
              to={"/"}
              fun={setPageState}
              title="Email"
            />
            <SidebarLink
              Icon={LiaMoneyCheckAltSolid}
              to={"/"}
              fun={setPageState}
              title="Bills"
            />
            <SidebarLink
              Icon={MdOutlineAttachment}
              to={"/matter-details/1/attachment"}
              fun={setPageState}
              title="Attachments"
            />
            <SidebarLink
              Icon={RiFileList3Line}
              to={"/matter-details/1/expenses"}
              fun={setPageState}
              title="Expenses"
            />
            <SidebarLink
              Icon={PiClockCountdown}
              to={"/matter-details/1/time-entries"}
              fun={setPageState}
              title="Time Entries"
            />
            <SidebarLink
              Icon={AiOutlineFileText}
              to={"/"}
              fun={setPageState}
              title="Matter"
            />
            <SidebarLink
              Icon={AiOutlineFileText}
              to={"/"}
              fun={setPageState}
              title="Contract and Document"
            />
            <SidebarLink
              Icon={IoSettingsOutline}
              to={"/"}
              fun={setPageState}
              title="Setting"
            />
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MatterHeader;
