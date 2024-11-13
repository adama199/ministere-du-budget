import React from "react";
import "./EnregistrementsActes.css";
import { FaUserPlus } from "react-icons/fa";
import EnregistrementsActesTable from "./Tables/EnregistrementsActesTable";
import { Filter } from "../PartiesList/PartiesList";
import { NavLink } from "react-router-dom";

function EnregistrementsActes() {
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
              Suivi des enregistrements
            </div>
          </div>
          <NavLink
            to="/gestion/nouvel-enregistrement"
            className="btn btn-theme-body-page"
          >
            <span>
              <FaUserPlus />
            </span>
            <span>Nouvel enregistrement</span>
          </NavLink>
        </div>
        <Filter />
        <div className="admin-table">
          <EnregistrementsActesTable />
        </div>
      </div>
    </>
  );
}

export default EnregistrementsActes;
