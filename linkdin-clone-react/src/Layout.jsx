import React from "react";
import { Outlet } from "react-router-dom";
import LoginNav from "./Components/LoginNav/LoginNav";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useLocation } from "react-router-dom";
function Layout() {
  const location = useLocation();
  const isLogin = location.pathname === "/";
  const isSighin = location.pathname === "/Sighin";
  const isJob = location.pathname === "/Jobs";
  const isMsg = location.pathname === "/Messaging";
  const isNoti = location.pathname === "/Notification";
  const isHome = location.pathname === "/Home";
  return (
    <>
      {isSighin || isLogin ? <LoginNav /> : <Header />}
      <Outlet />
      {isSighin || isLogin || isHome || isJob || isMsg || isNoti ? (
        <></>
      ) : (
        <Footer />
      )}
    </>
  );
}

export default Layout;
