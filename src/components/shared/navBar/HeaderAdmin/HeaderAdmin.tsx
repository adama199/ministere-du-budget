import React from "react";
import "./HeaderAdmin.css";
import SidebarMobile from "../SidebarAdmin/SidebarMobile";
import "../SidebarAdmin/SidebarAdmin.css";
import Logo from "../../../../assets/appImages/logo-dashboard.png";
import Avatar from "../../../../assets/appImages/avatar.png";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

const HeaderAdmin: React.FC = () => {
  let [showNotifications, setShowNotifications] = React.useState(false);

  let onShowAndHideNotification = () => {
    if (showNotifications === false) {
      setShowNotifications(true);
    } else {
      setShowNotifications(false);
    }
  };

  return (
    <div className="admin-header-component">
      <nav className="empty-fluidy alling-header navbar navbar-expand-md navbar-dark fixed-top">
        <div className="content-logo-app-haeder-admin">
          <img src={Logo} alt="Logo" className="logo-app-haeder-admin" />
        </div>
        <div className="headering-admin d-flex justify-content-between">
          <div className="headering-admin-page-title">
            Gestion des Droits Enregistrements
          </div>
          <div className="header-others-items-container">
            <div className="container-nav-menu-header">
              <NavLink to="/gestion/support" className="btn btn-nav-menu-header">Support</NavLink>
              <NavLink to="/gestion/a-propos" className="btn btn-nav-menu-header">A propos</NavLink>
              <NavLink to="/gestion/contact" className="btn btn-nav-menu-header">Contact</NavLink>
              <NavLink to="/gestion/cgu" className="btn btn-nav-menu-header">Condition générale d'utilisation</NavLink>
            </div>
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
                        <Dropdown.Item href="#">Profile</Dropdown.Item>
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
