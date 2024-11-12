import React from "react";
import "./PartiesList.css";
import PartiesListTable from "./Tables/PartiesListTable";
import { CiSearch } from "react-icons/ci";

function PartiesList() {
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
              Partie prenante
            </div>
          </div>
        </div>
        <Filter />
        <div className="admin-table">
          <PartiesListTable />
        </div>
      </div>
    </>
  );
}

export default PartiesList;

export function Filter () {
  return (
    <div className="pb-4">
      <div className="container-search-filter-form-table">
        <input
          type="search"
          className="form-control search-filter-form-table"
          placeholder="Rechercher"
        />
        <span className="content-icon-search-filter">
          <CiSearch />
        </span>
      </div>
    </div>
  );
};
