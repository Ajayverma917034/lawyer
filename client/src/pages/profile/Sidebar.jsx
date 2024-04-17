import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import profileimg from "../../assets/profileimg.png";
import { Camera, CameraAlt, Menu } from "@mui/icons-material";

const Sidebar = () => {
  let page = location.pathname.split("/")[1];
  let [pageState, setPageState] = useState(page.replace("-", " "));
  let [showSideNav, setShowSideNav] = useState(false);

  const imageHandler = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    console.log("hello");
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
    console.log(offsetLeft, offsetWidth);
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
    <section className="relative flex gap-10 py-0 px-3 md:px-22 lg:px-28  m-0 max-md:flex-col bg-wihite-light">
      <div className="skicky top-[80px] z-30">
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

          <hr ref={activeTabLine} className="absolute bottom-0 duration-500 " />
        </div>

        <div
          className={
            "min-w-[200px] min-h-[calc(100vh-64px)] bg-white md:bg-wihite-light md:h-cover md:sticky top-24 overflow-y-auto pt-6 md:pr-0 md:border-gray-light md:border-r absolute max-md:top-[64px]  max-md:px-16 max-md:-ml-7 duration-500 " +
            (!showSideNav
              ? "max-md:opacity-0 max-md:pointer-events-none"
              : "opacity-100 pointer-events-auto")
          }
        >
          <div className="rounded-full w-full mt-12 mb-6 justify-center relative">
            <div className="relative w-[13rem]">
              <img
                src={profileimg}
                alt="client name"
                className=" size-[12rem] rounded-full shadow-md"
              />
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="hidden"
                onChange={imageHandler}
                accept="image/png,image/jpg,image/jpeg,image/webp"
              />
              <label htmlFor="avatar">
                <div className="absolute bottom-5 right-5 bg-white rounded-full p-2 shadow-md cursor-pointer">
                  <CameraAlt />
                </div>
              </label>
            </div>
          </div>
          {/* <hr className="border-grey -ml-6 mb-8 mr-6" /> */}
          <NavLink
            to={"/profile/basic-information"}
            onClick={(e) => setPageState(e.target.innerText)}
            className="sidebar-link border-b border-gray-light"
          >
            Basic Information
          </NavLink>

          <NavLink
            to={"/profile/personal-information"}
            onClick={(e) => setPageState(e.target.innerText)}
            className="sidebar-link border-b border-gray-light"
          >
            Personal Information
          </NavLink>

          <NavLink
            to={"/profile/address"}
            onClick={(e) => setPageState(e.target.innerText)}
            className="sidebar-link border-b border-gray-light"
          >
            Address
          </NavLink>

          {/* <h1 className="text-xl text-dark-grey mb-3 mt-20">Setting</h1>
          <hr className="border-grey ml-6 mb-8 mr-6" /> */}

          <NavLink
            to={"/profile/update-password"}
            onClick={(e) => setPageState(e.target.innerText)}
            className="sidebar-link border-b border-gray-light"
          >
            Update Password
          </NavLink>

          <NavLink
            to={"/"}
            onClick={(e) => setPageState(e.target.innerText)}
            className="sidebar-link border-b border-gray-light"
          >
            Logout
          </NavLink>
        </div>
      </div>
      <div className="max-md:-mt-8 mt-5 w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default Sidebar;
