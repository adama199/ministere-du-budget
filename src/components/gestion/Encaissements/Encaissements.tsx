import React from "react";
import './Encaissements.css'
import EncaissementsTable from "./Tables/EncaissementsTable";

function Encaissements() {
  
  return (
    <>
      <div className="cbii-details-projet-tab-documents">
        <div className="cbii-details-projet-tab-documents-header mb-3">
          <div className="cbii-details-projet-tab-media-title-container mb-3">
            <div className="cbii-details-projet-tab-media-title">
            Liste des impayés
            </div>
          </div>
        </div>
        <div className="admin-table">
         <EncaissementsTable />
        </div>
      </div>
    </>
  );
}

export default Encaissements;
