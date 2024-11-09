import React from "react";
import './PartiesList.css'
import PartiesListTable from "./Tables/PartiesListTable";

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
        <div className="admin-table">
         <PartiesListTable />
        </div>
      </div>
    </>
  );
}

export default PartiesList;
