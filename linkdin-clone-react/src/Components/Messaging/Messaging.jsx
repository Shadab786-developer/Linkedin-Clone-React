import React from "react";
import { Link } from "react-router-dom";

function Messaging() {
  return (
    <div className="max-w-[1128px] ml-auto mr-auto">
      <div className="md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-6 md:grid-rows-auto mt-[5%] mb-[5%]  py-0 px-1.5 ">
        <div className="sm:col-span-8 ">
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 mt-16">
            <div className="flex justify-between items-center border-b border-b-[rgba(0,0,0,0.2)]">
              <div className="flex justify-evenly items-center m-4">
                <h1 className="text-[20px] text-black font-bold mr-3">
                  Messaging
                </h1>
                <div className="opacity-[1] grow relative">
                  <div className="max-w-[280px]">
                    <input
                      type="text"
                      placeholder="Search"
                      className="border-none shadow-none bg-[#eef3f8] rounded-xs w-[218px] pl-[20%] pr-10 leading-[1.75] font-normal text-[14px] h-[34px] border-[#dce6f1] align-text-top focus:[box-shadow:inset_0_0_0_1px_#0a66c2]"
                    />
                  </div>
                  <div className="w-[40px] rounded-[0 2px 2px 0] absolute top-3 left-0.5 flex justify-center m-0 pointer-events-none items-center  ">
                    <img
                      src="\src\assets\images\search-icon.svg"
                      alt="search-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly items-center m-4">
                <button className="h-9 w-9 p-2.5  sm:mb-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.25 8C3.25 8.69 2.69 9.25 2 9.25C1.31 9.25 0.75 8.69 0.75 8C0.75 7.31 1.31 6.75 2 6.75C2.69 6.75 3.25 7.31 3.25 8ZM14 6.75C13.31 6.75 12.75 7.31 12.75 8C12.75 8.69 13.31 9.25 14 9.25C14.69 9.25 15.25 8.69 15.25 8C15.25 7.31 14.69 6.75 14 6.75ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className="ml-2">
                  <svg
                    role="none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    data-test-icon="compose-medium"
                    fill="#000000"
                  >
                    <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="pt-3 pb-3 border-b border-b-[rgba(0,0,0,0.2)]">
              <button className="bg-green-800 text-white text-[15px] font-bold rounded-4xl px-4 py-0.5  m-2">
                Focused
              </button>
              <span className="border-r border-r-[rgba(0,0,0,0.3)] py-3 "></span>
              <button className="bg-white text-[rgba(0,0,0,0.7)] text-[15px] font-bold rounded-4xl px-4 py-0.5 border border-gray-400 active:bg-green-800 active:text-white  m-2">
                Unread
              </button>
              <button className="bg-white text-[rgba(0,0,0,0.7)] text-[15px] font-bold rounded-4xl px-4 py-0.5 border border-gray-400 active:bg-green-800 active:text-white m-2">
                My Connections
              </button>
              <button className="bg-white text-[rgba(0,0,0,0.7)] text-[15px] font-bold rounded-4xl px-4 py-0.5 border border-gray-400 active:bg-green-800 active:text-white m-2">
                InMail
              </button>
              <button className="bg-white text-[rgba(0,0,0,0.7)] text-[15px] font-bold rounded-4xl px-4 py-0.5 border border-gray-400  active:bg-green-800  active:text-white m-2">
                Starred
              </button>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-6 md:grid-rows-auto">
              <div className="md:col-span-3 col-span-8 border-r border-r-[rgba(0,0,0,0.3)]">
                <div className="overflow-hidden bg-white rounded-md mt-16">
                  <div className="flex justify-start items-center pb-4 w-[530px] mt-2 mb-2 ml-2">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5610AQG3yaEiSZbc1Q/image-shrink_480/B56ZSxqnV8HEAk-/0/1738147528925?e=1740034800&v=beta&t=Amc5pYdhkPsF0aszs4T8N0TabuNJWbWszszItgTroI0"
                      alt="work-icon"
                      className="h-15 w-15"
                    />
                    <div className="flex flex-col justify-between items-start ml-3">
                      <h2 className="text-[15px] font-bold text-black">
                        Amity University Online
                      </h2>
                      <h2 className="text-[15px] font-bold text-black">
                        Hi Shadab,
                      </h2>
                    </div>
                    <span className="text-[15px] font-extrabold text-black ml-60">
                      Feb
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="overflow-hidden  bg-white rounded-md flex justify-between items-center pt-6 md:w-[430px] sm:w-[700px] border-b border-b-[rgba(0,0,0,0.2)] pb-6">
                  <h2 className="text-[18px] font-bold text-black">
                    Amity University Online
                  </h2>
                  <div className="flex justify-between items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M3.25 8C3.25 8.69 2.69 9.25 2 9.25C1.31 9.25 0.75 8.69 0.75 8C0.75 7.31 1.31 6.75 2 6.75C2.69 6.75 3.25 7.31 3.25 8ZM14 6.75C13.31 6.75 12.75 7.31 12.75 8C12.75 8.69 13.31 9.25 14 9.25C14.69 9.25 15.25 8.69 15.25 8C15.25 7.31 14.69 6.75 14 6.75ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8,2.77,9.6,6l3.59.53-2.6,2.54.61,3.58L8,11,4.8,12.67l.61-3.58L2.81,6.55,6.4,6,8,2.77M8,.5,5.73,5.11.67,5.85,4.33,9.43,3.47,14.5,8,12.11l4.53,2.39-.86-5.07,3.66-3.58-5.06-.74L8,.5Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-center pb-4 md:w-[530px] sm:w-[700px] mt-2 mb-2">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5610AQG3yaEiSZbc1Q/image-shrink_480/B56ZSxqnV8HEAk-/0/1738147528925?e=1740034800&v=beta&t=Amc5pYdhkPsF0aszs4T8N0TabuNJWbWszszItgTroI0"
                      alt="work-icon"
                      className="h-15 w-15"
                    />
                    <div className="flex flex-col justify-between items-start ml-3">
                      <h2 className="text-[15px] font-bold text-black">
                        Amity University Online
                      </h2>
                      <h2 className="text-[15px] font-bold text-black">
                        Hi Shadab,
                      </h2>
                    </div>
                  </div>
                </div>
                <p className="text-[18px] text-gray-900 md:w-[430px] sm:w-[600px] text-wrap ml-4">
                  Ready to accelerate your career with a leadership-driven MBA?
                  Amity University Online offers an MBA with Campus Immersion
                  (For Executives), a transformational program designed for
                  professionals with 3+ years of experience who aspire to lead.
                  Why Choose This Program? ✅ Campus Immersions Across India –
                  16 immersions (2-3 days each) across 10+ campuses. ✅ Elite
                  Networking Opportunities – Engage with industry leaders and
                  like-minded professionals. ✅ Hybrid Learning for Busy
                  Executives – A perfect balance between work and education. ✅
                  Practical Leadership Skills – Learn from top executives, case
                  studies, and real-world scenarios. Limited seats available –
                  take the next step today! Download Brochure{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 mt-[25%] flex items-center">
          <div className=" ">
            <img
              src="https://media.licdn.com/dms/image/v2/D5610AQG3yaEiSZbc1Q/image-shrink_480/B56ZSxqnV8HEAk-/0/1738147528925?e=1740034800&v=beta&t=Amc5pYdhkPsF0aszs4T8N0TabuNJWbWszszItgTroI0"
              alt=""
              className="sm:ml-[15%]"
            />
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
        </div>
      </div>
    </div>
  );
}

export default Messaging;
