// Import necessary React and routing dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./Components/Login/Login";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import { Provider } from "react-redux";
import { store } from "./App/Store/Store";
import Profile from "./Components/Profile/Profile";
import Network from "./Components/Network/Network";
import Jobs from "./Components/Jobs/Jobs";
import Messaging from "./Components/Messaging/Messaging";
import Notification from "./Components/Notification/Notification";
import Sighin from "./Components/LoginNav/Sighin";
import Help from "./Components/Help/Help";

// Create the application's routing configuration
// createBrowserRouter helps set up client-side routing
const router = createBrowserRouter(
  createRoutesFromElements(
    // Layout component serves as the main template/wrapper
    <Route path="/" element={<Layout />}>
      {/* // Define all available routes in the application
      // path="/" is the default route (login page) */}
      <Route path="/" element={<Login />} />
      {/* // Additional routes for different sections
      // When user visits /Sighin, the Sighin component will render */}
      <Route path="/Sighin" element={<Sighin />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Network" element={<Network />} />
      <Route path="/Jobs" element={<Jobs />} />
      <Route path="/Messaging" element={<Messaging />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Help" element={<Help />} />
    </Route>
  )
);

// Initialize and render the React application
// 1. Find the root element in index.html
// 2. Wrap the app with StrictMode for additional checks during development
// 3. Provide Redux store to entire application
// 4. Set up the router
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
