import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Header component handles the top navigation bar
function Header() {
  // Get user image from Redux store
  const userImg = useSelector((state) => state.userImg.userImage);

  // State for managing dropdown menus
  const [isClicked, setIsClicked] = useState({
    profile: false,
    business: false,
  });

  // State for tracking active navigation tab
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  // Update active tab when route changes
  useEffect(() => {
    // Update active tab based on current route
    const path = location.pathname;
    if (path === "/Home") setActiveTab("/Home");
    else if (path === "/Network") setActiveTab("network");
    else if (path === "/Jobs") setActiveTab("jobs");
    else if (path === "/Messaging") setActiveTab("messaging");
    else if (path === "/Notification") setActiveTab("notification");
  }, [location]);

  // Toggle dropdown menus
  const toggleDropdown = (menu) => {
    if (menu === "profile") {
      setActiveTab("profile"); // Set profile as active tab
    }
    setIsClicked((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    // Fixed header with navigation items
    <div className="bg-white border-b border-b-gray-100 left-0 px-6 fixed top-0 w-screen z-[100] md:h-11  ">
      <div className="flex items-center my-0 mx-auto min-h-full max-w-[1128px]">
        {/* Logo */}
        <span className="mr-2 text-[0px] ">
          <Link to={"/Home"}>
            <img src="\src\assets\images\home-logo.svg" alt="Home-logo" />
          </Link>
        </span>
        {/* Search bar */}
        <div className="opacity-[1] grow relative">
          <div className="max-w-[280px]">
            <input
              type="text"
              placeholder="Search"
              className="border-none shadow-none bg-[#eef3f8] rounded-xs w-[218px] pl-[20%] pr-10 leading-[1.75] font-normal text-[14px] h-[34px] border-[#dce6f1] align-text-top focus:[box-shadow:inset_0_0_0_1px_#0a66c2]"
            />
          </div>
          <div className="w-[40px] rounded-[0 2px 2px 0] absolute top-3 left-0.5 flex justify-center m-0 pointer-events-none items-center  ">
            <img src="\src\assets\images\search-icon.svg" alt="search-icon" />
          </div>
        </div>
        {/* Navigation links */}
        <nav className="md:ml-[45%] md:block md:top-0 md:bg-transparent lg:ml-[45%] lg:block lg:top-0 lg:bg-transparent sm:fixed sm:left-0 sm:bottom-0 sm:bg-white sm:w-full">
          <ul className="flex flex-nowrap list-none">
            <li className="flex items-center hover:text-black hover:text-[14px]">
              <NavLink
                to={"/Home"}
                className={`items-center bg-transparent flex flex-col text-[12px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative $ `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill={`${
                    activeTab === "/Home" ? "#000000" : "rgba(0,0,0,0.6)"
                  }`}
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                </svg>
                <span
                  className={`text-[rgba(0,0,0,0.6)] after:content-[''] after:scale-x-100 after:bottom-0 after:left-0 after:absolute after:transition-[transform 0.2s ease-in-out] after:w-full  ${
                    activeTab === "/Home"
                      ? "text-black after:border-b-[rgba(0,0,0,0.9)] border-b-[var(--white , #fff)] border-b-[2px]   "
                      : ""
                  }`}
                >
                  Home
                </span>
              </NavLink>
            </li>
            <li className="flex items-center hover:text-black hover:text-[14px]">
              <NavLink
                to={"/Network"}
                className={
                  "items-center bg-transparent flex flex-col text-[12px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative  "
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill={`${
                    activeTab === "network" ? "#000000" : "rgba(0,0,0,0.6)"
                  }`}
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <span
                  className={`text-[rgba(0,0,0,0.6)] after:content-[''] after:scale-x-100 after:bottom-0 after:left-0 after:absolute after:transition-[transform 0.2s ease-in-out] after:w-full  ${
                    activeTab === "network"
                      ? "text-black border-b-[rgba(0,0,0,0.9)] border-b-[2px]   "
                      : ""
                  }`}
                >
                  My Network
                </span>
              </NavLink>
            </li>
            <li className="flex items-center hover:text-black hover:text-[14px]">
              <NavLink
                to={"/Jobs"}
                className={
                  "items-center bg-transparent flex flex-col text-[12px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative  "
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill={`${
                    activeTab === "jobs" ? "#000000" : "rgba(0,0,0,0.6)"
                  }`}
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                <span
                  className={`text-[rgba(0,0,0,0.6)] after:content-[''] after:scale-x-100 after:bottom-0 after:left-0 after:absolute after:transition-[transform 0.2s ease-in-out] after:w-full  ${
                    activeTab === "jobs"
                      ? "text-black border-b-[rgba(0,0,0,0.9)] border-b-[2px]   "
                      : ""
                  }`}
                >
                  Jobs
                </span>
              </NavLink>
            </li>
            <li className="flex items-center hover:text-black hover:text-[14px]">
              <NavLink
                to={"/Messaging"}
                className={
                  "items-center bg-transparent flex flex-col text-[12px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative  "
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill={`${
                    activeTab === "messaging" ? "#000000" : "rgba(0,0,0,0.6)"
                  }`}
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
                <span
                  className={`text-[rgba(0,0,0,0.6)] after:content-[''] after:scale-x-100 after:bottom-0 after:left-0 after:absolute after:transition-[transform 0.2s ease-in-out] after:w-full  ${
                    activeTab === "messaging"
                      ? "text-black border-b-[rgba(0,0,0,0.9)] border-b-[2px]   "
                      : ""
                  }`}
                >
                  Messaging
                </span>
              </NavLink>
            </li>
            <li className="flex items-center hover:text-black hover:text-[14px]">
              <NavLink
                to={"/Notification"}
                className={
                  "items-center bg-transparent flex flex-col text-[12px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative  "
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill={`${
                    activeTab === "notification" ? "#000000" : "rgba(0,0,0,0.6)"
                  }`}
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
                <span
                  className={`text-[rgba(0,0,0,0.6)] after:content-[''] after:scale-x-100 after:bottom-0 after:left-0 after:absolute after:transition-[transform 0.2s ease-in-out] after:w-full  ${
                    activeTab === "notification"
                      ? "text-black border-b-[rgba(0,0,0,0.9)] border-b-[2px]   "
                      : ""
                  }`}
                >
                  Notification
                </span>
              </NavLink>
            </li>

            <li
              className="flex items-center hover:text-black hover:text-[14px] relative"
              onClick={() => toggleDropdown("profile")}
            >
              <NavLink
                to={activeTab}
                className={
                  "items-center bg-transparent flex flex-col text-[12px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative "
                }
              >
                <img
                  src={
                    userImg.length > 0
                      ? userImg[userImg.length - 1].profileImage
                      : "/src/assets/images/user.svg"
                  }
                  alt="user-logo"
                  className="h-8 w-8 rounded-full items-center"
                />
                <span className="text-[rgba(0,0,0,0.6)] flex">
                  Me
                  <img
                    src="\src\assets\images\down-icon.svg"
                    alt="down-arrow"
                  />
                </span>
                {isClicked.profile && (
                  <div className="overflow-hidden bg-white rounded-md transition-[box-shadow 83ms] absolute border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] sm:bottom-16 md:mt-31  w-72 h-fit md:-top-19 ">
                    <div className="flex flex-wrap items-center  mt-3 ml-1.5 mr-2 border-b-1 border-b-[rgba(0,0,0,0.2)]">
                      <img
                        src={
                          userImg.length > 0
                            ? userImg[userImg.length - 1].profileImage
                            : "/src/assets/images/user.svg"
                        }
                        alt="user-logo"
                        className="h-18 w-18 rounded-full items-center"
                      />
                      <div className="text-[20px] font-sans text-black font-semibold ml-2">
                        Shadab Qureshi
                      </div>
                      <span className="ext-[18px] text-[rgba(0,0,0,0.9)] ml-20 -mt-10">
                        Strategic Business Development
                      </span>
                      <Link to={"/Profile"} className="w-full">
                        <button className="text-[#2977c9] bg-white text-[15px] rounded-4xl [box-shadow:inset_0_0_0_1px_#0a66c2] w-full mt-3 sm:mb-2 font-bold hover:bg-blue-100 hover:border-1s hover:border-blue-800">
                          View Profile
                        </button>
                      </Link>
                    </div>
                    <div className="flex flex-col items-start m-5 border-b-1 border-b-[rgba(0,0,0,0.2)] pb-4">
                      <h2 className="text-[18px] font-bold text-[rgba(0,0,0,0.9)] pb-3 -ml-1">
                        Account
                      </h2>
                      <svg
                        role="none"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        data-test-icon="image-medium"
                        type="image"
                      >
                        <path
                          d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                          fill="#fb923c"
                        />
                      </svg>
                      <span className="text-[rgba(0,0,0,0.9)] text-[15px] ml-7 -mt-6 pb-3">
                        Try 1 month of Premium for 0
                      </span>
                      <Link className="text-[12px] text-[rgba(0,0,0,0.5)] hover:border-b-1 hover:border-b-[rgba(0,0,0,0.5)] pb-2 ">
                        Setting & Privacy
                      </Link>
                      <Link
                        className="text-[12px] text-[rgba(0,0,0,0.5)] hover:border-b-1 hover:border-b-[rgba(0,0,0,0.5)] pb-2 "
                        to={"/Help"}
                      >
                        Help
                      </Link>
                      <Link className="text-[12px] text-[rgba(0,0,0,0.5)] hover:border-b-1 hover:border-b-[rgba(0,0,0,0.5)]  ">
                        Language
                      </Link>
                    </div>
                    <div className="flex flex-col items-start m-5 border-b-1 border-b-[rgba(0,0,0,0.2)] pb-2">
                      <h2 className="text-[18px] font-bold text-[rgba(0,0,0,0.9)] pb-3 -ml-1">
                        Management
                      </h2>

                      <Link className="text-[12px] text-[rgba(0,0,0,0.5)] hover:border-b-1 hover:border-b-[rgba(0,0,0,0.5)] pb-2 ">
                        Posts & Activities
                      </Link>
                      <Link className="text-[12px] text-[rgba(0,0,0,0.5)] hover:border-b-1 hover:border-b-[rgba(0,0,0,0.5)] pb-2 ">
                        Jobs Posting Account
                      </Link>
                    </div>
                    <button className="text-[12px] text-[rgba(0,0,0,0.5)] hover:border-b-1 hover:border-b-[rgba(0,0,0,0.5)] items-start font-sans ml-6 pb-2">
                      Sign out
                    </button>
                  </div>
                )}
              </NavLink>
            </li>
            <li
              className="flex items-center border-l border-gray-200 hover:text-black hover:text-[12px] "
              onClick={() => toggleDropdown("business")}
            >
              <NavLink
                to={"/Home"}
                className={
                  "items-center bg-transparent flex flex-col text-[10px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative left-4 text-nowrap"
                }
              >
                <img src="\src\assets\images\nav-work.svg" alt="user-logo" />
                <span className="text-[rgba(0,0,0,0.6)] flex">
                  For Business
                  <img
                    src="\src\assets\images\down-icon.svg"
                    alt="down-arrow"
                  />
                </span>
                {isClicked.business && (
                  <div className="overflow-hidden bg-white rounded-md transition-[box-shadow 83ms] absolute border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] sm:bottom-16 md:mt-31  md:w-5xl sm:w-72 h-fit md:-top-19 sm:overflow-y-scroll md:grid md:grid-cols-12 md:right-2 ">
                    <div className="sm:col-span-6 md:border-r-1 md:border-r-[rgba(0,0,0,0.4)] sm:border-b-1 sm:border-b-[rgba(0,0,0,0.4)] ">
                      <h1 className="text-[20px] font-semibold m-5">My app</h1>
                      <div className="flex flex-col ml-6">
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Find Leads
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold  pb-4">
                          Groups
                        </span>

                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Talent
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Talent Insights
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold  pb-4">
                          Post a job
                        </span>
                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Sales
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Services Marketplace
                        </span>
                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Marketing
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Advertise
                        </span>
                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Learning
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Learning
                        </span>
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <h1 className="text-[20px] font-semibold m-5">
                        Explore more for business
                      </h1>
                      <div className="flex flex-col ml-6">
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Hire on LinkedIn
                        </span>

                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Find, attract and recruit talent
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Sell with LinkedIn
                        </span>

                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Unlock sales opportunities
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Post a job for free
                        </span>

                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Get qualified applicants quickly
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Advertise on LinkedIn
                        </span>

                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Acquire customers and grow your business
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Elevate your small business
                        </span>

                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Find new clients and build credibility
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Learn with LinkedIn
                        </span>

                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Courses to develop your employees
                        </span>
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Admin Center
                        </span>

                        <span className="text-[12px] text-[rgba(0,0,0,0.4)] font-bold -ml-2">
                          Manage billing and account details
                        </span>
                      </div>
                      <div className="flex items-center p-6">
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-bold pt-4 pb-4">
                          Create a Company Page
                        </span>
                        <svg
                          role="none"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          data-test-icon="add-small"
                          className=""
                        >
                          <path
                            d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"
                            fill="#000000"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </NavLink>
            </li>
            <li className="flex items-center hover:text-black hover:text-[12px]">
              <NavLink
                to={"/Home"}
                className={
                  "items-center bg-transparent flex flex-col text-[10px] font-normal justify-center leading-[1.5] min-h-[42px] min-w-[80px] relative left-6 right-3 text-nowrap"
                }
              >
                <svg
                  role="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  data-test-icon="image-medium"
                  type="image"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#fb923c"
                  />
                </svg>
                <span className="text-[rgba(0,0,0,0.6)] flex">
                  Try Premium for 0
                  <img
                    src="\src\assets\images\down-icon.svg"
                    alt="down-arrow"
                  />
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
