import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { FaPlus, FaUserFriends } from "react-icons/fa";
import { BiCategory, BiUser } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { TbUsers, TbYoga } from "react-icons/tb";
import { MdOutlineContactMail } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { PiMoonStarsFill } from "react-icons/pi";
import { FaSquarePlus } from "react-icons/fa6";

const SidebarMobile = () => {
  const location = useLocation();
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="container-nav">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <AiOutlineMenuUnfold />
          <i className="fas fa-times" id="cancel"></i>
        </label>
        <div className="sidebar" id="scrollbar-nav-mobile">
          <div className="content-nav-mobile">
            <ul className="nav nav-items-custom flex-column">
              {location?.pathname?.startsWith("/admin") && (
                <>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/dashboard"
                    >
                      <BiCategory />
                      <span className="item-nav-menu drop-header">
                        Dashboard
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/medecins"
                    >
                      <FaUserFriends />
                      <span className="item-nav-menu drop-header">
                        Medecins
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/patientes"
                    >
                      <FaUserFriends />
                      <span className="item-nav-menu drop-header">
                        Patientes
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/tailles-poids"
                    >
                      <GiBodyHeight />
                      <span className="item-nav-menu drop-header">Tailles</span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/messages"
                    >
                      <CiMail />
                      <span className="item-nav-menu drop-header">
                        Messages
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/forum"
                    >
                      <FaUserFriends />
                      <span className="item-nav-menu drop-header">Forum</span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/messages-contact"
                    >
                      <MdOutlineContactMail />
                      <span className="item-nav-menu drop-header">
                        Messages de contact
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
              {location?.pathname?.startsWith("/association") && (
                <>
                  <div className="challenge-sidebar-subtitle my-3">
                    CHALLENGES
                  </div>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/association/dashboard"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <BiCategory />
                      </span>
                      <span className="hiddenable-navlink-label">
                        Dashboard
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/association/challenge-en-cours"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <TbUsers />
                      </span>
                      <span className="hiddenable-navlink-label">En cours</span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/association/challenge-termine"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <AiOutlineCalendar />
                      </span>
                      <span className="hiddenable-navlink-label">Terminés</span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/association/rapports"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <TbYoga />
                      </span>
                      <span className="hiddenable-navlink-label">Rapports</span>
                    </NavLink>
                  </li>
                  <hr className="challenge-custom-hr-sidebar m-3" />
                  <div className="d-flex align-items-center justify-content-between  position-relative">
                    <NavLink
                      className="challenge-sidebar-subtitle my-3 nav-link nav-link-vertival-custom-admin w-100"
                      to="/association/projets"
                      style={{ zIndex: "1" }}
                    >
                      Projets
                    </NavLink>
                    <button
                      onClick={() => setModalShow(true)}
                      className="btn custom-btn-add-project"
                      style={{ zIndex: "10" }}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="challenge-sidebar-project-container">
                    <li className="nav-item nav-item-vertical-custom">
                      <NavLink
                        className="nav-link nav-link-vertival-custom-admin px-1"
                        to="/association/projets/:slug"
                      >
                        <div className="challenge-sidebar-project-item">
                          <div className="challenge-sidebar-project-indicator"></div>
                          <div className="challenge-sidebar-project-name">
                            Ecole manguiers <span>(59%)</span>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item nav-item-vertical-custom">
                      <NavLink
                        className="nav-link nav-link-vertival-custom-admin px-0"
                        to="/association/projets/:slug"
                      >
                        <div className="challenge-sidebar-project-item">
                          <div className="challenge-sidebar-project-indicator"></div>
                          <div className="challenge-sidebar-project-name">
                            Forage Keur Massar <span>(59%)</span>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item nav-item-vertical-custom">
                      <NavLink
                        className="nav-link nav-link-vertival-custom-admin px-0"
                        to="/association/projets/:slug"
                      >
                        <div className="challenge-sidebar-project-item">
                          <div className="challenge-sidebar-project-indicator"></div>
                          <div className="challenge-sidebar-project-name">
                            Puit de l’espoir <span>(59%)</span>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item nav-item-vertical-custom">
                      <NavLink
                        className="nav-link nav-link-vertival-custom-admin px-0"
                        to="/association/projets/:slug"
                      >
                        <div className="challenge-sidebar-project-item">
                          <div className="challenge-sidebar-project-indicator"></div>
                          <div className="challenge-sidebar-project-name">
                            Une maison pour tous <span>(59%)</span>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <div className="mt-5">
                      <NavLink
                        to="/association/nouveau-challenge"
                        className="btn btn-theme-body-page w-100"
                      >
                        <span>
                          <FaSquarePlus />
                        </span>{" "}
                        Créer un challenge
                      </NavLink>
                    </div>
                  </div>

                </>
              )}
              <li className="nav-item nav-item-vertical-custom pt-5">
                <div className="nav-link nav-link-vertival-custom-admin align-items-center">
                  <span className="icon-container-nav-link-vertival">
                    <PiMoonStarsFill />
                  </span>
                  <span className="hiddenable-navlink-label">Dark Mode</span>
                  <div className="content-switch-cookies">
                    <label className="switch-btn">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                  </div>
                </div>
              </li>
              <li className="nav-item nav-item-vertical-custom pt-5">
                <button className="btn nav-link nav-link-vertival-custom-admin sidebar-logout-btn">
                  <IoLogOutOutline />
                  <span className="item-nav-menu drop-header">Déconnexion</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
