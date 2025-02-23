import React from "react";
import { useSelector } from "react-redux";

// Help component shows help center content and FAQs
const Help = () => {
  // Get user info from Redux store
  const users = useSelector((state) => state.userInfo.usersInfo);

  return (
    // Help center layout with header and content sections
    <div className="min-h-screen bg-white mt-[10%]">
      {/* Header with greeting */}
      <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          Hi {users.length > 0 ? users[users.length - 1].first_name : "JOHN"}{" "}
          {users.length > 0 ? users[users.length - 1].last_name : "Mathus"},
          we’re here to help.
        </h1>
        <div className="flex space-x-4">
          <a href="#" className="text-white">
            LinkedIn
          </a>
          <a href="#" className="text-white">
            How can we help?
          </a>
        </div>
      </header>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Two column layout */}
        <div className="flex space-x-8">
          {/* Left column - Quick links */}
          <div className="flex-1">
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4">LinkedIn shortcuts</h2>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Change or add an email address
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Reset your password
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Close your account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Cancel LinkedIn Premium subscription
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">Recommended topics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <h3 className="font-semibold text-blue-600">Basics</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <h3 className="font-semibold text-blue-600">
                    Data and Privacy
                  </h3>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <h3 className="font-semibold text-blue-600">Your Profile</h3>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <h3 className="font-semibold text-blue-600">
                    Search and Apply for Jobs
                  </h3>
                </div>
              </div>
            </section>
          </div>

          {/* Right column - Articles */}
          <div className="flex-1 space-y-8">
            <section>
              <h2 className="text-lg font-semibold mb-4">Suggested articles</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Manage emails from LinkedIn</h3>
                  <p className="text-gray-600">
                    You can change the type and frequency of emails from
                    LinkedIn and even choose to stop specific emails by visiting
                    your LinkedIn settings.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Cancel LinkedIn Premium subscription
                  </h3>
                  <p className="text-gray-600">
                    If you signed up directly through LinkedIn, cancel your
                    subscription on the LinkedIn platform itself.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Visibility of channel posts</h3>
                  <p className="text-gray-600">
                    Your LinkedIn feed contains personalized content from your
                    network and others you’re following. Learn how your posts
                    can affect visibility.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Visibility and impact of your social activity on the
                    LinkedIn feed
                  </h3>
                  <p className="text-gray-600">
                    Learn about how your activities on LinkedIn affect the
                    visibility of your posts and social interactions.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-white text-center">
        <p>
          LinkedIn © 2025 |{" "}
          <a href="#" className="text-blue-400">
            About
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400">
            Transparency Center
          </a>
        </p>
        <div className="text-sm mt-2">
          <p>
            Language:{" "}
            <a href="#" className="text-blue-400">
              English
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Help;
