import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdArrowDropDown, MdMenu, MdSettings } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaBell, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import TimeLogo from "../assets/icos/Time.png";
import { ToolTip } from "../common/ToolTip";
import CreateBtn from "./CreateBtn";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const [showSubMenus, setShowSubMenus] = useState([
    { id: "contacts", value: false },
    { id: "matters", value: false },
    { id: "contracts&documents", value: false },
    { id: "report", value: false },
    { id: "billing", value: false },
    { id: "tools", value: false },
    { id: "create", value: false },
  ]);

  const matterMenu = [
    { id: 1, navigate: "/matter/corporate", name: "Corporate" },
    { id: 2, navigate: "/matter/litigation-case", name: "Litigation Case" },
    {
      id: 3,
      navigate: "/matter/intellectual-property",
      name: "Intellectual Property",
    },
  ];

  const contactsMenu = [
    { id: 1, navigate: "contacts/person", name: "Person" },
    { id: 2, navigate: "contacts/companies", name: "Company" },
  ];

  const contractAndDocuemntsMenu = [
    { id: 1, navigate: "/contracts/all-contracts", name: "All Contracts" },
    { id: 2, navigate: "/documents", name: "Quick Contract Builder" },
    { id: 3, navigate: "/contracts&document", name: "Create Custom" },
  ];
  const reportMenu = [{ id: 1, navigate: "/", name: "All Reports" }];
  const billingMenu = [{ id: 1, navigate: "/", name: "All Billing" }];
  const toolsMenu = [
    { id: 1, navigate: "/gst-calculator", name: "GST Calculator" },
    {
      id: 2,
      navigate: "/income-tax-calculator",
      name: "Income Tax Calculator",
    },
  ];

  const navigate = useNavigate();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleshowOverlay = (open) => {
    for (let i = 0; i < showSubMenus.length; i++) {
      showSubMenus[i].value = false;
    }
    setShowOverlay(open);
  };

  const handleShowSubMenu = (index, open) => {
    for (let i = 0; i < showSubMenus.length; i++) {
      showSubMenus[i].value = false;
    }
    const newSubMenus = [...showSubMenus];
    newSubMenus[index].value = open;
    setShowSubMenus(newSubMenus);
    setShowOverlay(open);
  };

  const handleCloseMenu = () => {
    for (let i = 0; i < showSubMenus.length; i++) {
      showSubMenus[i].value = false;
    }
    const newSubMenus = [...showSubMenus];
    setShowSubMenus(newSubMenus);
    setShowMenu(false);
    setShowOverlay(false);
  };

  const handleCloseSubMenu = (index) => {
    const newSubMenus = [...showSubMenus];
    newSubMenus[index].value = false;
    setShowSubMenus(newSubMenus);
    setShowOverlay(false);
    setShowMenu(false);
  };

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      if (width > 1374) setShowMenu(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className="padding py-2 1374px:py-3 flex items-center bg-blue z-[100] sticky top-0">
        <Link to="/">
          <img src={logo} alt="Legal Tax Link" className="w-20 1374px:w-24" />
        </Link>
        <div
          className={`w-full max-1374px:transition-transform max-1374px:duration-300 max-1374px:hidden max-1374px:z-50 ${
            showMenu
              ? "!flex absolute top-[65px] right-0 overflow-y-auto bg-blue flex-col max-sm:left-0 sm:w-[500px] max-1374px:translate-x-0 max-1374px:min-h-[calc(100vh-64px)] max-1374px:pt-4 border-t border-white"
              : "max-1374px:translate-x-full"
          }`}
        >
          <ul
            className={`flex gap-x-3 text-white ml-7 ${
              showMenu ? "flex-col" : ""
            }`}
          >
            <NavLink
              to={"dashboard"}
              onClick={handleCloseMenu}
              className="flex items-center text-[15px] max-1374px:text-[22px] 1374px:px-2 rounded-md"
            >
              Dashboard
            </NavLink>

            <div className="relative flex items-center">
              <Link
                className="flex items-center text-[15px] max-1374px:text-[22px] max-1374px:py-2 relative"
                onClick={() => handleShowSubMenu(0, true)}
              >
                Contacts <MdArrowDropDown size={25} />
                {/* Submenu for Contacts */}
              </Link>
              {showSubMenus[0].value && (
                <div className="absolute top-10 z-[110] right-0 min-w-[15rem] bg-white rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
                  <ul className="py-2 flex flex-col">
                    {contactsMenu.map((item) => (
                      <Fragment key={item.id}>
                        <Link
                          to={`${item.navigate}`}
                          onClick={() => {
                            handleCloseSubMenu(0);
                          }}
                          className="px-4 py-1 text-[16px] font-medium cursor-pointer hover:bg-gray-200 text-blue hover:bg-blue hover:text-white"
                        >
                          {item.name}
                        </Link>
                        <hr className="border-1 border-[#b3b3b3]" />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative flex items-center">
              <Link
                className="flex items-center text-[15px] max-1374px:text-[22px] max-1374px:py-2 relative"
                onClick={() => handleShowSubMenu(1, true)}
              >
                Matter <MdArrowDropDown size={25} />
                {/* Submenu for Contacts */}
              </Link>
              {showSubMenus[1].value && (
                <div className="absolute top-10 z-[110] right-0 min-w-[15rem] bg-white rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
                  <ul className="py-2 flex flex-col">
                    {matterMenu.map((item) => (
                      <Fragment key={item.id}>
                        <Link
                          to={`${item.navigate}`}
                          onClick={() => {
                            handleCloseSubMenu(1);
                          }}
                          className="px-4 py-1 text-[16px] font-medium cursor-pointer hover:bg-gray-200 text-blue hover:bg-blue hover:text-white"
                        >
                          {item.name}
                        </Link>
                        <hr className="border-1 border-[#b3b3b3]" />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              to={"/tasks"}
              onClick={handleCloseMenu}
              className="flex items-center text-[15px] max-1374px:text-[22px]"
            >
              Task
            </Link>

            <div className="relative flex items-center 1374px:ml-2">
              <Link
                className="flex items-center text-[15px] max-1374px:text-[22px] max-1374px:py-2 relative"
                onClick={() => handleShowSubMenu(2, true)}
              >
                Contract & Documents <MdArrowDropDown size={25} />
                {/* Submenu for Contacts */}
              </Link>
              {showSubMenus[2].value && (
                <div className="absolute top-10 z-[110] right-0 min-w-[15rem] bg-white rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
                  <ul className="py-2 flex flex-col">
                    {contractAndDocuemntsMenu.map((item) => (
                      <Fragment key={item.id}>
                        <Link
                          to={`${item.navigate}`}
                          onClick={() => {
                            handleCloseSubMenu(2);
                          }}
                          className="px-4 py-1 text-[16px] font-medium cursor-pointer hover:bg-gray-200 text-blue hover:bg-blue hover:text-white"
                        >
                          {item.name}
                        </Link>
                        <hr className="border-1 border-[#b3b3b3] last:border-0" />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative flex items-center ">
              <Link
                className="flex items-center text-[15px] max-1374px:text-[22px] max-1374px:py-2 relative"
                onClick={() => handleShowSubMenu(3, true)}
              >
                Reports <MdArrowDropDown size={25} />
                {/* Submenu for Contacts */}
              </Link>
              {showSubMenus[3].value && (
                <div className="absolute top-10 z-[110] right-0 min-w-[15rem] bg-white rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
                  <ul className="py-2 flex flex-col">
                    {reportMenu.map((item) => (
                      <Fragment key={item.id}>
                        <Link
                          to={`${item.navigate}`}
                          onClick={() => {
                            handleCloseSubMenu(3);
                          }}
                          className="px-4 py-1 text-[16px] font-medium cursor-pointer hover:bg-gray-200 text-blue hover:bg-blue hover:text-white"
                        >
                          {item.name}
                        </Link>
                        <hr className="border-1 border-[#b3b3b3] last:border-0" />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative flex items-center">
              <Link
                className="flex items-center text-[15px] max-1374px:text-[22px] max-1374px:py-2 relative"
                onClick={() => handleShowSubMenu(4, true)}
              >
                Billings <MdArrowDropDown size={25} />
                {/* Submenu for Contacts */}
              </Link>
              {showSubMenus[4].value && (
                <div className="absolute top-10 z-[110] right-0 min-w-[15rem] bg-white rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
                  <ul className="py-2 flex flex-col">
                    {billingMenu.map((item) => (
                      <Fragment key={item.id}>
                        <Link
                          to={`${item.navigate}`}
                          onClick={() => {
                            handleCloseSubMenu(4);
                          }}
                          className="px-4 py-1 text-[16px] font-medium cursor-pointer hover:bg-gray-200 text-blue hover:bg-blue hover:text-white"
                        >
                          {item.name}
                        </Link>
                        <hr className="border-1 border-[#b3b3b3] last:border-0" />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative flex items-center ">
              <Link
                className="flex items-center text-[15px] max-1374px:text-[22px] max-1374px:py-2 relative"
                onClick={() => handleShowSubMenu(5, true)}
              >
                Tools <MdArrowDropDown size={25} />
                {/* Submenu for Contacts */}
              </Link>
              {showSubMenus[5].value && (
                <div className="absolute top-10 z-[110] right-0 min-w-[15rem] bg-white rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
                  <ul className="py-2 flex flex-col">
                    {toolsMenu.map((item) => (
                      <Fragment key={item.id}>
                        <Link
                          to={`${item.navigate}`}
                          onClick={() => {
                            handleCloseSubMenu(5);
                          }}
                          className="px-4 py-1 text-[16px] font-medium cursor-pointer hover:bg-gray-200 text-blue hover:bg-blue hover:text-white"
                        >
                          {item.name}
                        </Link>
                        <hr className="border-1 border-[#b3b3b3] last:border-0" />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="max-1374px:hidden max-1374px:opacity-0 flex items-center">
              <CreateBtn
                showSubMenus={showSubMenus}
                handleCloseSubMenu={handleCloseMenu}
                handleShowSubMenu={handleShowSubMenu}
              />
            </div>
            <div className="flex mt-10 items-center gap-4">
              <img src={TimeLogo} alt="Time Logo" className="w-7 sm:hidden" />
              <MdSettings
                size={35}
                className="max max-1374px:w-[30px] sm:hidden"
              />
            </div>
          </ul>
        </div>
        <div
          className={`ml-auto text-white flex gap-x-5 items-center ${
            showMenu ? "" : ""
          }`}
        >
          <div className="1374px:hidden 1374px:opacity-0">
            <CreateBtn
              showSubMenus={showSubMenus}
              handleCloseSubMenu={handleCloseMenu}
              handleShowSubMenu={handleShowSubMenu}
            />
          </div>
          <div
            className={
              "absolute w-full md:min-w-[13rem] mt-2 left-0 top-full border-b px-[5vw] md:mt-0 md:border-0 md:block md:relative md:inset-0 rounded-lg md:p-0 bg-[#040263] md:w-auto md:show " +
              (showSearch ? "show" : "hide")
            }
          >
            <input
              type="text"
              placeholder="Universal Search"
              className="w-full bg-[#040263] px-3 py-2 rounded-lg"
              // onKeyDown={handleChange}
            />
            <IoMdSearch
              size={30}
              className="absolute right-2 md:pointer-events-none top-1/2 -translate-y-1/2 text-white"
            />
          </div>
          <IoMdSearch
            size={8}
            className="!h-8 !w-8 cursor-pointer flex md:!hidden"
            // onClick={() => setShowSearch(!showSearch)}
          />
          {/* <div> */}
          <div className="flex gap-3 items-center">
            <ToolTip title="Notifications" arrow>
              <div className="relative">
                <FaBell
                  size={25}
                  className="max max-1374px:w-[26px] cursor-pointer"
                />
                <span className="flex absolute top-[-3px] right-0 w-3 h-3 rounded-full bg-red border-blue border"></span>
              </div>
            </ToolTip>
            <div className="flex w-8 items-center justify-center max-sm:hidden">
              <ToolTip title="Reminders" arrow>
                <img
                  src={TimeLogo}
                  alt="Time Logo"
                  className="w-7 cursor-pointer"
                />
              </ToolTip>
            </div>
            <ToolTip title="Settings" arrow>
              <div>
                <MdSettings
                  size={30}
                  className="max max-1374px:w-[30px] max-sm:hidden cursor-pointer"
                />
              </div>
            </ToolTip>
            <ToolTip title="Profile" arrow>
              <div>
                <FaUserCircle
                  size={25}
                  className="max max-1374px:w-[26px] cursor-pointer"
                  onClick={() => {
                    handleCloseMenu();
                    navigate("/profile/basic-information");
                  }}
                />
              </div>
            </ToolTip>
            <MdMenu
              onClick={handleShowMenu}
              size={30}
              className="max- 1374px:hidden text-white cursor-pointer ml-auto 1374px:w-[30px]"
            />
          </div>
        </div>
        {showMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 top-[65px] 1374px:top-[73px] z-10"
            onClick={() => setShowMenu(false)}
          ></div>
        )}
        {showOverlay && (
          <div
            className={`fixed inset-0 ${
              !showMenu && "bg-black bg-opacity-50"
            } top-[65px] 1374px:top-[65px] z-[20] h-[100vh]`}
            onClick={() => handleshowOverlay(false)}
          ></div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
// <div className="flex justify-between px-3 md:px-22 lg:px-28 py-3 bg-blue text-white relative">
//   <Link to="/">
//     <img src={logo} alt="Legal Tax Link" className="w-16" />
//   </Link>

//   <ul
//     className={`w-full sm:p-0 max-md:absolute md:relative md:flex md:flex-row  justify-center items-center gap-10 top-[100%] left-0 right-0 bg-blue text-white z-[1000] list-none animate-show-menu ${
//       open ? "block sm:flex" : "hidden sm:flex"
//     } `}
//   >
//     <Link to="/dashboard" onClick={hanleCloseNav}>
//       <li className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
//         Dashboard
//       </li>
//     </Link>
//     <div>
//       <li
//         className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white"
//         onClick={handleShowTools}
//       >
//         Tools
//       </li>
//       <Menu
//         open={showTools}
//         anchorEl={showTools}
//         disableScrollLock={true}
//         id="menu-notification"
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         keepMounted
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         className="mt-12 w-full"
//         onClose={handleCloseTools}
//       >
//         <div className="flex flex-col">
//           <NavLink
//             to="/gst-calculator"
//             className="px-3 hover:bg-blue py-1 hover:text-white"
//             onClick={handleCloseTools}
//           >
//             GST Calculator
//           </NavLink>
//           <NavLink
//             to="/income-tax-calculator"
//             className="px-3 hover:bg-blue py-1 hover:text-white"
//             onClick={handleCloseTools}
//           >
//             Income Tax Calculator
//           </NavLink>
//         </div>
//       </Menu>
//     </div>
//     <Link to="/documents" onClick={hanleCloseNav}>
//       <li className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
//         Documents
//       </li>
//     </Link>
//     <Link to="/about-us" onClick={hanleCloseNav}>
//       <li className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
//         About Us
//       </li>
//     </Link>
//     <Link to="/contact" onClick={hanleCloseNav}>
//       <li className="text-2xl md:text-xl flex sm:block sm:text-base capitalize cursor-pointer p-3 sm:p-2 rounded-md hover:bg-blue-light sm:hover:text-white">
//         Contact
//       </li>
//     </Link>
//   </ul>

//   <div className="flex gap-5 items-center justify-center">
//     <div
//       className={
//         "absolute w-full mt-2 left-0 top-full border-b px-[5vw] md:mt-0 md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
//         (showSearch ? "show" : "hide")
//       }
//     >
//       <input
//         type="text"
//         placeholder="Search"
//         className="w-full md:w-auto bg-grey p-3 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-black md:pl-12 text-gray"
//         // onKeyDown={handleChange}
//       />
//       <Search className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey text-black" />
//     </div>
//     <Search
//       className="!h-8 !w-8 cursor-pointer flex md:!hidden"
//       onClick={() => setShowSearch(!showSearch)}
//     />
//     {/* notification */}
//     <div>
//       <div className="relative">
//         <Notifications
//           className="!h-7 !w-7 cursor-pointer"
//           onClick={handleNotificaion}
//         />
//         <span className="w-[0.6rem] bg-red h-[0.6rem] rounded-full absolute top-0 right-1 border border-blue"></span>
//       </div>
//       <Menu
//         open={anchorEl3}
//         anchorEl={anchorEl3}
//         id="menu-notification"
//         disableScrollLock={true}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         keepMounted
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         className="mt-12 w-full"
//         onClose={handleCloseNotification}
//       >
//         <div className="w-full md:w-[350px] h-[50vh] bg-white rounded">
//           <h5 className="text-center text-[20px] text-black p-3">
//             Notifications
//           </h5>

//           <div className="  border border-b-[#0000000f]">
//             <div className="w-full flex items-center justify-between p-2">
//               <p className="text-black font-medium">
//                 New Notification Recieved
//               </p>
//               <p className="text-black  cursor-pointer font-medium">
//                 Mark as Read
//               </p>
//             </div>
//             <p className="px-2 text-black ">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               Rerum repellat repellendus magni aliquam
//             </p>
//             <p className="p-2 text-black text-[14px]">5 days ago</p>
//           </div>
//           <div className="font-Poppins border-b  border-b-[#0000000f]">
//             <div className="w-full flex items-center justify-between p-2">
//               <p className="text-black font-medium">
//                 New Notification Recieved
//               </p>
//               <p className="text-black  cursor-pointer font-medium">
//                 Mark as Read
//               </p>
//             </div>
//             <p className="px-2 text-black ">
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               Rerum repellat repellendus magni aliquam
//             </p>
//             <p className="p-2 text-black  text-[14px]">5 days ago</p>
//           </div>
//         </div>
//       </Menu>
//     </div>

//     {/* profile */}
//     <div className="reltive w-full">
//       <AccountCircle
//         className="!h-8 !w-8 cursor-pointer"
//         onClick={handleMenu}
//       />
//     </div>
//     <MenuBar
//       className="!h-8 !w-8 md:!hidden"
//       onClick={() => setOpen(!open)}
//     />
//   </div>
// </div>
