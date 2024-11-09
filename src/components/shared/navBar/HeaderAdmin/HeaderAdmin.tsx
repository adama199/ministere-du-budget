import React from "react";
import SidebarMobile from "../SidebarAdmin/SidebarMobile";
import Logo from "../../../../assets/appImages/logo-dashboard.png";
import Avatar from "../../../../assets/appImages/avatar.png";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

const HeaderAdmin: React.FC = () => {
  return (
    <div className="admin-header-component">
      <nav className="empty-fluidy alling-header navbar navbar-expand-md navbar-dark fixed-top">
        <div className="content-logo-app-haeder-admin">
          <img src={Logo} alt="Logo" className="logo-app-haeder-admin" />
        </div>
        <div className="headering-admin d-flex justify-content-between">
          <div className="headering-admin-page-title">
          Portail d'Administration
          </div>
          <div className="header-others-items-container">
            <div className="header-others-items">
              <div className="container-info-user-connect-header">
                <div
                  className="connected-user-container"
                  id="header-user-admin"
                >
                  <div className="connected-user-content ml-auto">
                    <Dropdown className="cbii-header-btn-profile">
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="cbii-header-btn-profile-toggle"
                      >
                        <div className="user-acount-dashboard-header-display g-2">
                          <img
                            src={Avatar}
                            className="user-avatar"
                            alt="User Avatar"
                          />
                          <div>
                            <div className="cbii-header-username">Bamba N.</div>
                          </div>
                        </div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <NavLink className="btn" to="/admin/profil">Profile</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>Déconnexion</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="hiddenable-nav-mobile-container no-view-desktop">
                <div className="hiddenable-nav-mobile-content">
                  <div className="container-nav-mobile">
                    <SidebarMobile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderAdmin;
