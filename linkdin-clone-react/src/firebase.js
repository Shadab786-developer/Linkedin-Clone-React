// This file sets up Firebase, which we use for:
// - User Authentication (login/signup)
// - Data Storage (posts, user info)
// - Real-time updates

import { initializeApp } from "firebase/app";

// Firebase needs these settings to connect to your project
// In a real app, these should be in environment variables (.env file)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Like a password for your app to access Firebase
  authDomain: "your-app.com", // Where authentication happens
  projectId: "project-id", // Your project's unique name
  storageBucket: "bucket.com", // Where files are stored
  messagingSenderId: "id", // For sending notifications
  appId: "app-id", // Your app's unique ID
};

// Start Firebase with these settings
export const app = initializeApp(firebaseConfig);
