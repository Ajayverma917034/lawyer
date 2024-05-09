import React, { useState } from "react";
import {
  AccountCircle,
  Notifications,
  Search,
  Menu as MenuBar,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenu = (event) => {
    navigate(`/profile/basic-information`);
  };

  const handleNotificaion = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorEl3(null);
    hanleCloseNav();
  };

  const handleShowTools = (event) => {
    setShowTools(event.currentTarget);
  };

  const handleCloseTools = () => {
    setShowTools(null);
    hanleCloseNav();
  };
  const hanleCloseNav = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex justify-between px-3 md:px-22 lg:px-28 py-3 bg-blue text-white relative">
        <Link to="/">
          <img src={logo} alt="Legal Tax Link" className="w-16" />
        </Link>

        <ul
          className={`w-full sm:p-0 max-md:absolute md:relative md:flex md:flex-row  justify-center items-center gap-10 top-[100%] left-0 right-0 bg-blue text-white z-[1000] list-none animate-show-menu ${
            open ? "block sm:flex" : "hidden sm:flex"
          } `}
        >
          <Link to="/dashboard" onClick={hanleCloseNav}>
            <li className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
              Dashboard
            </li>
          </Link>
          <div>
            <li
              className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white"
              onClick={handleShowTools}
            >
              Tools
            </li>
            <Menu
              open={showTools}
              anchorEl={showTools}
              disableScrollLock={true}
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
              onClose={handleCloseTools}
            >
              <div className="flex flex-col">
                <NavLink
                  to="/gst-calculator"
                  className="px-3 hover:bg-blue py-1 hover:text-white"
                  onClick={handleCloseTools}
                >
                  GST Calculator
                </NavLink>
                <NavLink
                  to="/income-tax-calculator"
                  className="px-3 hover:bg-blue py-1 hover:text-white"
                  onClick={handleCloseTools}
                >
                  Income Tax Calculator
                </NavLink>
              </div>
            </Menu>
          </div>
          <Link to="/documents" onClick={hanleCloseNav}>
            <li className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
              Documents
            </li>
          </Link>
          <Link to="/about-us" onClick={hanleCloseNav}>
            <li className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
              About Us
            </li>
          </Link>
          <Link to="/contact" onClick={hanleCloseNav}>
            <li className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
              Contact
            </li>
          </Link>
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
              disableScrollLock={true}
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

          {/* profile */}
          <div className="reltive w-full">
            <AccountCircle
              className="!h-8 !w-8 cursor-pointer"
              onClick={handleMenu}
            />
          </div>
          <MenuBar
            className="!h-8 !w-8 md:!hidden"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
