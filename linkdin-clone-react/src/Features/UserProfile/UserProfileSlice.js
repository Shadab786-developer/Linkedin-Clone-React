/*
This file manages user profile data using Redux Toolkit.
Think of it as a central storage for user information.

Key concepts:
1. localStorage: Like a small database in your browser that saves data even after refresh
2. Redux slice: A piece of your app's data and the functions to change it
3. Actions: Functions that tell Redux how to change the data

Main features:
- Saves user data to browser storage
- Loads user data when app starts
- Can add new users
- Can update existing user information
*/

// Import the createSlice function from Redux Toolkit for creating Redux reducers and actions
import { createSlice } from "@reduxjs/toolkit";

// Function to load user data from localStorage
// This helps persist data even after page refresh
export const loadState = () => {
  try {
    // Get stored user data from localStorage
    const serializedState = localStorage.getItem("usersInfo");
    // If no data exists, return empty array
    if (serializedState === null) {
      return [];
    }
    // Convert JSON string back to JavaScript object
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

// Function to save user data to localStorage
export const saveState = (state) => {
  try {
    // Convert JavaScript object to JSON string
    const serializedState = JSON.stringify(state);
    // Save to localStorage
    localStorage.setItem("usersInfo", serializedState);
  } catch (err) {
    console.log("Error saving state:", err);
  }
};

// Initial state object with usersInfo loaded from localStorage
const initialState = {
  usersInfo: loadState(),
};

// Create a Redux slice for managing user data
const userSlice = createSlice({
  name: "usersInfo", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Action to add a new user
    addUser: (state, action) => {
      state.usersInfo.push(action.payload); // Add new user to array
      saveState(state.usersInfo); // Save updated data to localStorage
    },
    // Action to update existing user
    updateUser: (state, action) => {
      // Find user by ID
      const index = state.usersInfo.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        // Update user data if found
        state.usersInfo[index] = action.payload;
        // Save to localStorage
        localStorage.setItem("usersInfo", JSON.stringify(state.usersInfo));
      }
    },
  },
});

// Export actions and reducer
export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
