import { PiBuildingOffice } from "react-icons/pi";
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

const ClientHeader = () => {
  let page = location.pathname.split("/")[3];
  let [pageState, setPageState] = useState(page);
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
    <div>
      <div className="flex items-center px-2 md:px-10 lg:px-20 py-2 md:py-4 border-b-2 border-gray-light">
        <PiBuildingOffice className="text-[5rem] md:text-[6rem] lg:text-[7rem] text-blue-500" />
        <div className="ml-2">
          <h1 className="text-xl lg:text-[21px] font-medium text-blue">
            COM0000010{" "}
            <span className="text-black text-xl lg:text-2xl">
              (Advertisement Company)
            </span>
          </h1>
          <p className="text-xl md:text-[18px] text-black">
            Client Type: <span className="text-[18px] text-black">Company</span>
          </p>
          <p className="text-xl md:text-[18px] text-black">
            Trust:{" "}
            <span className="text-xl md:text-[18px] text-black">0.00 USD</span>
          </p>
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
              "min-w-[200px] !h-[calc(100vh-221px)] max-md:pb-4 md:min-h-[calc(100vh-194px)] bg-white md:bg-white md:h-cover md:sticky top-[130px] overflow-y-auto md:pr-0 z-[49] md:border-gray-light md:border-r absolute max-md:top-[65px] px-7  max-md:px-16 max-md:-ml-7 duration-500 " +
              (!showSideNav
                ? "max-md:opacity-0 max-md:pointer-events-none"
                : "opacity-100 pointer-events-auto")
            }
          >
            <NavLink
              to={"/client/10/general-info"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              General Info
            </NavLink>

            <NavLink
              to={"/client/10/other-details"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              Other Details
            </NavLink>

            <NavLink
              to={"/client/10/attachment"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              Attachment
            </NavLink>

            <NavLink
              to={"/client/10/partner-shares"}
              onClick={(e) => setPageState(e.target.innerText)}
              className="flex items-center gap-3 text-[18px] text-black mt-6"
            >
              Partner Shares
            </NavLink>
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default ClientHeader;
