import React from "react";
import { Link } from "react-router-dom";

// Component for managing network connections and invitations
function Network() {
  // Component's JSX structure:
  // - Left sidebar with network management options:
  //   * Connections
  //   * Following & followers
  //   * Groups
  //   * Events
  //   * Pages
  //   * Newsletters

  // - Main content area:
  //   * Connection invitations
  //   * Interactive games section
  //   * People you may know section
  //   * Company connections

  // - Footer with links
  return (
    <div className="max-w-[1128px] ml-auto mr-auto">
      <div className="md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-6 md:grid-rows-auto mt-[5%] mb-[5%] flex flex-col py-0 px-1.5 ">
        <div className="sm:col-span-4 ">
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 mt-16">
            <h2 className="text-[15px] text-[rgba(0,0,0,0.8)] border-b border-b-[rgba(0,0,0,0.3)] mt-4 mb-4 ml-2">
              Manage my network
            </h2>
            <div className="flex flex-col justify-center items-start ml-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4B5563"
                  className="h-5 w-8"
                  data-supported-dps="24x24"
                  viewBox="0 0 24 24"
                  data-token-id="129"
                  width="24"
                  height="24"
                  aria-label=""
                  aria-hidden="true"
                >
                  <path d="M12 16v6H3v-6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3m5.5-3A3.5 3.5 0 1 0 14 9.5a3.5 3.5 0 0 0 3.5 3.5m1 2h-2a2.5 2.5 0 0 0-2.5 2.5V22h7v-4.5a2.5 2.5 0 0 0-2.5-2.5M7.5 2A4.5 4.5 0 1 0 12 6.5 4.49 4.49 0 0 0 7.5 2"></path>
                </svg>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] ml-5">
                  Connections
                </span>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] ml-45">
                  0
                </span>
              </div>
              <div className=" flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4B5563"
                  aria-hidden="true"
                  data-supported-dps="24x24"
                  viewBox="0 0 24 24"
                  data-token-id="185"
                  width="24"
                  height="24"
                  aria-label=""
                  className="h-5 w-8"
                >
                  <path d="M7 7a5 5 0 1 1 5 5 5 5 0 0 1-5-5m7 7h-4a3 3 0 0 0-3 3v5h10v-5a3 3 0 0 0-3-3"></path>
                </svg>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] ml-5">
                  Following & followers
                </span>
              </div>
              <div className=" flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4B5563"
                  aria-hidden="true"
                  data-supported-dps="24x24"
                  viewBox="0 0 24 24"
                  data-token-id="333"
                  width="24"
                  height="24"
                  className="h-5 w-8"
                  aria-label=""
                >
                  <path d="M15 13.25V21H9v-7.75A2.25 2.25 0 0 1 11.25 11h1.5A2.25 2.25 0 0 1 15 13.25m5-.25h-1a2 2 0 0 0-2 2v6h5v-6a2 2 0 0 0-2-2M12 3a3 3 0 1 0 3 3 3 3 0 0 0-3-3m7.5 8A2.5 2.5 0 1 0 17 8.5a2.5 2.5 0 0 0 2.5 2.5M5 13H4a2 2 0 0 0-2 2v6h5v-6a2 2 0 0 0-2-2m-.5-7A2.5 2.5 0 1 0 7 8.5 2.5 2.5 0 0 0 4.5 6"></path>
                </svg>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] ml-5">
                  Groups
                </span>
              </div>
              <div className=" flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4B5563"
                  aria-hidden="true"
                  data-supported-dps="24x24"
                  viewBox="0 0 24 24"
                  data-token-id="220"
                  width="24"
                  height="24"
                  className="h-5 w-8"
                  aria-label=""
                >
                  <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3zm13 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-8 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14zM7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
                </svg>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] ml-5">
                  Events
                </span>
              </div>
              <div className=" flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4B5563"
                  aria-hidden="true"
                  data-supported-dps="24x24"
                  viewBox="0 0 24 24"
                  data-token-id="249"
                  width="24"
                  className="h-5 w-8"
                  height="24"
                  aria-label=""
                >
                  <path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path>
                </svg>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] ml-5">
                  Pages
                </span>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] ml-60">
                  0
                </span>
              </div>
              <div className=" flex items-center ml-1.5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4B5563"
                  aria-hidden="true"
                  data-supported-dps="24x24"
                  viewBox="0 0 24 24"
                  data-token-id="139"
                  width="24"
                  height="24"
                  aria-label=""
                >
                  <path d="M13 13h5v1h-5zm5-5H6v3h12zm-5 8h5v-1h-5zm9-12v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4zm-2 2H4v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-9 7H6v3h5z"></path>
                </svg>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] ml-5">
                  Newsletters
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-60 mt-8"></div>
          <ul className="flex flex-wrap justify-between">
            <Link>
              <li className="text-[10px] text-gray-500">About</li>
            </Link>
            <Link>
              <li className="text-[10px] text-gray-500">Accessibility</li>
            </Link>
            <Link>
              <li className="text-[10px] text-gray-500"> Help Center</li>
            </Link>
            <Link>
              <li className="text-[10px] text-gray-500">Privacy & Terms</li>
            </Link>
            <Link>
              <li className="text-[10px] text-gray-400">Add Choice</li>
            </Link>
            <Link>
              <li className="text-[10px] text-gray-500">Advertising</li>
            </Link>
            <Link>
              <li className="text-[10px] text-gray-500">Business Services</li>
            </Link>
            <Link>
              <li className="text-[10px] text-gray-500">
                Get the Linkedin app
              </li>
            </Link>
            <Link>
              <li className="text-[10px] text-gray-400">More</li>
            </Link>
          </ul>
          <div className="flex mt-3 justify-center items-center">
            <img
              src="\src\assets\images\login-logo.svg"
              alt="linkedin-logo"
              className="h-9 w-9 mt-7"
            />
            <span className="text-[12px] text-gray-600 ml-2">
              Linkedin Corporation © 2025
            </span>
          </div>
        </div>
        <div className="sm:col-span-8 mt-[8.5%]">
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-2 flex justify-around">
            <Link
              className={
                " border-b-4 font-bold border-b-green-900 text-green-900 -mb-2"
              }
            >
              Grow
            </Link>
            <Link
              className={
                " border-b-4 font-bold border-b-green-900 text-green-900 -mb-2  "
              }
            >
              Catch up
            </Link>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1">
            <div className="flex items-center px-4 justify-between border-b-2 border-b-[rgba(0,0,0,0.2)] py-2">
              <h2 className="text-[14px] text-[rgba(0,0,0,0.5)] ml-6">
                invitations(2)
              </h2>
              <button className="text-[12px] font-sans font-bold text-[rgba(0,0,0,0.8)]">
                Show all
              </button>
            </div>
            <div className="border-b-2 border-[#E5E7EB] pb-2 m-3">
              <div className=" flex justify-between items-center px-3">
                <img
                  src="\src\assets\images\user.svg"
                  alt="user-logo"
                  className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                />
                <h2 className="font-bold text-[18px] text-black -ml-16 md:-ml-16">
                  Aniket Kelji
                </h2>

                <span className="text-[15px] text-[rgba(0,0,0,0.9)] pt-9 -ml-42 md:-ml-45">
                  Operations
                </span>
                <button className="text-[16px] text-[rgba(0,0,0,0.5)] font-bold md:-mr-28">
                  Ignore
                </button>
                <button className="text-[#2977c9] bg-white text-[12px] px-2 rounded-4xl [box-shadow:inset_0_0_0_1px_#0a66c2] py-1 sm:mb-2 font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                  Accept
                </button>
              </div>
            </div>
            <div className="border-b-2 border-[#E5E7EB] pb-2 m-3">
              <div className=" flex justify-between items-center px-3">
                <img
                  src="\src\assets\images\user.svg"
                  alt="user-logo"
                  className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                />
                <h2 className="font-bold text-[18px] text-black -ml-16 md:-ml-16">
                  Aniket Kelji
                </h2>

                <span className="text-[15px] text-[rgba(0,0,0,0.9)] pt-9 -ml-42 md:-ml-45">
                  Operations
                </span>
                <button className="text-[16px] text-[rgba(0,0,0,0.5)] font-bold md:-mr-28">
                  Ignore
                </button>
                <button className="text-[#2977c9] bg-white text-[12px] px-2 rounded-4xl [box-shadow:inset_0_0_0_1px_#0a66c2] py-1 sm:mb-2 font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                  Accept
                </button>
              </div>
            </div>
            <div className="border-b-2 border-[#E5E7EB] pb-2 m-3">
              <div className=" flex justify-between items-center px-3">
                <img
                  src="\src\assets\images\user.svg"
                  alt="user-logo"
                  className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                />
                <h2 className="font-bold text-[18px] text-black -ml-16 md:-ml-16">
                  Aniket Kelji
                </h2>

                <span className="text-[15px] text-[rgba(0,0,0,0.9)] pt-9 -ml-42 md:-ml-45">
                  Operations
                </span>
                <button className="text-[16px] text-[rgba(0,0,0,0.5)] font-bold md:-mr-28">
                  Ignore
                </button>
                <button className="text-[#2977c9] bg-white text-[12px] px-2 rounded-4xl [box-shadow:inset_0_0_0_1px_#0a66c2] py-1 sm:mb-2 font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                  Accept
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1">
            <div className="flex justify-around">
              <span className="ml-2 text-[15px] text-[rgba(0,0,0,0.8)]">
                Stay in touch through daily games
              </span>
              <button className="h-8 w-8 rounded-full bg-gray-200 pl-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  data-rtl="true"
                  data-supported-dps="16x16"
                  viewBox="0 0 16 16"
                  data-token-id="405"
                  width="16"
                  height="16"
                  aria-label=""
                >
                  <path d="M11 1 6.39 8 11 15H8.61L4 8l4.61-7z"></path>
                </svg>
              </button>
              <button className="h-8 w-8 rounded-full bg-gray-200 pl-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  data-rtl="true"
                  data-supported-dps="16x16"
                  viewBox="0 0 16 16"
                  data-token-id="126"
                  width="16"
                  height="16"
                  aria-label=""
                >
                  <path d="m5 15 4.61-7L5 1h2.39L12 8l-4.61 7z"></path>
                </svg>
              </button>
            </div>

            <div className="">
              <div className="flex justify-center items-start ml-6">
                <div className="flex m-3">
                  <img src="\src\assets\images\puzzel2 (1).svg" alt="" />
                  <span className="text-[15px] text-black ml-2">
                    Tango
                    <br />
                    <span className="text-[10px] text-[rgba(0,0,0,0.5)] text-nowrap ">
                      Harmonized the grid
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center m-3">
                  <img src="\src\assets\images\puzzel2 (2).svg" alt="" />
                  <span className="text-[15px] text-black ml-2">
                    Queens
                    <br />
                    <span className="text-[10px] text-[rgba(0,0,0,0.5)]  text-nowrap">
                      Crown each regions
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center m-3">
                  <img src="\src\assets\images\puzzel2 (3).svg" alt="" />
                  <span className="text-[15px] text-black ml-2">
                    Pinpoint
                    <br />
                    <span className="text-[10px] text-[rgba(0,0,0,0.5)]  text-nowrap">
                      {" "}
                      Guess the category
                    </span>
                  </span>
                </div>
                <div className="flex items-center m-3">
                  <img src="\src\assets\images\puzzel4.svg" alt="" />
                  <span className="text-[15px] text-black ml-2">
                    Crossclimb
                    <br />
                    <span className="text-[10px] text-[rgba(0,0,0,0.5)]  text-nowrap">
                      Unlock & trivia ladder
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1">
            <div className="flex items-center px-4 justify-between py-2">
              <h2 className="text-[15px] text-[rgba(0,0,0,0.8)] ml-6">
                People you may know in Banao Technology
              </h2>
              <button className="text-[12px] font-sans font-bold text-[rgba(0,0,0,0.8)]">
                Show all
              </button>
            </div>
            <div className="flex flex-wrap iteceq">
              <div className="text-center h-fit w-40 text-wrap m-4">
                <div className="bg-[url(\src\assets\images\card-bg.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] flex ">
                  <img
                    src="\src\assets\images\card-bg.svg"
                    alt="card-bg"
                    className="sm:h-fit w-fit"
                  />
                  <button className=" bg-gray-800 text-white h-8 w-8 rounded-full pt-1 -ml-9 mt-2 sm:mb-2 md:-ml-15  sm:-ml-15 opacity-70">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="bg-[url(\src\assets\images\user.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] ">
                  <img
                    src="\src\assets\images\user.svg"
                    alt="user-photo"
                    className="h-15 w-15 ml-12 -mt-11 rounded-full "
                  />
                </div>

                <div>
                  <h1 className="text-[15px] font-sans text-black font-semibold ml-6">
                    Shadab Qureshi
                  </h1>
                </div>

                <p className="text-[12px] text-[rgba(0,0,0,0.9)] ml-6 ">
                  Strategic Business Development
                </p>

                <h2 className="ml-6 text-[12px]">Banao Technologies</h2>

                <button className="text-[#2977c9] bg-white text-[12px] px-2 rounded-4xl [box-shadow:inset_0_0_0_1px_#0a66c2] py-1 sm:mb-2 font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                  Add profile section
                </button>
              </div>
              <div className="text-center h-fit w-40 text-wrap m-4">
                <div className="bg-[url(\src\assets\images\card-bg.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] flex ">
                  <img
                    src="\src\assets\images\card-bg.svg"
                    alt="card-bg"
                    className="sm:h-fit w-fit"
                  />
                  <button className=" bg-gray-800 text-white h-8 w-8 rounded-full pt-1 -ml-9 mt-2 sm:mb-2 md:-ml-15  sm:-ml-15 opacity-70">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="bg-[url(\src\assets\images\user.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] ">
                  <img
                    src="\src\assets\images\user.svg"
                    alt="user-photo"
                    className="h-15 w-15 ml-12 -mt-11 rounded-full "
                  />
                </div>

                <div>
                  <h1 className="text-[15px] font-sans text-black font-semibold ml-6">
                    Shadab Qureshi
                  </h1>
                </div>

                <p className="text-[12px] text-[rgba(0,0,0,0.9)] ml-6 ">
                  Strategic Business Development
                </p>

                <h2 className="ml-6 text-[12px]">Banao Technologies</h2>

                <button className="text-[#2977c9] bg-white text-[12px] px-2 rounded-4xl [box-shadow:inset_0_0_0_1px_#0a66c2] py-1 sm:mb-2 font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                  Add profile section
                </button>
              </div>
              <div className="text-center h-fit w-40 text-wrap m-4">
                <div className="bg-[url(\src\assets\images\card-bg.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] flex ">
                  <img
                    src="\src\assets\images\card-bg.svg"
                    alt="card-bg"
                    className="sm:h-fit w-fit"
                  />
                  <button className=" bg-gray-800 text-white h-8 w-8 rounded-full pt-1 -ml-9 mt-2 sm:mb-2 md:-ml-15  sm:-ml-15 opacity-70">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div className="bg-[url(\src\assets\images\user.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] ">
                  <img
                    src="\src\assets\images\user.svg"
                    alt="user-photo"
                    className="h-15 w-15 ml-12 -mt-11 rounded-full "
                  />
                </div>

                <div>
                  <h1 className="text-[15px] font-sans text-black font-semibold ml-6">
                    Shadab Qureshi
                  </h1>
                </div>

                <p className="text-[12px] text-[rgba(0,0,0,0.9)] ml-6 ">
                  Strategic Business Development
                </p>

                <h2 className="ml-6 text-[12px]">Banao Technologies</h2>

                <button className="text-[#2977c9] bg-white text-[12px] px-2 rounded-4xl [box-shadow:inset_0_0_0_1px_#0a66c2] py-1 sm:mb-2 font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                  Add profile section
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Network;
