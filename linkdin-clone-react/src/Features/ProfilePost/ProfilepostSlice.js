/*
This file manages posts that appear on a user's profile.
Think of it like managing a personal wall of posts.

Key features:
1. Loads existing posts from localStorage when app starts
2. Can add new posts (they appear at the top)
3. Can delete posts
4. Automatically saves changes to localStorage

The filter() method is used to remove posts - it keeps all posts
except the one matching the ID we want to delete.
*/

import { createSlice } from "@reduxjs/toolkit";

const loadPostFromHome = () => {
  try {
    const saveProfilePost = localStorage.getItem("profilePost");
    return saveProfilePost ? JSON.parse(saveProfilePost) : [];
  } catch (err) {
    return [];
  }
};

const initialState = {
  profilePost: loadPostFromHome(),
};

export const ProfilePostSlice = createSlice({
  name: "profilePost",
  initialState,
  reducers: {
    addPostToProfile: (state, action) => {
      state.profilePost.unshift(action.payload);
      localStorage.setItem("profilePost", JSON.stringify(state.profilePost));
    },

    removePostToProfile: (state, action) => {
      state.profilePost = state.profilePost.filter(
        (post) => post.id !== action.payload.id
      );
      localStorage.setItem("profilePost", JSON.stringify(state.profilePost));
    },
  },
});

export const { addPostToProfile, removePostToProfile } =
  ProfilePostSlice.actions;

export default ProfilePostSlice.reducer;
