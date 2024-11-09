import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaBalanceScale,
  FaFileSignature,
  FaFolderOpen,
  FaPlus,
  FaReceipt,
  FaRegFileAlt,
  FaSortAmountUp,
  FaUserFriends,
  FaUsers,
  FaUsersCog,
} from "react-icons/fa";
import { BiCategory, BiSolidUserRectangle } from "react-icons/bi";
import VersionChecker from "../../../../versionChecker/VersionChecker";
import { FaMoneyBillTrendUp, FaUsersBetweenLines } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import DarkModeToggle from "./DarkModeTogal";
import { FiMenu } from "react-icons/fi";
import { MdAutoDelete } from "react-icons/md";
import { BsFileCheckFill } from "react-icons/bs";

function SidebarAdmin() {
  const location = useLocation();

  return (
    <div className="navbar-vertical-customisation-v2 no-view-mobile navbar-vertical-customisation-admin">
      <div className="hoverable mt-4" id="scrollbar">
        <div className="content">
          <label htmlFor="nav_button" className="on no-view-mobile">
            <FiMenu className="icon-side-menu" />
          </label>
          <div className="move-left-side-menu"></div>
          <ul className="nav nav-items-custom flex-column">
            {location?.pathname?.startsWith("/admin") && (
              <>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/admin/utilisateurs"
                    data-tooltip-content="Utilisateurs"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <FaUsers />
                    </span>
                    <span className="hiddenable-navlink-label">
                      Utilisateurs
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/admin/profiles-utilisateurs"
                    data-tooltip-content="Profiles"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <BiSolidUserRectangle />
                    </span>
                    <span className="hiddenable-navlink-label">Profiles</span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/admin/affectations-registre"
                    data-tooltip-content="Affectations de Registre"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <BsFileCheckFill />
                    </span>
                    <span className="hiddenable-navlink-label">
                      Affectations de Registre
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/admin/historiques"
                    data-tooltip-content="Historique des mvt"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <FaSortAmountUp />
                    </span>
                    <span className="hiddenable-navlink-label">
                      Historique des mvt
                    </span>
                  </NavLink>
                </li>
              </>
            )}
            {location?.pathname?.startsWith("/gestion") && (
              <>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/dashboard"
                    data-tooltip-content="Dashboard"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <BiCategory />
                    </span>
                    <span className="hiddenable-navlink-label">Dashboard</span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/enregistrement_acte"
                    data-tooltip-content="Enregistrement"
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
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/enregistrement-lv-ca"
                    data-tooltip-content=" Enregistrement LV-CA"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <FaRegFileAlt />
                    </span>
                    <span className="hiddenable-navlink-label">
                      {" "}
                      Enregistrement LV-CA
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/encaissements"
                    data-tooltip-content=" Encaissement"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <FaMoneyBillTrendUp />
                    </span>
                    <span className="hiddenable-navlink-label">
                      {" "}
                      Encaissement
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/parties"
                    data-tooltip-content="Parties"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <FaUsersBetweenLines />
                    </span>
                    <span className="hiddenable-navlink-label">Parties</span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/notaires"
                    data-tooltip-content=" Notaires"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <FaBalanceScale />
                    </span>
                    <span className="hiddenable-navlink-label"> Notaires</span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/nature-acte"
                    data-tooltip-content=" Nature d'acte"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <FaFileSignature />
                    </span>
                    <span className="hiddenable-navlink-label">
                      {" "}
                      Nature d'acte
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/les-registres"
                    data-tooltip-content="Les Registres"
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
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/rapports"
                    data-tooltip-content="Rapports"
                  >
                    <span className="icon-container-nav-link-vertival">
                      <FaReceipt />
                    </span>
                    <span className="hiddenable-navlink-label">Rapports</span>
                  </NavLink>
                </li>
                <li className="nav-item nav-item-vertical-custom">
                  <NavLink
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/administration"
                    data-tooltip-content="Administration"
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
                    className="nav-link nav-link-vertival-custom-admin with-tooltip-menu"
                    to="/gestion/archive-des-registres"
                    data-tooltip-content="Archive des registres"
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
            <li className="nav-item nav-item-vertical-custom pb-5">
              <button
                className="btn nav-link nav-link-vertival-custom-admin with-tooltip-menu "
                data-tooltip-content="Déconnexion"
              >
                <span className="icon-container-nav-link-vertival">
                  <HiOutlineLogout />
                </span>
                <span className="hiddenable-navlink-label">Déconnexion</span>
              </button>
            </li>
            <li className="pb-5">
              <div
                className="version-view-container"
                style={{ padding: "15px 25px" }}
              >
                {"V" + VersionChecker()}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
