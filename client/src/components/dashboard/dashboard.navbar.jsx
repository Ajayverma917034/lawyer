import React, { useState } from "react";
import { Menu } from "@mui/material";
import {
  ArrowDropDown,
  Menu as MenuIcon,
  Password,
  Settings,
} from "@mui/icons-material";
import { Outlet } from "react-router-dom";
const DashboardNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleMenuSetting = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorEl2(null);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNaviagte = () => {
    toggleDrawer();
  };

  const navData = [
    {
      name: "History",
      link: "/dashboard/history",
      // icon:
    },
  ];
  return (
    <>
      <div className="flex justify-end bg-white py-2 relative px-3 md:px-22 lg:px-28">
        <MenuIcon
          onClick={toggleDrawer}
          className="text-blue sm:!hidden sm:pointer-events-none !text-3xl border border-blue p-1 rounded-sm cursor-pointer"
        />
        <ul
          className={`w-full p-3 sm:p-0 flex-col sm:flex-row absolute sm:relative sm:justify-end top-12 sm:top-0 left-0 right-0 bg-blue sm:bg-white text-white sm:text-blue gap-4 z-10 list-none animate-show-menu ${
            open ? "block sm:flex" : "hidden sm:flex"
          } `}
        >
          <li className="text-2xl md:text-xl sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
            History{" "}
          </li>
          <li
            className="text-2xl md:text-xl sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white"
            onClick={handleNaviagte}
          >
            Search Case{" "}
          </li>
          <li className="text-2xl md:text-xl sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
            Track case status{" "}
          </li>
          <li className="text-2xl md:text-xl sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
            Billing <ArrowDropDown />
          </li>
          <li
            className="text-2xl md:text-xl sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white"
            onClick={handleMenuSetting}
          >
            setting <ArrowDropDown />
          </li>
          <Menu
            open={anchorEl2}
            anchorEl={anchorEl2}
            id="menu-setting"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            className="mt-12 w-full"
            onClose={handleCloseSetting}
          >
            <div className="w-full md:w-[300px] h-full bg-white rounded">
              <h5 className="text-center text-[20px] text-black p-3">
                Settings
              </h5>

              <div className="  border border-b-[#0000000f]">
                <div className="text-black flex min-w-[15rem] gap-3 p-3 border-b cursor-pointer hover:bg-[#205081] hover:text-white text-xl items-center font-medium">
                  <Password /> Manage Password
                </div>
                <div className="text-black flex min-w-[15rem] gap-3 p-3 border-b cursor-pointer hover:bg-[#205081] hover:text-white text-xl items-center font-medium">
                  <Settings /> Manage Nofitications
                </div>
                <div className="text-black flex min-w-[15rem] gap-3 p-3 border-b cursor-pointer hover:bg-[#205081] hover:text-white text-xl items-center font-medium">
                  <Password /> Manage Password
                </div>
              </div>
            </div>
          </Menu>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default DashboardNavbar;
