import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Toaster } from "react-hot-toast";

class LoginLayouts extends Component {
  render() {
    return (
      <div className="bg-light p-5 pt-0 m-0">
        <NavigationBar />
        <Outlet />
        <Toaster/>
      </div>
    );
  }
}

export default LoginLayouts;
