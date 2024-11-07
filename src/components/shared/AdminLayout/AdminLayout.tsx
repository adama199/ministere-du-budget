import React from "react";
import { FiMenu } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../navBar/HeaderAdmin/HeaderAdmin";
import SidebarAdmin from "../navBar/SidebarAdmin/SidebarAdmin";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="container-fluid body-background-dashboard">
      <div className="row">
        <input type="checkbox" name="nav" id="nav_button"></input>
        {/* <label htmlFor="nav_button" className="on no-view-mobile">
          <FiMenu className="icon-side-menu" />
        </label> */}
        <div className="nav-container no-view-mobile">
          <SidebarAdmin />
        </div>
        <div className="container-header">
          <HeaderAdmin />
        </div>

        <div className="content-position-after-header px-0 h-90vh position-relative page-content-base-container">
          <div className="admin-page-container-layout admin-page-container-height">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
