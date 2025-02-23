/*
This file handles user profile and background images.
It's like a photo album manager for the app.

Key features:
1. Stores images in browser's localStorage
2. Can add new images (puts them at the start of the list)
3. Can update profile or background images
4. Images persist after page refresh

The unshift() method adds new items to the beginning of an array,
so newer images appear first.
*/

// Import createSlice for Redux state management
import { createSlice } from "@reduxjs/toolkit";

// Function to load images from localStorage
const loadImagesFromStorage = () => {
  const savedImages = localStorage.getItem("userImages");
  return savedImages ? JSON.parse(savedImages) : [];
};

// Initial state with images loaded from localStorage
const initialState = {
  userImage: loadImagesFromStorage(),
};

// Create Redux slice for managing user images
const userImageSlice = createSlice({
  name: "userImage",
  initialState,
  reducers: {
    // Add new image to the beginning of array
    addImage: (state, action) => {
      state.userImage.unshift(action.payload);
      localStorage.setItem("userImages", JSON.stringify(state.userImage));
    },
    // Update either profile or background image
    updateImage: (state, action) => {
      const { type, imageUrl } = action.payload;
      if (state.userImage.length > 0) {
        const lastImage = state.userImage[state.userImage.length - 1];
        // Update based on image type (profile or background)
        if (type === "profile") {
          lastImage.profileImage = imageUrl;
        } else if (type === "background") {
          lastImage.bgImage = imageUrl;
        }
      }
      // Save changes to localStorage
      localStorage.setItem("userImages", JSON.stringify(state.userImage));
    },
  },
});

// Export actions and reducer
export const { addImage, updateImage } = userImageSlice.actions;
export default userImageSlice.reducer;
