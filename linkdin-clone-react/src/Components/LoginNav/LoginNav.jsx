import React from "react";
import { Link } from "react-router-dom";

// Simple navigation component for login page
function LoginNav() {
  return (
    <div>
      {/* // Navigation bar layout */}
      <div className="max-w-[1128px] m-auto p-[12px 0 16px] flex items-center relative justify-between flex-nowrap mt-2.5 sm:mt-3.5">
        {/* Logo */}
        <a
          href="#"
          className="w-[135px] h-[34px] max-w-[768px] sm:max-w-full sm:px-1.5 sm:py-2.5 px-2 py-1.5"
        ></a>
        <img src="\src\assets\images\login-logo.svg" alt="linkedin-logo" />
      </div>
      {/* Navigation links */}
      <div className="flex justify-between items-center flex-nowrap">
        <Link to={"/Sighin"}>
          <div className="text-[16px] sm:py-2.5 sm:px-3 text-[rgb(0,0,0,0.6)] sm:mr-3 hover:bg-[rgb(0,0,0,0.08)] hover:text-[rgb(0,0,0,0.9)] rounded-sm px-1 py-2">
            Join now
          </div>
        </Link>

        {/* Sign in/Join buttons */}
        <Link to={"/Sighin"}>
          <div className="[box-shadow:inset_0_0_0_1px_#0a66c2] rounded-3xl transition-[167ms] text-[16px] font-semibold leading-[40px] px-6 py-0 text-[#0a66c2] text-center bg-[rgb(0,0,0,0)] hover:bg-[rgba(112,181,249,0.15)] ">
            Sign in
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LoginNav;
