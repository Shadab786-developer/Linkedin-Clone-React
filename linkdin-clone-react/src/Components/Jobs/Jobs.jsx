// Import necessary dependencies
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateImage, addImage } from "../../Features/Userimage/UserImageSlice";

function Jobs() {
  // Get userImage data from Redux store using useSelector
  const userImg = useSelector((state) => state.userImg.userImage);
  const dispatch = useDispatch();

  // Handle profile image upload and update in Redux store
  const handleProfileImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = new FileReader();
      imageUrl.onload = () => {
        // Dispatch action to update image in Redux store
        dispatch(
          updateImage({
            type: "profile",
            imageUrl: imageUrl.result,
          })
        );
      };
      imageUrl.readAsDataURL(file);
    }
  };

  // On component mount, add default user image if none exists
  useEffect(() => {
    if (userImg.length === 0) {
      dispatch(
        addImage({
          profileImage: "/src/assets/images/user.svg",
          timestamp: new Date().toISOString(),
        })
      );
    }
  }, []);

  // Array of job listing data objects
  const jobsItems = [
    // Each job has an id, image, role, description and location
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D4D0BAQHhkpaac5S9nw/company-logo_100_100/company-logo_100_100/0/1719256480492?e=1747267200&v=beta&t=UFauDMO-6URlnSwI3bUpCZhFpQ4WQnreLg64uFEu8TQ`,
      job_role: `Business Development Manager (Freelancer)`,
      job_discrip: `Soul AI · Bengaluru, Karnataka, India (Remote)`,
      job_location: `Bengaluru, Karnataka, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C4D0BAQE_Flwnh4ReQw/company-logo_100_100/company-logo_100_100/0/1633029297406/nexcenglobal_logo?e=1747267200&v=beta&t=apEFqVRJOCLk-0TNUxQrOpz7SUKc1h4ighyIW2E0QoY`,
      job_role: `IT Business Development Manager`,
      job_discrip: `NexCen Global Inc · India (Remote)`,
      job_location: `India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C4E0BAQHRJTWLfxF3FA/company-logo_100_100/company-logo_100_100/0/1630653201181/aerosapien_technologies_logo?e=1747267200&v=beta&t=UFwBPfioZnycTgu_Sn_lsf94m3XSwAinPZgvH0s_7d4`,
      job_role: `
Business Development Manager`,
      job_discrip: `Aerosapien Technologies ™ · India (Remote)`,
      job_location: `India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D4E0BAQGRc7oKrPXHbw/company-logo_100_100/company-logo_100_100/0/1723144282648/mastercam_logo?e=1747267200&v=beta&t=ZLuieBadR92WGOv3dvhKe4eVhV5MkIwlz49n21rjotY`,
      job_role: `Business Development Manager, India

`,
      job_discrip: `Mastercam · Pune, Maharashtra, India (Remote)`,
      job_location: `Pune, Maharashtra, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C4E0BAQFRdeVKhqDwUw/company-logo_100_100/company-logo_100_100/0/1631357471727?e=1747267200&v=beta&t=FHWvw0SEk8qBZesY22gjLAkgMsXhdydMUdx-0hwTkiI`,
      job_role: `Business Development Manager

`,
      job_discrip: `E Connect Solutions Pvt. Ltd. · Bhopal, Madhya Pradesh, India (On-site)`,
      job_location: `Bhopal, Madhya Pradesh, India (On-site)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C560BAQF2zgG3GbVXPg/company-logo_100_100/company-logo_100_100/0/1641385139606/alankaram_logo?e=1747267200&v=beta&t=kInT_jPUljABCZInAtNwKDYBk4_VYACRYhX-zexCqpo`,
      job_role: `Business Development Manager

`,
      job_discrip: `Alankaram · Hyderabad, Telangana, India (Remote)`,
      job_location: `Hyderabad, Telangana, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C560BAQFcQkOvrD7s6w/company-logo_100_100/company-logo_100_100/0/1674402977924/shenzhen_absen_optoelectronic_co__ltd_logo?e=1747267200&v=beta&t=5JY-hCLs49oWqOgrTpdWPexJeOtPbRKXS_6pqzhoLUg`,
      job_role: `Business Development Manager (India)`,
      job_discrip: `Absen · India (Remote)`,
      job_location: `India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C560BAQGtdjsCU9LXZg/company-logo_100_100/company-logo_100_100/0/1650861658520/cloudphysician_logo?e=1747267200&v=beta&t=JaYBTy80iit--ysbFQmi4yxQQV-6R6LMBlHzymyLiio`,
      job_role: `Business Development Manager - Indore
`,
      job_discrip: `Cloudphysician · Indore, Madhya Pradesh, India (On-site)`,
      job_location: `Indore, Madhya Pradesh, India (On-site)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D4E0BAQFdXNZHoHFaCQ/company-logo_100_100/company-logo_100_100/0/1737396344248/innova_solutions_logo?e=1747267200&v=beta&t=cDfHMHZ3c7ZycvCXYgv7p8yuknFYTbGOxH3a6M0mw1g`,
      job_role: `Business Development Manager`,
      job_discrip: `Innova Solutions · India (Remote)`,
      job_location: `India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D4D0BAQHIO0GUvjNApQ/company-logo_100_100/company-logo_100_100/0/1701068729313/gedu_services_logo?e=1747267200&v=beta&t=BtFDv5D82TZfaLRsp8EKUCn0uCQD3sXFNSHwo97letE`,
      job_role: `Business Development Manager`,
      job_discrip: `GEDU Services · Rajasthan, India (Remote)`,
      job_location: `Rajasthan, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C510BAQEiOpYqhSiUcg/company-logo_100_100/company-logo_100_100/0/1630602503953/eternal_robotics_logo?e=1747267200&v=beta&t=-_m3mZDD8EtTQ_wLR1DBEzpu5u5vbhZLjHwISXr5hFk`,
      job_role: `Business Development Manager`,
      job_discrip: `Eternal Robotics · Ahmedabad, Gujarat, India (Remote)`,
      job_location: `Ahmedabad, Gujarat, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D4E0BAQGbbHq1QXpkoQ/company-logo_100_100/company-logo_100_100/0/1715583743965/beecowise_logo?e=1747267200&v=beta&t=yGu70LNEy0UFwTt-70bd5YV26Rh2HboN7s0zMsvNIqs`,
      job_role: `Business Development Manager (Commission-based)`,
      job_discrip: `Ecowiser · Delhi, India (Remote) · ₹20K/month - ₹50K/month`,
      job_location: `Delhi, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D560BAQF0M3RkC6GsvQ/company-logo_100_100/company-logo_100_100/0/1699522307937/ota_insight_logo?e=1747267200&v=beta&t=Y4XPEYVnkZK6MdVvSo4dgPpfWp3Hz6ojQGcjgLA_3QI`,
      job_role: `Business Development Manager - India
 
 `,
      job_discrip: `Lighthouse · Greater Delhi Area (Remote)`,
      job_location: `Greater Delhi Area (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D4E0BAQGQIOfPT1K0Hw/company-logo_100_100/company-logo_100_100/0/1725531891062/zencongroup_logo?e=1747267200&v=beta&t=-xmHrz4Yo20tpnvFQKfzGNCP590-7tVQf9dEEoFpqwI`,
      job_role: `Business Development Manager
 
 `,
      job_discrip: `Zencon Group, NMSDC Certified · Hyderabad, Telangana, India (Remote)`,
      job_location: `Hyderabad, Telangana, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C4D0BAQHYlb-q9P0vcA/company-logo_100_100/company-logo_100_100/0/1659687112292/igtsolutions_logo?e=1747267200&v=beta&t=0iZThsSW8LoL0mqo59-0qwgU5IYSKDmBKp4Bu1tY7nQ`,
      job_role: `Alliances Manager
 
 `,
      job_discrip: `IGT Solutions · Pune, Maharashtra, India (Remote)`,
      job_location: `Pune, Maharashtra, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D4E0BAQG4UObPYXHORA/company-logo_100_100/company-logo_100_100/0/1663754757112?e=1747267200&v=beta&t=FhH4kv9QqosuWu052sodioFih_HahIU5W611C-L_0Tc`,
      job_role: `Business development Manager (API)
 
 `,
      job_discrip: `Barrington James · India (Remote)`,
      job_location: `India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D560BAQF450_26tI49w/company-logo_100_100/company-logo_100_100/0/1711601682427/techdata_apac_logo?e=1747267200&v=beta&t=WVLDoxWlHfbVII_qNTvRQVKHl0qJgE0DEbH4ZBkMgYE`,
      job_role: `Business Development Manager- Autodesk
 
 `,
      job_discrip: `Tech Data APAC · Maharashtra, India (Remote)`,
      job_location: `Maharashtra, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/D560BAQHr7jSJF_ifZQ/company-logo_100_100/company-logo_100_100/0/1689285962075/infoway_solutions_logo?e=1747267200&v=beta&t=lptRhPWYi6zq9Ti-SBI_YsT0Vj14ebAlpDxFKUBG-8U`,
      job_role: `Business Development Manager
 
 `,
      job_discrip: `Info Way Solutions · India (Remote)`,
      job_location: `India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C4D0BAQF6j92rdy-2gQ/company-logo_100_100/company-logo_100_100/0/1630556093305/radio_holland_logo?e=1747267200&v=beta&t=6ww5oI88bxltFMq4ron743FT7yv7bNxoimz6tSHPlAs`,
      job_role: `Business Development Manager (Based in Mumbai, India)
 
 `,
      job_discrip: `Radio Holland · Mumbai, Maharashtra, India (Remote)`,
      job_location: `Mumbai, Maharashtra, India (Remote)`,
    },
    {
      id: crypto.randomUUID(),
      job_image: `https://media.licdn.com/dms/image/v2/C560BAQEDy_kQ77IsYA/company-logo_100_100/company-logo_100_100/0/1670827332017/genesolutions_logo?e=1747267200&v=beta&t=ve9Z6epWC8hSEotHdKHNvNffVWeHmOwbMhPWnzHQBxA`,
      job_role: `Business Development Manager

 `,
      job_discrip: `Gene Solutions · Mumbai Metropolitan Region (Remote)`,
      job_location: `Mumbai Metropolitan Region (Remote)`,
    },
  ];

  return (
    // Main container with max width and auto margins
    <div className="max-w-[1128px] ml-auto mr-auto">
      {/* Grid layout for responsive design */}
      <div className="md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-6 md:grid-rows-auto mt-[5%] mb-[5%] flex flex-col py-0 px-1.5 ">
        {/* Left sidebar with user profile */}
        <div className="sm:col-span-5 ">
          {/* Profile card */}
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 mt-16">
            <div className="text-start">
              <div className="bg-[url(\src\assets\images\card-bg.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] ">
                <img
                  src={
                    userImg.length > 0
                      ? userImg[userImg.length - 1].bgImage
                      : "/src/assets/images/card-bg.svg"
                  }
                  alt="card-bg"
                  className="h-[150px] w-full"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfileImage}
                style={{ display: "none" }}
                id="profileImage"
                name="profileImage"
              />
              <div className="bg-[url(\src\assets\images\user.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] ">
                <img
                  src={
                    userImg.length > 0
                      ? userImg[userImg.length - 1].profileImage
                      : "/src/assets/images/user.svg"
                  }
                  alt="user-photo"
                  className="md:h-30 md:w-30 h-20 w-20 ml-6 mt-14 rounded-full "
                />
              </div>
              <button>
                <svg
                  role="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="add-small"
                  className="bg-[#0a66c2] rounded-full 
                p-1 md:ml-28 md:mb-4 md:h-10 md:w-10 h-6 w-6 md:mt-3 ml-20 -mt-3"
                >
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z" fill="#ffffff" />
                </svg>
              </button>
            </div>

            <div>
              <h1 className="text-[30px] font-sans text-black font-semibold ml-6">
                Shadab Qureshi
              </h1>

              <p className="text-[18px] text-[rgba(0,0,0,0.9)] ml-6">
                Strategic Business Development
              </p>
              <p className="text-[15px] text-[rgba(0,0,0,0.5)] ml-6">
                Bilasput , chhattisgarh, India
              </p>
              <h2 className="ml-6">Banao Technologies</h2>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 mt-8">
            <div className="p-12">
              <ul>
                <li className="flex justify-start items-center pb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M7 4a2 2 0 11-2-2 2 2 0 012 2zm2-1v2h12V3zm-4 7a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9zm-4 5a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9z"></path>
                  </svg>
                  <span className="ml-2.5 text-[15px] text-[rgba(0,0,0,0.8)]">
                    Preferences
                  </span>
                </li>
                <li className="flex justify-start items-center pb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                  </svg>
                  <span className="ml-2.5 text-[15px] text-[rgba(0,0,0,0.8)]">
                    My jobs
                  </span>
                </li>
                <li className="flex justify-start items-center pb-12 mb-12 border-b-1 border-b-[rgba(0,0,0,0.3)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path
                      d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                      fill="#f8c77e"
                    ></path>
                    <path
                      d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                      fill="#e7a33e"
                    ></path>
                  </svg>
                  <span className="ml-2.5 text-[15px] text-[rgba(0,0,0,0.8)]">
                    My Career insights
                  </span>
                </li>
                <li className="flex justify-start items-center pb-6">
                  <svg
                    role="none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    data-test-icon="compose-medium"
                    fill="#0a66c2"
                  >
                    <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z" />
                  </svg>
                  <span className="ml-2.5 text-[15px] text-[#0a66c2]">
                    Post a free job
                  </span>
                </li>
              </ul>
            </div>
          </div>
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
        {/* Main content area */}
        <div className="sm:col-span-7 md:mt-[13.5%] lg:mt-[10%]">
          {/* Job listings sections */}
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-2 flex justify-around">
            <div className="ml-5">
              <h1 className="text-[30px] p-1.5 text-black font-bold">
                Top job picks for you
              </h1>
              <p className="text-[16px] p-1.5 text-[rgba(0,0,0,0.5)] ">
                Based on your profile, preferences, and activity like applies,
                searches, and saves
              </p>
              <div className="flex justify-between items-center m-4 border-b-2 border-b-[rgba(0,0,0,0.2)] pb-4">
                <img
                  src="\src\assets\images\whichwork.svg.svg"
                  alt="work-icon"
                  className="h-15 w-15"
                />
                <div className="flex flex-col justify-between items-start ml-3">
                  <a className="text-[15px] text-[#0a66c2] hover:border-b-2 hover:border-b-[#0a66c2] font-bold">
                    Business Development Manager (BDM) – India
                  </a>
                  <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-normal font-sans">
                    Sydney Accommodations and Hotels · Mumbai, Maharashtra,
                    India (Remote)
                  </span>
                  <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                    Mumbai, Maharashtra, India (Remote){" "}
                  </span>
                  <span className="text-[12px] text-[rgba(0,0,0,0.5)] ">
                    Viewed <strong>·</strong> Promoted
                  </span>
                </div>
                <button className="text-gray-900 h-8 w-8 rounded-full pt-1 pl-19 -mt-18 md:pl-5">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex justify-between items-center m-4 border-b-2 border-b-[rgba(0,0,0,0.2)] pb-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/C510BAQF7VQBWBOx7SA/company-logo_100_100/company-logo_100_100/0/1630625180685/dsi_consulting_logo?e=1747267200&v=beta&t=U74kLJtfZLNNQDmxpwoceohFJNM4BH9Dkle6vCd5xBI"
                  alt="work-icon"
                  className="h-15 w-15"
                />
                <div className="flex flex-col justify-between items-start ml-3">
                  <a className="text-[15px] text-[#0a66c2] hover:border-b-2 hover:border-b-[#0a66c2] font-bold">
                    Business Development Manager (Remote - 5+ years of
                    experience in ERP, cloud-based software / Utility industry
                    sales)
                  </a>
                  <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-normal font-sans">
                    Alphavima Technologies Inc · India (Remote)
                  </span>
                  <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                    India (Remote)
                  </span>
                  <span className="text-[12px] text-[rgba(0,0,0,0.5)] flex justify-between items-center ">
                    Viewed <strong>·</strong> Promoted
                    <img
                      src="\src\assets\images\home-logo.svg"
                      alt="Home-logo"
                      className="h-3 w-3 ml-2 mr-1"
                    />
                    Easy Apply
                  </span>
                </div>
                <button className="text-gray-900 h-8 w-8 rounded-full pt-1 pl-19 -mt-18 md:pl-5">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex justify-between items-center m-4 border-b-2 border-b-[rgba(0,0,0,0.2)] pb-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/D560BAQE2v5Ur4d1OnA/company-logo_100_100/company-logo_100_100/0/1686887292708/proxim_systems_logo?e=1747267200&v=beta&t=5pPT4Y5nXUtLHxOUXlRt3zhnJho5HVvhCgPTmxyD4bk"
                  alt="work-icon"
                  className="h-15 w-15"
                />
                <div className="flex flex-col justify-between items-start ml-3">
                  <a className="text-[15px] text-[#0a66c2] hover:border-b-2 hover:border-b-[#0a66c2] font-bold">
                    Business Development Manager, US IT Staffing
                  </a>
                  <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-normal font-sans">
                    Proxim Systems · India (Remote)
                  </span>
                  <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                    India (Remote)
                  </span>
                  <span className="text-[12px] text-[rgba(0,0,0,0.5)] flex justify-between items-center ">
                    Viewed <strong>·</strong> Promoted
                    <img
                      src="\src\assets\images\home-logo.svg"
                      alt="Home-logo"
                      className="h-3 w-3 ml-2 mr-1"
                    />
                    Easy Apply
                  </span>
                </div>
                <button className="text-gray-900 h-8 w-8 rounded-full pt-1 pl-19 -mt-18 md:pl-5">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <button className="text-[20px] text-[rgba(0,0,0,0.8)] text-center w-full font-sans font-bold pb-3">
                Show all →
              </button>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1 ">
            <div className="flex items-center px-4 border-b-2 border-b-[rgba(0,0,0,0.2)] py-2 -mt-1 border-t-4 border-t-orange-300">
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

              <span className="text-[15px] text-[rgba(0,0,0,0.7)] ml-2 tracking-widest">
                PREMIUM
              </span>
            </div>
            <h1 className="text-[25px] text-black font-normal font-sans ml-4 mt-4">
              Jobs where your're liely to hear back
            </h1>
            <span className="ml-4 text-[15px] text-[rgba(0,0,0,0.5)]">
              Apply to jobs where you'd be a to applicant
            </span>
            <div className="border-b-2 border-[#E5E7EB] m-3">
              <div className=" flex justify-start items-center ml-6">
                <img
                  src="\src\assets\images\user.svg"
                  alt="user-logo"
                  className="h-20 w-20 md:h-25 md:w-25 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-[18px] text-black ml-2">
                    See the full list of jobs where you’d be a top applicant
                  </h2>

                  <div className="flex items-center  p-3">
                    <img
                      src="https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAHzAAAAJGJiZDM1MGJkLTIzOTAtNDhmMS1hZTM5LTEzZDk2NWQ4ZDhjYQ.png"
                      alt="like"
                      className="h-6 w-6 rounded-full"
                    />
                    <img
                      src=" https://media.licdn.com/dms/image/v2/C4D03AQEOYRN0_6uKhw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1616388553643?e=1744848000&v=beta&t=rT7UBmj2_zrfzjhoBGAEYXGbGhzBlPdqAz7CIrZV-UI"
                      alt="good"
                      className="h-6 w-6 rounded-full -ml-2"
                    />
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQEul8QOTgMo1Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727070212030?e=1744848000&v=beta&t=VRw6EryOeG5a31oxxCAxcCycE_MF2l0pdhXMLoFnQGA"
                      alt="heart"
                      className="h-6 w-6 rounded-full -ml-2"
                    />
                    <span className="sm:text-[15px] text-[rgba(0,0,0,0.5)] ml-2">
                      Paul and millions of other members use Premium
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <button className="px-10 rounded-4xl ml-16 py-2 font-bold mt-2 m-4 bg-orange-300 hover:bg-orange-400 ">
                  <span className="text-[18px] text-[rgba(0,0,0,0.8)] ml-2">
                    Try Premium for 0
                  </span>
                </button>
                <span className="sm:text-[15px] text-[rgba(0,0,0,0.5)] ml-14">
                  1-month free trial. We’ll send you a reminder 7 days before
                  your trial ends.
                </span>
              </div>
            </div>

            <div className="flex justify-evenly items-center m-4 border-b-2 border-b-[rgba(0,0,0,0.2)] pb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/C560BAQG6KMZp1zAiTA/company-logo_100_100/company-logo_100_100/0/1630605289074/weareuplers_logo?e=1747267200&v=beta&t=7865Vp-0vI-brMuUsaejh1-GKzI0uD0Rtyq_tMAJyzQ"
                alt="work-icon"
                className="h-15 w-15"
              />
              <div className="flex flex-col justify-between items-start ml-3">
                <a className="text-[15px] text-[#0a66c2] hover:border-b-2 hover:border-b-[#0a66c2] font-bold">
                  AWS Alliance Manager
                </a>
                <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-normal font-sans">
                  Uplers · Amritsar, Punjab, India (Remote)
                </span>
                <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                  Amritsar, Punjab, India (Remote){" "}
                </span>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] flex">
                  Viewed <strong>·</strong> Promoted
                  <img
                    src="\src\assets\images\home-logo.svg"
                    alt="Home-logo"
                    className="h-3 w-3 ml-2 mr-1"
                  />
                  Easy Apply
                </span>
              </div>
              <button className="text-gray-900 h-8 w-8 rounded-full pt-1 pl-30 -mt-18 md:pl-5">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex justify-evenly items-center m-4 border-b-2 border-b-[rgba(0,0,0,0.2)] pb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/C510BAQFoltGMIXg2qQ/company-logo_100_100/company-logo_100_100/0/1630585490789/marquee_equity_logo?e=1747267200&v=beta&t=XFinmPQ1dC4cAa9JrtpLrzaFR3Wqc9T5D5frQ_1ckGQ"
                alt="work-icon"
                className="h-15 w-15"
              />
              <div className="flex flex-col justify-between items-start ml-3">
                <a className="text-[15px] text-[#0a66c2] hover:border-b-2 hover:border-b-[#0a66c2] font-bold">
                  Business Development Manager
                </a>
                <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-normal font-sans">
                  Marquee Equity · India (Remote)
                </span>
                <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                  India (Remote){" "}
                </span>
                <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                  Applicant review time is typically 1-2 weeks
                </span>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] flex">
                  Viewed <strong>·</strong> Promoted
                  <img
                    src="\src\assets\images\home-logo.svg"
                    alt="Home-logo"
                    className="h-3 w-3 ml-2 mr-1"
                  />
                  Easy Apply
                </span>
              </div>
              <button className="text-gray-900 h-8 w-8 rounded-full pt-1 pl-30 -mt-18 md:pl-5">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex justify-evenly items-center m-4 border-b-2 border-b-[rgba(0,0,0,0.2)] pb-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D0BAQEo1-75Bnm8Kg/company-logo_100_100/company-logo_100_100/0/1731938116080/nomadcredit_logo?e=1747267200&v=beta&t=Fsf0iJGm27MWcu32aE1_Y0R_bX5QSlFrs9rUCia6BH4"
                alt="work-icon"
                className="h-15 w-15"
              />
              <div className="flex flex-col justify-between items-start ml-3">
                <a className="text-[15px] text-[#0a66c2] hover:border-b-2 hover:border-b-[#0a66c2] font-bold">
                  Business Development Manager
                </a>
                <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-normal font-sans">
                  Nomad Credit · India (Remote)
                </span>
                <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                  India (Remote){" "}
                </span>
                <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                  Applicant review time is typically 1 day
                </span>
                <span className="text-[12px] text-[rgba(0,0,0,0.5)] flex">
                  Viewed <strong>·</strong> Promoted
                  <img
                    src="\src\assets\images\home-logo.svg"
                    alt="Home-logo"
                    className="h-3 w-3 ml-2 mr-1"
                  />
                  Easy Apply
                </span>
              </div>
              <button className="text-gray-900 h-8 w-8 rounded-full pt-1 pl-30 -mt-18 md:pl-5">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <button className="text-[20px] text-[rgba(0,0,0,0.8)] text-center w-full font-sans font-bold pb-3">
              Show all →
            </button>
          </div>

          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1">
            <h2 className="text-[25px] text-black font-normal font-sans ml-4 mt-4">
              Explore with job collections
            </h2>
            <span className="ml-4 text-[15px] text-[rgba(0,0,0,0.5)]">
              Based on your profile, preferences, and activity like applies,
              searches, and saves
            </span>

            {jobsItems.map((job) => (
              <div
                key={job.id}
                className="flex justify-between items-center border-b-2 border-b-[rgba(0,0,0,0.2)]"
              >
                <div className="flex justify-start text-start items-center m-4  pb-4">
                  <img
                    src={job.job_image}
                    alt="work-icon"
                    className="h-15 w-15 ml-4"
                  />
                  <div className="flex flex-col justify-between items-start ml-3">
                    <a className="text-[15px] text-[#0a66c2] hover:border-b-2 hover:border-b-[#0a66c2] font-bold text-wrap">
                      {job.job_role}
                    </a>
                    <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-normal font-sans text-wrap">
                      {job.job_discrip}
                    </span>
                    <span className="text-[15px] text-[rgba(0,0,0,0.5)] text-wrap">
                      {job.job_location}
                    </span>
                    <span className="text-[12px] text-[rgba(0,0,0,0.5)] flex text-wrap">
                      Viewed <strong>·</strong> Promoted
                      <img
                        src="\src\assets\images\home-logo.svg"
                        alt="Home-logo"
                        className="h-3 w-3 ml-2 mr-1"
                      />
                      Easy Apply
                    </span>
                  </div>
                </div>
                <button className="text-gray-900 h-8 w-8 rounded-full pt-1 -mt-18 ml-58 mr-5">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            ))}

            <button className="text-[20px] text-[rgba(0,0,0,0.8)] text-center w-full font-sans font-bold pb-3">
              Show all →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
