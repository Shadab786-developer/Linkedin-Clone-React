import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateImage } from "../../Features/Userimage/UserImageSlice";
// import { addPostToNotification } from "../../Features/NotificationPost/NotificationpostSlice";

// Component for displaying notifications
function Notification() {
  // Array of notification items with mock data
  const notifyItems = [
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D4D03AQGVUOrhfA5T2w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718279453745?e=1744848000&v=beta&t=ayeQNx4TixsUSG00-ZqPi4BjDI40x4MfQypSWKgnfKI`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consequatur. Neque vel voluptatem optio totam veritatis at ipsam deserunt, aperiam unde, asperiores temporibus repudiandae dolorum itaque necessitatibus corrupti laborum praesentium!`,
      notify_reaction: `11,793`,
      notify_comment: `1,489`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D4E03AQGf_5uYug27pg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726184373601?e=1744848000&v=beta&t=RR0g9i9Rq2LUw2ZmRa49MqMevv06w8MPtbVzt162YuA`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores consequuntur assumenda, voluptas ad suscipit, magnam consectetur sint fugiat fuga voluptatibus. Ex repellendus aperiam, aliquam neque excepturi adipisci vitae quas.`,
      notify_reaction: `203`,
      notify_comment: `11526`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D4D03AQEFtLtaVNhKNQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726706618033?e=1744848000&v=beta&t=oE2ujBJ-Zg6bjd5xkqKdeys05WdyWxAsd3670SLYjyU`,
      notify_role: `Usman Butt  commented on Muhammad Ahmad's`,
      notify_discrip: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, corrupti officia reiciendis cupiditate qui amet, excepturi laudantium quos odio assumenda quaerat! Eos quam, ex magni architecto corrupti aut quae officia.`,
      notify_reaction: `2220`,
      notify_comment: `7856`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/C4E0BAQEHzGrkE_U23Q/company-logo_100_100/company-logo_100_100/0/1630636899456/linkedin_news_india_logo?e=1747872000&v=beta&t=YjUl7yMGRf8nqFiu23btqtKkNPWX9FefA3Awzvz7BPg`,
      notify_role: `News Wrap`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda, minus repudiandae quisquam quasi quae quam magni. Exercitationem cumque a voluptate illum sapiente aspernatur, modi, provident voluptatibus corrupti nam amet.`,
      notify_reaction: `3003`,
      notify_comment: `2`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/C4E0BAQEHzGrkE_U23Q/company-logo_100_100/company-logo_100_100/0/1630636899456/linkedin_news_india_logo?e=1747872000&v=beta&t=YjUl7yMGRf8nqFiu23btqtKkNPWX9FefA3Awzvz7BPg`,
      notify_role: `News Wrap`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque asperiores omnis cupiditate, id velit error voluptatem commodi sapiente eum deleniti aspernatur. Enim adipisci quod quia at ducimus, temporibus dicta quasi!`,
      notify_reaction: `503`,
      notify_comment: `78`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/C4E0BAQEHzGrkE_U23Q/company-logo_100_100/company-logo_100_100/0/1630636899456/linkedin_news_india_logo?e=1747872000&v=beta&t=YjUl7yMGRf8nqFiu23btqtKkNPWX9FefA3Awzvz7BPg`,
      notify_role: `News Wrap`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis placeat nesciunt repellat iste eligendi, quidem nihil magnam? Itaque facere porro adipisci. Debitis esse veritatis commodi harum impedit numquam facere ab?`,
      notify_reaction: `569`,
      notify_comment: `1548`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D4E03AQFIkI3Vle5jVw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720284504075?e=1744848000&v=beta&t=4HT0q9Suc8_YfU2hNcJgFE-uNNoDkm42EdkX0rZywr4`,
      notify_role: `Bussiness community`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed necessitatibus sapiente autem. Autem reprehenderit ut minus inventore possimus voluptatum, cupiditate laboriosam sed necessitatibus beatae. Ratione veritatis labore recusandae? Labore.`,
      notify_reaction: `154`,
      notify_comment: `2598`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D5603AQHFgJbQsluIiQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726893321846?e=1744848000&v=beta&t=dZjyP8tt5Ky4axsLJRYlqXvNk9Ip0JrKseesGSgNySM`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia voluptatem facilis, sed at laboriosam recusandae labore consequatur pariatur non ea molestias minus? Laboriosam, ea sit molestias repellendus eaque quo eius?`,
      notify_reaction: `1186`,
      notify_comment: `79`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D4D35AQGVr3X5r9G39Q/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1738243369010?e=1740211200&v=beta&t=draBq70zRU2GLdLLseHBrG8ZjZFiC4a2vwXumJlASLA`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, perferendis voluptate. Natus, fuga sunt! Porro eum ipsa at temporibus deserunt, culpa eaque, error quas assumenda vitae possimus maiores iusto repellat.`,
      notify_reaction: `1254`,
      notify_comment: `3581`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/C4D03AQG2YMymSeHzYw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1615663102342?e=1744848000&v=beta&t=HwNPtptDjTd6wPJhqeSmw4vMsUITehbBWKX-2Gen7FE`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim suscipit ratione quae molestiae velit exercitationem consequuntur unde laborum animi odit odio dignissimos quod nisi, minima incidunt reprehenderit. Architecto, iusto quis.`,
      notify_reaction: `1456`,
      notify_comment: `12548`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D4E03AQGf_5uYug27pg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726184373601?e=1744848000&v=beta&t=RR0g9i9Rq2LUw2ZmRa49MqMevv06w8MPtbVzt162YuA`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nemo dignissimos. Nobis, fuga ad ipsum dolorem consectetur sed expedita laboriosam sit quisquam itaque quam architecto, omnis suscipit tempore perspiciatis numquam!`,
      notify_reaction: `5215`,
      notify_comment: `20`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D560BAQHLKIqDKYZmTQ/company-logo_100_100/company-logo_100_100/0/1729442149296/advancedsterilizationproducts_logo?e=1747872000&v=beta&t=GEc0RF_YfLLnb4mdGbSGty5cOJheAEco0SzfsIJ4bq4`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem ut laboriosam aliquam illum iusto natus quos magnam. Dolorem animi aperiam ad quas, voluptas laborum voluptate in repudiandae eveniet exercitationem.`,
      notify_reaction: `1488`,
      notify_comment: `1254`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/D560BAQF1qXtZzuIW3A/company-logo_100_100/company-logo_100_100/0/1703268634941?e=1747872000&v=beta&t=IuwRXBUXF1bHQ_LxKLKdS9U7jmjkxt1SW1C_A-6ii4Q`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit est fuga corporis voluptatem, sed atque sint saepe commodi, accusantium, deserunt quos facere corrupti quod? Illum veritatis voluptate quas eius.`,
      notify_reaction: `145`,
      notify_comment: `257`,
    },
    {
      id: crypto.randomUUID(),
      notify_image: `https://media.licdn.com/dms/image/v2/C4D03AQG0rJlGgsxKWQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1559780110842?e=1744848000&v=beta&t=ZM3pyZ0XY4x7zJHcBqEeytkCDAg4baxWcPiIFUQzyUc`,
      notify_role: `Recommended Post`,
      notify_discrip: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam non autem nesciunt tempora ea itaque nulla suscipit saepe. Iste mollitia reiciendis cupiditate beatae unde voluptatem delectus quo similique, repellat nulla!`,
      notify_reaction: `14528`,
      notify_comment: `2415`,
    },
  ];

  // Get Redux dispatch function
  const dispatch = useDispatch();

  // Get user image and data from Redux store
  const userImg = useSelector((state) => state.userImg.userImage);
  const users = useSelector((state) => state.userInfo.usersInfo);

  // Handle profile image updates
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

  // Component's JSX structure:
  // - User profile summary
  // - List of notifications
  // - Advertisement section
  // - Footer links
  return (
    <div className="pt-14 max-w-full">
      <div className="max-w-[1128px] ml-auto mr-auto">
        <div className="md:grid md:grid-cols-12 md:gap-x-6 md:gap-y-6 md:grid-rows-auto mt-[5%] mb-[5%] flex flex-col py-0 px-1.5">
          <div className="col-span-3 md:col-span-4 lg:col-span-3">
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
                    className="sm:h-[90px] sm:w-full"
                  />
                </div>
                <div className="bg-[url(\src\assets\images\user.svg)] bg-cover bg-center h-[54px] m-[-12px -12px 0] bg-[length:465px] ">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfileImage}
                    style={{ display: "none" }}
                    id="imageUpload"
                  />
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
                <label htmlFor="imageUpload">
                  <button
                    onClick={() =>
                      document.getElementById("imageUpload").click()
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
                </label>
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
          </div>

          <div className="col-span-6 md:col-span-8 lg:col-span-6">
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] ">
              <div className="pt-3 pb-3 border-b border-b-[rgba(0,0,0,0.2)] ">
                <button className="bg-green-800 text-white text-[15px] font-bold rounded-4xl px-4 py-0.5 m-2">
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
            </div>
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)] ">
              {notifyItems.map((notify) => (
                <div
                  key={notify.id}
                  className="flex justify-between items-center border-b-2 border-b-[rgba(0,0,0,0.2)]"
                >
                  <div className="flex justify-start items-center text-start m-4  pb-4">
                    <img
                      src={notify.notify_image}
                      alt="work-icon"
                      className="h-15 w-15 ml-4"
                    />
                    <div className="flex flex-col justify-between items-start ml-3">
                      <a className="text-[20px] text-[#000000] font-bold text-wrap">
                        {notify.notify_role}:{" "}
                        <span className="text-[15px] text-[rgba(0,0,0,0.9)] font-normal font-sans text-wrap">
                          {notify.notify_discrip}
                        </span>
                      </a>

                      <span className="text-[12px] text-[rgba(0,0,0,0.5)] flex text-wrap">
                        {notify.notify_reaction} reaction <strong>·</strong>{" "}
                        {notify.notify_comment} comments
                      </span>
                    </div>
                  </div>
                  <button className="rounded-full h-9 w-9 p-2.5 mb-18 mr-5">
                    <span className="text-[12px] text-[rgba(0,0,0,0.5)]">
                      10h
                    </span>
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
                </div>
              ))}
              <button className="px-10 rounded-4xl ml-12 mt-2 [box-shadow:inset_0_0_0_1px_#000000]  m-4 hover:bg-gray-200 hover:border-2 hover:border-black w-[90%] text-center">
                <span className="text-[18px] text-[rgba(0,0,0,0.8)] ml-2">
                  Show more result
                </span>
              </button>
            </div>
          </div>
          <div className="col-span-3 md:col-span-12 lg:col-span-3">
            <div className="overflow-hidden mb-2 bg-white rounded-md transition-[box-shadow 83ms] relative border-none [box-shadow:0_0_0_1px_rgb(0_0_0_/15%),0_0_0_rgb(0_0_0_/20%)]  ">
              <div className="flex items-center justify-end">
                <span>Ad</span>
                <button className="rounded-full h-9 w-9 p-2.5">
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
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[15px] text-[rgba(0,0,0,0.5)]">
                  Post a notify for free with Linkedin notifys
                </span>
                <img
                  src="\src\assets\images\home-logo.svg"
                  alt="Linkedin-logo"
                  className="h-30 w-30 m-2.5"
                />
                <p className="text-[18px] text-[rgba(0,0,0,0.8)]">
                  Shadab ,find the people you want to interview
                </p>

                <button className="text-[#2977c9] bg-white  [box-shadow:inset_0_0_0_1px_#0a66c2] text-[18px] rounded-4xl px-10 py-1.5 text-center font-bold hover:bg-blue-100 hover:border-2 hover:border-blue-800 text-nowrap">
                  {" "}
                  Post a free notify
                </button>
              </div>
            </div>
            <div>
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

export default Notification;
