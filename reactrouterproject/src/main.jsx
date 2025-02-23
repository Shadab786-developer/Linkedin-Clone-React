import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, { githubDataLoader } from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route loader={githubDataLoader} path="/github" element={<Github />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-hlaiohujxp2aic02.us.auth0.com"
    clientId="fK7OZFxIdq5nvy0pIfIhVKw7Kj4gfoNG"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
