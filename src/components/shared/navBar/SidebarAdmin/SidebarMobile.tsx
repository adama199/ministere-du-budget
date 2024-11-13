import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaBalanceScale,
  FaFileSignature,
  FaFolderOpen,
  FaReceipt,
  FaRegFileAlt,
  FaSortAmountUp,
  FaUsers,
  FaUsersCog,
} from "react-icons/fa";
import { BiCategory, BiSolidUserRectangle } from "react-icons/bi";
import { FaMoneyBillTrendUp, FaUsersBetweenLines } from "react-icons/fa6";
import { MdAutoDelete } from "react-icons/md";
import { BsFileCheckFill } from "react-icons/bs";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import DarkModeToggle from "./DarkModeTogal";

const SidebarMobile = () => {
  const location = useLocation();
  return (
    <div>
      <div className="container-nav">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <span className="color-label-icon-menu-mobile">
            <AiOutlineMenuUnfold />
          </span>
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
                      to="/admin/utilisateurs"
                    >
                      <FaUsers />
                      <span className="item-nav-menu drop-header">
                        Utilisateurs
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/profiles-utilisateurs"
                    >
                      <BiSolidUserRectangle />
                      <span className="item-nav-menu drop-header">
                        Profiles
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/affectations-registre"
                    >
                      <BsFileCheckFill />
                      <span className="item-nav-menu drop-header">
                        Affectations de Registre
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/historiques"
                    >
                      <FaSortAmountUp />
                      <span className="item-nav-menu drop-header">
                        {" "}
                        Historique des mvt
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
              {location?.pathname?.startsWith("/gestion") && (
                <>
                  <div className="container-nav-menu-header ">
                    <div>
                      <NavLink
                        to="/gestion/support"
                        className="btn btn-nav-menu-header"
                      >
                        Support
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to="/gestion/a-propos"
                        className="btn btn-nav-menu-header"
                      >
                        A propos
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to="/gestion/contact"
                        className="btn btn-nav-menu-header"
                      >
                        Contact
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        to="/gestion/cgu"
                        className="btn btn-nav-menu-header"
                      >
                        Condition générale d'utilisation
                      </NavLink>
                    </div>
                  </div>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/dashboard"
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
                      to="/gestion/enregistrement_acte"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaRegFileAlt />
                      </span>
                      <span className="hiddenable-navlink-label">
                        Enregistrement
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/enregistrement-lv-ca"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaRegFileAlt />
                      </span>
                      <span className="hiddenable-navlink-label">
                        Enregistrement LV-CA
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/encaissements"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaMoneyBillTrendUp />
                      </span>
                      <span className="hiddenable-navlink-label">
                        Encaissement
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/parties"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaUsersBetweenLines />
                      </span>
                      <span className="hiddenable-navlink-label">Parties</span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/notaires"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaBalanceScale />
                      </span>
                      <span className="hiddenable-navlink-label">Notaires</span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/nature-acte"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaFileSignature />
                      </span>
                      <span className="hiddenable-navlink-label">
                        Nature d'acte
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/les-registres"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaFolderOpen />
                      </span>
                      <span className="hiddenable-navlink-label">
                        Les Registres
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/rapports"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaReceipt />
                      </span>
                      <span className="hiddenable-navlink-label">Rapports</span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/admin/utilisateurs"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <FaUsersCog />
                      </span>
                      <span className="hiddenable-navlink-label">
                        Administration
                      </span>
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-vertical-custom">
                    <NavLink
                      className="nav-link nav-link-vertival-custom-admin"
                      to="/gestion/archive-des-registres"
                    >
                      <span className="icon-container-nav-link-vertival">
                        <MdAutoDelete />
                      </span>
                      <span className="hiddenable-navlink-label">
                        Archive des registres
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
              <DarkModeToggle />
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
