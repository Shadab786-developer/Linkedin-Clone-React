import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Features/UserProfile/UserProfileSlice";
import { addImage, updateImage } from "../../Features/Userimage/UserImageSlice";

// Import necessary dependencies
// React, useState for managing state, useEffect for side effects
// Redux hooks (useDispatch, useSelector) for state management
// Redux actions for updating user data and images

function Profile() {
  // State for managing profile edit dialog visibility
  const [isClicked, setIsClicked] = useState({
    profile: false,
  });

  // Get user data and images from Redux store
  const users = useSelector((state) => state.userInfo.usersInfo);
  const userImg = useSelector((state) => state.userImg.userImage);
  const profilePosts = useSelector((state) => state.profilePosts.profilePost);
  const dispatch = useDispatch();

  // Handle profile image upload
  // Uses FileReader to convert uploaded file to data URL
  // Dispatches action to update image in Redux store
  const handleProfileImage = (event) => {
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

  // Similar to handleProfileImage, but for background image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = new FileReader();
      imageUrl.onload = () => {
        dispatch(
          updateImage({
            type: "background",
            imageUrl: imageUrl.result,
          })
        );
      };
      imageUrl.readAsDataURL(file);
    }
  };

  // Initialize default profile and background images when component mounts
  useEffect(() => {
    if (userImg.length === 0) {
      dispatch(
        addImage({
          bgImage: "/src/assets/images/card-bg.svg",
          profileImage: "/src/assets/images/user.svg",
          timestamp: new Date().toISOString(),
        })
      );
    }
  }, []);

  // State for managing user form data
  const [userDetail, setUserDetail] = useState({
    first_name: "",
    last_name: "",
    additional_name: "",
    pronouns: "",
    headline: "",
    position: "",
    industry: "",
    country: "",
    city: "",
    imageBg: "",
    imageProfile: "",

    website_URL: ``,
  });

  // Handle changes in form inputs
  const handleUserInforChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  // Creates new user object and dispatches to Redux store
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: crypto.randomUUID(),
      ...userDetail,
      timestamp: new Date().toISOString(),
    };
    dispatch(addUser(newUser));
    console.log(users);

    setUserDetail({
      first_name: "",
      last_name: "",
      additional_name: "",
      pronouns: "",
      headline: "",
      position: "",
      industry: "",
      country: "",
      city: "",
      imageBg: "",
      imageProfile: "",
      website_URL: ``,
    });
    setIsClicked({ ...isClicked, profile: false });
  };

  // Component's JSX structure:
  // - Profile header with background and profile images
  // - Edit form dialog
  // - User information display
  // - Activity section
  // - Education and Skills sections
  return (
    <div className="max-w-[1128px] ml-auto mr-auto">
      <div className="md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-6 md:grid-rows-auto mt-[5%] mb-[5%] flex flex-col py-0 px-1.5 ">
        <div className="sm:col-span-8 ">
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 mt-16">
            <>
              <div className="text-start">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                  name="bgImage"
                />
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
                <button
                  className="ml-[90%] -mt-6"
                  onClick={() => document.getElementById("imageUpload").click()}
                  type="button"
                >
                  <span className="material-symbols-outlined bg-white h-8 w-8 rounded-full p-0.5 text-[#2977c9] md:z-100 absolute">
                    photo_camera
                  </span>
                </button>
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
                    className="md:h-50 md:w-50 h-40 w-40 ml-6 rounded-full "
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
                    className="bg-[#2977c9] rounded-full 
                  p-1 md:ml-48 md:mb-4 md:h-12 md:w-12 h-10 w-10 md:mt-16 ml-38 mt-8"
                  >
                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z" fill="#ffffff" />
                  </svg>
                </button>
              </div>
            </>
            <button
              className="ml-[90%] h-10 pt-2 w-10 text-center rounded-full hover:bg-gray-200 cursor-pointer md:z-100 absolute mt-12"
              onClick={() => setIsClicked({ ...isClicked, profile: true })}
            >
              <span className="material-symbols-outlined ">edit</span>
            </button>
            {isClicked.profile && (
              <div className="fixed inset-0 z-40 md:z-[110] flex items-center justify-center ">
                {/* Blur overlay */}
                <div className="fixed inset-0 bg-black opacity-30 backdrop-blur-3xl "></div>

                {/* Dialog content */}
                <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl md:max-h-[800px] max-h-[500px] z-40 relative  overflow-auto ">
                  {/* Header */}
                  <div className="flex justify-between items-center p-4 fixed z-40 bg-white w-[670px]  ">
                    <h1 className="text-[30px] font-sans text-black font-semibold ml-2 ">
                      Edit intro
                    </h1>

                    <button
                      onClick={() =>
                        setIsClicked({ ...isClicked, profile: false })
                      }
                      className="text-gray-900 hover:bg-gray-200 h-8 w-8 rounded-full pt-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="mt-[15%] ml-6 mr-6">
                    <div className="flex justify-start [box-shadow:inset_0_0_0_1px_#E5E5E5] p-6 m-4 ">
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
                      <span className="font-bold text-black ml-1">
                        Enhance your profile with premium{" "}
                      </span>
                    </div>
                    <form className=" flex flex-col" onSubmit={handleOnSubmit}>
                      <span className="text-[12px] text-[rgba(0,0,0,0.5)]">
                        * indicate required
                      </span>
                      <label className="text-[15px] text-[rgba(0,0,0,0.8)] mt-6">
                        First name*
                        <input
                          type="text"
                          name="first_name"
                          required
                          value={userDetail.first_name}
                          onChange={handleUserInforChange}
                          className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  p-1.5  "
                        />
                      </label>
                      <label className="text-[15px] text-[rgba(0,0,0,0.8)] mt-6">
                        Last name*
                        <input
                          className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  p-1.5"
                          name="last_name"
                          value={userDetail.last_name}
                          onChange={handleUserInforChange}
                          type="text"
                          required
                        />
                      </label>
                      <label className="text-[15px] text-[rgba(0,0,0,0.8)] mt-6 mb-6">
                        Additional name*
                        <input
                          className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  p-1.5"
                          name="additional_name"
                          value={userDetail.additional_name}
                          onChange={handleUserInforChange}
                          type="text"
                          required
                        />
                      </label>

                      <span className="text-[13px] text-[rgba(0,0,0,0.5)] pb-1.5">
                        Name pronunciation
                      </span>
                      <div className="flex items-center pb-6">
                        <img
                          src="\src\assets\images\feed-icon.svg"
                          alt="info-icon"
                          className="h-4 w-4"
                        />
                        <span className="text-[13px] text-gray-500 ml-1 ">
                          This can be added using our mobile app
                        </span>
                      </div>

                      <span className="text-[13px] text-[rgba(0,0,0,0.5)]">
                        Pronouns
                      </span>
                      <select
                        className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  text-[13px] p-1.5"
                        value={userDetail.pronouns}
                        onChange={handleUserInforChange}
                        name="pronouns"
                      >
                        <option value="She/Her" className="text-black">
                          Please select
                        </option>
                        <option value="She/Her">She/Her</option>
                        <option value="He/Him">He/Him</option>
                        <option value="They/Them">They/Them</option>
                        <option value="Custom">Custom</option>
                      </select>
                      <span className="text-[13px] text-[rgba(0,0,0,0.5)]">
                        Let others know how to refer to you
                      </span>

                      <h2 className="text-[14px] text-[rgba(0,0,0,0.5)] pt-4 pb-6">
                        Learn more about{" "}
                        <a
                          href="#"
                          className="text-[15px] font-bold text-[#0a66c2]"
                        >
                          gender pronouns
                        </a>
                      </h2>

                      <span className="text-[15px] text-[rgba(0,0,0,0.5)] ">
                        Headline*
                      </span>
                      <div className="[box-shadow:inset_0_0_0_1px_#000000] mb-10 p-6">
                        <input
                          className=" rounded-sm w-full  border-b border-b-gray-200"
                          type="text"
                          name="headline"
                          value={userDetail.headline}
                          onChange={handleUserInforChange}
                        />
                        <div className="flex items-center">
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
                          <span className="text-[13px] text-[rgba(0,0,0,0.5)] ml-1">
                            <a href="#" className="text-[#0a66c2] text-[15px]">
                              Get AI suggestions
                            </a>{" "}
                            with Premimum
                          </span>
                        </div>
                      </div>

                      <h3 className="text-[24px] text-black font-semibold font-sans pb-2">
                        Current position
                      </h3>
                      <label className="text-[15px] text-[rgba(0,0,0,0.8)] pb-8">
                        Position*
                        <input
                          name="position"
                          value={userDetail.position}
                          onChange={handleUserInforChange}
                          className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  p-1.5"
                          type="text"
                        />
                      </label>
                      <button className="flex items-center text-[#0a66c2] pb-8 ">
                        <svg
                          role="none"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          data-test-icon="add-small"
                          fill="#0a66c2"
                        >
                          <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z" />
                        </svg>
                        <span className="font-semibold ml-1 text-[14px] ">
                          Add new position
                        </span>
                      </button>
                      <div className="flex items-center pb-7">
                        <input
                          className="w-6 h-6 
  
    border-gray-300 
    rounded 
    focus:ring-[#0a66c2] 
    focus:ring-2
    hover:border-[#0a66c2]
    cursor-pointer
    transition-colors
    checked:bg-[#0a66c2]
    checked:border-[#0a66c2]"
                          type="checkbox"
                        />
                        <span className="text-[15px] text-[rgba(0,0,0,0.8)] ml-2">
                          Show current company in intro
                        </span>
                      </div>

                      <label className="text-[12px] text-[rgba(0,0,0,0.5)] pb-2">
                        Industry*
                        <input
                          name="industry"
                          className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  p-1.5 "
                          type="text"
                          value={userDetail.industry}
                          onChange={handleUserInforChange}
                          placeholder="Ex: Retail"
                        />
                      </label>
                      <h2 className="text-[14px] text-[rgba(0,0,0,0.5)] pb-10 ">
                        Lern more about{" "}
                        <a
                          href="#"
                          className="text-[15px] font-bold text-[#0a66c2]"
                        >
                          gender pronouns
                        </a>
                      </h2>
                      <h3 className="text-[24px] text-black font-semibold font-sans pb-6">
                        Education
                      </h3>
                      <button className="flex items-center text-[#0a66c2] pb-8">
                        <svg
                          role="none"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          data-test-icon="add-small"
                          fill="#0a66c2"
                        >
                          <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z" />
                        </svg>
                        <span className="font-semibold ml-1 text-[14px]">
                          Add new education
                        </span>
                      </button>
                      <h3 className="text-[24px] text-black font-semibold font-sans pb-2">
                        Location
                      </h3>
                      <label className="text-[15px] text-[rgba(0,0,0,0.5)] pb-6">
                        Country/Region
                        <input
                          name="country"
                          value={userDetail.country}
                          onChange={handleUserInforChange}
                          className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  p-1.5"
                          type="text"
                          placeholder="Ex:United State"
                        />
                      </label>
                      <label className="text-[15px] text-[rgba(0,0,0,0.5)] pb-10">
                        City
                        <input
                          name="city"
                          value={userDetail.city}
                          onChange={handleUserInforChange}
                          className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  p-1.5"
                          type="text"
                        />
                      </label>
                      <h3 className="text-[24px] text-gray-500 font-sans pb-2">
                        Contact info
                      </h3>
                      <span className="text-[15px] text-[rgba(0,0,0,0.6)] font-bold pb-8">
                        Add or edit your profile URL,email,and more
                      </span>
                      <button className="text-[#0a66c2] font-semibold text-[16px] pb-10 text-start ">
                        Edit contact info
                      </button>

                      <h3 className="text-[24px] text-black font-semibold font-sans pb-2">
                        Website
                      </h3>
                      <span className="text-[15px] text-[rgba(0,0,0,0.8)] pb-2">
                        Add a link that will appear at the top of your profile
                      </span>
                      <label className="text-[15px] text-[rgba(0,0,0,0.5)] pb-7">
                        Link
                        <input
                          name="website_URL"
                          value={userDetail.website_URL}
                          onChange={handleUserInforChange}
                          className="[box-shadow:inset_0_0_0_1px_#000000] rounded-sm w-full  p-1.5"
                          type="url"
                        />
                      </label>
                      <button
                        type="submit"
                        className="bg-[#2977c9] text-white text-[18px] w-30 ml-[80%] rounded-4xl py-1 mb-20 hover:bg-blue-900"
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            <div>
              <h1 className="text-[30px] font-sans text-black font-semibold ml-6 mt-12">
                {users.length > 0 ? users[users.length - 1].first_name : "JOHN"}{" "}
                {users.length > 0
                  ? users[users.length - 1].last_name
                  : "Mathus"}
              </h1>
              <button className="text-[#2977c9] flex items-center justify-center border-dashed border-2 border-[#2977c9] px-2 rounded-4xl ml-8 text-[15px] ">
                <svg
                  role="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="verified-small"
                >
                  <path
                    d="M8 15l-.86-.29C3.24 13.41 1 10.62 1 7V2.49L8 0l7 2.49V7c0 3.62-2.23 6.41-6.13 7.71L8 15zM3 3.9V7c0 3.53 2.6 5.09 4.78 5.82l.23.08.23-.08C10.01 12.23 13 10.71 13 7V3.9L8 2.11 3 3.9zM9.43 5L7.01 8.02l-1.1-1.1L4.5 8.34l2.67 2.67 4.83-6H9.43z"
                    fill="#2977c9"
                  />
                </svg>
                <span>Add verification badge</span>
              </button>
              <p className="text-[18px] text-[rgba(0,0,0,0.9)] ml-6">
                {users.length > 0 ? users[users.length - 1].position : "Any"}
              </p>
              <p className="text-[15px] text-[rgba(0,0,0,0.5)] ml-6">
                {users.length > 0 ? users[users.length - 1].country : "US"},
                {users.length > 0 ? users[users.length - 1].city : "Claifornia"}{" "}
                <strong>·</strong>{" "}
                <big className="text-[#2977c9] text-[15px]">Contact info</big>
              </p>
              <h2 className="ml-6">
                {users.length > 0
                  ? users[users.length - 1].industry
                  : "Finence Industry"}
              </h2>
              <span className="text-[#2977c9] text-[12px] ml-6 font-extrabold ">
                10 connections
              </span>
              <div className="flex justify-between items-center mt-2  flex-wrap">
                <button className="bg-[#2977c9] text-white text-[18px] px-12 rounded-4xl py-1 sm:mb-2 hover:bg-blue-900">
                  Open to
                </button>
                <button className="text-[#2977c9] bg-white text-[18px] px-5 rounded-4xl [box-shadow:inset_0_0_0_1px_#0a66c2] py-1 sm:mb-2 font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                  Add profile section
                </button>
                <button className="bg-gray-100 rounded-full h-9 w-9 p-2.5 [box-shadow:inset_0_0_0_1px_#000000] sm:mb-2">
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
                <button className="text-[#2977c9] bg-white  [box-shadow:inset_0_0_0_1px_#0a66c2] text-[18px] rounded-4xl px-10 py-1.5 text-center font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                  {" "}
                  Enhance profile
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 ">
            <div>
              <h1 className="text-[rgba(0,0,0,0.9)] text-[25px] font-semibold ml-6">
                Suggested for you
              </h1>
              <div className="flex items-center ml-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg>
                <span className="ml-2 text-[12px] text-[rgba(0,0,0,0.4)]">
                  Private to you
                </span>
              </div>
              <div className="flex justify-center items-center">
                <div className="[box-shadow:inset_0_0_0_1px_#E5E7EB] rounded-md m-3 p-3">
                  <div className="flex items-center ml-6 mt">
                    <img
                      src="\src\assets\images\whichwork.svg.svg"
                      alt="work-icon"
                      className="h-15 w-15"
                    />
                    <span className="text-[19px] text-[rgba(0,0,0,0.9)] font-semibold ml-2">
                      Which industry do you work in ?
                    </span>
                  </div>
                  <p className="text-[17px] ml-6 mt-2 text-[rgba(0,0,0,0.7)]">
                    Members who add an industry receive up to 2.5 ties as many
                    profile views
                  </p>
                  <button className="[box-shadow:inset_0_0_0_1px_#E5E7EB] py-2 px-15 text-[20px] font-bold rounded-4xl ml-6">
                    Add industry
                  </button>
                </div>
                <div className="[box-shadow:inset_0_0_0_1px_#E5E7EB] rounded-md m-3 p-3">
                  <div className="flex items-center ml-6 mt">
                    <img
                      src="\src\assets\images\camera.svg.svg"
                      alt="work-icon"
                      className="h-15 w-15"
                    />
                    <span className="text-[19px] text-[rgba(0,0,0,0.9)] font-semibold ml-2">
                      Add a profile photo to help others recognize you
                    </span>
                  </div>
                  <p className="text-[17px] ml-6 mt-2 text-[rgba(0,0,0,0.7)]">
                    Members who add an industry receive up to 2.5 ties as many
                    profile views
                  </p>
                  <button className="[box-shadow:inset_0_0_0_1px_#E5E7EB] py-2 px-15 text-[20px] font-bold rounded-4xl ml-6">
                    Add photo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 ">
            <div>
              <h1 className="text-[rgba(0,0,0,0.9)] text-[25px] font-semibold ml-6">
                Analytics
              </h1>
              <div className="flex items-center ml-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg>
                <span className="ml-2 text-[12px] text-[rgba(0,0,0,0.4)]">
                  Private to you
                </span>
              </div>
              <div className="flex justify-between sm:items-start md:items-center sm:flex-col md:flex-row sm:text-nowrap md:text-wrap mb-5">
                <div className="flex justify-center items-center pl-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                    className="h-10 w-10"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                  <h4 className="text-[20px] font-bold text-[rgba(0,0,0,0.9)] pl-2">
                    0 profile views
                  </h4>
                  <span className="text-[17px]  text-[rgba(0,0,0,0.8)] mt-14 -ml-34 md:pt-12">
                    Update your profile to attract viewers
                  </span>
                </div>
                <div className="flex justify-center items-center pl-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                    className="h-10 w-10"
                  >
                    <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                  </svg>
                  <h4 className="text-[20px] font-bold text-[rgba(0,0,0,0.9)] pl-2">
                    {" "}
                    17 post impressions
                  </h4>
                  <span className="text-[17px]  text-[rgba(0,0,0,0.8)] mt-14 -ml-50 md:pt-12">
                    {" "}
                    Check out who's engaging with your post
                  </span>
                </div>
                <div className="flex justify-center items-center pl-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                    className="h-10 w-10"
                  >
                    <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                  </svg>
                  <h4 className="text-[20px] font-bold text-[rgba(0,0,0,0.9)] pl-2">
                    1 search appearance
                  </h4>

                  <span className="text-[17px]  text-[rgba(0,0,0,0.8)] mt-14 -ml-50 md:pt-12">
                    See how often you appear in search results.
                  </span>
                </div>
              </div>
              <hr className="text-[rgba(0,0,0,0.2)]" />
              <button className="text-[20px] text-[rgba(0,0,0,0.8)] font-semibold mt-3 text-center w-full font-sans">
                Show all analytics →
              </button>
            </div>
          </div>

          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 ">
            <div className="pt-6 pb-6">
              <div className="flex justify-between items-center">
                <h1 className="text-[rgba(0,0,0,0.9)] text-[25px] font-semibold ml-6">
                  About
                </h1>
                <button>
                  <span className="material-symbols-outlined  h-10 pr-9 w-10 text-center rounded-full ">
                    edit
                  </span>
                </button>
              </div>
              <p className="ml-6 text-[15px] text-[rgba(0,0,0,0.7)]">
                As a Business Development Manager at Banao Technologies, I am
                driven by my passion for crafting and executing strategic plans
                that facilitate revenue growth. and profitability, while also
                providing unparalleled value to our clients. My expertise in
                business strategy, team leadership, and communication enables me
                to effectively steer the company towards long-term success. I am
                fully committed to realizing Banao Technologies' vision and
                goals through innovative and forward-thinking approaches.
              </p>
            </div>
          </div>

          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 ">
            <div className="flex justify-between items-center pt-7">
              <h1 className="text-[rgba(0,0,0,0.9)] text-[25px] font-semibold ml-6">
                Activity
              </h1>
              <button>
                <span className="material-symbols-outlined  h-10 pr-9 w-10 text-center rounded-full ">
                  edit
                </span>
              </button>
            </div>
            <div className="flex border-b border-b-[rgba(0,0,0,0.2)] flex-col justify-center items-start pb-5">
              <span className="text-[15px] pl-6 font-bold text-[#0a66c2]">
                {" "}
                10 followers
              </span>
              <button className="text-[#2977c9] bg-white ml-6 [box-shadow:inset_0_0_0_1px_#2977c9] text-[18px] rounded-4xl py-1.5 px-10 text-center font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                Create a post
              </button>
            </div>
            {profilePosts.map((post) => (
              <div
                className="flex flex-col [box-shadow:inset_0_0_0_1px_#E5E7EB] p-6 m-6"
                key={post.id}
              >
                <div className="flex justify-evenly mt-5">
                  <img
                    src={post.post_user_image}
                    alt="user-logo"
                    className="h-12 w-12 rounded-full items-center ml-3 mb-6 mt-0 sm:h-20 sm:w-20"
                  />
                  <p className="text-[15px] text-[rgba(0,0,0,0.4)]">
                    <strong className="text-[17px] text-black">
                      {post.post_user_name}
                    </strong>{" "}
                    <strong>·</strong>3rd+ <br /> {post.post_user_description}{" "}
                    <br /> 6mo
                    <strong>·</strong>
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
                <p className="text-[15px] text-[rgba(0,0,0,0.8)] p-6 mt-1">
                  {post.post_theory}
                </p>
                {post.post_image ? (
                  <img src={post.post_image} alt="Posts-image" />
                ) : (
                  <video src={post.post_video} controls autoPlay muted></video>
                )}
                <span className="text-[25px] text-[rgba(0,0,0,0.7)] text-center">
                  Starting a posts
                </span>

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
                    1
                  </span>
                  <span className="sm:pl-[63%] md:pl-[55%]  sm:text-[15px] text-[rgba(0,0,0,0.5)]">
                    {post.post_comment} comments . {post.post_reposots} reposts
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
            ))}
            <hr className="text-[rgba(0,0,0,0.2)]" />
            <button className="text-[20px] text-[rgba(0,0,0,0.8)] font-semibold mt-3 text-center w-full font-sans">
              Show all activity →
            </button>
          </div>

          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 ">
            <div className="p-5 border-dashed border-2 border-[#2977c9] m-4 bg-gray-100">
              <div className="flex justify-between">
                <h1 className="text-[rgba(0,0,0,0.9)] text-[25px] font-semibold ml-6">
                  Education
                </h1>
                <button className="mr-6">
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
                    ></path>
                  </svg>
                </button>
              </div>
              <p className="ml-6 text-[15px] text-[rgba(0,0,0,0.7)]">
                Show your qualifications and be up to 2X more likely to receive
                a recuriter inMail
              </p>
              <div className="ml-6 flex items-start">
                <span className="material-symbols-outlined bg-gray-100 h-8 w-8 p-1 text-[rgba(0,0,0,0.7)] border">
                  photo_camera
                </span>
                <span className="text-[12px] font-sans text-[rgba(0,0,0,0.7)] ml-2">
                  School
                  <p className="text-[10px] text-[rgba(0,0,0,0.4)]">
                    {" "}
                    Degree Field of study <br /> 2019 - 2023
                  </p>
                </span>
              </div>
              <button className="text-[#2977c9] bg-white ml-6 [box-shadow:inset_0_0_0_1px_#2977c9] text-[15px] rounded-4xl py-1.5 px-5 text-center font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                Add education
              </button>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] mb-4 pb-6 ">
            <div className="p-5 border-dashed border-2 border-[#2977c9] m-4 bg-gray-100">
              <div className="flex justify-between">
                <h1 className="text-[rgba(0,0,0,0.7)] text-[25px] font-semibold ml-6">
                  Skills
                </h1>
                <button className="mr-6">
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
                    ></path>
                  </svg>
                </button>
              </div>
              <p className="ml-6 text-[15px] text-[rgba(0,0,0,0.7)]">
                Communicate your fit for new opportunities – 50% of hirers use
                skills data to fill their roles
              </p>

              <span className="text-[12px] font-sans text-[rgba(0,0,0,0.7)] ml-6  ">
                Soft skills
              </span>

              <p className="text-[12px] font-sans text-[rgba(0,0,0,0.7)] ml-6 border-dashed border-t-2 border-[rgba(0,0,0,0.3)]">
                {" "}
                Technical skills
              </p>

              <button className="text-[#2977c9] bg-white ml-6 [box-shadow:inset_0_0_0_1px_#2977c9] text-[15px] rounded-4xl py-1.5 px-5 text-center font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800">
                Add skills
              </button>
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 md:mt-[18%]">
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1">
            <div className="flex justify-between ">
              <h1 className="text-[rgba(0,0,0,0.9)] text-[20px] font-semibold ml-6">
                Profile language
              </h1>
              <button>
                <span className="material-symbols-outlined  h-10 pr-9 w-10 text-center rounded-full ">
                  edit
                </span>
              </button>
            </div>
            <span className="text-[rgba(0,0,0,0.4)] text-[15px] text-start ml-6 mb-6">
              English
            </span>
            <hr className="text-[rgba(0,0,0,0.3)]" />
            <div className="flex justify-between pt-6">
              <h1 className="text-[rgba(0,0,0,0.9)] text-[20px] font-semibold ml-6">
                Public profile & URL
              </h1>
              <button>
                <span className="material-symbols-outlined  h-10 pr-9 w-10 text-center rounded-full ">
                  edit
                </span>
              </button>
            </div>
            <span className="text-[rgba(0,0,0,0.4)] text-[15px] text-start ml-6 mb-6">
              www.linkedin.com/in/shadab-qureshi-a748b1298
            </span>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1">
            <h2 className="text-[18px] font-bold text-black ml-6">
              Your viewers also viewed
            </h2>
            <div className="flex items-center ml-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
              <span className="ml-2 text-[12px] text-[rgba(0,0,0,0.4)]">
                Private to you
              </span>
            </div>
            <div className="border-b-2 border-[#E5E7EB] m-3">
              <div className=" flex justify-start items-center ml-6">
                <img
                  src="\src\assets\images\user.svg"
                  alt="user-logo"
                  className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                />
                <h2 className="font-bold text-[18px] text-black ml-2">
                  Aniket Kelji
                </h2>
                <span className="text-[12px] text-[rgba(0,0,0,0.4)]">
                  <strong>·</strong>3rd+{" "}
                </span>
                <span className="text-[15px] text-[rgba(0,0,0,0.9)] pt-9 -ml-32">
                  Operations
                </span>
              </div>
              <button className="px-10 rounded-4xl ml-12 mt-2 flex items-center justify-between [box-shadow:inset_0_0_0_1px_#000000]  m-4 hover:bg-gray-200 hover:border-2 hover:border-black">
                <svg
                  role="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="connect-small"
                >
                  <path
                    d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"
                    fill="#000000"
                  />
                </svg>
                <span className="text-[18px] text-[rgba(0,0,0,0.8)] ml-2">
                  Connect
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1">
            <h2 className="text-[18px] font-bold text-black ml-6">
              People you may know
            </h2>

            <span className="ml-2 text-[12px] text-[rgba(0,0,0,0.4)]">
              From your company
            </span>

            <div className="border-b-2 border-[#E5E7EB] m-3">
              <div className=" flex justify-start items-center ml-6 -mt-12">
                <img
                  src="\src\assets\images\user.svg"
                  alt="user-logo"
                  className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                />
                <h2 className="font-bold text-[18px] text-black ml-2">
                  Dheerendra Verma
                </h2>

                <span className="text-[15px] text-[rgba(0,0,0,0.9)] mt-28 -ml-24">
                  Business Development Inteern at Banao Technologies
                </span>
              </div>
              <button className="px-10 rounded-4xl ml-12 mt-2 flex items-center justify-between [box-shadow:inset_0_0_0_1px_#000000]  m-4 hover:bg-gray-200 hover:border-2 hover:border-black">
                <svg
                  role="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  data-test-icon="connect-small"
                >
                  <path
                    d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"
                    fill="#000000"
                  />
                </svg>
                <span className="text-[18px] text-[rgba(0,0,0,0.8)] ml-2">
                  Connect
                </span>
              </button>
            </div>
            <button className="text-[18px] text-[rgba(0,0,0,0.8)] text-center w-full font-sans pb-3">
              Show all →
            </button>
          </div>
          <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] py-1">
            <h2 className="text-[18px] font-bold text-black ml-6">
              You might like
            </h2>

            <span className="ml-2 text-[12px] text-[rgba(0,0,0,0.4)]">
              Pages for you
            </span>

            <div className="border-b-2 border-[#E5E7EB] m-3">
              <div className=" flex justify-start items-center ml-6">
                <img
                  src="https://media.licdn.com/dms/image/v2/D560BAQFEl-c-MprDFQ/company-logo_100_100/company-logo_100_100/0/1735198653833/geeksforgeeks_logo?e=1747267200&v=beta&t=HjPIh88xCXLvnB61eSO3OnjTNdZ20YBlMKl2SML4erA"
                  alt="user-logo"
                  className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                />
                <h2 className="font-bold text-[18px] text-black ml-2">
                  Greeksfor Geeks
                </h2>

                <span className="text-[15px] text-[rgba(0,0,0,0.9)] pt-9 -ml-36">
                  Eductions
                </span>
                <span className="text-[15px] text-[rgba(0,0,0,0.9)] pt-19 -ml-17">
                  2,279,523 followers
                </span>
              </div>
              <button className="px-10 rounded-4xl ml-12 mt-2 flex items-center justify-between [box-shadow:inset_0_0_0_1px_#000000]  m-4 hover:bg-gray-200 hover:border-2 hover:border-black">
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
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z" fill="#000000" />
                </svg>
                <span className="text-[18px] text-[rgba(0,0,0,0.8)] ml-2">
                  Follow
                </span>
              </button>
            </div>
            <button className="text-[18px] text-[rgba(0,0,0,0.8)] text-center w-full font-sans pb-3">
              Show all →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
