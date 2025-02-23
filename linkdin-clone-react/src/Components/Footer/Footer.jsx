import React, { useState } from "react";

// Footer component with links and language selector
function Footer() {
  // State for language dropdown
  const [isClicked, setIsClicked] = useState({
    language: false,
  });

  return (
    // Footer container
    <div className="bg-transparent mb-28">
      {/* Lists of footer links */}
      <div>
        <ul className="flex justify-between items-center">
          <li className="ml-6">
            <li className="text-[10px] text-gray-500">About</li>
            <li className="text-[10px] text-gray-500">Privacy & Terms</li>
            <li className="text-[10px] text-gray-500">Sale Solution</li>
            <li className="text-[10px] text-gray-500">
              Professional Community Policies
            </li>
            <li className="text-[10px] text-gray-500">Safety Center</li>
          </li>
          <li className="ml-6">
            <li className="text-[10px] text-gray-500">Accessibility</li>
            <li className="text-[10px] text-gray-500">Careers</li>
            <li className="text-[10px] text-gray-500">Ad Choices</li>
            <li className="text-[10px] text-gray-500">Mobile</li>
          </li>
          <li className="ml-6">
            <li className="text-[10px] text-gray-500">Talent Solution</li>
            <li className="text-[10px] text-gray-500">Marketting Solutions</li>
            <li className="text-[10px] text-gray-500">Advertising</li>
            <li className="text-[10px] text-gray-500">Small Business</li>
          </li>
          <li className="ml-6">
            <li className="text-[10px] text-gray-700 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="question-medium"
                aria-hidden="true"
                role="none"
                data-supported-dps="24x24"
                fill=" #6B7280"
                className="h-5 w-5"
              >
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25zm1.41-5.46L13 13v1h-2v-2.21l1.49-.79C13.82 10.34 14 9.77 14 9.3c0-.78-.92-1.3-2.3-1.3A7.12 7.12 0 008 9.24V7a8 8 0 013.7-1c3 0 4.3 1.55 4.3 3.3a3.91 3.91 0 01-2.59 3.49z"></path>
              </svg>
              <span className="text-[12px] text-gray-900 flex flex-col">
                Questions?
                <span className="text-[8px] text-gray-500 -mt-1">
                  Visit our Help Center.
                </span>
              </span>
            </li>
            <li className="text-[10px] text-gray-700 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="settings-medium"
                aria-hidden="true"
                role="none"
                data-supported-dps="24x24"
                fill=" #6B7280"
                className="h-5 w-5"
              >
                <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
              </svg>
              <span className="text-[12px] text-gray-900 flex flex-col">
                Manage your account and privacy
                <span className="text-[8px] text-gray-500 -mt-1">
                  Go to your Settings.
                </span>
              </span>
            </li>
            <li className="text-[10px] text-gray-700 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="shield-medium"
                aria-hidden="true"
                role="none"
                data-supported-dps="24x24"
                fill=" #6B7280"
                className="h-5 w-5"
              >
                <path d="M12 2L3 5v6c0 5 3.12 8.81 7.77 10.56L12 22l1.27-.44C17.9 19.81 21.01 16 21.01 11V5L12 2zm-.53 17.8C7.6 18.35 5.01 15.1 5.01 11V6.44l7-2.32V20l-.54-.2z"></path>
              </svg>
              <span className="text-[12px] text-gray-900 flex flex-col">
                Recommendation transparency
                <span className="text-[8px] text-gray-500 -mt-1">
                  Learn more about Recommended Content.
                </span>
              </span>
            </li>
          </li>
          <li className="ml-6 mr-6 text-center">
            {isClicked.language && (
              <div className="overflow-hidden bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] w-[260px] overflow-y-scroll h-[300px]">
                {" "}
                <ul>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    English (English)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Bahasa Indonesia
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Bahasa Malaysia
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Čeština (Czech)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Dansk (Danish)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Deutsch (German)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Español (Spanish)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Français (French)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Italiano (Italian)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Nederlands (Dutch)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Norsk (Norwegian)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Polski (Polish)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Português (Portuguese)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Suomi (Finnish)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Svenska (Swedish)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Türkçe (Turkish)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Ελληνικά (Greek)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Русский (Russian)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    עברית (Hebrew)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    العربية (Arabic)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    हिन्दी (Hindi)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    ไทย (Thai)
                  </li>{" "}
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    日本語 (Japanese)
                  </li>
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    简体中文 (Chinese)
                  </li>{" "}
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    繁體中文 (Chinese)
                  </li>{" "}
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    한국어 (Korean)
                  </li>{" "}
                  <li className="text-[15px] text-gray-900 m-2 border-b-1 border-gray-200">
                    Bahasa Indonesia
                  </li>
                </ul>
              </div>
            )}
            {/* Language selector */}
            <span className="text-[10px] text-gray-500 font-sans">
              Select Language
            </span>
            <div className="bg-transparent flex justify-between items-center">
              <input
                type="text"
                className=" px-10 py-1 z-[100]"
                placeholder="English"
                onClick={() =>
                  setIsClicked({ ...isClicked, language: !isClicked.language })
                }
              />
              <img
                src="\src\assets\images\down-icon.svg"
                alt="down-arrow"
                className="h-3 w-3 -ml-11 "
              />
            </div>
          </li>
        </ul>
        {/* Copyright notice */}
        <span className="text-[12px] text-gray-400 ml-6">
          Linkedin Corporation © 2025
        </span>
      </div>
    </div>
  );
}

export default Footer;
