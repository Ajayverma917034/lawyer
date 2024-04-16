import React, { useState } from "react";
import {
  AccountCircle,
  Dashboard,
  History,
  Notifications,
  LocationOn,
  Settings,
  Search,
  Person,
  AccountBalance,
  Password,
  Menu as MenuBar,
} from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNotificaion = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorEl3(null);
  };

  const handleMenuSetting = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorEl2(null);
  };
  return (
    <>
      <div className="flex justify-between px-3 md:px-22 lg:px-28 py-3 bg-blue text-white relative">
        <img src={logo} alt="Legal Tax Link" className="w-16" />

        <ul className="hidden gap-5 justify-center items-center md:flex">
          <li className="flex justify-center gap-1 cursor-pointer">
            <Dashboard /> Dashboard
          </li>
          <li className="flex justify-center gap-1 cursor-pointer">
            <History /> History
          </li>
          <NavLink
            to={"/tract-case-status"}
            className="flex justify-center gap-1 cursor-pointer"
          >
            <LocationOn /> Track Case status
          </NavLink>
        </ul>

        <div className="flex gap-5 items-center justify-center">
          <div
            className={
              "absolute w-full mt-2 left-0 top-full border-b px-[5vw] md:mt-0 md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
              (showSearch ? "show" : "hide")
            }
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-auto bg-grey p-3 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-black md:pl-12 text-gray"
              // onKeyDown={handleChange}
            />
            <Search className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey text-black" />
          </div>
          <Search
            className="!h-8 !w-8 cursor-pointer flex md:!hidden"
            onClick={() => setShowSearch(!showSearch)}
          />
          {/* notification */}
          <div>
            <div className="relative">
              <Notifications
                className="!h-7 !w-7 cursor-pointer"
                onClick={handleNotificaion}
              />
              <span className="w-[0.6rem] bg-red h-[0.6rem] rounded-full absolute top-0 right-1 border border-blue"></span>
            </div>
            <Menu
              open={anchorEl3}
              anchorEl={anchorEl3}
              id="menu-notification"
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
              onClose={handleCloseNotification}
            >
              <div className="w-full md:w-[350px] h-[50vh] bg-white rounded">
                <h5 className="text-center text-[20px] text-black p-3">
                  Notifications
                </h5>

                <div className="  border border-b-[#0000000f]">
                  <div className="w-full flex items-center justify-between p-2">
                    <p className="text-black font-medium">
                      New Notification Recieved
                    </p>
                    <p className="text-black  cursor-pointer font-medium">
                      Mark as Read
                    </p>
                  </div>
                  <p className="px-2 text-black ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum repellat repellendus magni aliquam
                  </p>
                  <p className="p-2 text-black text-[14px]">5 days ago</p>
                </div>
                <div className="font-Poppins border-b  border-b-[#0000000f]">
                  <div className="w-full flex items-center justify-between p-2">
                    <p className="text-black font-medium">
                      New Notification Recieved
                    </p>
                    <p className="text-black  cursor-pointer font-medium">
                      Mark as Read
                    </p>
                  </div>
                  <p className="px-2 text-black ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum repellat repellendus magni aliquam
                  </p>
                  <p className="p-2 text-black  text-[14px]">5 days ago</p>
                </div>
              </div>
            </Menu>
          </div>

          {/* setting */}
          <div className="w-full">
            <Settings
              className="!h-8 !w-8 cursor-pointer"
              onClick={handleMenuSetting}
            />
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
                  <div className="text-black flex min-w-[15rem] gap-3 p-3 border-b border-gray-500 cursor-pointer hover:bg-[#205081] hover:text-white text-xl items-center font-medium">
                    <Password /> Manage Password
                  </div>
                  <div className="text-black flex min-w-[15rem] gap-3 p-3 border-b border-gray-500 cursor-pointer hover:bg-[#205081] hover:text-white text-xl items-center font-medium">
                    <Settings /> Manage Nofitications
                  </div>
                  <div className="text-black flex min-w-[15rem] gap-3 p-3 border-b border-gray-500 cursor-pointer hover:bg-[#205081] hover:text-white text-xl items-center font-medium">
                    <Password /> Manage Password
                  </div>
                </div>
              </div>
            </Menu>
          </div>

          {/* profile */}
          <div className="reltive w-full">
            <AccountCircle className="!h-8 !w-8" onClick={handleMenu} />
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className="mt-12"
            >
              <MenuItem onClick={handleClose}>
                <div className="flex justify-between text-right gap-2">
                  <Person />
                  Profile
                </div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="flex justify-between text-right gap-2">
                  <AccountBalance /> My account
                </div>
              </MenuItem>
            </Menu>
          </div>
          <MenuBar className="!h-8 !w-8" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
