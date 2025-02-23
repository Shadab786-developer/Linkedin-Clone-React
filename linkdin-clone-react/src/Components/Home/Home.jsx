// Import required dependencies
// React for creating components
// Link for navigation between pages
// useSelector & useDispatch for Redux state management
// Redux actions for managing posts and user images
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  addPostToHome,
  removePostToHome,
} from "../../Features/HomePost/HomepostSlice";

import { updateImage, addImage } from "../../Features/Userimage/UserImageSlice";
import {
  addPostToProfile,
  removePostToProfile,
} from "../../Features/ProfilePost/ProfilepostSlice";

function Home() {
  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Get posts data from Redux store
  const homePosts = useSelector((state) => state.homePosts.homePost);

  // State for managing UI dropdowns/modals
  const [isClicked, setIsClicked] = useState({
    posts: false,
  });

  // Get user info from Redux store
  const users = useSelector((state) => state.userInfo.usersInfo);

  // Handle profile image upload
  const handleProfileImage = (event) => {
    // Convert uploaded file to data URL and dispatch to Redux
    const file = event.target.files[0];
    if (file) {
      const imageUrl = new FileReader();
      imageUrl.onload = () => {
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

  // Get user image from Redux store
  const userImg = useSelector((state) => state.userImg.userImage);

  // Set default user image on component mount if none exists
  useEffect(() => {
    if (userImg.length === 0) {
      dispatch(
        addImage({
          profileImage: "/src/assets/images/user.svg",
          timestamp: new Date().toISOString(),
        })
      );
    }
  }, [userImg]);

  // Handle post image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = new FileReader();
      imageUrl.onload = () => {
        setPostInfo((prev) => ({
          ...prev,
          post_image: imageUrl.result,
          post_comment: 0,
        }));
      };
      imageUrl.readAsDataURL(file);
    }
  };

  // State for new post data
  const [postInfo, setPostInfo] = useState({
    // Post information structure
    suge_user_image: `https://media.licdn.com/dms/image/v2/C4D03AQHtC6A6TOLqGw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1585681813357?e=1744848000&v=beta&t=NmR3JVyed0ZH92XeQXl9Z7WyFQzaYNqj9ma2hO9w1k4`,
    suge_user_name: "Jan Oberhauser",
    post_user_name: "Hammad Tahir",
    post_theory: ``,
    post_image: `https://media.licdn.com/dms/image/v2/D4E22AQGtF8cBxHmRsw/feedshare-shrink_800/B4EZTqKlyxGYAk-/0/1739095433606?e=1741824000&v=beta&t=XpVn139rs800SNRH6znpEicT_5dvHOTOXg4UEhN81oo`,
    post_video: ``,
    post_likes: 160,
    post_comment: 21,
    post_reposots: 3,
  });

  // Handle post text input changes
  const handlePostOnChange = (e) => {
    // Update post info state when user types
    const { name, value } = e.target;
    setPostInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle post submission
  const handleOnClick = (e) => {
    // Create and dispatch new post
    e.preventDefault();
    if (!postInfo.post_theory.trim() && !postInfo.post_image) {
      return;
    }
    const newPost = {
      id: crypto.randomUUID(),
      ...postInfo,
      post_time: "now",
      timestamp: new Date().toISOString(),
    };
    dispatch(addPostToHome(newPost));
    dispatch(addPostToProfile(newPost));
    setPostInfo((prev) => ({
      ...prev,

      post_user_name: ``,
      post_time: ``,
      post_theory: ``,
      post_image: ``,
      post_video: ``,
      post_likes: 0,
      post_comment: 0,
      post_reposots: 0,
    }));
    setIsClicked((prev) => ({ ...prev, post: false }));
  };

  // Toggle dropdown menus/modals
  const toggleDropdown = (menu) => {
    setIsClicked((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    // Main layout structure
    <div className="pt-14 max-w-full  min-h-screen relative z-0">
      {/* Grid layout for responsive design */}
      <div className="max-w-[1128px] mx-auto px-4 relative z-10">
        {/* Three column layout */}
        <div className="md:grid md:grid-cols-12 md:gap-6 flex flex-col py-5 relative z-20">
          {/* Left sidebar - Profile section */}
          <div className="col-span-3 md:col-span-4 lg:col-span-3 relative z-30  ">
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] ">
              {" "}
              <div className="text-start">
                <div className="bg-[url(\src\assets\images\card-bg.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] ">
                  <img
                    src={
                      userImg.length > 0
                        ? userImg[userImg.length - 1].bgImage
                        : "/src/assets/images/card-bg.svg"
                    }
                    alt="card-bg"
                    className="h-[90px] sm:h-[100px] w-full md:h-[110px]"
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
                    className="h-20 w-20 md:h-30 md:w-30 ml-6 rounded-full "
                  />
                </div>
                <button
                  onClick={() =>
                    document.getElementById("profileImage").click()
                  }
                  type="button"
                >
                  <svg
                    role="none"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    data-test-icon="add-small"
                    className="bg-[#2977c9] rounded-full 
                p-1 md:ml-28 md:mb-4 md:h-10 md:w-10 h-6 w-6 md:mt-3 ml-20 -mt-3"
                  >
                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z" fill="#ffffff" />
                  </svg>
                </button>
              </div>
              <div>
                <h1 className="text-[30px] font-sans text-black font-semibold ml-6">
                  {users.length > 0
                    ? users[users.length - 1].first_name
                    : "JOHN"}{" "}
                  {users.length > 0
                    ? users[users.length - 1].last_name
                    : "Mathus"}
                </h1>
              </div>
              <p className="text-[18px] text-[rgba(0,0,0,0.9)] ml-6">
                {users.length > 0 ? users[users.length - 1].position : "Any"}
              </p>
              <p className="text-[15px] text-[rgba(0,0,0,0.5)] ml-6">
                {users.length > 0 ? users[users.length - 1].country : "US"},
                {users.length > 0 ? users[users.length - 1].city : "Claifornia"}{" "}
              </p>
              <h2 className="ml-6">
                {users.length > 0
                  ? users[users.length - 1].industry
                  : "Finence Industry"}
              </h2>
            </div>
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] ">
              <p className="text-[15px] text-[rgba(0,0,0,0.5)] ml-6">
                Strenghten your profile with an AI writing assistant
              </p>
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
              Try Sale Nav for 0
            </div>
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] ">
              <Link>
                <span className="text-[16px] text-black ml-6">
                  Connections{" "}
                </span>
                <br />
                <span className="text-[13px] text-[rgba(0,0,0,0.5)] ml-6">
                  Grow your network
                </span>
              </Link>
              <br />
              <span className="text-[16px] text-black ml-6">Invitation</span>
            </div>
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] ">
              <div className="flex ml-6">
                <img src="\src\assets\images\item-icon.svg" alt="save-logo" />
                <span className="text-[16px] font-sans font-semibold ml-2.5">
                  Saved items
                </span>
              </div>
              <div className="flex ml-6">
                <svg
                  className=" h-8 w-8"
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
                    d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"
                    fill="#000000"
                  />
                </svg>
                <span className="text-[16px] font-sans font-semibold ml-2.5">
                  Groups
                </span>
              </div>
              <div className="flex ml-6">
                <svg
                  role="none"
                  className=" h-8 w-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  data-test-icon="image-medium"
                  type="image"
                >
                  <path d="M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0" />
                </svg>
                <span className="text-[16px] font-sans font-semibold ml-2.5">
                  Events
                </span>
              </div>
            </div>
          </div>

          {/* Main content - Posts feed */}
          <div className="col-span-6 md:col-span-8 lg:col-span-6 mb-4 md:mb-0 relative z-40">
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] ">
              <div className="flex justify-between items-center sm:mt-3.5 mt-2.5">
                <img
                  src={
                    userImg.length > 0
                      ? userImg[userImg.length - 1].profileImage
                      : "/src/assets/images/user.svg"
                  }
                  alt="user-logo"
                  className="h-20 w-20 sm:h-20 sm:w-20 ml-6 rounded-full sm:ml-3 sm:mr-2"
                />
                <input
                  type="text"
                  placeholder="Start a Post"
                  className="bg-white py-2.5 pl-4 pr-44 rounded-4xl text-start text-black sm:py-3 sm:pr-34 w-full sm:ml-2 sm:pl-2 border border-[rgba(0,0,0,0.15)]  focus:bg-gray-100 mr-3 active:border-none relative"
                  onClick={() => toggleDropdown("posts")}
                />
              </div>

              <div className="flex justify-around items-center mb-[3%] mt-[5%]">
                <button className="flex text-[rgba(0,0,0,0.8)] text-[15px]  ">
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
                      d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"
                      fill="#2977c9"
                    />
                  </svg>
                  <span className="ml-2">Media</span>
                </button>
                <button className="flex text-[rgba(0,0,0,0.8)] text-[15px]  ">
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
                      d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"
                      fill="#B45309"
                    />
                  </svg>
                  <span className="ml-2">Event</span>
                </button>
                <button className="flex text-[rgba(0,0,0,0.8)] text-[15px] ">
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
                      d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"
                      fill="#C2410C "
                    />
                  </svg>
                  <span className="ml-2">Write article</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="border-b-[1px] border-b-[rgba(0,0,0,0.3)] w-[90%]"></span>
              <span className="text-[9px] text-[rgba(0,0,0,0.6)]">
                Short by
              </span>
              <span className="text-[9px] text-[rgba(0,0,0,0.9)] flex items-center">
                Top
                <img
                  src="\src\assets\images\down-icon.svg"
                  alt="down-arrow"
                  className="h-2 w-2"
                />
              </span>
            </div>
            {homePosts.map((post) => (
              <div
                className="mb-2 bg-white rounded-sm transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] overflow-visible p-0 m-[0 0 8px]"
                key={post.id}
              >
                {isClicked.posts && (
                  <div className="fixed inset-0 z-[60] flex items-center justify-center ">
                    {/* Blur overlay */}
                    <div
                      className="fixed inset-0 bg-black opacity-30 backdrop-blur-3xl z-[61]"
                      // onClick={onClose}
                    ></div>

                    {/* Dialog content */}
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md z-[62] relative">
                      {/* Header */}
                      <div className="flex justify-start items-center p-4">
                        <img
                          src={
                            userImg.length > 0
                              ? userImg[userImg.length - 1].profileImage
                              : "/src/assets/images/user.svg"
                          }
                          alt="user-logo"
                          className="h-20 w-20 sm:h-20 sm:w-20 ml-2 rounded-full sm:ml-2 sm:mr-2"
                        />
                        <div className="flex flex-col justify-center">
                          <h1 className="text-[20px] font-sans text-black font-semibold ml-2">
                            {users.length > 0
                              ? users[users.length - 1].first_name
                              : "JOHN"}{" "}
                            {users.length > 0
                              ? users[users.length - 1].last_name
                              : "Mathus"}
                          </h1>
                          <span className="text-[15px] text-[rgba(0,0,0,0.9)] ml-2">
                            Post to Anyone
                          </span>
                        </div>

                        {/* <button
                          onClick={() =>
                            setIsClicked({ ...isClicked, posts: false })
                          }
                          className="text-gray-900 hover:bg-gray-200 h-8 w-8 md:h-12 md:w-12 rounded-full pt-1 md:ml-30 md:mb-6 ml-94 mb-2 cursor-pointer absolute z-[100]"
                        >
                          <span className="material-symbols-outlined ">
                            close
                          </span>
                        </button> */}
                      </div>

                      {/* Content */}
                      <div className="pb-6 px-6">
                        <textarea
                          placeholder="What do you want to talk about?"
                          className="w-full min-h-[150px] p-3 border-none outline-none resize-none text-[18px] placeholder:text-gray-600"
                          autoFocus
                          name="post_theory"
                          value={postInfo.post_theory}
                          onChange={handlePostOnChange}
                        ></textarea>
                      </div>
                      <div className="flex items-center ">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          id="imageUpload"
                          onChange={handleImageUpload}
                        />
                        <button
                          onClick={() =>
                            document.getElementById("imageUpload").click()
                          }
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="image-medium"
                            aria-hidden="true"
                            role="none"
                            data-supported-dps="24x24"
                            fill="#4B5563"
                            className="h-8 w-8 ml-5 "
                          >
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                          </svg>
                        </button>
                        <svg
                          role="none"
                          xmlns="http://www.w3.org/2000/svg"
                          id="hue-web-icons-sprite"
                          aria-hidden="true"
                          className="h-8 w-8 ml-5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="starburst-medium"
                            aria-hidden="true"
                            role="none"
                            data-supported-dps="24x24"
                            fill="#4B5563"
                          >
                            <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
                          </svg>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          id="calendar-medium"
                          aria-hidden="true"
                          role="none"
                          data-supported-dps="24x24"
                          fill="#4B5563"
                          className="h-8 w-8 ml-5"
                        >
                          <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
                        </svg>
                        <svg
                          role="none"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          data-test-icon="add-small"
                          fill="#4B5563"
                          className="h-8 w-8 ml-5"
                        >
                          <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z" />
                        </svg>
                      </div>
                      {/* Footer */}
                      <div className="flex gap-3 border-t border-gray-200 p-4 relative z-[63] mt-5 items-center">
                        <button
                          className="px-4 py-2 bg-[#0a66c2] text-white rounded-full hover:bg-[#004182] cursor-pointer transition-colors duration-200 "
                          onClick={handleOnClick}
                        >
                          Post
                        </button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          id="clock-medium"
                          aria-hidden="true"
                          role="none"
                          data-supported-dps="24x24"
                          fill="#4B5563"
                          className="h-8 w-8 relative z-[63]"
                        >
                          <g>
                            <path d="M2 12A10 10 0 1012 2 10 10 0 002 12zm2 0a8 8 0 118 8 8 8 0 01-8-8z"></path>
                            <path d="M15.1 12.63L13 11.42V7a1 1 0 00-2 0v5a1 1 0 00.51.85l2.59 1.52a1 1 0 101-1.74z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center pt-3 pb-3 justify-start ">
                  <button
                    className="cursor-pointer ml-3"
                    onClick={() => {
                      dispatch(removePostToHome(post));
                      dispatch(removePostToProfile(post));
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.78 12.72C14.07 13.01 14.07 13.49 13.78 13.78C13.63 13.93 13.44 14 13.25 14C13.06 14 12.87 13.93 12.72 13.78L8 9.06L3.28 13.78C3.13 13.93 2.94 14 2.75 14C2.56 14 2.37 13.93 2.22 13.78C1.93 13.49 1.93 13.01 2.22 12.72L6.94 8L2.22 3.28C1.93 2.99 1.93 2.51 2.22 2.22C2.51 1.93 2.99 1.93 3.28 2.22L8 6.94L12.72 2.22C13.01 1.93 13.49 1.93 13.78 2.22C14.07 2.51 14.07 2.99 13.78 3.28L9.06 8L13.78 12.72Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <button className="cursor-pointer ml-4">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.25 8C3.25 8.69 2.69 9.25 2 9.25C1.31 9.25 0.75 8.69 0.75 8C0.75 7.31 1.31 6.75 2 6.75C2.69 6.75 3.25 7.31 3.25 8ZM14 6.75C13.31 6.75 12.75 7.31 12.75 8C12.75 8.69 13.31 9.25 14 9.25C14.69 9.25 15.25 8.69 15.25 8C15.25 7.31 14.69 6.75 14 6.75ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <span className="text-[rgba(0,0,0,0.6)] text-[12px] font-sans pl-1.5 ml-64 md:ml-84">
                    Suggested
                  </span>
                </div>

                <hr className="border-[rgba(0,0,0,0.2)]" />
                <div className="flex flex-col">
                  <div className="flex justify-between mt-5">
                    <img
                      src={
                        post.post_user_image || userImg.length > 0
                          ? userImg[userImg.length - 1].profileImage
                          : "/src/assets/images/card-bg.svg"
                      }
                      alt="user-logo"
                      className="h-12 w-12 rounded-full items-center ml-3 mr-2 mb-6 mt-0 sm:h-20 sm:w-20"
                    />
                    <p className="text-[15px] text-[rgba(0,0,0,0.4)]">
                      <strong className="text-[17px] text-black">
                        {post.post_user_name ||
                          users[users.length - 1].first_name}{" "}
                        {users[users.length - 1].last_name}
                      </strong>{" "}
                      .3rd+ <br /> {post.post_user_description} <br />{" "}
                      {post.post_time}.
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                        className="ml-6 -mt-5"
                      >
                        <path
                          d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"
                          fill="#000000"
                        ></path>
                      </svg>
                    </p>

                    <button className="flex justify-center mt-2 text-[#2977c9] mr-[2%]">
                      <svg
                        role="none"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        data-test-icon="add-small"
                      >
                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z" fill="#2977c9" />
                      </svg>
                      <span className="ml-1.5 ">Follow</span>
                    </button>
                  </div>
                  <p className="text-[15px] text-[rgba(0,0,0,0.8)] p-6 -mt-10">
                    {post.post_theory}
                  </p>
                  {post.post_image ? (
                    <img src={post.post_image} alt="Posts-image" />
                  ) : (
                    <video
                      src={post.post_video}
                      controls
                      autoPlay
                      muted
                    ></video>
                  )}
                  <div className="flex items-center border-b border-b-[rgba(0,0,0,0.2)] p-3">
                    <img
                      src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                      alt="like"
                      className="h-4 w-4"
                    />
                    <img
                      src=" https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                      alt="good"
                      className="h-4 w-4 -ml-2"
                    />
                    <img
                      src="https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22"
                      alt="heart"
                      className="h-4 w-4 -ml-2"
                    />
                    <span className="sm:text-[15px] text-[rgba(0,0,0,0.5)]">
                      {post.post_likes}
                    </span>
                    <span className="sm:pl-[63%] md:pl-[55%]  sm:text-[15px] text-[rgba(0,0,0,0.5)]">
                      {post.post_comment} comments . {post.post_reposots}{" "}
                      reposts
                    </span>
                  </div>
                  <div className="flex justify-around items-center p-7">
                    <button className="flex justify-between items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="send-privately-small"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="h-6 w-6 "
                      >
                        <path d="M12.91 7l-2.25-2.57a8.21 8.21 0 01-1.5-2.55L9 1.37A2.08 2.08 0 007 0a2.08 2.08 0 00-2.06 2.08v1.17a5.81 5.81 0 00.31 1.89l.28.86H2.38A1.47 1.47 0 001 7.47a1.45 1.45 0 00.64 1.21 1.48 1.48 0 00-.37 2.06 1.54 1.54 0 00.62.51h.05a1.6 1.6 0 00-.19.71A1.47 1.47 0 003 13.42v.1A1.46 1.46 0 004.4 15h4.83a5.61 5.61 0 002.48-.58l1-.42H14V7zM12 12.11l-1.19.52a3.59 3.59 0 01-1.58.37H5.1a.55.55 0 01-.53-.4l-.14-.48-.49-.21a.56.56 0 01-.34-.6l.09-.56-.42-.42a.56.56 0 01-.09-.68L3.55 9l-.4-.61A.28.28 0 013.3 8h5L7.14 4.51a4.15 4.15 0 01-.2-1.26V2.08A.09.09 0 017 2a.11.11 0 01.08 0l.18.51a10 10 0 001.9 3.24l2.84 3z" />
                      </svg>
                      <span className="text-[17px] text-[rgba(0,0,0,0.7)] font-semibold font-sans pl-1">
                        Like
                      </span>
                    </button>
                    <button className="flex justify-between items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="send-privately-small"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z" />
                      </svg>
                      <span className="text-[17px] text-[rgba(0,0,0,0.7)] font-semibold font-sans pl-1">
                        Comments
                      </span>
                    </button>
                    <button className="flex justify-between items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="send-privately-small"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M4 10H2V5c0-1.66 1.34-3 3-3h3.85L7.42 0h2.44L12 3 9.86 6H7.42l1.43-2H5c-.55 0-1 .45-1 1v5zm8-4v5c0 .55-.45 1-1 1H7.15l1.43-2H6.14L4 13l2.14 3h2.44l-1.43-2H11c1.66 0 3-1.34 3-3V6h-2z" />
                      </svg>
                      <span className="text-[17px] text-[rgba(0,0,0,0.7)] font-semibold font-sans pl-1">
                        Repost
                      </span>
                    </button>
                    <button className="flex justify-between items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        id="send-privately-small"
                        aria-hidden="true"
                        role="none"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
                      </svg>
                      <span className="text-[17px] text-[rgba(0,0,0,0.7)] font-semibold font-sans pl-1">
                        {" "}
                        Send
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right sidebar - Trending topics */}
          <div className="col-span-3 md:col-span-12 lg:col-span-3 relative z-30">
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)]  ">
              <div className="ml-6 pt-3.5">
                <h1 className="text-[20px] text-black font-semibold mb-1.5  flex justify-between text-nowrap">
                  Trending Now
                  <img
                    src="\src\assets\images\feed-icon.svg"
                    alt=""
                    className="mr-1"
                  />
                </h1>
                <p className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                  curated by Linkedin news
                </p>
                <p className="text-[17px] text-black font-normal">
                  RBI's first rate out in 5 years
                </p>
                <span className="text-[10px] text-[rgba(0,0,0,0.5)] ">
                  19h ago
                </span>
                <span className="text-[10px] text-[rgba(0,0,0,0.5)] ">
                  182,996 readers
                </span>
              </div>

              <div className="flex flex-col justify-center items-start ml-6">
                <h1 className="mt-4 text-[20px] text-[rgba(0,0,0,0.5)] font-semibold mb-1.5">
                  Today Pzzles
                </h1>
                <div className="flex justify-between items-center">
                  <img src="\src\assets\images\puzzel2 (1).svg" alt="" />
                  <span className="text-[15px] text-black ml-2">
                    Tango
                    <br />
                    <span className="text-[10px] text-[rgba(0,0,0,0.5)] ml-2 text-nowrap">
                      Harmonized the grid
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center ">
                  <img src="\src\assets\images\puzzel2 (2).svg" alt="" />
                  <span className="text-[15px] text-black ml-2">
                    Queens
                    <br />
                    <span className="text-[10px] text-[rgba(0,0,0,0.5)] ml-2 text-nowrap">
                      Crown each regions
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <img src="\src\assets\images\puzzel2 (3).svg" alt="" />
                  <span className="text-[15px] text-black ml-2">
                    Pinpoint
                    <br />
                    <span className="text-[10px] text-[rgba(0,0,0,0.5)] ml-2 text-nowrap">
                      {" "}
                      Guess the category
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <img src="\src\assets\images\puzzel4.svg" alt="" />
                  <span className="text-[15px] text-black ml-2">
                    Crossclimb
                    <br />
                    <span className="text-[10px] text-[rgba(0,0,0,0.5)] ml-2 text-nowrap">
                      Unlock & trivia ladder
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] flex text-nowrap items-center">
                <span className="text-[15px] text-black bg-orange-300 p-2">
                  TIP
                </span>
                <p className="text-[15px] text-gray-500">
                  Try Linkedin on the Windows App
                </p>
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
                  <li className="text-[10px] text-gray-500">
                    Business Services
                  </li>
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
    </div>
  );
}

export default Home;
