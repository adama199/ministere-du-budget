import React from "react";
import { Outlet } from "react-router-dom";
import SidebarAdmin from "../navBar/SidebarAdmin/SidebarAdmin";
import "./AdminLayout.css";
import HeaderAdmin from "../navBar/HeaderAdmin/HeaderAdmin";

const AdminLayout = () => {
  return (
    <div className="container-fluid body-background-dashboard">
      <div className="row">
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
