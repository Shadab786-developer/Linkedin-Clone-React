// This file sets up Redux, which manages all the data in our app
// Think of it like a central database for the front-end

import { configureStore } from "@reduxjs/toolkit";
// Import reducers (they handle different types of data)
import homeReducer from "../../Features/HomePost/HomepostSlice.js";
import profileReducer from "../../Features/ProfilePost/ProfilepostSlice.js";
import userInforReducer from "../../Features/UserProfile/UserProfileSlice.js";
import userImageReducer from "../../Features/Userimage/UserImageSlice.js";

// Create the Redux store
export const store = configureStore({
  // Combine different reducers for different features
  reducer: {
    homePosts: homeReducer,      // Handles posts shown on home page
    profilePosts: profileReducer, // Handles posts shown on profile page
    userInfo: userInforReducer,  // Handles user's personal information
    userImg: userImageReducer,   // Handles user's profile pictures
  },
});
